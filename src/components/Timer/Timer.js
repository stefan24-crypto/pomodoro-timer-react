import React from "react";
import classes from "./Timer.module.css";
import ProgressBar from "react-customizable-progressbar";

const Timer = (props) => {
  const getMins = () => {
    let m = 0;
    m = Math.trunc(props.seconds / 60);
    if (m > 100) {
      m = ("00" + m).slice(-3);
    } else {
      m = ("00" + m).slice(-2);
    }
    return m;
  };
  const getSec = () => {
    let s = 0;
    s = Math.trunc(props.seconds % 60);
    s = ("00" + s).slice(-2);
    return s;
  };

  const getProgress = function () {
    let sec = props.seconds;
    if (props.seconds !== 0) {
      let totalSec = props.duration;
      let percentage = (sec / totalSec) * 100;
      return percentage;
    } else if (props.seconds === 0) {
      return 0;
    } else {
      return 100;
    }
  };
  return (
    <React.Fragment>
      <div className={classes.timer} onClick={props.toggleRunning}>
        <ProgressBar
          radius={180}
          progress={getProgress()}
          trackStrokeColor={"transparent"}
          strokeColor={"#FFBF00"}
          className={classes.progress}
        >
          <div className={classes.inside}>
            <p className={classes.time}>{`${getMins()}:${getSec()}`}</p>
            <p className={classes.state}>{props.running ? "stop" : "start"}</p>
          </div>
        </ProgressBar>
      </div>
    </React.Fragment>
  );
};

export default Timer;
