const express = require("express");
const  register = require("../controllers/auth.js");

const router = express.Router();


//router.get("/login",login)
router.post("/register",register)
//router.get("/logout",logout)



module.exports = router;