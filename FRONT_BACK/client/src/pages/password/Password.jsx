import "./password.scss";
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
          <h2>1001 Hesabını Bul</h2>
          
             <form>
                <input type="email" placeholder="E-mail" />
              
                <Link to="/repass">
                   <button >Gönder</button>
                 </Link>            
             </form>

        </div>
      </div>
    </div>
  );
};

export default Register;