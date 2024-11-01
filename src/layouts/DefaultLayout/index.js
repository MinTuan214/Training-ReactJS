import "./DefaultLayout.css";
import Header from "./Header";

function DefaultLayout({ children }) {
  return (
    <div className="wrapper">
    <Header />
      <div className="container-main">
        <div>{children}</div>
      </div>
    </div>
  );
}

export default DefaultLayout;
