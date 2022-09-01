const { pool } = require("../services/db.config");

exports.checkDuplicateUsernameOrEmail = (req, res, next) => {
  const findUser = {
    email: req.body.email
  };
  const values = [findUser.email]
  const query = `
  SELECT * FROM users WHERE email = $1`;
  pool.connect((error, client, release) => {
    if(error) {
      return console.error('Error acquiring client', error.stack)
    }
    client.query(query, values, (err, result) => {
      release();
      if(err) {
        console.log(err.message);
        return res.status(400).json({err});
      }
      const user = result.rows[0];
      if(!user) {
        next();
      } else if(user.email === findUser.email){
        res.status(400).send({ message: "Failed! Email is already in use!" });
        return;
      }
    })
  });
};