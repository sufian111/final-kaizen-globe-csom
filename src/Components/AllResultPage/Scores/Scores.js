import React, { useContext, useState } from "react";
import { useEffect } from "react";
import { UserContext } from "../../../App";
import img from "../../../Image/table.jpg";
import "./Scores.css";

const Scores = ({ id }) => {
  const [loggedInUser, setLoggedInUser] = useContext(UserContext);
  const [totalScore, setTotalScore] = useState(0);
  const [allAnswer, setAllAnswer] = useState([]);
  const allSelectedAnswer = [];
  const [PercentageScore, setPercentageScore] = useState(0);

  const makeMapToFindScore = allAnswer.map((singleAnswer) => {
    const { answer } = singleAnswer;

    for (let i = 0; i < answer.length; i++) {
      const element = answer[i];
      allSelectedAnswer.push(element.selectedAnswer);
    }
  });

  const alwaysCount = allSelectedAnswer.filter((answer) => answer === "ALWAYS");
  const mostlyCount = allSelectedAnswer.filter((answer) => answer === "MOSTLY");
  const oftenCount = allSelectedAnswer.filter((answer) => answer === "OFTEN");
  const rarelyCount = allSelectedAnswer.filter((answer) => answer === "RARELY");
  const neverCount = allSelectedAnswer.filter((answer) => answer === "NEVER");

  const alwaysCountTotals = alwaysCount.length * 5;
  const mostlyCountTotals = mostlyCount.length * 4;
  const oftenCountTotals = oftenCount.length * 3;
  const rarelyCountTotals = rarelyCount.length * 2;
  const neverCountTotals = neverCount.length * 1;

  const newTotalScore =
    alwaysCountTotals +
    mostlyCountTotals +
    oftenCountTotals +
    rarelyCountTotals +
    neverCountTotals;

  function findOutPrecentScore(score) {
    if (score > 179) {
    } else if (score > 139 && score < 180) {
      const newPercentScore = 70;
      setPercentageScore(newPercentScore);
    } else if (score > 99 && score < 140) {
      const newPercentScore = 50;
      setPercentageScore(newPercentScore);
    } else if (score > 59 && score < 100) {
      const newPercentScore = 30;
      setPercentageScore(newPercentScore);
    } else if (score > 0 && score < 60) {
      const newPercentScore = 20;
      setPercentageScore(newPercentScore);
    }
  }

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

  const style1 = {
    backgroundColor: "#0cf50c",
    width: `${newTotalScore / 2}%`,
    textAlign: "right",
  };
  const style2 = {
    backgroundColor: "#0cf50c",
    width: `${newTotalScore / 2}%`,
    textAlign: "right",
  };

  return (
    <section>
      <div className="container pl-5 pr-5">
        <h3>Overall Empathy index – Interpretation of Scores</h3>
        <div>
          <div className="Index ">
            <div className="row ">
              <div className="col-md-12 textBg text-center boxForEmpathyIndex">
                <h3>OVERALL EMPATHY INDEX</h3>
              </div>
            </div>
            <div className="row d-flex align-items-center">
              <div className="col-md-3 textBg boxForEmpathyIndex">
                <p>Absolute Score Scale</p>
              </div>
              <div className="col-md-9">
                <div>
                  <div className="row ml-1">
                    <div className="col-md-2 text-center boxForEmpathyIndex">
                      0
                    </div>
                    <div className="col-md-2 text-center boxForEmpathyIndex">
                      40
                    </div>
                    <div className="col-md-2 text-center boxForEmpathyIndex">
                      80
                    </div>
                    <div className="col-md-2 text-center boxForEmpathyIndex">
                      120
                    </div>
                    <div className="col-md-2 text-center boxForEmpathyIndex">
                      160
                    </div>
                    <div className="col-md-2 text-center boxForEmpathyIndex">
                      200
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="row boxForEmpathy d-flex align-items-center">
              <div className="col-md-3 textBg boxForEmpathyIndex">
                <p>Absolute Score Scale</p>
              </div>

              <div className="col-md-9">
                <div className="row ml-1">
                  <div style={style1}>
                    <h5 className="text-white"> {newTotalScore} </h5>
                  </div>
                </div>
              </div>
            </div>
            <div className="row boxForEmpathy d-flex align-items-center">
              <div className="col-md-3 textBg boxForEmpathyIndex">
                <p>Percentage Score Scale</p>
              </div>
              <div className="col-md-9">
                <div>
                  <div className="row ml-1">
                    <div className="col-md-2 text-center boxForEmpathyIndex">
                      0
                    </div>
                    <div className="col-md-2 text-center boxForEmpathyIndex">
                      20
                    </div>
                    <div className="col-md-2 text-center boxForEmpathyIndex">
                      40
                    </div>
                    <div className="col-md-2 text-center boxForEmpathyIndex">
                      60
                    </div>
                    <div className="col-md-2 text-center boxForEmpathyIndex">
                      80
                    </div>
                    <div className="col-md-2 text-center boxForEmpathyIndex">
                      100
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="row boxForEmpathy d-flex align-items-center">
              <div className="col-md-3 textBg boxForEmpathyIndex">
                <p>Percentage Earned Score</p>
              </div>
              <div className="col-md-9">
                <div>
                  <div className="row ml-1">
                    <div style={style2}>
                      <h5 className=" text-white">{newTotalScore / 2} %</h5>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div style={{fontSize : '14px', marginTop : '20px'}}>
          <p>
            Please read following guidelines to make sense of your scores and
            devise your measures to enhance your empathy index.{" "}
          </p>
          <p style={{ fontWeight: "bold" }}>
            You have got a score of{" "}
            <span className="text-info">
              {newTotalScore}/ {allSelectedAnswer.length * 5}
            </span>{" "}
            as a combined total of EMPATHIC INDEX.
          </p>
          <p>Let us understand what this score means for</p>
          <div className="">
            <p>
              <span className="text-info " style={{ fontWeight: "bold", fontSize : '16px' }}>
                180-200 (90% to 100%)
              </span>{" "}
              <span style={{ fontWeight: "bold" }}>: Level 5 =</span> You
              understand, embody, and exemplify empathy, exceptionally well. You
              have the wherewithal to ‘role-model’ empathy in your context and
              be a champion. Keep up the good work but be wary of the empathy
              fatigue and its potential overuse, by actively asking this
              question, “Is there something getting overlooked or ignored in the
              garb of empathy”?
            </p>
          </div>
          <div className="">
            <p>
              <span className="text-info" style={{ fontWeight: "bold", fontSize : '16px' }}>
                140-179 (70% to 89%)
              </span>{" "}
              <span style={{ fontWeight: "bold" }}>: Level 4 =</span> You often
              understand and demonstrate empathic concern at a cognitive as well
              as emotional level but will do well to enhance your effectiveness
              by identifying opportunities for real application.{" "}
            </p>
          </div>
          <div className="">
            <p>
              {" "}
              <span className="text-info" style={{ fontWeight: "bold", fontSize : '16px' }}>
                100-139 (50% to 69%){" "}
              </span>{" "}
              <span style={{ fontWeight: "bold" }}> : Level 3 =</span> You show
              selective evidence of understanding and practising empathy, but
              your record is sporadic, and consistency is missing. Having
              understood the power of empathy, you will do well to increase your
              attempts of applying empathy and creating a positive lasting
              residue.{" "}
            </p>
          </div>
          <div className="">
            <p>
              <span className="text-info" style={{ fontWeight: "bold", fontSize : '16px' }}>
                60-99 (30% to 49%)
              </span>{" "}
              <span style={{ fontWeight: "bold" }}>: Level 2 =</span> There is
              little evidence to suggest that your tryst with empathy has begun,
              yet. It may be a good idea to explore, if there are any
              contradictions in your mind as regards the understanding as well
              as the potential of empathy, as an instrument of transformation
              and impact.
            </p>
          </div>
          <div className="">
            <p>
              <span className="text-info" style={{ fontWeight: "bold", fontSize : '16px' }}>
                01-59 (0% to 30%)
              </span>{" "}
              <span style={{ fontWeight: "bold" }}>: Level 1 =</span> Your
              scores suggest a huge gap in understanding empathy and a missing
              opportunity in appreciating its impact on the people that you lead
              or may lead in future, in a given context. The sooner you begin
              this journey, the better you will get at the game of leading.{" "}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Scores;
