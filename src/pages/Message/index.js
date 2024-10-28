import "./Message.css";
import images from "../../assets/images";
import { Link } from "react-router-dom";
import { getDepartments } from "../../services/messageService";
import { useEffect, useState } from "react";

function Message() {
  const [departments, setDepartments] = useState([]);
  const [activeUser, setActiveUser] = useState(null);

  const fetchDepartments = async () => {
    try {
      const response = await getDepartments();
      setDepartments(response);
    } catch (error) {
      console.error("Error fetching departments:", error);
    }
  };

  useEffect(() => {
    fetchDepartments();
  }, []);

  const handleUserClick = (index) => {
    console.log(index);
    
    setActiveUser(index);
  }

  return (
    <div id="main-chat">
      <div className="container">
        <div className="box-left">
          <div className="sidebar-top">
            <i className="fa-solid fa-power-off"></i>
            <i className="fa-solid fa-address-book"></i>
            <i className="fa-solid fa-user"></i>
            <i className="fa-solid fa-user-group"></i>
            <i className="fa-solid fa-list"></i>
          </div>
          <div className="sidebar-bottom">
            <i className="fa-solid fa-gear"></i>
            <i className="fa-solid fa-circle-exclamation"></i>
          </div>
        </div>
        <div className="box-right">
          <div className="nav-top">
            <div className="nav-top-left">
              <input type="text" placeholder="Search..." />
              <i className="fa-solid fa-magnifying-glass"></i>
              <div className="add-user">
                <i className="fa-solid fa-user-plus"></i>
                <i className="fa-solid fa-users"></i>
              </div>
            </div>
            <div className="nav-top-right">
              <div className="box-user">
                <span id="user-name"></span>
                <p className="dot"></p>

                <img src="image/219986.png" alt="" />
              </div>
            </div>
            <div className="clip-path"></div>
          </div>
          <div className="content">
            <div className="box-list-user">
              {departments.map((department, index) => (
                <div 
                  className={`content-message ${ activeUser === department._id ? 'active' : ''}`}
                  key={index} 
                  onClick={() => handleUserClick(department._id)}>

                  <div className="left">
                    <div className="avatar">
                      <img
                        src="https://cdn4.iconfinder.com/data/icons/avatars-xmas-giveaway/128/batman_hero_avatar_comics-512.png"
                        alt=""
                      />
                    </div>
                    <div className="name-message">
                      <span className="name">{department.department_name}</span>
                      <p className="status">
                        Online
                        <span className="dot"></span>
                      </p>
                    </div>
                  </div>
                  <div className="right">
                    <div className="time">
                      <p>12:35</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="box-chat-user">
              <div className="user-texting">
                <div className="info-user">
                  <img
                    src="https://cdn4.iconfinder.com/data/icons/avatars-xmas-giveaway/128/batman_hero_avatar_comics-512.png"
                    alt=""
                  />
                  <div className="name-status">
                    <p className="name"></p>
                    <p className="status">
                      Online
                      <span className="dot"></span>
                    </p>
                  </div>
                </div>
                <div className="action">
                  <i className="fa-solid fa-video"></i>
                  <i className="fa-solid fa-phone"></i>
                  <i className="fa-solid fa-bars"></i>
                </div>
              </div>
              <div className="hr-top"></div>
              <div className="content-text">
                <div className="write-message">
                  <div className="chat-messages"></div>
                </div>

                <div className="box-submit-message">
                  <div className="hr-bot"></div>
                  <div className="box-write">
                    <div className="text">
                      <input
                        type="text"
                        id="send-message"
                        placeholder="Nhập tin nhắn..."
                      />
                    </div>
                    <div className="select">
                      <div className="icons">
                        <i className="fa-regular fa-face-smile"></i>
                        <i className="fa-solid fa-plus"></i>
                      </div>
                      <Link className="btn-send">
                        <i className="fa-solid fa-paper-plane"></i>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="box-defautl">
              <h2>Welcome to CHAT - MT</h2>
              <p>
                Khám phá những tiện ích hỗ trợ làm việc và trò chuyện cùng người
                thân, bạn bè được tối ưu hoá cho máy tính của bạn.
              </p>
              <img src={images.group} alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Message;
