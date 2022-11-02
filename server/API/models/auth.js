const mongoose = require("mongoose");

const AuthSchema = new mongoose.Schema({
  //disaridan alinacak degerler
  username: {
    type: String,
    required: true,
    trim: true, // ismin başındaki ve sonundaki boşlukları almak için
    //max-lenght gelecek
  },
  email: {
    type: String,
    required: true,
    unique: true, // aynı maili engelliyoruz
    trim: true,
    //max-lenght gelecek
  },
  password: {
    type: String,
    required: true,
    trim: true,
    //max-lenght gelecek
  },
  date: {
    type: Date,
    default: new Date(),
    trim: true,
  },
});

module.exports = mongoose.model("auth", AuthSchema, "auth");
