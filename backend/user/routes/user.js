const express = require('express');
const bcrypt = require('bcrypt'); // bcrypt is used to hash password before saving it to database
const database = require('../../database');
const generateJWT = require('../utils/generateJWT');
const authenticate = require('../middleware/authenticate');
const jwt = require('jsonwebtoken');
const router = express.Router(); // we create a new router using express's inbuilt Router method

// user registration / sign-up
router.post('/signup', async (req, res) => {
  const { email, password, firstname, lastname, country, city, description, imgProfile } = req.body;
  console.log(req.body);
  const query = `
  INSERT INTO users (email, password, firstname, lastname, country, city, description, imgProfile, created_at) 
  VALUES ($1,$2,$3,$4,$5,$6,$7,$8,'NOW()') RETURNING *`;

  try {
    const data = await database.pool.query(`SELECT * FROM users WHERE email= $1;`, [email]); //Checking if user already exists
    const arr = data.rows;
    if (arr.length != 0) {
      return res.status(400).json({
        error: 'Email already there, No need to register again.'
      });
    } else {
      const salt = await bcrypt.genSalt(10);
      const bcryptPassword = await bcrypt.hash(password, salt);
      const values = [email, bcryptPassword, firstname, lastname, country, city, description, imgProfile];

      database.pool
        .query(query, values)
        .then(() => {
          const jwtToken = generateJWT(email);
          return res.status(201).send({ message: 'User was registered successfully!', jwtToken: jwtToken, isAuthenticated: true });
        })
        .catch((e) => console.error(e));
    }
  } catch (error) {
    console.error(error.message);
    res.status(500).send({ error: error.message });
  }
});

// user sign-in / login
router.post('/signin', async (req, res) => {
  const { email, password } = req.body;

  try {
    const data = await database.pool.query(`SELECT * FROM users WHERE email= $1;`, [email]); //Verifying if the user exists in the database
    const user = data.rows;
    if (user.length === 0) {
      res.status(400).json({
        error: 'User is not registered, Sign Up first'
      });
    } else {
      bcrypt.compare(password, user[0].password, (err, result) => {
        //Comparing the hashed password
        if (err) {
          res.status(500).json({
            error: 'Server error'
          });
        } else if (result === true) {
          //Checking if credentials match
          const token = jwt.sign(
            {
              email: email
            },
            process.env.SECRET_KEY
          );
          res.status(200).json({
            message: 'User was signed in successfully!',
            jwt: token,
            isAuthenticated: true,
            id: data.rows[0].id
          });
        } else {
          //Declaring the errors
          if (result != true)
            res.status(400).json({
              error: 'Enter correct password!'
            });
        }
      });
    }
  } catch (error) {
    console.error(error.message);
    res.status(500).send({ error: error.message });
  }
});

// user authorization
router.post('/auth', authenticate, (req, res) => {
  try {
    res.status(200).send({ isAuthenticated: true });
  } catch (error) {
    console.error(error.message);
    res.status(500).send({ error: error.message, isAuthenticated: false });
  }
});

module.exports = router; // we need to export this router to implement it inside our server.js file
