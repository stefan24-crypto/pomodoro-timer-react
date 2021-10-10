import React, { useState, useEffect } from "react";
import Timer from "./components/Timer/Timer";
import classes from "./App.module.css";
import Categories from "./components/DifferentTimers/Categories";
import alarm from "./audio/Ping2.mp3";
import ConfigureTimer from "./components/ConfigureTimer/ConfigureTimer";
import more from "./settings.svg";

function App() {
  const [category, setCategory] = useState(1);
  const [timer, setTimer] = useState(1500); //-> seconds
  const [running, setRunning] = useState(false);
  const [durationForProgress, setDurationForProgress] = useState(1500);
  const [showConfigure, setShowConfigure] = useState(false);

  const changeCategory = function (cat) {
    if (cat === 1) {
      setTimer(1500);
      setDurationForProgress(1500);
    } else if (cat === 2) {
      setTimer(900);
      setDurationForProgress(900);
    } else if (cat === 3) {
      setTimer(1800);
      setDurationForProgress(1800);
    }
    setCategory(cat);
    setRunning(false);
  };

  const toggleRunning = () => {
    setRunning((prev) => !prev);
  };

  const setTimerHandler = (data) => {
    setTimer(data);
    setDurationForProgress(data);
  };

  const stopConfigure = () => {
    setShowConfigure(false);
  };

  useEffect(() => {
    let interval = null;
    if (running && timer > 0) {
      interval = setInterval(() => {
        setTimer((sec) => (sec -= 1));
      }, 1000);
    } else {
      setRunning(false);
      clearInterval(interval);
    }

    return () => clearInterval(interval);
  }, [running, timer]);

  return (
    <div className={classes.app}>
      <div className={classes.content}>
        <h2 className={classes.title}>pomodoro</h2>
        <Categories
          category={category}
          changeCategory={(cat) => changeCategory(cat)}
        />
        <Timer
          seconds={timer}
          running={running}
          toggleRunning={toggleRunning}
          duration={durationForProgress}
        />
      </div>
      <div onClick={() => setShowConfigure(true)}>
        <img src={more} className={classes.settings} />
      </div>
      {showConfigure && (
        <ConfigureTimer
          configureTimer={setTimerHandler}
          stopConfigure={stopConfigure}
        />
      )}
    </div>
  );
}

export default App;
