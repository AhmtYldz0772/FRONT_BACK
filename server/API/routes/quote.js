const express = require("express");
//const Quoutes = require("../models/quote.js");
//const { getQuotes, getQuote } = require("../controllers/quote.js");
const { quotesCreate, getQuotes } = require("../controllers/quote.js");
const router = express.Router();

router.post("/quotes", quotesCreate); //.get(getQuotes);
router.get("/quotes/get/:id", getQuotes);
//router.get("/:id", getQuote); //.get(getQuote);

module.exports = router;
