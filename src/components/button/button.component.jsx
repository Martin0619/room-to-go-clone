import React from "react";

import "./button.style.scss";

const Button = (props) => {
  const { className: propsClassName, ...rest } = props;
  return (
    <a className={`custom-button ${propsClassName}`} {...rest}>
      {props.text}
    </a>
  );
};

export default Button;
