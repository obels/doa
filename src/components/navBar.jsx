import React from "react";
import { Link, NavLink } from "react-router-dom";
import navLogo from "./images/navbarLogo.png";

const NavBar = () => {
  return (
    <div className="container" style={{ textAlign: "center" }}>
      <nav className="navbar navbar-expand-md navbar-light bg-light">
        <div className="container-fluid">
          <Link className="navbar-brand" to="home">
            <img
              src={navLogo}
              style={{ height: 45, width: 45 }}
              alt="navBar Logo"
            />
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <NavLink
                  className="nav-link active"
                  aria-current="page"
                  to="home"
                >
                  Home
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="directory">
                  Employee Directory
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="login">
                  Login
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};
export default NavBar;
