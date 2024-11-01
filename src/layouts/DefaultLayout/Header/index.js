import { Link } from "react-router-dom";
import "./Header.css";

function Header() {
  return (
    <div className="header">
      <Link to="/departments">
        <i className="fa-solid fa-building-user"></i> Home
      </Link>
      <Link to="/messages">
        <i className="fa-solid fa-comment"></i> Chat
      </Link>
    </div>
  );
}

export default Header;
