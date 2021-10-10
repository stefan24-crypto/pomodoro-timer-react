import React from "react";
import classes from "./Categories.module.css";

const Categories = (props) => {
  return (
    <div className={classes.categories}>
      <div
        className={
          props.category === 1
            ? `${classes.category} ${classes.selected}`
            : classes.category
        }
        onClick={() => props.changeCategory(1)}
      >
        <p>pomodoro</p>
      </div>
      <div
        className={
          props.category === 2
            ? `${classes.category} ${classes.selected}`
            : classes.category
        }
        onClick={() => props.changeCategory(2)}
      >
        <p>short-break</p>
      </div>
      <div
        className={
          props.category === 3
            ? `${classes.category} ${classes.selected}`
            : classes.category
        }
        onClick={() => props.changeCategory(3)}
      >
        <p>long-break</p>
      </div>
    </div>
  );
};

export default Categories;
