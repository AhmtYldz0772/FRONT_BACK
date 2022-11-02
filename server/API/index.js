const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const db = require("./config/database.js"); // .js olmazsa hata verebilir
const Auth = require("./routes/auth.js"); // auth routes
const Quote = require("./routes/quote.js");

dotenv.config();

const app = express();

app.use(cors()); //react bağlantısı için
app.use(express.json({ limit: "30mb", extended: true })); //fronttan gelen verilerin sıkıntı çıkarmaması için alınan önlem
app.use(express.urlencoded({ limit: "30mb", extended: true })); //fronttan gelen verilerin sıkıntı çıkarmaması için alınan önlem

app.use("/", Auth); // register
app.use("/", Quote);

app.get("/", (req, res) => {
  res.json({ message: "deneme" });
});
const PORT = process.env.PORT || 5000;

db();

app.listen(PORT, () => {
  console.log("server is running on port : 5000");
});
