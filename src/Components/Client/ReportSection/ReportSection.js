import React from "react";
import ClientNavSection from "../ClientNavSection/ClientNavSection";
import Picture1 from "../../../Image/Picture1.png";
import "./ReportSection.css";
import { Link } from "react-router-dom";
import pdf from "../../../Image/one.pdf";

const ReportSection = () => {
  return (
    <>
      <ClientNavSection></ClientNavSection>
      <section>
        <div className="container ">
          <h3 className="text-bold my-4">Dimension Wise Interpretation</h3>

          <div className="row text-center text-uppercase text-bold">
            <div className="col-md-3  border border-dark bg-light p-2">
              Empathy Dimensions
            </div>
            <div
              className="col  border border-dark text-light"
              style={{ backgroundColor: "#800000" }}
            >
              Not <br /> Demonstrated
            </div>
            <div
              className="col border border-dark text-light"
              style={{ backgroundColor: "#800000" }}
            >
              Early <br /> Awareness
            </div>
            <div
              className="col border border-dark text-light "
              style={{ backgroundColor: "#800000" }}
            >
              Selective <br /> application
            </div>
            <div
              className="col border border-dark text-light"
              style={{ backgroundColor: "#800000" }}
            >
              Well <br /> Manifested
            </div>
            <div
              className="col  border border-dark text-light"
              style={{ backgroundColor: "#800000" }}
            >
              Clear <br /> strength
            </div>
          </div>
          <div className="row border border-dark">
            <div style={{ height: "20px" }}></div>
          </div>
          <div className="row border border-dark">
            <div className="col-md-3 border border-dark">
              <span className="text-uppercase text-bold">Relatability</span>
            </div>
            <div className="col-md-9 p-0 m-0 ">
              <div
                className=" progress-bar "
                role="progressbar"
                style={{
                  width: "100%",
                  height: "100%",
                  backgroundColor: "#00B0F0",
                }}
                aria-valuenow="50"
                aria-valuemin="0"
                aria-valuemax="100"
              ></div>
            </div>
          </div>

          <div className="row border border-dark">
            <div style={{ height: "20px" }}></div>
          </div>
          <div className="row border border-dark">
            <div className="col-md-3 border border-dark">
              <span className="text-uppercase text-bold">Resonance</span>
            </div>
            <div className="col-md-9 p-0 m-0 ">
              <div
                className=" progress-bar "
                role="progressbar"
                style={{
                  width: "75%",
                  height: "100%",
                  backgroundColor: "#92D050",
                }}
                aria-valuenow="50"
                aria-valuemin="0"
                aria-valuemax="100"
              ></div>
            </div>
          </div>

          <div className="row border border-dark">
            <div style={{ height: "20px" }}></div>
          </div>
          <div className="row border border-dark">
            <div className="col-md-3 border border-dark">
              <span className="text-uppercase text-bold">Reframing</span>
            </div>
            <div className="col-md-9 p-0 m-0 ">
              <div
                className=" progress-bar "
                role="progressbar"
                style={{
                  width: "50%",
                  height: "100%",
                  backgroundColor: "#FFC000",
                }}
                aria-valuenow="50"
                aria-valuemin="0"
                aria-valuemax="100"
              ></div>
            </div>
          </div>

          <div className="row border border-dark">
            <div style={{ height: "20px" }}></div>
          </div>
          <div className="row border border-dark">
            <div className="col-md-3 border border-dark">
              <span className="text-uppercase text-bold">Reorient</span>
            </div>
            <div className="col-md-9 p-0 m-0 ">
              <div
                className=" progress-bar "
                role="progressbar"
                style={{
                  width: "25%",
                  height: "100%",
                  backgroundColor: "#ED7D31",
                }}
                aria-valuenow="50"
                aria-valuemin="0"
                aria-valuemax="100"
              ></div>
            </div>
          </div>

          <div className="row border border-dark">
            <div style={{ height: "20px" }}></div>
          </div>
          <div className="row border border-dark">
            <div className="col-md-3 border border-dark">
              <span className="text-uppercase text-bold">Reimagination</span>
            </div>
            <div className="col-md-9 p-0 m-0 ">
              <div
                className=" progress-bar "
                role="progressbar"
                style={{
                  width: "10%",
                  height: "100%",
                  backgroundColor: "#FF0000",
                }}
                aria-valuenow="50"
                aria-valuemin="0"
                aria-valuemax="100"
              ></div>
            </div>
          </div>
          <div className="row mt-5">
            <div
              className="col border border-dark"
              style={{ height: "20px", backgroundColor: "#FF0000" }}
            ></div>
            <div
              className="col border border-dark"
              style={{ height: "20px", backgroundColor: "#ED7D31" }}
            ></div>
            <div
              className="col border border-dark"
              style={{ height: "20px", backgroundColor: "#FFC000" }}
            ></div>
            <div
              className="col border border-dark"
              style={{ height: "20px", backgroundColor: "#92D050" }}
            ></div>
            <div
              className="col border border-dark"
              style={{ height: "20px", backgroundColor: "#00B0F0" }}
            ></div>
          </div>
          <div className="row ">
            <div className="col  border border-dark text-center text-bold">
              Not <br /> Demonstrated
            </div>
            <div className="col border border-dark text-center text-bold">
              Early <br /> Awareness
            </div>
            <div className="col border border-dark text-center text-bold ">
              Selective <br /> application
            </div>
            <div className="col border border-dark text-center text-bold">
              Well <br /> Manifested
            </div>
            <div className="col  border border-dark text-center text-bold">
              Clear <br /> strength
            </div>
          </div>
        </div>
        {/* <footer className="mt-5 px-5">
          © {new Date().getFullYear()} Centre of Strategic Mindset, All Rights
          Reserved
        </footer> */}
      </section>
    </>
  );
};

export default ReportSection;
