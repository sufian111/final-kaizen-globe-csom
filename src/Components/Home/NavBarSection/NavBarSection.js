import React, { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { UserContext } from "../../../App";
import logo from "../../../Image/logo.png";
import "./NavBarSection.css";

const NavBarSection = () => {
  const [loggedInUser, setLoggedInUser] = useContext(UserContext);
  return (
    <div className="fixed-top navContainer">
      <div className="container ">
        <nav class="navbar navbar-expand-lg ">
          <Link to="/">
            <img className="image-fluid logo" src={logo} alt="" />
          </Link>
          <button
            class="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <img src="https://img.icons8.com/doodle/48/000000/menu.png" />
          </button>

          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav ml-auto">
              <li class="nav-item pl-3 pr-3">
                <NavLink exact className="nav-link" to="/">
                  Home
                </NavLink>
              </li>

              <li class="nav-item pl-3 pr-3">
                <NavLink exact className="nav-link" to="/about">
                  About Us
                </NavLink>
              </li>

              <li class="nav-item pl-3 pr-3">
                <NavLink exact className="nav-link" to="/offerings">
                  Offerings
                </NavLink>
              </li>

              <li class="nav-item pl-3 pr-3">
                <NavLink exact className="nav-link" to="/leadership">
                  Thought Leadership
                </NavLink>
              </li>

              <li class="nav-item pl-3 pr-3">
                <NavLink exact className="nav-link" to="/gallery">
                  Gallery
                </NavLink>
              </li>

              <li class="nav-item pl-3 pr-3">
                <NavLink exact className="nav-link" to="/calendar">
                  Event Calendar
                </NavLink>
              </li>

              <li class="nav-item pl-3 pr-3">
                <NavLink className="nav-link" to="/login">
                  Login
                </NavLink>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    </div>
  );
};

export default NavBarSection;
