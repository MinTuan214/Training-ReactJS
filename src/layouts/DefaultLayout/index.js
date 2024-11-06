import { Outlet } from "react-router-dom";
import "./DefaultLayout.css";
import Header from "./Header";

function DefaultLayout() {
  return (
    <div className="wrapper">
    <Header />
      <div className="container-main">
        <Outlet />
      </div>
    </div>
  );
}

export default DefaultLayout;
