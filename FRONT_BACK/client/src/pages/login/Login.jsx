import "./Login.scss";
import { Link } from "react-router-dom";
import {Formik} from "formik";
import * as Yup from "yup";

const Login = () => {
  return (
    <div className="login">
      <div className="card">

        <div className="left">
         <h1>1001FİLM</h1>
         
          <p>"İnsan sevdiklerini öldürür diye bir söz vardır ya; aslında insanı öldüren de hep sevdiğidir."</p>
          
          <h2>Hâla hesabın Yok mu?</h2>
          <Link to="/register">
            <button>Kayıt Ol</button>
          </Link>
        </div>
        <div className="right">
        <div className="resim"><img src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhkqzMrUZicyCOw70EbTzSGDAAhDbIHZLwuMFYCYjrynlGJQztS6D3Wp31y7KEkYq2fiDCtccaLIKMm7s105tbb7WC0tf69WuEZHqcPi_xIG9o73cxHuqTnuIqr_PVilRLuQ5d_lhjcUV2Y4SDEkJGKrVcI4dfxUrQl3yv-FjOe21ujaFrLtRaK39J-VQ/s1600/lastLogos.png"  alt="" /></div>
          <h1>Giriş Yap</h1>
          <Formik
            initialValues={{
              kullanici_Adi:"",
              password:"",
            }}

            validationSchema ={Yup.object({
             kullanici_Adi: Yup.string().required("Kullanıcı Adı Boş Bırakılamaz"),
             password: Yup.string().required("Şifre Boş Bırakılamaz"),
            })}

            onSubmit={(values, { setSubmitting, resetForm }) => {
              console.log(values);
              setTimeout(() => {
                setSubmitting(false);
                resetForm();
              }, 2000);
            }}
             
            >
               {({
            values,
            touched,
            errors,
            dirty,
            isSubmitting,
            handleSubmit,
            handleReset,
            handleChange,
          }) => ( 
             <form onSubmit={handleSubmit}>
              <input id ="kullanici_Adi" className="input" value={values.kullanici_Adi} onChange={handleChange} type="text" placeholder="Kullanıcı Adı"  />
              {errors.kullanici_Adi && touched.kullanici_Adi && (
                 <div className="input-feedback" >{errors.kullanici_Adi} </div> 
               )}
              <input id ="password" className="input" value={values.password} onChange={handleChange} type="password" placeholder="Şifre" />
              {errors.password && touched.password && (
                 <div className="input-feedback">{errors.password}</div>
               )}
               <a href="/password">Şifremi unuttum</a>
              <button type="submit" disabled={!dirty || isSubmitting} >Giriş Yap</button>
             </form>


          )}
         
          </Formik>
        </div>
      </div>
    </div>
  )
}

export default Login