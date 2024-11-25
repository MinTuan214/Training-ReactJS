import { useEffect, useRef } from "react";
import { useSelector } from "react-redux";
import { fetchMessage } from "../../redux/messageSlice";
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
function MessageList() {
  const { userId } = useSelector((state) => state.app);
  const { messageList } = useSelector((state) => state.message);
  const dispatch = useDispatch();
  const {departmentId} = useParams();
  const scrollRef = useRef(null);

  useEffect(() => {
    if (departmentId) {
      dispatch(fetchMessage(departmentId));
      const intervalId = setInterval(() => {
        dispatch(fetchMessage(departmentId));
      }, 5000);
      return () => clearInterval(intervalId);
    }
  }, [departmentId]);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollIntoView({ behavior: "auto", block: "end" });
    }
  }, [messageList]);

  return (
    <div className="write-message">
      <div className="chat-messages">
        {messageList && 
          messageList.map((message, index) =>
          message.user_id._id === userId ? (
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
