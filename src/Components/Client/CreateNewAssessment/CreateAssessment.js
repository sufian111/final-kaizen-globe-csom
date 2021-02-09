import React, { useState } from "react";
import { useEffect } from "react";
import AdminNavBar from "../Admin/AdminNavBar/AdminNavBar";
import CreateNewAssessment from "./CreateNewAssessment";

const CreateAssessment = () => {
  const allQuestions = [];

  const [questionHeader, setQuestionHeader] = useState("");

  const question = {
    header: questionHeader,
    questions: allQuestions,
  };

  const handleSubmit = () => {
    fetch(`https://damp-woodland-24997.herokuapp.com/setQuestion`, {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(question),
    })
      .then((res) => res.json())
      .then((data) => {
        alert("you question added");
      });
    console.log(question);
  };

  const handlePush = (question) => {
    allQuestions.push(question);
    console.log("add");
  };

  return (
    <div>
      <AdminNavBar></AdminNavBar>
      <CreateNewAssessment
        handleSubmit={handleSubmit}
        handlePush={handlePush}
        setQuestionHeader={setQuestionHeader}
      ></CreateNewAssessment>
    </div>
  );
};

export default CreateAssessment;
