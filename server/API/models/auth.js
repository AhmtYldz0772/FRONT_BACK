const mongoose = require("mongoose");

const AuthSchema = new mongoose.Schema({
  //disaridan alinacak degerler
  name: {
    type: String,
    required: true,
    trim: true, // ismin başındaki ve sonundaki boşlukları almak için
    //max-lenght gelecek
  },
  surname: {
    type: String,
    required: true,
    trim: true, // ismin başındaki ve sonundaki boşlukları almak için
    //max-lenght gelecek
  },
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
  passwordagain: {
    type: String,
    required: true,
    trim: true,
    //max-lenght gelecek
  },
  birthdate: {
    type: Date,
    default: new Date(),
    trim: true,
  },
});

module.exports = mongoose.model("auth", AuthSchema, "auth");
//     name: "",
//     surname: "",
//     usersurname: "",
//     email: "",
//     password: "",
//     passwordagain: "",
//     birthdate: "",