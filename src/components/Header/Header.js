import React from "react";
import { NavLink } from "react-router-dom";
import logo from "./logo-small.png";

const Header = () => (
  <div
    className="navbar is-light"
    role="navigation"
    aria-label="main navigation"
  >
    <div className="navbar-brand">
      <NavLink className="navbar-item" to="/">
        <img src={logo} alt="Presidio: Discover, Analyse, Anonymize" />
        <strong>Presidio</strong>
      </NavLink>
    </div>
    <div className="navbar-menu">
      <div className="navbar-start">
        <NavLink
          className="navbar-item"
          to="/"
          exact
          activeClassName="is-active"
        >
          Home
        </NavLink>
        <NavLink className="navbar-item" to="/demo" activeClassName="is-active">
          Demo
        </NavLink>
        <a className="navbar-item" href="/">
          Docs
        </a>
      </div>
      <div className="navbar-end">
        <a className="navbar-item" href="/">
          Github
        </a>
      </div>
    </div>
  </div>
);

export default Header;
