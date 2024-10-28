import { useState } from "react";
import { Register } from "../../services/authService";
import { toast } from "react-toastify";

function RegisterForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const [loadingData, setLoadingData] = useState(false);

  const handleRegister = async () => {
    setLoadingData(true);
    if (!name || !email || !phone || !password) {
      toast.error("Vui lòng nhập đầy đủ thông tin");
    }
    const response = await Register(name, email, phone, password);
    if (response) {
      setName("");
      setEmail("");
      setPhone("");
      setPassword("");
      toast.success("Đăng ký thành công!");
    }
    setLoadingData(false);

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
      <div className="form-control username">
        <label htmlFor="name">
          <i className="fa-solid fa-envelope"></i>
        </label>
        <input
          type="text"
          id="email"
          className="text-control name"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>
      <div className="form-control username">
        <label htmlFor="name">
          <i className="fa-solid fa-phone-volume"></i>
        </label>
        <input
          type="text"
          id="phone"
          className="text-control name"
          placeholder="Phone number"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
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
        <button className="btn-register" onClick={handleRegister}>
          {loadingData && <i className="fas fa-sync fa-spin"></i>} Register
        </button>
      </div>
    </div>
  );
}

export default RegisterForm;
