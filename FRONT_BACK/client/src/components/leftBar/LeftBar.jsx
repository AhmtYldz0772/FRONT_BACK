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
            <span>Friends</span>
          </div>
          <div className="item">
            <img src="https://cdn.yenicaggazetesi.com.tr/news/438570.jpg" alt="" />
            <span>Groups</span>
          </div>
          <div className="item">
            <img src="https://cdn.yenicaggazetesi.com.tr/news/438570.jpg" alt="" />
            <span>Marketplace</span>
          </div>
          <div className="item">
            <img src="https://cdn.yenicaggazetesi.com.tr/news/438570.jpg" alt="" />
            <span>Watch</span>
          </div>
          <div className="item">
            <img src="https://cdn.yenicaggazetesi.com.tr/news/438570.jpg" alt="" />
            <span>Memories</span>
          </div>
        </div>
        <hr />
        <div className="menu">
          <span>Your shortcuts</span>
          <div className="item">
            <img src="https://cdn.yenicaggazetesi.com.tr/news/438570.jpg" alt="" />
            <span>Events</span>
          </div>
          <div className="item">
            <img src="https://cdn.yenicaggazetesi.com.tr/news/438570.jpg" alt="" />
            <span>Gaming</span>
          </div>
          <div className="item">
            <img src="https://cdn.yenicaggazetesi.com.tr/news/438570.jpg" alt="" />
            <span>Gallery</span>
          </div>
          <div className="item">
            <img src="https://cdn.yenicaggazetesi.com.tr/news/438570.jpg" alt="" />
            <span>Videos</span>
          </div>
          <div className="item">
            <img src="https://cdn.yenicaggazetesi.com.tr/news/438570.jpg" alt="" />
            <span>Messages</span>
          </div>
        </div>
        <hr />
        <div className="menu">
          <span>Others</span>
          <div className="item">
            <img src="https://cdn.yenicaggazetesi.com.tr/news/438570.jpg" alt="" />
            <span>Fundraiser</span>
          </div>
          <div className="item">
            <img src="https://cdn.yenicaggazetesi.com.tr/news/438570.jpg" alt="" />
            <span>Tutorials</span>
          </div>
          <div className="item">
            <img src="https://cdn.yenicaggazetesi.com.tr/news/438570.jpg" alt="" />
            <span>Courses</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LeftBar;