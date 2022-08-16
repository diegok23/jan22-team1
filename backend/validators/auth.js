const { pool } = require("../database/db");
const bcrypt = require("bcrypt");

const registerValidation = async (req, res) => {
  let { name, email, password, password2 } = req.body;

  let errors = [];

  console.log({ name, email, password, password2 });

  if (!name || !email || !password || !password2) {
    errors.push({ message: "Please enter all fields" });
  }

  if (password.length < 6) {
    errors.push({ message: "Password must be a least 6 characters long" });
  }

  if (password.length > 12) {
    errors.push({ message: "Password must be under 12 characters long" });
  }

  if (!email.includes("@")) {
    errors.push({ message: "Please enter a valid email" });
  }

  if (password !== password2) {
    errors.push({ message: "Passwords do not match" });
  }

  if (errors.length > 0) {
    console.log(errors);
    return res.send(errors);
  } else {
    hashedPassword = await bcrypt.hash(password, 10);
    console.log(hashedPassword);

    // Validation passed
    pool.query(
      `SELECT * FROM users
        WHERE email = $1`,
      [email],
      (err, results) => {
        if (err) {
          console.log(err);
        }
        console.log(results.rows);

        if (results.rows.length > 0) {
          return res.send({ message: "Email is already registered" });
        } else {
          pool.query(
            `INSERT INTO users (username, email, password)
                VALUES ($1, $2, $3)
                RETURNING user_id, password`,
            [name, email, hashedPassword],
            (err, results) => {
              if (err) {
                throw err;
              }
              console.log(results.rows);
            }
          );
        }
      }
    );
  }
};

module.exports = { registerValidation };
