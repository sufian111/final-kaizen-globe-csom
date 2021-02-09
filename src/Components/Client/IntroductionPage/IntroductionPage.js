import React, { useContext, useEffect, useState } from "react";
import ClientNavSection from "../ClientNavSection/ClientNavSection";

import img from "../../../Image/Picture1.png";
import {
  Link,
  Redirect,
  useHistory,
  useLocation,
  useParams,
} from "react-router-dom";
import "./IntroductionPage.css";
import { UserContext } from "../../../App";

const IntroductionPage = (props) => {
  const [loggedInUser, setLoggedInUser] = useContext(UserContext);

  const { id } = useParams();

  let history = useHistory();
  let location = useLocation();

  const [allAnswer, setAllAnswer] = useState([]);
  const [match, setMatch] = useState(false);

  useEffect(() => {
    fetch(`https://damp-woodland-24997.herokuapp.com/answerByEmail`, {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify({ email: loggedInUser.email }),
    })
      .then((res) => res.json())
      .then((data) => {
        const name = data.map((answer) => answer.header === id);
        for (let i = 0; i < name.length; i++) {
          const element = name[i];
          if (element === true) {
            setMatch(true);
          }
        }
      });
  }, []);

  return (
    <>
      <ClientNavSection></ClientNavSection>
      <div className="container">
        <div style={{ paddingLeft: "2px" }}>
          <section className="pl-md-2 pr-md-2 ml-1 p-0">
            <div className="container" style={{ textAlign: "justify" }}>
              <h3 style={{ color: "#800000" }} className="">
                Greetings from Centre of Strategic Mindset!
              </h3>
              <p className="text-justify">
                Welcome to Empathy Index. We live in an interdependent world.
                Our thought process and actions impact others, and their conduct
                impacts us, favourably or adversely. If there is one thing that
                makes this interdependence work at its peak effectiveness, it is
                empathy. Empathy is core to ‘Problem Discovery’ and is a
                critical imperative to be considered even before contemplating
                any resolution. It takes knowledge, understanding, personal
                experiences, a compassionate mindset and most importantly a
                rigorous discipline to be empathetic.
              </p>
              <p className="mt-2">
                How do we balance our personal needs with others’ requirements,
                forms the basis of <b>EMPATHY EQUATION</b> between two
                stakeholders or among multiple ones. It is an oscillating or
                shifting balance. As long as we are able to appreciate this
                reality, and are willing to make adjustments, we can succeed in
                keeping this balance intact, and empathy equation in an
                equilibrium. The key here is our ability to empathize with
                stakeholders and situations, and its resultant dynamics. This
                will create a new understanding that can help us alter our
                approach to bring positive outcomes.
              </p>

              <p>
                <span style={{ fontWeight: "bold" }}>Empathy Index (EI)</span>{" "}
                is designed to help us evaluate, how we are doing on Empathy. Do
                we have a deeper understanding of empathy? Have we fully
                explored the true power of what empathy can do? And can we
                develop empathy in a structured manner? EI is based on five core
                dimensions as under:-
                <br />
                <div className="mt-md-2" style={{ textAlign: "left" }}>
                  <ol>
                    <li>
                      <span style={{ fontWeight: "bold" }}>
                        Ability to Relate
                      </span>
                      -Where someone is coming from
                    </li>
                    <li>
                      <span style={{ fontWeight: "bold" }}>
                        Ability to Resonate
                      </span>
                      -Finding Common Ground
                    </li>
                    <li>
                      <span style={{ fontWeight: "bold" }}>
                        Ability to Reframe
                      </span>
                      -Own Understanding
                    </li>
                    <li>
                      <span style={{ fontWeight: "bold" }}>
                        Ability to Reorient
                      </span>
                      -Approach/Stance/Position
                    </li>
                    <li>
                      <span style={{ fontWeight: "bold" }}>
                        Ability to Reimagine
                      </span>
                      -A Positive and Aspirational End Outcome
                    </li>
                  </ol>
                </div>
              </p>

              <div className="row">
                <div className="col-md-12">
                  Each dimension has eight survey statements that need to be
                  responded by recording your natural preference. Put your
                  response in the corresponding boxes, based on your top of the
                  mind recall and experiences. The survey statements are
                  behavioural in nature and show your orientation and
                  preference. There are no right and wrong answers. In nutshell,
                  the idea is to gain an understanding as to what attitudinal
                  and behavioural shifts need to manifest, to enhance our
                  Empathy Index for greater relevance as well as significance.
                </div>
              </div>
            </div>
          </section>
          <div className="text-center m-5">
            {match ? (
              <Link to={`/userReport/${id}`}>
                <button className="letsGoBtn">See result</button>
              </Link>
            ) : (
              <Link to={`/assessmentQuestion/${id}`}>
                <button className="letsGoBtn">Let's Go</button>
              </Link>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default IntroductionPage;
