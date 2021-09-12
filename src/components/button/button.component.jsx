import React from "react";

import "./button.style.scss";

const Button = ({ className: propsClassName, text, ...rest }) => (
  <a className={`custom-button ${propsClassName}`} {...rest}>
    {text}
  </a>
);

export default Button;
