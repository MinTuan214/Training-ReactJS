import Login from "../pages/Login";
import Register from "../pages/Register";
import Department from "../pages/Department";
import Message from "../pages/Message";
import MessageList from "../components/Message/MessageList";

const publicRoutes = [
  { path: "/", component: Login, layout: null },
  { path: "/register", component: Register, layout: null },
  { path: "/departments", component: Department },
  { 
    path: "/messages", 
    component: Message, 
    children: [
      { path: ":departmentId/department", component: MessageList }
    ] 
  },
];



const privateRoutes = [];

export { publicRoutes, privateRoutes };
