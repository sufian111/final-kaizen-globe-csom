import React from "react";
import ReactStopwatch from "react-stopwatch";
import "./StopWatch.css";

const StopWatch = () => (
  <ReactStopwatch
    seconds={0}
    minutes={0}
    hours={0}
    limit="00:40:00"
    onChange={({ hours, minutes, seconds }) => {
      // do something
    }}
    render={({ formatted, hours, minutes, seconds }) => {
      return (
        // <div className="row">
        //   <div className="col-md-2">
        //     <p>Minutes: {minutes}</p>
        //   </div>
        //   <div className="col-md-2">
        //     <p>Seconds: {seconds}</p>
        //   </div>
        //   <div className="col-md-6">
        //     <p>Total Time: 40 min </p>
        //   </div>
        // </div>
        <div class="circle">
          <span style={{ fontSize: "25px" }} class="time" id="display">
            {minutes}:{seconds}
          </span>
        </div>
      );
    }}
  />
);

export default StopWatch;
