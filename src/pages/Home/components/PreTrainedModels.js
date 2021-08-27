import React from "react";
import { Col, Row } from "react-bootstrap";
import CustomButton from "../../../components/CustomButton/CustomButton";
import CustomCard from "../../../components/CustomCard/CustomCard";
import Heading from "../../../components/Heading";
import CovidModel from "../../../images/CovidModel.svg";

export default function PreTrainedModels({ classes }) {
	return (
		<Row className={classes}>
			<Col className="d-block d-md-none">
				<Heading
					HeadingText={[
						<span className="position-relative">
							<span className="pr-2 underlined">Pre-trained</span>
						</span>,
						"models",
					]}
					headingClass="font-weight-900 text-left"
					para
					paraText="We have pre developed models which you can plug in your system. Reach out to us for more details."
				/>
			</Col>
			<Col
				xs={12}
				md={9}
				className={
					"d-flex flex-wrap justify-content-center justify-content-lg-around px-md-0"
				}
			>
				<CustomCard
					icon={CovidModel}
					CardClasses={
						"d-flex flex-column align-items-center justify-content-around mr-3 mb-4 cardList"
					}
					HeadingText="COVID19 Model"
					headingClass="card-heading w-min-content text-center"
				/>
				<CustomCard
					icon={CovidModel}
					CardClasses={
						"d-flex flex-column align-items-center justify-content-around mr-3 mb-4 cardList"
					}
					HeadingText="Retail Plus"
					headingClass="card-heading w-min-content text-center"
				/>
				<CustomCard
					icon={CovidModel}
					CardClasses={
						"d-flex flex-column align-items-center justify-content-around mr-3 mb-4 cardList"
					}
					HeadingText="Autonomous Mobility"
					headingClass="card-heading w-min-content text-center"
				/>
				<CustomCard
					icon={CovidModel}
					CardClasses={
						"d-flex flex-column align-items-center justify-content-around mr-3 mb-4 cardList"
					}
					HeadingText="Sentiment Analysis"
					headingClass="card-heading w-min-content text-center"
				/>
			</Col>
			<Col className="d-block d-md-none text-center">
				<CustomButton
					btnColor="green"
					btnText="Request A Demo"
					btnClasses="text-white mt-2 mr-3"
				/>
			</Col>
			<Col
				xs={12}
				md={3}
				className="flex-column d-none d-md-flex py-md-3"
			>
				<Heading
					HeadingText={[
						<span className="position-relative">
							<span className="pr-2 underlined">Pre-trained</span>
						</span>,
						"models",
					]}
					headingClass="font-weight-900 text-left "
					para
					paraText="We have pre developed models which you can plug in your system. Reach out to us for more details."
				/>
				<CustomButton
					btnColor="green"
					btnText="Request A Demo"
					btnClasses="text-white mt-2"
				/>
			</Col>
		</Row>
	);
}
