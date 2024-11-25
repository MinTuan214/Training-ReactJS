import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import "./Department.css";
import { useSelector, useDispatch } from "react-redux";
import { logout } from "../../redux/appSlice";
import DepartmentModal from "../../components/Department/DepartmentModal";
import DepartmentList from "../../components/Department/DepartmentList";
import { openAddModal } from "../../redux/departmentSlice";

function Department() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { isAddModalOpen } = useSelector((state) => state.department);
  const { username } = useSelector((state) => state.app);

  const handleLogout = () => {
    dispatch(logout());
    
    navigate("/");
  };

  useEffect(() => {
    let token = localStorage.getItem("token");
    if (!token) {
      navigate("/");
    }
  });

  return (
    <div id="main">
      <div className="container">
        <div className="box-top">
          <div className="title">
            <h2>
              List departments: {username}<span id="list-of"></span>
            </h2>
          </div>
          <hr className="new1" />
          <div className="all-action">
            <div className="search">
              <input type="text" placeholder="Search..." />
              <i className="fa-solid fa-magnifying-glass"></i>
            </div>
            <div className="filter-user">
              <div className="add" onClick={() => dispatch(openAddModal())}>
                <i className="fa-solid fa-building-user"></i> Department
              </div>
              <div className="filter">
                <select name="users" id="">
                  <option value="1">Filter options</option>
                  <option value="1">10</option>
                  <option value="1">15</option>
                </select>
              </div>
              <div className="trash" onClick={handleLogout}>Logout</div>
            </div>
          </div>
        </div>

        <DepartmentList />
      </div>
      {isAddModalOpen && <DepartmentModal />}
    </div>
  );
}

export default Department;
