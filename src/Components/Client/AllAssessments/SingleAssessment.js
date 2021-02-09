import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { useContext } from "react";
import { Link, Redirect, useHistory, useLocation } from "react-router-dom";
import { UserContext } from "../../../App";
import "./SingleAssessment.css";

const SingleAssessment = ({ assessment }) => {
  const [loggedInUser, setLoggedInUser] = useContext(UserContext);

  let history = useHistory();
  let location = useLocation();

  const [allAnswer, setAllAnswer] = useState([]);
  const [match, setMatch] = useState(false);
  const [style, setStyle] = useState({
    display: "none",
  });

  useEffect(() => {
    fetch(`https://damp-woodland-24997.herokuapp.com/answerByEmail`, {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify({ email: loggedInUser.email }),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.length === 0) {
          setStyle({
            display: "block",
          });
        }
        const name = data.map((answer) => answer.header === assessment);
        for (let i = 0; i < name.length; i++) {
          const element = name[i];
          if (element === true) {
            setMatch(true);
          } else if (element === false) {
            setStyle({
              display: "block",
            });
          }
        }
      });
  }, []);

  return (
    <div className="col-md-5 ml-3 mb-3 mt-3">
      <div className="bg card border-0 mb-1 shadow">
        <div className="card-body">
          <div className="row">
            <div className="col-md-5">
              <div>
                <img
                  className="card-img-top w-100 lazy-image"
                  src="https://i.ibb.co/gvdxS71/conference-3677032-1920.jpg"
                  alt=""
                />
              </div>
            </div>
            <div className="col-md-7 text-center">
              <h5 style={{ color: "white" }} className="card-title h2 p-2">
                {assessment}{" "}
              </h5>
              <div>
                {match ? (
                  <Link to={`/userReport/${assessment}`}>
                    <button className="btn btn-rounded">See result</button>
                  </Link>
                ) : (
                  <Link style={style} to={`/assessment/${assessment}`}>
                    <button className="btn btn-rounded ">
                      Start Assessment
                    </button>
                  </Link>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleAssessment;
