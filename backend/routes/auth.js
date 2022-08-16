const { Router } = require("express");
const router = Router();
//const {} = require("../controllers/control");
const { registerValidation } = require("../validators/auth");

router.get("/allusers");
router.post("/signup", registerValidation);
router.post("/login");
router.get("/logout");

module.exports = router;
