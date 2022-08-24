const router = require("express").Router();
const {
  getUsers,
  register,
  login,
  logout,
  verify,
} = require("../controllers/control");
const { authorize } = require("../middleware/authorize");
const {
  registerValidation,
  loginValidation,
} = require("../middleware/validation");

router.get("/allusers", getUsers);
router.post("/signup", registerValidation, register);
router.post("/login", loginValidation, login);
router.get("/logout", logout);
router.post("/verify", authorize, verify);

module.exports = router;
