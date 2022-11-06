import "./register.scss";
import { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
const Register = () => {
  const [inputs, setInputs] = useState({
    name: "",
    surname: "",
    username: "",
    email: "",
    password: "",
    passwordagain: "",
    birthdate: "",
  }
    
  );
  const [err, setErr] = useState(null);

  const handleChange = (e) => {
    setInputs((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };
  
// const handleOnSubmit= (values, { setSubmitting, resetForm }) => {
//               console.log(values);
//               setTimeout(() => {
//                 setSubmitting(false);
//                 resetForm();
//               }, 2000);
//             }
  
  const handleClick = async (e) => {
    e.preventDefault();
    

    try {
      await axios.post("http://localhost:5001/api/users/register", inputs);
    } catch (err) {
      setErr(err.response.data);
    }
  };

  return (
    <div className="register">
      <div className="card">
        <div className="left">
          
          <div className="images"> <p> "Bir hiç olmak çok üzücüdür beyler. İnsanlar hep aranmak ister, dinlenmek ister, hayatta bir kez de olsa önemli olmak ister."</p></div>
         
          <Link to="/login">
            <button>GİRİŞ YAP</button>
          </Link>
        </div>
        <div className="right">
          <h1>Hesap Oluştur</h1>
          <form>
            <input type="text" value={inputs.name }placeholder="Ad" name="name" onChange={handleChange}/>
            <input type="text" value={inputs.surname }placeholder="Soyad"  name="surname" onChange={handleChange}/>
            <input type="text" value={inputs.username }placeholder="Kullanıcı Adı" name="username" onChange={handleChange}/>
            <input type="email" value={inputs.email } placeholder="Email" name="email" onChange={handleChange}/>
            <input type="password" value={inputs.password }placeholder="Şifre" name="password" onChange={handleChange}/>
            <input type="password" value={inputs.passwordagain }placeholder="Şifre Tekrar" name="passwordagain" onChange={handleChange}/>
            <input type="date" value={inputs.birthdate }placeholder="Dogum Tarihi" name="birthdate" onChange={handleChange} />
            {err && err}
            <button onClick={handleClick}>Kayıt Ol</button>
          </form>
        </div>
      </div>
    </div>
  );
};


export default Register;