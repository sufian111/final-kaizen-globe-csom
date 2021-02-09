import React, { useState, useContext, useEffect } from "react";
import IntroductionPage from "../../Client/IntroductionPage/IntroductionPage";
import ResultPage from "../../ResultPage/ResultPage";
import BackGroundResearch from "../BackGroundResearch/BackGroundResearch";
import Dimensions from "../Dimensions/Dimensions";
import Introduction from "../Introduction/Introduction";
import Report from "../Report/Report";
import ReportFromDataBase from "../ReportFromDataBase/ReportFromDataBase";
import Scores from "../Scores/Scores";
import TopHeader from "../TopHeader/TopHeader";
import "./OneNumber.css";
import { UserContext } from "../../../App";

const OneNumber = ({ id }) => {
  const [loggedInUser, setLoggedInUser] = useContext(UserContext);
  useEffect(() => {
    fetch(`https://damp-woodland-24997.herokuapp.com/answerByEmail`, {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify({ email: loggedInUser.email }),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
      });
  }, []);
  const url = `https://pdf.cosm.co.in/?id=${id}&email=${loggedInUser.email}`;
  const urllocal = `http://127.0.0.1:5500/?id=${id}&email=${loggedInUser.email}`;

  const downloadBoth = () => {
    window.open(url, "_blank ", "width=900,height=600", true);
  };
  return (
    <>
      <div className="text-center m-3">
        <button
          className="letsGoBtn"
          onClick={() => {
            downloadBoth();
          }}
        >
          Download As Pdf
        </button>
      </div>
      <div className="extra">
        <div id="result">
          <TopHeader></TopHeader>
          <Introduction></Introduction>
          <BackGroundResearch></BackGroundResearch>
          <Dimensions></Dimensions>
          <Report></Report>
        </div>
        <div id="result2">
          <Scores id={id}></Scores>
          <ReportFromDataBase id={id}></ReportFromDataBase>
          <ResultPage id={id}></ResultPage>
          <div style={{ marginTop: "100px", color: "#800000" }}>
            © 2021 Centre of Strategic Mindset, All Rights Reserved
          </div>
        </div>
      </div>
    </>
  );
};

export default OneNumber;
