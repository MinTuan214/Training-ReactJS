import { createContext } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

export const AppContext = createContext({});

export const AppProvider = ({ children }) => {
  const navigate = useNavigate();
  const username = localStorage.getItem("username");
  const userId = localStorage.getItem('id');

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("username");
    localStorage.removeItem("id");
    navigate("/");
    toast.success("Đăng xuất thành công!");
  };

  return (
    <AppContext.Provider value={{ handleLogout, username, userId }}>
      {children}
    </AppContext.Provider>
  );
};
