const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const { pool } = require('../services/db.config');
require('dotenv').config();

const ONEDAY = 86400;

exports.signup = (req, res) => {
  const newUser = {
    email: req.body.email,
    password: bcrypt.hashSync(req.body.password, 8),
    firstname: req.body.firstname,
    lastname: req.body.lastname,
    country: req.body.country,
    city: req.body.city,
    description: req.body.description,
    imgProfile: req.body.imgProfile
  };
  const query = `
  INSERT INTO users (email, password, firstname, lastname, country, city, description, imgProfile, created_at) 
  VALUES ($1,$2,$3,$4,$5,$6,$7,$8,'NOW()') RETURNING *`;
  const values = [
    newUser.email,
    newUser.password,
    newUser.firstname,
    newUser.lastname,
    newUser.country,
    newUser.city,
    newUser.description,
    newUser.imgProfile
  ];
  pool.connect((error, client, release) => {
    if (error) {
      return console.error('Error acquiring client', error.stack);
    }
    client.query(query, values, (err, result) => {
      release();
      if (err) {
        console.log(err.message);
        return res.status(400).json({ err });
      }
      const user = result.rows[0];
      const token = jwt.sign({ id: user.id }, process.env.SECRET_KEY, { expiresIn: ONEDAY });
      return res.status(200).send({
        id: user.id,
        email: user.email,
        accessToken: token,
        message: 'User was registered successfully!'
      });
    });
  });
};

exports.signin = (req, res) => {
  const findUser = {
    email: req.body.email
  };
  const query = `
  SELECT * FROM users WHERE email = $1`;
  const values = [findUser.email];
  pool.connect((error, client, release) => {
    if (error) {
      return console.error('Error acquiring client', error.stack);
    }
    client.query(query, values, (err, result) => {
      release();
      if (err) {
        console.log(err.message);
        return res.status(400).json({ err });
      }
      const user = result.rows[0];
      if (!user) {
        return res.status(404).send({ message: 'User Not found.' });
      }
      const passwordIsValid = bcrypt.compareSync(req.body.password, user.password);
      if (!passwordIsValid) {
        return res.status(401).send({
          accessToken: null,
          message: 'Invalid Password!'
        });
      }
      const token = jwt.sign({ id: user.id }, process.env.SECRET_KEY, {
        expiresIn: ONEDAY
      });
      res.status(200).send({
        id: user.id,
        email: user.email,
        accessToken: token
      });
    });
  });
};
