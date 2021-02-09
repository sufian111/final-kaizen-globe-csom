import React, { useContext } from "react";
import { useRef } from "react";
import { useState } from "react";

import ClientNavSection from "../ClientNavSection/ClientNavSection";
import AssessmentQuestionSingle from "./AssessmentQuestionSingle";

import SingleQuestion from "./SingleQuestion/SingleQuestion";
import StopWatch from "./StopWatch";
import picture from "../../../Image/ability .jpg";

const AssessmentById = () => {
  /*timer function */

  return (
    <>
      <ClientNavSection></ClientNavSection>
      <div className="container p-md-5 p-0">
        <div className="row mt-2 mb-2 d-flex justify-content-md-between align-items-center">
          <div style={{ textAlign: "left" }} className="col-md-4 mt-2 col-8">
            <img className="w-50 image-fluid" src={picture} alt="" />
          </div>
          <div className="col-md-2 col-2">
            <StopWatch></StopWatch>
          </div>
        </div>
        <AssessmentQuestionSingle></AssessmentQuestionSingle>
      </div>
      {/* <SingleQuestion></SingleQuestion> */}
    </>
  );
};

export default AssessmentById;
