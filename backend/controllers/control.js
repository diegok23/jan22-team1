const { pool } = require("../database/db");
const bcrypt = require("bcrypt");
const generateJWT = require("../utils/JWTgenerator");

const getUsers = async (req, res) => {
  try {
    const { rows } = await pool.query("SELECT * FROM users");

    res.status(200).json({
      success: true,
      users: rows,
    });
  } catch (error) {
    console.log(error.message);
  }
};

const register = async (req, res) => {
  const { name, email, password } = req.body;

  const hashedPassword = await bcrypt.hash(password, 10);
  console.log(hashedPassword);

  try {
    const user = await pool.query("SELECT * FROM users WHERE email = $1", [
      email,
    ]);

    if (user.rows.length > 0) {
      return res.status(401).json({ message: "Email is already registered" });
    }

    const newUser = await pool.query(
      "INSERT INTO users(username, email, password) VALUES ($1 , $2 , $3) RETURNING user_id, password",
      [name, email, hashedPassword]
    );

    const jwtToken = generateJWT(newUser.rows[0].user_id);

    return res.json({
      message: "User registered properlly, please Login",
      jwtToken,
    });
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server error");
  }
};

const login = async (req, res) => {
  let user = req.user;

  let payload = {
    id: user.user_id,
    email: user.email,
  };

  try {
    const token = await sign(payload, SECRET);

    return res.status(200).cookie("token", token, { httpOnly: true }).json({
      success: true,
      message: "Logged in succefully",
    });
  } catch (error) {
    console.log(error.message);
    return res.status(500).json({
      error: error.message,
    });
  }
};

const protected = async (req, res) => {
  try {
    return res.status(200).json({
      info: "protected info",
    });
  } catch (error) {
    console.log(error.message);
  }
};

const logout = async (req, res) => {
  try {
    return res.status(200).clearCookie("token", { httpOnly: true }).json({
      success: true,
      message: "Logged out succefully",
    });
  } catch (error) {
    console.log(error.message);
    return res.status(500).json({
      error: error.message,
    });
  }
};

module.exports = { getUsers, register };
