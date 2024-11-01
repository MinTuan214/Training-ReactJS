import { useEffect, useRef, useState } from "react";
import { getMessage } from "../../services/messageService";

function MessageList({ departmentId }) {
  const [messageList, setMessageList] = useState([]);
  const id = localStorage.getItem("id");
  const scrollRef = useRef(null);

  const fetchMessage = async () => {
    try {
      const data = await getMessage(departmentId);
      setMessageList(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    if (departmentId) {
      fetchMessage();
      const intervalId = setInterval(() => {
        fetchMessage();
      }, 1000);
      return () => clearInterval(intervalId);
    }
  }, [departmentId]);

  
  useEffect(() => {
    // Chỉ cuộn đến phần tử cuối cùng một lần sau khi dữ liệu được tải
    if (scrollRef.current) {
      scrollRef.current.scrollIntoView({ behavior: "auto", block: "end" });
    }
  }, [messageList]);

  return (
    <div className="write-message">
      <div className="chat-messages">
        {messageList.map((message, index) =>
          message.user_id._id === id ? (
            <div key={index} className="message sent">
              <div className="message-content">
                <span className="time"></span>
                <p>{message.content}</p>
              </div>
              <img
                src="https://cdn4.iconfinder.com/data/icons/avatars-xmas-giveaway/128/batman_hero_avatar_comics-512.png"
                alt="MinhTuan"
              />
            </div>
          ) : (
            <div key={index} className="message received">
              <img
                src="https://cdn4.iconfinder.com/data/icons/avatars-xmas-giveaway/128/batman_hero_avatar_comics-512.png"
                alt=""
              />
              <div className="message-content">
                <span className="time"></span>
                <p>{message.content}</p>
              </div>
            </div>
          )
        )}
      <div ref={scrollRef} />

      </div>
    </div>
  );
}

export default MessageList;
