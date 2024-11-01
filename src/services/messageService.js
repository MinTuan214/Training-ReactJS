import axios from "axios";

const getDepartments = async () => {
  const response = await axios.get("http://localhost:5000/api/departments");
  return response.data;
};

const getMessage = async (departmentId) => {
  try {
    const response = await axios.get(`http://localhost:5000/api/messages/${departmentId}`);
    return response.data;
  } catch (error) {
    console.log(error);
  }
};

const sendMessage = async (department_id, content, user_id) => {
  console.log("Sending message with:", { department_id, content, user_id });
  try {
    const response = await axios.post("http://localhost:5000/api/messages", 
      { content, department_id, user_id }, 
      { headers: { 'Content-Type': 'application/json' } }
    );
    return response.config;
  } catch (error) {
    console.log("Error sending message:", error.message);
  }
};


export { getDepartments, getMessage, sendMessage };
