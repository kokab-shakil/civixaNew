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
      className={`text-uppercase font-weight-bold px-5 btnSize  ${btnClasses}`}
      onClick={handlebtn}
    >
      {btnText}
    </Button>
  );
}
