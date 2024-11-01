import axios from "axios"

const getUserDepartment  = async (userId) => {
    const response = await axios.get(`http://localhost:5000/api/user_departments/${userId}`);
    return response.data;
}

export { getUserDepartment };