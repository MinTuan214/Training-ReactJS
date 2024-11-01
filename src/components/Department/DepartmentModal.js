import { Link } from "react-router-dom";
import { useState } from "react";
import { addDepartment } from "../../services/departmentService";
import { toast } from "react-toastify";

function DepartmentModal({
  isAddModalOpen,
  closeAddModal,
  isDeleteModalOpen,
  closeDeleteModal,
  fetchDepartments,
  users,
}) {
  const [departmentName, setDepartmentName] = useState("");
  const [selectUser, setSelectUser] = useState("");

  const handleAddDepartment = async () => {
    const res = await addDepartment(departmentName, selectUser);

    if (res) {
      closeAddModal();
      setDepartmentName("");
      setSelectUser("");
      fetchDepartments();
      toast.success("Thêm mới thành công!");
    } else {
      toast.error("Add department error!");
    }
  };

  return (
    <>
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

      {/* Modal Thêm Phòng Ban */}
      {isAddModalOpen && (
        <div className="modal-add" onClick={closeAddModal}>
          <div className="form-add" onClick={(e) => e.stopPropagation()}>
            <div className="form">
              <div className="close-modal" onClick={closeAddModal}>
                <i className="fa-solid fa-xmark"></i>
              </div>
              <div className="title">
                <h2>Create department</h2>
              </div>
              <hr className="new1" />
              <div className="form-add-user">
                <form action="#" id="formAddUser">
                  <div className="box-text">
                    <div className="control-ip text-name">
                      <label htmlFor="#">Department name</label>
                      <input
                        type="text"
                        name="department-name"
                        id="department-name"
                        placeholder="Department name"
                        value={departmentName}
                        onChange={(e) => setDepartmentName(e.target.value)}
                      />
                    </div>
                    <div className="select-users">
                      <label htmlFor="#">Select users</label>
                      <select
                        name="select-users"
                        id="select-users"
                        onChange={(e) => setSelectUser(e.target.value)}
                      >
                        {users.map((user, index) => (
                          <option key={index} value={user._id}>
                            {user.name}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>
                  <div className="upload-avatar">
                    <div className="show-image">
                      <img src="assets/images/notfound.png" alt="" />
                      <label
                        htmlFor="file-upload"
                        className="custom-file-upload"
                      >
                        Background Image
                      </label>
                      <input id="file-upload" name="avatar" type="file" />
                    </div>
                  </div>

                  <div className="btn-add-user">
                    <Link
                      className="btn add btn-submit"
                      onClick={handleAddDepartment}
                    >
                      + Add new department
                    </Link>
                    <Link href="#" className="btn reset">
                      Reset
                    </Link>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default DepartmentModal;
