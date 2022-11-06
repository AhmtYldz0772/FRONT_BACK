const mongoose = require("mongoose");

const db = () => {
  mongoose
    .connect(process.env.MONGO_URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then(() => {
      console.log("mongo connect success");
    })
    .catch((err) => {
      //throw new Error(err.message)
      console.log(err);
    });
};

module.exports = db;