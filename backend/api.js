const database = require('./database');

//QUERIES
const getUsers = (req, res) => {
  database.pool.query('SELECT * FROM users', (error, result) => {
    res.json(result.rows);
  });
};

module.exports = { getUsers };
