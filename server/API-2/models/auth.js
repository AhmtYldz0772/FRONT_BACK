const mongoose = require("mongoose");

const AuthSchema = new mongoose.Schema({
  //disaridan alinacak degerler
  name: {
    type: String,
    required: true,
    trim: true, //  başındaki ve sonundaki boşlukları almak için
    //max-lenght gelecek
  },
  surname: {
    type: String,
    required: true,
    trim: true, //  başındaki ve sonundaki boşlukları almak için
  },
  username: {
    type: String,
    required: true,
    trim: true, //  başındaki ve sonundaki boşlukları almak için

  },
  email: {
    type: String,
    required: true,
    unique: true, // aynı maili engelliyoruz
    trim: true,

  },
  password: {
    type: String,
    required: true,
    trim: true,
    
  },
  passwordagain: {
    type: String,
    required: true,
    trim: true,
   
  },
  birthdate: {
    type: String,
    required: true,
    trim: true,
  },
});

module.exports = mongoose.model("authtentacion", AuthSchema);

//     name: "",
//     surname: "",
//     usersurname: "",
//     email: "",
//     password: "",
//     passwordagain: "",
//     birthdate: "",