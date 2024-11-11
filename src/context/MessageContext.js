import { createContext, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { getDepartments } from "../services/departmentService";
import { getMessage } from "../services/messageService";

export const MessageContext = createContext({});

export const MessageProvider = ({ children }) => {
  const navigate = useNavigate();
  const { departmentId } = useParams();

  const [departments, setDepartments] = useState([]);
  const [activeDepartment, setActiveDepartment] = useState(
    departmentId || null
  );
  const [nameMessage, setNameMessage] = useState(null);
  const [viewDefault, setViewDefault] = useState(!departmentId);

  const [messageList, setMessageList] = useState([]);

  const fetchDepartments = async () => {
    try {
      const response = await getDepartments();
      setDepartments(response);
    } catch (error) {
      console.error("Error fetching departments:", error);
    }
  };

  const fetchMessage = async () => {
    try {
      const data = await getMessage(departmentId);
      setMessageList(data);
    } catch (error) {
      console.log(error);
    }
  };

  const handleUserClick = (name, id) => {
    setNameMessage(name);
    setActiveDepartment(id);
    setViewDefault(false);
    navigate(`/messages/${id}/department`);
  };

  useEffect(() => {
    fetchDepartments();
  }, []);

  useEffect(() => {
    if (departmentId) {
      setActiveDepartment(departmentId);
      setViewDefault(false);
      const selectedDepartment = departments.find(
        (dept) => dept._id === departmentId
      );
      setNameMessage(
        selectedDepartment ? selectedDepartment.department_name : null
      );
    }
  }, [departmentId, departments]);

  return (
    <MessageContext.Provider
      value={{
        fetchMessage,
        messageList,
        departments,
        activeDepartment,
        handleUserClick,
        nameMessage,
        viewDefault,
        departmentId,
      }}
    >
      {children}
    </MessageContext.Provider>
  );
};
