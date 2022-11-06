import "./leftBar.scss";
import { AuthContext } from "../../context/authContext";
import { useContext } from "react";

const LeftBar = () => {

   const { currentUser } = useContext(AuthContext);

  return (
    <div className="leftBar">
      <div className="container">
        <div className="menu">
          <div className="user">
            <img
              src={currentUser.profilePic}
              alt=""
            />
            <span>{currentUser.name}</span>
          </div>
          <div className="item">
            <img src="https://cdn.yenicaggazetesi.com.tr/news/438570.jpg" alt="" />
            <span>Arkadaş</span>
          </div>
          <div className="item">
            <img src="https://cdn.yenicaggazetesi.com.tr/news/438570.jpg" alt="" />
            <span>Gruplar</span>
          </div>
          <div className="item">
            <img src="https://cdn.yenicaggazetesi.com.tr/news/438570.jpg" alt="" />
            <span>Market</span>
          </div>
          <div className="item">
            <img src="https://cdn.yenicaggazetesi.com.tr/news/438570.jpg" alt="" />
            <span>İzle</span>
          </div>
          <div className="item">
            <img src="https://cdn.yenicaggazetesi.com.tr/news/438570.jpg" alt="" />
            <span>Kayıtlı</span>
          </div>
        </div>
        <hr />
        <div className="menu">
          <span>Kısayollarınız</span>
          <div className="item">
            <img src="https://cdn.yenicaggazetesi.com.tr/news/438570.jpg" alt="" />
            <span>Events</span>
          </div>
          <div className="item">
            <img src="https://cdn.yenicaggazetesi.com.tr/news/438570.jpg" alt="" />
            <span>Galleri</span>
          </div>
          <div className="item">
            <img src="https://cdn.yenicaggazetesi.com.tr/news/438570.jpg" alt="" />
            <span>Flim</span>
          </div>
          <div className="item">
            <img src="https://cdn.yenicaggazetesi.com.tr/news/438570.jpg" alt="" />
            <span>Messaj</span>
          </div>
        </div>
        <hr />
       
      </div>
    </div>
  );
};

export default LeftBar;