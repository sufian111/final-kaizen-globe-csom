import React, { useContext } from "react";
import { Link, NavLink, useHistory } from "react-router-dom";
import { UserContext } from "../../../App";
import "./ClientNavSection.css";
import logo from "../../../Image/logo-wide.png";

const ClientNavSection = () => {
  const [loggedInUser, setLoggedInUser] = useContext(UserContext);

  const history = useHistory();

  const handleLogOut = () => {
    const newUser = {
      name: "",
      email: "",
      photo: "",
      totalScore: 0,
      selectedAnswerArray: [],
    };
    setLoggedInUser(newUser);
    history.push("/login");
  };
  return (
    <div className="navContainer">
      <nav class="navbar container navbar-expand-lg ">
        <Link to="/profile">
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
              <NavLink exact className="nav-link h5" to="/profile">
                All Assessments
              </NavLink>
            </li>

            <li class="nav-item pl-3 pr-3">
              <NavLink exact className="nav-link h5" to="/completeAssessment">
                Completed
              </NavLink>
            </li>

            <li class="nav-item pl-3 pr-3">
              <NavLink exact className="nav-link h5" to="/myProfile">
                My Profile
              </NavLink>
            </li>

            <li class="nav-item pl-3 pr-3">
              <div onClick={handleLogOut} className="nav-link h5" to="/">
                Log Out
              </div>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default ClientNavSection;
