import React, { useRef, Fragment } from "react";
import classes from "./ConfigureTimer.module.css";
import Overlay from "./Overlay";

const ConfigureTimer = (props) => {
  const hourInputRef = useRef();
  const minInputRef = useRef();
  const secInputRef = useRef();

  const submitHandler = () => {
    props.stopConfigure();
    const hrInSeconds = hourInputRef.current.value * 60 * 60;
    const minInsSeconds = minInputRef.current.value * 60;
    const totalSeconds =
      hrInSeconds + minInsSeconds + Number(secInputRef.current.value);
    if (totalSeconds === 0 || totalSeconds > 36000) return; // Guard Clause
    console.log(totalSeconds);
    props.configureTimer(totalSeconds);
  };

  return (
    <Fragment>
      <div className={classes.modal}>
        <div>
          <h3>Select a Time</h3>
        </div>
        <div className={classes.timeSelect}>
          <div>
            <label>hours</label>
            <input
              className={classes.select}
              type="number"
              min="0"
              max="59"
              defaultValue="0"
              ref={hourInputRef}
            />
          </div>
          <div>
            <label>mins</label>
            <input
              className={classes.select}
              type="number"
              min="0"
              max="59"
              defaultValue="0"
              ref={minInputRef}
            />
          </div>
          <div>
            <label>seconds</label>
            <input
              className={classes.select}
              type="number"
              min="0"
              max="59"
              defaultValue="0"
              ref={secInputRef}
            />
          </div>
        </div>
        <div className={classes.btnDiv}>
          <button className={classes.submit} onClick={submitHandler}>
            Submit
          </button>
        </div>
      </div>
      <Overlay onClick={props.stopConfigure} />
    </Fragment>
  );
};

export default ConfigureTimer;
