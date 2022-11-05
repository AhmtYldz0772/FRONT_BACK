import "./share.scss";

import { useContext } from "react";
import { AuthContext } from "../../context/authContext";

const Share = () => {

  const {currentUser} = useContext(AuthContext)
  return (
    <div className="share">
      <div className="container">
        <div className="top">
          <img
            src={currentUser.profilePic}
            alt=""
          />
          <input type="text" placeholder={`What's on your mind ${currentUser.name}?`} />
        </div>
        <hr />
        <div className="bottom">
          <div className="left">
            <input type="file" id="file" style={{display:"none"}} />
            <label htmlFor="file">
              <div className="item">
                <img src="https://i.hbrcdn.com/haber/2021/10/28/magazin-kurtlar-vadisi-elif-kim-kurtlar-vadisi-elif-14493326_127_amp.jpg" alt="" />
                <span>Add Image</span>
              </div>
            </label>
            <div className="item">
              <img src="https://i.hbrcdn.com/haber/2021/10/28/magazin-kurtlar-vadisi-elif-kim-kurtlar-vadisi-elif-14493326_127_amp.jpg" alt="" />
              <span>Add Place</span>
            </div>
            <div className="item">
              <img src="https://i.hbrcdn.com/haber/2021/10/28/magazin-kurtlar-vadisi-elif-kim-kurtlar-vadisi-elif-14493326_127_amp.jpg" alt="" />
              <span>Tag Friends</span>
            </div>
          </div>
          <div className="right">
            <button>Share</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Share;