import { useEffect, useState } from "react";
import { Login } from "../../services/authService";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

function LoginForm() {
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [loadingData, setLoadingData] = useState(false);

  useEffect(() => {
    let token = localStorage.getItem("token");
    if (token) {
      navigate("/departments");
    }
  });

  const handleLogin = async () => {
    setLoadingData(true);
    if (!name || !password) {
      toast.error("Vui lòng nhập đầy đủ thông tin");
    }
    const response = await Login(name, password);
    if (response && response.token) {
      localStorage.setItem("token", response.token);
      setLoadingData(false);
      navigate("/departments");
      toast.success("Đăng nhập thành công!");
    }
  };

  return (
    <div className="wrapper">
      <div className="form-control username">
        <label htmlFor="name">
          <i className="fa-solid fa-user"></i>
        </label>
        <input
          type="text"
          id="name"
          className="text-control name"
          placeholder="Username"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </div>
      <div className="form-control password">
        <label htmlFor="password">
          <i className="fa-solid fa-lock"></i>
        </label>
        <input
          type="password"
          id="password"
          className="text-control pass"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <p className="eye">
          <i className="fa-solid fa-eye-slash"></i>
        </p>
      </div>
      <div className="btn-login">
        <button className="login" onClick={handleLogin}>
          {loadingData && <i className="fas fa-sync fa-spin"></i>} Login
        </button>
      </div>
      <div className="forgot-pass">
        <p>Forgot Username Password?</p>
      </div>
    </div>
  );
}

export default LoginForm;
