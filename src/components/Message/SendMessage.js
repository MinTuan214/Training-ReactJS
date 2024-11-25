import { Link } from "react-router-dom";
import { sendMessage } from "../../services/messageService";
import { useState } from "react";
import { useSelector } from "react-redux";

function SendMessage() {
  const { userId } = useSelector((state) => state.app);

  const { activeDepartment } = useSelector((state) => state.message);

  const [content, setContent] = useState("");

  const handleSendMessage = async () => {
    try {
      const response = await sendMessage(activeDepartment, content, userId);
      if (response) {
        console.log("Message sent successfully:", response.data);
      } else {
        console.error("No response data received");
      }

      setContent("");
      return response.data;
    } catch (error) {
      console.error("Error sending message:", error);
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      e.preventDefault();
      handleSendMessage();
    }
  };
  return (
    <div className="box-submit-message">
      <div className="hr-bot"></div>
      <div className="box-write">
        <div className="text">
          <input
            type="text"
            id="send-message"
            placeholder="Nhập tin nhắn..."
            value={content}
            onChange={(e) => setContent(e.target.value)}
            onKeyDown={handleKeyDown}
          />
        </div>
        <div className="select">
          <div className="icons">
            <i className="fa-regular fa-face-smile"></i>
            <i className="fa-solid fa-plus"></i>
          </div>
          <Link className="btn-send" onClick={handleSendMessage}>
            <i className="fa-solid fa-paper-plane"></i>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default SendMessage;
