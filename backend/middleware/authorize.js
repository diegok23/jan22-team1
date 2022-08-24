const jwt = require("jsonwebtoken");
require("dotenv").config();

//this middleware will on continue on if the token is inside the local storage

function authorize(req, res, next) {
  // Get token from header
  const token = req.header("jwt_token");

  // Check if not token
  if (!token) {
    return res.status(403).json({ message: "authorization denied" });
  }

  // Verify token
  try {
    //it is going to give use the user id (user:{id: user.id})
    const verify = jwt.verify(token, process.env.SESSION_SECRET);

    req.user = verify.user;
    next();
  } catch (err) {
    res.status(401).json({ message: "Token is not valid" });
  }
}

module.exports = { authorize };
