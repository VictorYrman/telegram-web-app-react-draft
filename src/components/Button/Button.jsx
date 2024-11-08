import React from "react";
import "./Button.css";

const Button = (props) => {
  return <button {...props} className={"button " + props.classNames} />;
};

export default Button;
