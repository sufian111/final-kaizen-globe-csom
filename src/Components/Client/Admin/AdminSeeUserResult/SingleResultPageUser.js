import React, { useContext } from "react";
import { useHistory } from "react-router-dom";
import { UserContext } from "../../../../App";

const SingleResultPageUser = ({ singleAnswer }) => {
  const [loggedInUser, setLoggedInUser] = useContext(UserContext);

  const history = useHistory();

  const handleClick = () => {
    history.push("/resonance");
  };

  return (
    <section>
      {/* <div>
          <img src={img} width="100%" alt="" /> ----------------------------- we can img in top 
        </div> */}
      <PerSingle singleAnswer={singleAnswer}></PerSingle>
      <div
        className="container border border-dark my-5"
        style={{ height: "100px" }}
      >
        <p>Key Reflections</p>
      </div>
      <div
        className="container border border-dark my-5 "
        style={{ height: "100px" }}
      >
        <p>Key Actions</p>
      </div>

      {/* <footer className="mt-5 px-5 text-muted">
          © {new Date().getFullYear()} Centre of Strategic Mindset, All Rights --------footer remove 
          Reserved
        </footer> */}
    </section>
  );
};

const PerSingle = ({ singleAnswer }) => {
  const { answer } = singleAnswer;
  return (
    <>
      <div className="container mt-5 border border-dark ">
        <div>
          <div className="row border-dark">
            <div className="col-md-12 bg-light border border-dark ">
              <span className="text-uppercase">
                <b>{singleAnswer.answer[0].measuringIndex}</b>
              </span>
              - {singleAnswer.answer[0].description}
            </div>
          </div>
          <div className="row">
            <div className="text-center text-uppercase col border border-dark ">
              Rating
            </div>
          </div>
          <div className="row text-center text-uppercase">
            <div className="col border border-dark ">Not Demonstrated</div>
            <div className="col border border-dark ">Early Awareness</div>
            <div className="col border border-dark ">Selective Application</div>
            <div className="col border border-dark ">Well-Manifested</div>
            <div className="col border border-dark ">Clear strength</div>
          </div>
          <div className="row text-center">
            <div className="col border border-dark">(ND)</div>
            <div className="col border border-dark">(EA)</div>
            <div className="col border border-dark">(SA)</div>
            <div className="col border border-dark">(WM)</div>
            <div className="col border border-dark">(CS)</div>
          </div>
          <div className="row text-center">
            <div className="col border border-dark"></div>
            <div className="col border border-dark"></div>
            <div className="col border border-dark"></div>
            <div
              className="col border border-dark "
              style={{
                width: "100px",
                height: "20px",
              }}
            ></div>
            <div className="col border border-dark"></div>
          </div>
          <div className="row bg-dark ">
            <div className="col text-center text-uppercase text-light">
              Behavioural Inputs
            </div>
          </div>
          <div className="row border border-dark ">
            <div className="col-md-6 border border-dark "></div>
            <div className="row col-md-6 text-center ">
              <div className="col border border-dark ">ND</div>
              <div className="col border border-dark ">EA</div>
              <div className="col border border-dark ">SA</div>
              <div className="col border border-dark ">WM</div>
              <div className="col ">CS</div>
            </div>
          </div>

          <div className="row">
            {answer.map((answer) => (
              <EveryQuestionWithAnswer
                answer={answer}
              ></EveryQuestionWithAnswer>
            ))}
          </div>

          <div className="row bg-dark ">
            <div style={{ width: "100px", height: "20px" }}></div>
          </div>
        </div>
      </div>
    </>
  );
};

const EveryQuestionWithAnswer = ({ answer }) => {
  const [loggedInUser, setLoggedInUser] = useContext(UserContext);

  const { question, selectedAnswer } = answer;

  const style5 = {
    backgroundColor: "#00B0F0",
  };

  const style4 = {
    backgroundColor: "#92D050",
  };

  const style3 = {
    backgroundColor: "#FFC000",
  };

  const style2 = {
    backgroundColor: "#ED7D31",
  };

  const style1 = {
    backgroundColor: "#FF0000",
  };

  return (
    <>
      <div className="col-md-6 border border-dark ">{question} </div>

      <div className="col-md-6 border border-dark ">
        <form
          className="row text-center p-1 d-flex justify-content-between"
          action=""
        >
          <div className="col-2">
            {selectedAnswer === "NEVER" ? (
              <div style={style1} className="roundBox notDemonstrated">
                <p></p>
              </div>
            ) : (
              <div className="roundBox notDemonstrated">
                <p></p>
              </div>
            )}
          </div>
          <div className="col-2">
            {selectedAnswer === "RARELY" ? (
              <div style={style2} className="roundBox earlyAwareness">
                <p></p>
              </div>
            ) : (
              <div className="roundBox earlyAwareness">
                <p></p>
              </div>
            )}
          </div>
          <div className="col-2">
            {selectedAnswer === "OFTEN" ? (
              <div style={style3} className="roundBox selectiveApplication">
                <p></p>
              </div>
            ) : (
              <div className="roundBox selectiveApplication">
                <p></p>
              </div>
            )}
          </div>
          <div className="col-2 wellManifested">
            {selectedAnswer === "MOSTLY" ? (
              <div style={style4} className="roundBox">
                <p></p>
              </div>
            ) : (
              <div className="roundBox">
                <p></p>
              </div>
            )}
          </div>
          <div className="col-2 clearStrength">
            {selectedAnswer === "ALWAYS" ? (
              <div style={style5} className="roundBox">
                <p></p>
              </div>
            ) : (
              <div className="roundBox">
                <p></p>
              </div>
            )}
          </div>
        </form>
      </div>
    </>
  );
};

export default SingleResultPageUser;
