import "./repass.scss";
import { Link } from "react-router-dom";
const Register = () => {
  return (
    <div className="register">
      <div className="card">
        <div className="left">
          <h1>1001FİLM</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero cum,
            alias totam numquam ipsa exercitationem dignissimos, error nam,
            consequatur.
          </p>
          <span>Hesabın Var Mı?</span>
          <Link to="/login">
            <button>Giriş Yap</button>
          </Link>
        </div>
        <div className="right">
          <h2>Şifremi Unuttum</h2>
          <form>
            
            <input type="password" placeholder="Yeni Şifre" />
            <input type="password" placeholder="Şifre Tekrar" />
            
            <Link to="/repass">
            <button>Kaydet</button>
          </Link>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;