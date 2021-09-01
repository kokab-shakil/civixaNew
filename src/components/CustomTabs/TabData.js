import React from "react";
import { Col, Row } from "react-bootstrap";
import CustomButton from "../CustomButton/CustomButton";
import Heading from "../Heading";
import car from "../../images/car.svg";
import "./TabData.css";

export default function TabData({
	cardImage,
	headingText,
	paraText,
	cardClass,
	twoButton,
}) {
	return (
		<Row className={"d-flex justify-content-center m-0"}>
			<div
				className={`card p-0 d-flex flex-wrap flex-row mb-3 ${
					cardClass && cardClass
				}`}
			>
				<Col xs={12} md={6} className="p-0">
					<img
						src={cardImage ? cardImage : car}
						className="w-100 image-fit"
						alt="car"
					/>
				</Col>
				<Col xs={12} md={6} className="tab-data-content-container">
					<Heading
						subHeading
						headingClass="sub-heading"
						HeadingText={headingText}
						para
						paraText={paraText}
					/>
				</Col>
			</div>
			<div className="pt-4 text-center">
				<CustomButton
					btnText="Request a Demo"
					btnClasses="text-white mr-3"
					btnColor="green"
				/>
				{twoButton && (
					<CustomButton
						btnSize="medium"
						btnText="Get A Quote"
						btnClasses="text-prussian-blue mr-3 service-carousel-button"
						btnColor="white"
					/>
				)}
			</div>
		</Row>
	);
}
