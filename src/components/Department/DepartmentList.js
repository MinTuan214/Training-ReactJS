import { useState } from "react";
import { Link } from "react-router-dom";

function DepartmentList({ departments }) {
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);

  const handleUpdate = async (department) => {
    console.log(department);
  };

  const handleDelete = async (department) => {
    console.log(department);
  };

  const openDeleteModal = () => setIsDeleteModalOpen(true);
  const closeDeleteModal = () => setIsDeleteModalOpen(false);

  return (
    <div className="box-bot">
      <table border="1">
        <thead>
          <tr>
            <th>#</th>
            <th>Department</th>
            <th>Administrator</th>
            <th>Creation date</th>
            <th></th>
          </tr>
        </thead>
        <tbody id="listDepartment">
          {departments.map((department, index) => (
            <tr key={index}>
              <td>
                <input type="checkbox" />
              </td>
              <td>{department.department_name}</td>
              <td>{department.title}</td>
              <td>{department.userId}</td>
              <td className="action">
                <Link to="#">
                  <i className="fa-solid fa-eye"></i>
                </Link>
                |
                <Link
                  className="btn-edit"
                  onClick={() => handleUpdate(department)}
                >
                  <i className="fa-solid fa-pen-to-square"></i>
                </Link>
                |
                <Link className="btn-delete" onClick={openDeleteModal}>
                  <i className="fa-solid fa-trash-can"></i>
                </Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      {/* Modal Xác Nhận Xóa */}
      {isDeleteModalOpen && (
        <div className="modal-delete">
          <div className="form-confirm">
            <div className="form">
              <div className="close-modal" onClick={closeDeleteModal}>
                <i className="fa-solid fa-xmark"></i>
              </div>
              <div className="title-confirm">
                <i className="fa-solid fa-circle-exclamation"></i>
                <p>Are you sure you want to delete this department?</p>
              </div>
              <div className="btn-confirm">
                <Link className="btn yes">Yes, I'm sure</Link>
                <Link className="btn no" onClick={closeDeleteModal}>
                  No, cancel!
                </Link>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default DepartmentList;
