const Auth = require("../models/auth.js"); //"../models/auth.js"
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const register = async (req, res) => {
    
       
  
  try {
    const { name,surname,username, email, password, passwordagain,birthdate } = req.body; // front end kısmından gelenler
    const user = await Auth.findOne({ email });
    if (user) {
      return res.status(500).json({ message: "Bu mail zaten var!" });
    } else if (password.length < 8) {
      return res
        .status(500)
        .json({ message: "Parolanız 8 karakterden küçük olmamalı..." });
    }

    const passwordHash = await bcrypt.hash(passwordagain, 12); //hashleme


    const newUser = await Auth.create({
      name,
      surname,
      username,
      email,
      password: passwordHash,
      passwordagain,
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

//---------------LOGIN-----------------------

const login = async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await Auth.findOne({ email });
    if (!user) {
      //kullanıcı yoksa
      return res.status(500).json({ message: "Kullanıcı bulunamadı " });
    }
    const comparePassword = await bcrypt.compare(password, user.password);
    if (!comparePassword) {
      return res.status(500).json({ message: "Parolanız yanlış" });
    }

    const token = jwt.sign({ id: user.id }, process.env.SECRET_TOKEN, {
      expiresIn: "1h",
    });
    res.status(201).json({
      status: "OK",
      user,
      token,
    });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

module.exports = { register, login };
