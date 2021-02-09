import React from "react";
import "./OurEdge.css";
import aboutImage from "../../../../Image/aboutBg.jpg";

const OurEdge = () => {
  return (
    <div className="mt-5">
      <div className="container">
        <div>
          <div className="edge-title-wrapper text-center">
            <h2 className="OurEdgeTitle">Our Edge</h2>
          </div>
          <div className="title-seperator-line text-center"></div>
        </div>
        <div className="row d-flex justify-content-center mt-4">
          <div className="col-md-9">
            <img className="w-100" src={aboutImage} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurEdge;
