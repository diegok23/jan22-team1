const { Router } = require("express");
const router = Router();
const { getUsers, register } = require("../controllers/control");
//const {validationMiddleware} = require("../middleware/validations-middleware");
const { registerValidation } = require("../validators/auth");

router.get("/allusers", getUsers);
router.post("/signup", registerValidation && register);
router.post("/login");
router.get("/logout");

module.exports = router;
