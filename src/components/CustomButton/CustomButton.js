import React from "react";
import { Button } from "react-bootstrap";
import "./CustomButton.css";

export default function CustomButton({
  btnColor,
  btnSize,
  btnText,
  btnClasses,
  handlebtn,
}) {
  return (
    <Button
      variant={btnColor}
      size={btnSize}
      className={`customButton text-uppercase font-weight-900 px-5 btnSize box-shadow-2 mb-2 ${btnClasses}`}
      onClick={handlebtn}
    >
      {btnText}
    </Button>
  );
}