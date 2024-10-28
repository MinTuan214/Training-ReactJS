import Login from "../pages/Login";
import Register from "../pages/Register";
import Department from "../pages/Department";
import Message from "../pages/Message";

const publicRoutes = [
    {path: '/', component: Login},
    {path: '/register', component: Register},
    {path: '/departments', component: Department},
    {path: '/messages', component: Message},
];

const privateRoutes = [];

export { publicRoutes, privateRoutes };