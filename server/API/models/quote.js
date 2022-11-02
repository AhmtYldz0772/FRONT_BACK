const mongoose = require("mongoose");

// const entraceQuotes = new mongoose.Schema({
//   movie_name: String,
//   quote: String,
// });

// module.exports = mongoose.model("quotes", entraceQuotes);

const entranceQuotes = new mongoose.Schema({
  movie_name: String,
  quotes: String,
});

module.exports = mongoose.model("Quotes", entranceQuotes, "entranceQuotes");
