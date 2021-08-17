import React from "react";
import { Button } from "react-bootstrap";
import "./CustomButton.css";

export default function CustomButton({
	btnColor,
	btnSize,
	btnText,
	btnClasses,
	handlebtn,
	marginBottom,
}) {
	return (
		<Button
			variant={btnColor}
			size={`${btnSize ? btnSize : "small"}`}
			className={`customButton text-uppercase font-weight-900 btnSize box-shadow-2 ${
				marginBottom ? marginBottom : "mb-2"
			} btn-lg px-4 px-lg-5 ${btnClasses}`}
			onClick={handlebtn}
		>
			{btnText}
		</Button>
	);
}
