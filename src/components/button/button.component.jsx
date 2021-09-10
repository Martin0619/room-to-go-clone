import React from "react";

import "./button.style.scss";

const Button = (props) => (
  <a className="custom-button" {...props}>
    {props.text}
  </a>
);

export default Button;
