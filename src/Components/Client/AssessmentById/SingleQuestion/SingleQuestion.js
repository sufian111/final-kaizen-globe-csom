import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { useContext } from "react";
import { useParams } from "react-router-dom";
import { UserContext } from "../../../../App";
import "./SingleQuestion.css";
import picture from "../../../../Image/ability .jpg";

const SingleQuestion = () => {
  const [loggedInUser, setLoggedInUser] = useContext(UserContext);
  const { id } = useParams();
  const [count, setCount] = useState(0);

  /* fatch the data and put in store */
  const [questionsBank, setQuestionsBank] = useState([]);
  const [questionHeader, setQuestionHeader] = useState("");
  const [details, setDetails] = useState("");
  useEffect(() => {
    fetch(`https://damp-woodland-24997.herokuapp.com/questionByHeader`, {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify({ header: id }),
    })
      .then((res) => res.json())
      .then((data) => {
        if (count < data.length) {
          setQuestionHeader(data[count].questions[count].measuringIndex);
          setDetails(data[count].questions[count].description);
          setQuestionsBank(data[count].questions);
        }
      });
  }, [count]);
  const handleCount = () => {
    const newCount = count + 1;
    setCount(newCount);
  };

  return (
    <div>
      <div className="container">
        <div className="HeaderSection">
          <div className="row">
            <div className="col-md-8">
              <h2>{questionHeader}</h2>
            </div>
            <div className="col-md-4">
              <img className="w-50 image-fluid" src={picture} alt="" />
            </div>
          </div>
          <div>
            <p>{details}</p>
          </div>
        </div>
        <div className="questionSection">
          <div className="questionHeader">
            <div className="row">
              <div className="col-md-6"></div>
              <div className="col-md-1">ALWAYS</div>
              <div
                style={{ position: "relative ", right: "10px" }}
                className="col-md-1 "
              >
                MOSTLY
              </div>
              <div
                className="col-md-1"
                style={{ position: "relative ", right: "10px" }}
              >
                OFTEN
              </div>
              <div
                className="col-md-1"
                style={{ position: "relative ", right: "20px" }}
              >
                RARELY
              </div>
              <div
                style={{ position: "relative ", right: "20px" }}
                className="col-md-1"
              >
                NEVER
              </div>
            </div>
            <div></div>
          </div>

          <div className="questionDetails">
            {questionsBank.map((question /*.slice(statPoint, endPoint)*/) => (
              <Single question={question}></Single>
            ))}
          </div>
          <button
            onClick={handleCount}
            className="letsGoBtn m-5 pl-5 pr-5 pt-2 pb-2"
            type="submit"
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
};

const Single = ({ question }) => {
  return (
    <div className="row questionRow">
      <div className="col-md-6">
        <p>{question.question}</p>
      </div>
      <div className="col-md-6 ">
        <form className="d-flex" action="">
          <div className="col-md-2">
            <input type="radio" name="radio" value="ALWAYS" />
          </div>
          <div className="col-md-2">
            <input type="radio" name="radio" value="ALWAYS" />
          </div>
          <div className="col-md-2">
            <input type="radio" name="radio" value="ALWAYS" />
          </div>
          <div className="col-md-2">
            <input type="radio" name="radio" value="ALWAYS" />
          </div>
          <div className="col-md-2">
            <input type="radio" name="radio" value="ALWAYS" />
          </div>
        </form>
      </div>
    </div>
  );
};

export default SingleQuestion;
