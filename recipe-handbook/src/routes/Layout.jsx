import { Outlet, Link } from "react-router-dom";

const Layout = () => {
  return (
    <div>
      <nav>
        <ul>
          <li className="about-link" key="about-button">
            <Link style={{ color: "white" }} to="/about">
              About
            </Link>
          </li>
          <li>
          <Link style={{ color: "white" }} to="/">
              Home
            </Link>
          </li>
        </ul>
      </nav>
      <Outlet />
    </div>
  );
};

export default Layout;