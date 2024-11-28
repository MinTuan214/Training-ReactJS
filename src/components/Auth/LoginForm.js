import { useEffect, useState } from "react";
import { Login } from "../../services/authService";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setUser } from "../../redux/appSlice";
import InputField from "../Common/InputField";
import Button from "../Common/Button";

function LoginForm() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [loadingData, setLoadingData] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      navigate("/departments");
    }
  }, [navigate]);

  const handleLogin = async () => {
    if (!name || !password) {
      toast.error("Vui lòng nhập đầy đủ thông tin");
      return;
    }

    setLoadingData(true);

    try {
      const response = await Login(name, password);
      if (response && response.token) {
        localStorage.setItem("token", response.token);
        localStorage.setItem("username", response.name);
        localStorage.setItem("id", response.user_id);
        dispatch(setUser({ username: response.name, userId: response.user_id }));

        toast.success("Đăng nhập thành công!");
        navigate("/departments");
      } else {
        toast.error("Đăng nhập thất bại. Vui lòng thử lại.");
      }
    } catch (error) {
      toast.error(
        "Thông tin tài khoản mật khẩu không chính xác."
      );
    } finally {
      setLoadingData(false);
    }
  };

  return (
    <div className="wrapper">
      <InputField
        classBlock="username"
        className="name"
        id="name"
        iconClass="fa-user"
        type="text"
        placeholder="Username"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <InputField
        classBlock="password"
        className="pass"
        id="password"
        iconClass="fa-lock"
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        showEyeIcon={true}
      />
      <Button
        className="login"
        iconClass="fas fa-sync fa-spin"
        onClick={handleLogin}
        loadingData={loadingData}
        btnName="Login"
      />
      <div className="forgot-pass">
        <p>Forgot Username Password?</p>
      </div>
    </div>
  );
}

export default LoginForm;