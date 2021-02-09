import React, { useState } from "react";
import { useEffect } from "react";
import { useContext } from "react";
import { Link, useHistory } from "react-router-dom";
import { UserContext } from "../../../../App";
import pdf from "../../../../Image/Md Abu Sufian resume.pdf";
import "./UserData.css";

const UserData = ({ uniqueEmail }) => {
  const [loggedInUser, setLoggedInUser] = useContext(UserContext);
  const [allAnswer, setAllAnswer] = useState([]);

  useEffect(() => {
    fetch(`https://damp-woodland-24997.herokuapp.com/answerByEmail`, {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify({ email: uniqueEmail.email }),
    })
      .then((res) => res.json())
      .then((data) => {
        setAllAnswer(data);
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

  /*---------------------------------------------Search option ------
  const [word, setWord] = useState("");

  const handleSearchWord = (e) => {
    const newWord = e.target.value;

    setWord(newWord);
  };

  const search = () => {
    console.log(word);
    const searchWords = allUniqueAnswer.filter(
      (answer) => answer.name === word
    );
    console.log(searchWords);
    if (searchWords.length > 0) {
      for (let i = 0; i < searchWords.length; i++) {
        const element = searchWords[i];
        console.log(element);
        allUniqueAnswer.push(element);
      }
    }
  };


  ---------------------------------------------------------------------*/

  return (
    <div>
      <div>
        <div className="container">
          <div className="">
            {allAnswer.length > 0 ? (
              <div className="row">
                {allUniqueAnswer.map((answer) => (
                  <AllCompleteAssessment
                    answer={answer}
                    key={answer._id}
                  ></AllCompleteAssessment>
                ))}
              </div>
            ) : (
              <div className="row">
                <p>loading...</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

const AllCompleteAssessment = ({ answer }) => {
  const [userDetails, setUserDetails] = useState({});

  useEffect(() => {
    fetch(`https://damp-woodland-24997.herokuapp.com/userDetails`, {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify({ email: answer.email }),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.length > 0) {
          // setLoggedInUser(data[0]);
          setUserDetails(data[0]);
        }
      });
  }, []);

  const history = useHistory();

  const handleUserDetails = () => {
    console.log("userDetails");
  };

  return (
    <div className="col-md-12 mb-2">
      <div className="completeAssessmentCard p-3">
        <div className="row d-flex align-items-center">
          <div
            className="col-md-2 text-center pt-md-3 p-0"
            style={{ cursor: "pointer" }}
          >
            <Link
              style={{ textDecoration: "none", color: "white" }}
              to={`/userDetails/${answer.email}`}
            >
              <p>{answer.name} </p>
            </Link>
          </div>
          <div className="col-md-4 pt-md-3 p-0 text-center">
            <p>{answer.email} </p>
          </div>
          <div className="col-md-2 pt-md-3 p-0 text-center">
            <p>{userDetails.companyName}</p>
          </div>
          <div className="col-md-1 pt-md-3 p-0 text-center">
            <p>{answer.date} </p>
          </div>
          <div className="col-md-2 text-center downloadPdf">
            <Link to={`/report/${answer.header}+${answer.email}`}>
              <button className="ShowResultBtn">Show Result</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserData;
