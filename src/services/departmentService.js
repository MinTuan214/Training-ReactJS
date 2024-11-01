import axios from "axios";

const getDepartments = async () => {
  try {
    const response = await axios.get("http://localhost:5000/api/departments");
    return response.data;
  } catch (error) {
    console.log(error);
  }
};

const addDepartment = async (department_name, user_id) => {
  const creator_id = localStorage.getItem("id");
  try {
    const response = await axios.post("http://localhost:5000/api/departments", {
      department_name,
      user_id,
    });

    const departmentId = response.data._id;

    await axios.post("http://localhost:5000/api/user_departments", {
      user_id: creator_id,
      department_id: departmentId,
    });

    return response.data;
  } catch (error) {
    console.log(error);
  }
};

const getUsers = async () => {
  try {
    const response = await axios.get(
      "http://localhost:5000/api/account/list-user"
    );
    return response.data;
  } catch (error) {
    console.log(error);
  }
};

export { getDepartments, addDepartment, getUsers };
