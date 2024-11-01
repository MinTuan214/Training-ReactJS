import { useState } from "react";
import { Register } from "../../services/authService";
import { toast } from "react-toastify";
import InputField from "../Common/InputField";
import Button from "../Common/Button";

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
        classBlock="email"
        className="email"
        id="email"
        iconClass="fa-envelope"
        type="text"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <InputField
        classBlock="phone"
        className="phone"
        id="phone"
        iconClass="fa-phone-volume"
        type="text"
        placeholder="Phone number"
        value={phone}
        onChange={(e) => setPhone(e.target.value)}
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
        className="btn-register"
        iconClass="fas fa-sync fa-spin"
        onClick={handleRegister}
        loadingData={loadingData}
        btnName="Register"
      />
    </div>
  );
}

export default RegisterForm;
