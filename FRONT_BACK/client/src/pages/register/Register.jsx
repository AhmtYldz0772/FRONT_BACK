import "./register.scss";
import { Link } from "react-router-dom";
const Register = () => {
  return (
    <div className="register">
      <div className="card">
        <div className="left">
          
          <div className="images"> <p> "Bir hiç olmak çok üzücüdür beyler. İnsanlar hep aranmak ister, dinlenmek ister, hayatta bir kez de olsa önemli olmak ister."</p></div>
          <h2>Hesabın Var Mı?</h2>
          <h6>1001FİLM Hesabınıza Yeniden Giriş Yapın ve Sosyalleşmeye Devam Edin</h6>
          <Link to="/login">
            <button>GİRİŞ YAP</button>
          </Link>
        </div>
        <div className="right">
          <h1>Hesap Oluştur</h1>
          <form>
            <input type="text" placeholder="Ad" />
            <input type="text" placeholder="Soyad" />
            <input type="text" placeholder="Kullanıcı Adı" />
            <input type="email" placeholder="Email" />
            <input type="password" placeholder="Şifre" />
            <input type="password" placeholder="Şifre Tekrar" />
            <input type="date" placeholder="Dogum Tarihi" />
            <button>Kayıt Ol</button>
          </form>
        </div>
      </div>
    </div>
  );
};


export default Register;