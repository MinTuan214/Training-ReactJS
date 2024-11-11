import "./Message.css";
import { useContext } from "react";
import { Outlet } from "react-router-dom";
import SendMessage from "../../components/Message/SendMessage";
import { AppContext } from "../../context/AppContext";
import { MessageContext } from "../../context/MessageContext";

function Message() {
  const { handleLogout, username } = useContext(AppContext);
  const {
    departments,
    activeDepartment,
    handleUserClick,
    nameMessage,
    viewDefault,
  } = useContext(MessageContext);

  return (
    <div id="main">
      <div className="container-mess">
        <div className="box-left">
          <div className="sidebar-top">
            <i className="fa-solid fa-power-off" onClick={handleLogout}></i>
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
                <span id="user-name">{username}</span>
                <p className="dot"></p>

                <img
                  src="https://cdn4.iconfinder.com/data/icons/avatars-xmas-giveaway/128/batman_hero_avatar_comics-512.png"
                  alt=""
                />
              </div>
            </div>
            <div className="clip-path"></div>
          </div>
          <div className="content">
            <div className="box-list-user">
              {departments.map((department, index) => (
                <div
                  key={index}
                  className={`content-message ${
                    activeDepartment === department._id ? "active" : ""
                  }`}
                  onClick={() =>
                    handleUserClick(department.department_name, department._id)
                  }
                >
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

            {activeDepartment ? (
              <div className="box-chat-user">
                <div className="user-texting">
                  <div className="info-user">
                    <img
                      src="https://cdn4.iconfinder.com/data/icons/avatars-xmas-giveaway/128/batman_hero_avatar_comics-512.png"
                      alt=""
                    />
                    <div className="name-status">
                      <p className="name">{nameMessage}</p>
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
                  <Outlet />
                  <SendMessage />
                </div>
              </div>
            ) : (
              viewDefault && (
                <div className="box-defautl">
                  <h2>Welcome to CHAT - MT</h2>
                  <p>
                    Khám phá những tiện ích hỗ trợ làm việc và trò chuyện cùng
                    người thân, bạn bè được tối ưu hoá cho máy tính của bạn.
                  </p>
                  <img src="assets/images/group.png" alt="" />
                </div>
              )
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Message;
