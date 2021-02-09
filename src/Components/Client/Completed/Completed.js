import React, { useContext, useEffect, useState } from "react";
import { Link, Redirect, useHistory } from "react-router-dom";
import { UserContext } from "../../../App";
import ClientNavSection from "../ClientNavSection/ClientNavSection";
import "./Completed.css";
import pdf from "../../../Image/one.pdf";

const Completed = () => {
  const [loggedInUser, setLoggedInUser] = useContext(UserContext);
  const [allAnswer, setAllAnswer] = useState([]);
  const [style, setStyle] = useState({
    display: "none",
  });
  const history = useHistory();

  useEffect(() => {
    fetch(`https://damp-woodland-24997.herokuapp.com/answerByEmail`, {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify({ email: loggedInUser.email }),
    })
      .then((res) => res.json())
      .then((data) => {
        setAllAnswer(data);
        if (data.length === 0) {
          alert("you have not yet taken the assessment");
          setStyle({
            display: "block",
          });
          history.push("/profile");
        }
      });
  }, []);

  const allHeader = [];
  const allKyes = allAnswer.map((question) => {
    allHeader.push(question.header);
  });

  const useFilter = (arr) => {
    return arr.filter((value, index, self) => {
      return self.indexOf(value) === index;
    });
  };

  const unique = useFilter(allHeader);

  const allUniqueAnswer = [];

  for (let i = 0; i < unique.length; i++) {
    const element = unique[i];
    const uniqueAnswer = allAnswer.find((answer) => {
      return answer.header === element;
    });

    allUniqueAnswer.push(uniqueAnswer);
  }

  return (
    <>
      <ClientNavSection></ClientNavSection>
      <div className="">
        <div className="container pl-md-5 pr-md-5">
          <div>
            <h3 style={{ color: "#800000" }} className="my-3">
              Your all complete assessment
            </h3>
          </div>
          <div className="mb-2">
            {allAnswer.length > 0 ? (
              <div className="row ">
                {allUniqueAnswer.map((answer) => (
                  <AllCompleteAssessment
                    answer={answer}
                    key={answer._id}
                  ></AllCompleteAssessment>
                ))}
              </div>
            ) : (
              <div style={style} className="row">
                <p className="pl-md-3 pr-md-3">
                  you have not yet taken the assessment
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

const AllCompleteAssessment = ({ answer }) => {
  return (
    <div className="col-md-12 mb-4">
      <div className="completeAssessmentCard p-1">
        <div className="row d-flex align-items-center">
          <div className="col-md-4 text-center pt-3">
            <p>{answer.header} </p>
          </div>
          <div className="col-md-4 pt-3 text-center">
            <p>{answer.date} </p>
          </div>
          <div className="col-md-4 text-center downloadPdf">
            <Link to={`/userReport/${answer.header}`}>
              <button className="btn btn-rounded">See result</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Completed;
