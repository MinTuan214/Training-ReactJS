import { Link, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import "./Department.css";
import DepartmentModal from "../../components/Department/DepartmentModal";
import DepartmentList from "../../components/Department/DepartmentList";
import { getDepartments, getUsers } from "../../services/departmentService";
import { toast } from "react-toastify";

function Department() {
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
  const [departments, setDepartments] = useState([]);
  const [users, setUsers] = useState("");
  const navigate = useNavigate();
  const username = localStorage.getItem("username");

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

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("username");
    localStorage.removeItem("id");
    navigate("/");
    toast.success("Đăng xuất thành công!");
  };

  useEffect(() => {
    let token = localStorage.getItem("token");
    if (!token) {
      navigate("/");
    }
  });

  useEffect(() => {
    fetchDepartments();
    fetchUser();
  }, []);

  const openAddModal = () => setIsAddModalOpen(true);
  const closeAddModal = () => setIsAddModalOpen(false);

  // const openDeleteModal = () => setIsDeleteModalOpen(true);
  const closeDeleteModal = () => setIsDeleteModalOpen(false);

  return (
    <div id="main">
      <div className="container">
        <div className="box-top">
          <div className="title">
            <h2>
              List departments: <span id="list-of">{username}</span>
            </h2>
          </div>
          <hr className="new1" />
          <div className="all-action">
            <div className="search">
              <input type="text" placeholder="Search..." />
              <i className="fa-solid fa-magnifying-glass"></i>
            </div>
            <div className="filter-user">
              <div className="add" onClick={openAddModal}>
                <i className="fa-solid fa-building-user"></i> Department
              </div>
              <div className="filter">
                <select name="users" id="">
                  <option value="1">Filter options</option>
                  <option value="1">10</option>
                  <option value="1">15</option>
                </select>
              </div>
              <div className="trash" onClick={handleLogout}>
                Logout
              </div>
            </div>
          </div>
        </div>

        <DepartmentList departments={departments} />
      </div>

      <DepartmentModal
        isAddModalOpen={isAddModalOpen}
        closeAddModal={closeAddModal}
        isDeleteModalOpen={isDeleteModalOpen}
        closeDeleteModal={closeDeleteModal}
        fetchDepartments={fetchDepartments}
        users={users}
      />
    </div>
  );
}

export default Department;
