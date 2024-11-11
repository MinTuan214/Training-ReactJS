import { createContext, useEffect, useState } from "react";
import { getDepartments, getUsers } from "../services/departmentService";

export const DepartmentContext = createContext({});

export const DepartmentProvider = ({ children }) => {
  const [departments, setDepartments] = useState([]);
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
  const [users, setUsers] = useState("");

  const fetchDepartments = async () => {
    try {
      const data = await getDepartments();
      setDepartments(data);
    } catch (error) {
      console.error("Failed to fetch departments", error);
    }
  };
  const fetchUser = async () => {
    try {
      const user = await getUsers();
      setUsers(user);
    } catch (error) {
      console.error("Failed to get users", error);
    }
  };

  const openAddModal = () => setIsAddModalOpen(true);
  const openDeleteModal = () => setIsDeleteModalOpen(true);
  const closeAddModal = () => setIsAddModalOpen(false);
  const closeDeleteModal = () => setIsDeleteModalOpen(false);

  useEffect(() => {
    fetchDepartments();
    fetchUser();
  }, []);

  return (
    <DepartmentContext.Provider
      value={{
        departments,
        fetchDepartments,
        openAddModal,
        isAddModalOpen,
        closeAddModal,
        openDeleteModal,
        isDeleteModalOpen,
        closeDeleteModal,
        users,
      }}
    >
      {children}
    </DepartmentContext.Provider>
  );
};
