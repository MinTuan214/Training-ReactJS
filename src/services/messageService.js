import axios from "axios";

const getDepartments = async () =>{
    const response = await axios.get('http://localhost:5000/api/departments');    
    return response.data;
}

export { getDepartments }