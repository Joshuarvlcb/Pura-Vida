import React from "react";
import "../css/button.css";
const STYLES = ["btn--primary", "btn--outline"];

const SIZES = ["btn--medium", "btn--large", "btn--mobile", "btn--wide"];

const COLOR = ["primary", "blue", "red", "green"];

const Button = ({
  text,
  type,
  onClick,
  buttonStyle,
  buttonSize,
  buttonColor,
}) => {
  const checkButtonSize = STYLES.includes(buttonSize) ? buttonSize : SIZES[0];
  const checkButtonStyle = STYLES.includes(buttonStyle)
    ? buttonStyle
    : STYLES[0];
  const checkButtonColor = STYLES.includes(buttonColor) ? buttonColor : null;

  return (
    <button
      className={`btn ${checkButtonStyle}
        ${checkButtonSize} ${checkButtonColor}`}
      onClick={onClick}
      type={type}
    >
      {text}
    </button>
  );
};
export default Button;
