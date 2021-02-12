import React, { useContext } from "react";
import { useState } from "react";
import { useEffect } from "react";
import { Link, useHistory, useParams } from "react-router-dom";
import { UserContext } from "../../../App";
import "./AssessmentQuestionSingle.css";
import picture from "../../../Image/a.jpg";
import { useRef } from "react";
import StopWatch from "./StopWatch";

/*------------------------------------------------------------------ assessment questions single */

const AssessmentQuestionSingle = () => {
  const [loggedInUser, setLoggedInUser] = useContext(UserContext);
  const [questionsBank, setQuestionsBank] = useState([]);
  const [giverAnswer, setGivenAnswer] = useState([]);
  const [questionHeader, setQuestionHeader] = useState("");
  const [details, setDetails] = useState("");
  const history = useHistory();
  const { id } = useParams();

  const allAnswer = [];

  //   start point and end point
  const [statPoint, setStatPoint] = useState(0);
  const [endPoint, setEndPoint] = useState(8);
  const [count, setCount] = useState(0);
  const [refereshed, setRefreshed] = useState(false);

  const handlePush = (answer) => {
    allAnswer.push(answer);
    if (refereshed) {
      setRefreshed(false);
    }
  };

  const handleBoth = () => {
    if ([...new Set(allAnswer.map((e) => e.questionId))].length === 8) {
      const newStartPoint = statPoint + 8;
      setStatPoint(newStartPoint);
      const newEndPoint = endPoint + 8;
      setEndPoint(newEndPoint);
      const newCount = count + 1;
      // if (count < questionsBank.length - 2) {
      //
      // }
      setCount(newCount);
      setRefreshed(true);
      let ele = document.getElementsByName("radio");
      for (let i = 0; i < ele.length; i++) ele[i].checked = false;

      handleSubmitAnswer();
    }
  };

  const handleSubmitAnswer = () => {
    if (allAnswer.length === 16) {
      const unique = allAnswer.filter(
        (answer) => answer.selectedAnswer !== undefined
      );

      fetch("https://damp-woodland-24997.herokuapp.com/addAnswer", {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify({
          email: loggedInUser.email,
          answer: unique,
          header: id,
          date: newDate,
          name: loggedInUser.name,
        }),
      })
        .then((res) => res.json())
        .then((result) => {
          alert("your answer added successfully");
        });
    } else {
      alert("please complete all the question");
    }
  };

  const handleSubmit = () => {
    if (allAnswer.length === 16) {
      const unique = allAnswer.filter(
        (answer) => answer.selectedAnswer !== undefined
      );

      fetch("https://damp-woodland-24997.herokuapp.com/addAnswer", {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify({
          email: loggedInUser.email,
          answer: unique,
          header: id,
          date: newDate,
          name: loggedInUser.name,
        }),
      })
        .then((res) => res.json())
        .then((result) => {
          alert("your answer added successfully");
          history.push(`/resultOrPdf/${id}`);
        });
    } else {
      alert("please complete all the question");
    }
  };

  useEffect(() => {
    fetch(`https://damp-woodland-24997.herokuapp.com/questionByHeader`, {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify({ header: id }),
    })
      .then((res) => res.json())
      .then((data) => {
        if (count < data.length) {
          setQuestionsBank(data[count].questions);
          setRefreshed(false);
          setQuestionHeader(data[count].questions[count].measuringIndex);
          setDetails(data[count].questions[count].description);
        }
        if (count === data.length - 1) {
          setEndPoint(101);
        }
      });
  }, [count]);

  const dateObj = new Date();
  const month = dateObj.getUTCMonth() + 1; //months from 1-12
  const day = dateObj.getUTCDate();
  const year = dateObj.getUTCFullYear();
  const newDate = year + "/" + month + "/" + day;

  return (
    <div className="container">
      <>
        <div className="">
          <div className="row taskBar">
            <div className="col-md-6 col-0"></div>
            <div className="col-md-1 col-2 mr-2">ALWAYS</div>
            <div className="col-md-1 col-2 mr-2">MOSTLY</div>
            <div className="col-md-1 ml-md-4 mr-l col-2">OFTEN</div>
            <div className="col-md-1 ml-md-1 mr-0 col-2">RARELY</div>
            <div className="col-md-1 col-2">NEVER</div>
          </div>
          <div>
            <div className="row">
              {questionsBank.map((question /*.slice(statPoint, endPoint)*/) => (
                <Single
                  handlePush={handlePush}
                  refereshed={refereshed}
                  question={question}
                ></Single>
              ))}
            </div>
          </div>
        </div>
        <div>
          <div className="text-center">
            {endPoint < 100 ? (
              <button
                onClick={handleBoth}
                className="letsGoBtn m-5 pl-5 pr-5 pt-2 pb-2"
                type="submit"
              >
                Next
              </button>
            ) : (
              <button
                onClick={handleSubmit}
                className="btn btn-success m-5 pl-5 pr-5 pt-2 pb-2"
              >
                Submit
              </button>
            )}
          </div>
        </div>
      </>
    </div>
  );
};

/*------------------------------------------------------------------ single ----*/

const Single = ({ question, handlePush, mySubmitFunction, refereshed }) => {
  const [loggedInUser, setLoggedInUser] = useContext(UserContext);
  const [count, setCount] = useState(0);
  const [answer, setAnswer] = useState({});
  const [selectionButton, setSelectionButton] = useState(0);

  useEffect(() => {
    if (refereshed && selectionButton > 0) {
      setSelectionButton(0);
      setCount(0);
    }
  });

  const handleAnswers = (e) => {
    if (count < 3) {
      const newAnswer = { ...loggedInUser, ...question };

      newAnswer["selectedAnswer"] = e.target.value;
      handlePush(newAnswer);
      handleSelectionButton();
      icreaseCount();
    } else {
      console.log("Already selected");
    }
  };

  const icreaseCount = () => {
    setCount(count + 2);
  };

  const handleSelectionButton = () => {
    setSelectionButton(selectionButton + 1);
  };

  return (
    <div className="col-12 p-2 questionRow">
      <div className="row">
        <div className="col-md-6 pt-2 d-flex align-items-center">
          <div className="ml-3 mr-3" style={{ fontWeight: "bold" }}>
            {question.questionId}
          </div>
          <div>{question.question}</div>
        </div>
        <div className="col-md-6 ">
          <form className="d-flex">
            <label onClick={handleAnswers}>
              <input type="radio" name="radio" value="ALWAYS" />
              <span>ALWAYS</span>
            </label>
            <label onClick={handleAnswers}>
              <input type="radio" name="radio" value="MOSTLY" />
              <span>MOSTLY</span>
            </label>
            <label onClick={handleAnswers}>
              <input type="radio" name="radio" value="OFTEN" />
              <span>OFTEN</span>
            </label>
            <label onClick={handleAnswers}>
              <input type="radio" name="radio" value="RARELY" />
              <span>RARELY</span>
            </label>
            <label onClick={handleAnswers}>
              <input type="radio" name="radio" value="NEVER" />
              <span>NEVER </span>
            </label>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AssessmentQuestionSingle;
