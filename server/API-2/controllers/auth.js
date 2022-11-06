const Auth = require("../models/auth.js");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

// const login = (req, res) => { 


// }

const register = async (req, res) => {
  let invalidPassMessage = "Şifre, ";
  try {
    const { name,surname,username, email, password, passwordagain,birthdate } = req.body; // front end kısmından gelenler
    
    const user = await Auth.findOne({ email });
    const usernamecheck = await Auth.findOne({ username });
    
      
      if (!email || !password || !username || !passwordagain|| !birthdate|| !name || !surname) {
    return res.status(400).json({ message: "Lütfen boş olan alanları doldurunuz!" }); // Return error if not all fields are filled out
  }
    if (user) {
      return res.status(500).json({ message: "Bu maile ait bir kullanıcı zaten var!" });
    } 
    else if (usernamecheck) {
      return res.status(500).json({ message: "Bu kullanıcı adı alındı !" });
    }
var format = /[ `!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/;
if (
    !password.match(/^(?=.*\d)/gm) ||
    !password.match(/^(?=.*[a-z])/gm) ||
    !password.match(/^(?=.*[A-Z])/gm) ||
    !password.match(format) ||
    password.length < 8
  ) {
    if (!password.match(/^(?=.*\d)/gm)) {
      invalidPassMessage = invalidPassMessage + "en az bir tane rakam içermelidir !\n";
    }
    // Check if the password have lowercase letter
    if (!password.match(/^(?=.*[a-z])/gm)) {
      invalidPassMessage = invalidPassMessage + "en az bir tane küçük karakter içermelidir !\n";
    }
    // Check if the password have uppercase letter
    if (!password.match(/^(?=.*[A-Z])/gm)) {
      invalidPassMessage = invalidPassMessage + "en az bir tane büyük karakter içermelidir !\n";
    }
    // Check if the password have 8 characters
    if (password.length < 8) {
      invalidPassMessage = invalidPassMessage + " en az sekiz karakter olmalıdır !\n";
    }

    if (!format.test(password)) {
      invalidPassMessage = invalidPassMessage + "en az bir özel karakter içermelidir !\n";
    }
    return res.status(400).json({ message: invalidPassMessage });
    }
    if (password !== passwordagain) {
       return res.status(500).json({ message: "İki şifre birbirinden farklı ! " });
    }

    const passwordHash = await bcrypt.hash(password, 12); //hashleme
    

    const newUser = await Auth.create({
      name,
      surname,
      username,
      email,
      password: passwordHash,
      passwordagain:passwordHash,
      birthdate,
    });

    const userToken = jwt.sign({ id: newUser.id }, process.env.SECRET_TOKEN, {
      expiresIn: "1h",
    }); // bir saat içinde kaybolacak gizli bir jeton

    res.status(201).json({
      status: "OK",
      newUser,
      userToken,
    });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

// logout = (req, res) => {

    
// }

module.exports = register
