import React, { useContext, useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import img from "../../../src/Image/Picture1.png";
import { UserContext } from "../../App";
import ClientNavSection from "../Client/ClientNavSection/ClientNavSection";
import "./ResultPage.css";
import SingleResultPage from "./SingleResultPage";

const ResultPage = ({ id }) => {
  const [loggedInUser, setLoggedInUser] = useContext(UserContext);
  const [count, setCount] = useState(0);
  const [startPoint, setStatPoint] = useState(0);
  const [endPoint, setEndPoint] = useState(1);

  const handleBothCount = () => {
    console.log(startPoint, endPoint);
  };

  const [allAnswer, setAllAnswer] = useState([]);

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
    <>
      <div>
        {allAnswer.map((answer) => (
          <SingleResultPage singleAnswer={answer}></SingleResultPage>
        ))}
      </div>
    </>
  );
};

export default ResultPage;
