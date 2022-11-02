const Quotes = require("../models/quote.js");
//const db = require("../config/database.js");

// const getQuotes = async (req, res) => {
//   console.log("getQuotes running");
//   try {
//     const quotes = await Quotes.findOne({});
//     console.log(quotes);
//     res.status(200).json(quotes);
//   } catch (error) {
//     return res.status(404).json({
//       message: error.message,
//     });
//   }
// };
// const getQuote = async (res, req) => {
//   try {
//     const quote = await Quotes.findById(req.params.id);
//     if (!quote) {
//       return res.status(404).json(`NO quote with id: ${id}`);
//     }

//     res.status(200).json(quote);
//   } catch (error) {
//     return res.status(500).json({ msg: error.message });
//   }
// };

const quotesCreate = async (req, res) => {
  try {
    const { movie_name, quote } = req.body; //fronttan gelecekler

    const newQuote = await Quotes.create({
      movie_name,
      quote,
    });

    res.status(201).json({
      status: "OK",
      newQuote,
    });
  } catch (error) {}
};

const getQuotes = async (req, res) => {
  try {
    //const { _id } = req.body;
    // const quoteDetail = await Quotes.findOne({ quote, movie_name }, _id);
    // res.status(201).json({
    //   quoteDetail,
    // });
    const id = req.params.id;
    const quoteDetail = await Quotes.findById(id);
    res.status(201).json({
      quoteDetail,
    });
  } catch (error) {}
};
module.exports = { quotesCreate, getQuotes };
//module.exports = { getQuotes, getQuote };
