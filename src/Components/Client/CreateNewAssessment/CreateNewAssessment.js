import React from "react";
import { useState } from "react";
import AdminNavBar from "../Admin/AdminNavBar/AdminNavBar";
import "./CreateNewAssessment.css";

const CreateNewAssessment = ({
  handlePush,
  handleSubmit,
  setQuestionHeader,
}) => {
  const [question, setQuestion] = useState({});
  const [mapNumber, setMapNumber] = useState([1]);
  const [count, setCount] = useState(1);
  const [singleQuestion, setSingleQuestion] = useState({});
  const [finalQuestion, setFinalQuestion] = useState({ ...question });
  const [done, setDone] = useState(0);

  /*------------------------------------------------------one two both handler */
  const handleFirst = () => {
    const newCount = count + 1;
    setCount(newCount);
    const newMapNumber = [...mapNumber, newCount];
    setMapNumber(newMapNumber);
  };
  const newFinalQuestion = {
    ...finalQuestion,
    ...singleQuestion,
    ...question,
  };

  const handleSeconde = () => {
    handlePush(newFinalQuestion);
  };

  const handleBoth = () => {
    handleFirst();
    handleSeconde();
  };

  /*------------------------------------------------------------------handle question input */
  const handleQuestion = (e) => {
    const newQuestion = { ...question };
    newQuestion[e.target.name] = e.target.value;
    setQuestion(newQuestion);
  };

  /*------------------------------question header */
  setQuestionHeader(question.header);
  /*set done */
  const handleDone = () => {
    setDone(1);
    handlePush(newFinalQuestion);
  };

  return (
    <div>
      <div className="container">
        <div className="new m-4">
          {/* first row */}

          <label style={{ color: "black" }} for="">
            Header
          </label>
          <input
            onChange={handleQuestion}
            type="text"
            class="form-control mb-2"
            name="header"
            placeholder="Your assessment header"
            required
          ></input>

          <label style={{ color: "black" }} for="">
            Measuring Index
          </label>
          <input
            onChange={handleQuestion}
            type="text"
            class="form-control mb-2"
            name="measuringIndex"
            placeholder="Measuring index "
            required
          ></input>

          <label style={{ color: "black" }} for="">
            Description
          </label>
          <input
            onChange={handleQuestion}
            type="text"
            class="form-control mb-2"
            name="description"
            placeholder="Description"
            required
          ></input>

          <label style={{ color: "black" }} for="">
            Total Time
          </label>
          <input
            onChange={handleQuestion}
            type="text"
            class="form-control mb-2"
            name="totalTime"
            placeholder="Total time"
            required
          ></input>
          {mapNumber.map((number) => (
            <Single
              singleQuestion={singleQuestion}
              setSingleQuestion={setSingleQuestion}
              number={number}
              count={count}
              handleQuestion={handleQuestion}
            ></Single>
          ))}
          <div>
            <button className="addMoreButton" onClick={handleBoth}>
              Add More
            </button>
            {/* <button onClick={handleConsole}>show array</button> */}
          </div>

          {done === 0 ? (
            <button onClick={handleDone} className="btn btn-dan mt-2">
              Done
            </button>
          ) : (
            <button onClick={handleSubmit} className="btn btn-success mt-2">
              Submit
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

/*---------------------------------------------------------------------------------single question part */
const Single = ({ count, number, singleQuestion, setSingleQuestion }) => {
  const stringNumber = number.toString();

  const handleQuestion = (e) => {
    const newQuestion = { ...singleQuestion, questionId: stringNumber };
    newQuestion[e.target.name] = e.target.value;
    setSingleQuestion(newQuestion);
  };

  return (
    <div>
      <label style={{ color: "black" }} for="">
        Question Serial Number
      </label>
      <input
        onChange={handleQuestion}
        type="text"
        class="form-control mb-2"
        name="questionId"
        placeholder="Question Serial Number - (1/2/3)"
        required
        defaultValue={stringNumber}
      ></input>

      <label style={{ color: "black" }} for="">
        Your Question ( you need to use ? must )
      </label>
      <input
        onChange={handleQuestion}
        type="text"
        class="form-control mb-2"
        name="question"
        placeholder="Question"
        required
      ></input>
    </div>
  );
};

export default CreateNewAssessment;
