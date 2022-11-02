const express = require("express");
const { register, login } = require("../controllers/auth.js");

const router = express.Router();

//get, update, delete
router.post("/register", register); //controller dan gelecek
router.post("/login", login); //controller dan gelecek

module.exports = router; //exporttlar için son aşamayı bekle

//routlerı indexte importla
