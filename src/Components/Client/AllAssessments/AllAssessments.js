import React, { useContext } from "react";
import { useState } from "react";
import { useEffect } from "react";
import { Redirect, useHistory, useLocation } from "react-router-dom";
import { UserContext } from "../../../App";
import { assessmentsAll } from "../../../FakeData/AllAssessments";
import "./AllAssessments.css";
import SingleAssessment from "./SingleAssessment";

const AllAssessments = () => {
  const [loggedInUser, setLoggedInUser] = useContext(UserContext);
  const [allAssessmentQuestions, setAllAssessmentQuestions] = useState([]);

  useEffect(() => {
    fetch(`https://damp-woodland-24997.herokuapp.com/userDetails`, {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify({ email: loggedInUser.email }),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.length > 0) {
          setLoggedInUser(data[0]);
        }
      });
  }, []);

  useEffect(() => {
    fetch("https://damp-woodland-24997.herokuapp.com/question")
      .then((res) => res.json())
      .then((data) => {
        setAllAssessmentQuestions(data);
      });
  }, []);

  // /*all header are push into a array */

  const allHeader = [];
  const allKyes = allAssessmentQuestions.map((question) => {
    allHeader.push(question.header);
  });

  const useFilter = (arr) => {
    return arr.filter((value, index, self) => {
      return self.indexOf(value) === index;
    });
  };

  const unique = useFilter(allHeader);
  let history = useHistory();
  let location = useLocation();

  return (
    <>
      {loggedInUser.companyName &&
      loggedInUser.name &&
      loggedInUser.position &&
      loggedInUser.Industry &&
      loggedInUser.gender &&
      loggedInUser.leaders ? (
        <div className="allAssessments container">
          <div className="mt-3 text-center">
            <h3 className="hello">Welcome to COSM Assessment Portal</h3>
          </div>
          {allAssessmentQuestions.length > 0 ? (
            <div className="row d-flex justify-content-between ">
              {unique.map((assessment) => (
                <SingleAssessment
                  key={assessment.id}
                  assessment={assessment}
                ></SingleAssessment>
              ))}
            </div>
          ) : (
            <div className="row d-flex justify-content-between ">
              <p> loading...</p>
            </div>
          )}
        </div>
      ) : (
        <Redirect
          onClick={() => {
            alert("Please complete your profile");
          }}
          to={{
            pathname: "/myProfile",
            state: { from: location },
          }}
        ></Redirect>
      )}
    </>
  );
};

export default AllAssessments;
