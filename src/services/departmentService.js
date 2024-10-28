import axios from "axios";

const getDepartments = async () => {
  const response = await axios.get("http://localhost:5000/api/departments");
  return response.data;
};

const addDepartment = async (department_name) => {
  const response = await axios.post("http://localhost:5000/api/departments", {
    department_name,
  });
  return response.data;
};

const getUsers = async () => {
    const response = await axios.get('http://localhost:5000/api/account/list-user');
    return response.data;
}




export { getDepartments, addDepartment, getUsers };
