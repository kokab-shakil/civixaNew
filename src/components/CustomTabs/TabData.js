import React from "react";
import { Col, Row } from "react-bootstrap";
import CustomButton from "../CustomButton/CustomButton";
import Heading from "../Heading";
import car from "../../images/car.svg";

export default function TabData({ cardImage, headingText, paraText }) {
	return (
		<Row className={"d-flex justify-content-center m-0"}>
			<div
				className={"card p-0 d-flex flex-wrap flex-row mb-3 border-all"}
			>
				<Col xs={12} md={6} className="p-0">
					<img
						src={cardImage ? cardImage : car}
						className="w-100 image-fit border-left"
						alt="car"
					/>
				</Col>
				<Col xs={12} md={6} className="p-4">
					<Heading
						headingClass=""
						HeadingText={headingText}
						para
						paraText={paraText}
					/>
				</Col>
			</div>
			<div className="pt-4">
				<CustomButton
					btnText="Request a Demo"
					btnClasses="text-white "
					btnColor="green"
				/>
			</div>
		</Row>
	);
}
