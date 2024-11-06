import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Department from "./pages/Department";
import Message from "./pages/Message";
import MessageList from "./components/Message/MessageList";
import DefaultLayout from "./layouts/DefaultLayout";


function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route element={<DefaultLayout />}>
            <Route path="/departments" element={<Department />} />
            <Route path="/messages" element={<Message />}>
              <Route
                path=":departmentId/department"
                element={<MessageList />}
              />
            </Route>
          </Route>
        </Routes>
      </div>

      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
    </Router>
  );
}

export default App;
