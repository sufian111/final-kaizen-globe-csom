import React, { useContext, useEffect, useState } from "react";
import { UserContext } from "../../../../App";
import SingleResultPageUser from "./SingleResultPageUser";

const SingleUserSelectedAnswer = ({ id }) => {
  const res = id.split("+");
  const [header, email] = res;
  console.log(header, email);

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
      body: JSON.stringify({ email: email }),
    })
      .then((res) => res.json())
      .then((data) => {
        const newAllAnswer = data.filter((answer) => answer.header === header);
        setAllAnswer(newAllAnswer);
      });
  }, []);

  return (
    <>
      <div>
        {allAnswer.map((answer) => (
          <SingleResultPageUser singleAnswer={answer}></SingleResultPageUser>
        ))}
      </div>
    </>
  );
};

export default SingleUserSelectedAnswer;
