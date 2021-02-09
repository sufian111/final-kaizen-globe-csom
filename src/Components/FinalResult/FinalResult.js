import React, { useContext, useEffect, useState } from "react";
import { useHistory, useParams } from "react-router-dom";
import OneNumber from "../AllResultPage/OneNumber/OneNumber";

import PDFDownloader from "../../Components/HelperComponent/PDFDownloader";

import ResultPage from "../ResultPage/ResultPage";
import "./FinalResult.css";
import { UserContext } from "../../App";

const FinalResult = () => {
  const { id } = useParams();
  const [loggedInUser, setLoggedInUser] = useContext(UserContext);

  const history = useHistory();

  const [locationKeys, setLocationKeys] = useState([]);

  useEffect(() => {
    return history.listen((location) => {
      if (history.action === "PUSH") {
        setLocationKeys([location.key]);
      }

      if (history.action === "POP") {
        if (locationKeys[1] === location.key) {
          setLocationKeys(([_, ...keys]) => keys);

          console.log("forward");
          // Handle forward event
        } else {
          setLocationKeys((keys) => [location.key, ...keys]);

          // Handle back event

          handleLogOut();
        }
      }
    });
  }, [locationKeys]);

  const reload = () => {
    window.location.reload();
  };
  const handleLogOut = () => {
    const newUser = {
      name: "",
      email: "",
      photo: "",
      totalScore: 0,
      selectedAnswerArray: [],
    };
    setLoggedInUser(newUser);
    history.push("/login");
  };

  return (
    <div>
      <div className="container">
        <OneNumber id={id}></OneNumber>
      </div>
    </div>
  );
};

export default FinalResult;
