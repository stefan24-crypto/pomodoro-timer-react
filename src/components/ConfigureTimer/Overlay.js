import React from "react";
import classes from "./Overlay.module.css";

const Overlay = (props) => {
  return <div className={classes.backdrop} onClick={props.onClick}></div>;
};

export default Overlay;
