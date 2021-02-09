import React, { useContext } from "react";
import "./TopHeader.css";
import img from "../../../Image/Picture1.png";
import logo from "../../../Image/Empathy 629942924-huge.jpg";
import { UserContext } from "../../../App";

const TopHeader = () => {
  const [loggedInUser, setLoggedInUser] = useContext(UserContext);
  return (
    <>
      <div className="container ">
        <div>
          <img src={img} width="100%" alt="" />
          <div className="text-center">
            <h3>EMPATHY ASSESSMENT REPORT</h3>
          </div>
          <div className="text-center mb-3">
            <img src={logo} width="40%" alt="" />
          </div>
          <div className="text-center">
            <button className="nameBox">{`${loggedInUser.firstName} ${loggedInUser.lastName}`}</button>
          </div>
          <div className="text-center mt-2">
            <h5>Empathy is the ultimate form of customer insight</h5>
            <i>- Don Peppers -</i>
          </div>
        </div>
      </div>
    </>
  );
};

export default TopHeader;
