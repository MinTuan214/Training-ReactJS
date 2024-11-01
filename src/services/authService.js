import axios from "axios";

const Login = async (name, password) => {
  const response = await axios.post("http://localhost:5000/api/auth/login", {
    name,
    password,
  });
  return response.data;
};

const Register = async (name, email, phone, password) => {
  const response = await axios.post("http://localhost:5000/api/auth/register", {
    name,
    email,
    phone,
    password,
  });
  return response.data;
};

export { Login, Register };
