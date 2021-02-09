import React, { useContext } from "react";
import { useEffect } from "react";
import { Redirect, useHistory, useLocation } from "react-router-dom";
import { UserContext } from "../../../App";
import AllAssessments from "../AllAssessments/AllAssessments";
import ClientNavSection from "../ClientNavSection/ClientNavSection";
import "./UserProfile.css";
const UserProfile = () => {
  const [loggedInUser, setLoggedInUser] = useContext(UserContext);

  let history = useHistory();
  let location = useLocation();

  return (
    <>
      <ClientNavSection></ClientNavSection>
      <div className="container">
        <AllAssessments></AllAssessments>
      </div>
    </>
  );
};

export default UserProfile;
