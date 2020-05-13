import React from "react";
import ReactDOM from "react-dom";
import { Route, Link, BrowserRouter as Router } from "react-router-dom";

import Main from "../main/main.component.jsx";

class Topbar extends React.Component {
  render() {
    return (
      <nav className="navbar navbar-expand-lg  bg-dark">
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse ml-6" id="navbarNav">
          <ul className="navbar-nav ml-5">
            <li className="nav-item">
              <Link className="nav-link" to="/main">
                Register
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/about">
                About
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    );
  }
}
export default Topbar;
