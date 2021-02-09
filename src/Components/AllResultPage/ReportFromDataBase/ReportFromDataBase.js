import React, { useContext, useEffect } from "react";
import { useState } from "react";
import { UserContext } from "../../../App";
import "./ReportFromDataBase.css";

const ReportFromDataBase = ({ id }) => {
  const [allAnswer, setAllAnswer] = useState([]);
  const [loggedInUser, setLoggedInUser] = useContext(UserContext);

  const FinalResult = [];

  for (let i = 0; i < allAnswer.length; i++) {
    const element = allAnswer[i];
    const { answer } = element;
    let total = 0;

    for (let j = 0; j < answer.length; j++) {
      const { selectedAnswer } = answer[j];
      if (selectedAnswer === "ALWAYS") {
        total = total + 5;
      } else if (selectedAnswer === "MOSTLY") {
        total = total + 4;
      } else if (selectedAnswer === "OFTEN") {
        total = total + 3;
      } else if (selectedAnswer === "RARELY") {
        total = total + 2;
      } else if (selectedAnswer === "NEVER") {
        total = total + 1;
      }
    }
    FinalResult.push(total);
  }

  const FinalResultDouble = FinalResult.map((data) => data * 2.5);

  useEffect(() => {
    fetch(`https://damp-woodland-24997.herokuapp.com/answerByEmail`, {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify({ email: loggedInUser.email }),
    })
      .then((res) => res.json())
      .then((data) => {
        const newAllAnswer = data.filter((answer) => answer.header === id);
        setAllAnswer(newAllAnswer);
      });
  }, []);

  return (
    <section>
      <div className="container pl-5 pr-5">
        <h3 className="text-bold my-4 dimension">
          Dimension Wise Interpretation
        </h3>

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
                width: `${FinalResultDouble[0]}%`,
                height: "100%",
                backgroundColor: "#00B0F0",
                color: "white",
                textAlign: "right",
              }}
              aria-valuenow="50"
              aria-valuemin="0"
              aria-valuemax="100"
            >
              <p>{`${FinalResultDouble[0]}%`}</p>{" "}
            </div>
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
                width: `${FinalResultDouble[1]}%`,
                height: "100%",
                backgroundColor: "#0cf50c",
                textAlign: "right",
              }}
              aria-valuenow="50"
              aria-valuemin="0"
              aria-valuemax="100"
            >
              <p>{`${FinalResultDouble[1]}%`}</p>{" "}
            </div>
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
                width: `${FinalResultDouble[2]}%`,
                height: "100%",
                backgroundColor: "#FFC000",
                textAlign: "right",
              }}
              aria-valuenow="50"
              aria-valuemin="0"
              aria-valuemax="100"
            >
              <p>{`${FinalResultDouble[2]}%`}</p>{" "}
            </div>
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
                width: `${FinalResultDouble[3]}%`,
                height: "100%",
                backgroundColor: "#ED7D31",
                textAlign: "right",
              }}
              aria-valuenow="50"
              aria-valuemin="0"
              aria-valuemax="100"
            >
              <p>{`${FinalResultDouble[3]}%`}</p>{" "}
            </div>
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
                width: `${FinalResultDouble[4]}%`,
                height: "100%",
                backgroundColor: "#FF0000",
                textAlign: "right",
              }}
              aria-valuenow="50"
              aria-valuemin="0"
              aria-valuemax="100"
            >
              <p>{`${FinalResultDouble[4]}%`}</p>{" "}
            </div>
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
            style={{ height: "20px", backgroundColor: "#0cf50c" }}
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
  );
};

export default ReportFromDataBase;
