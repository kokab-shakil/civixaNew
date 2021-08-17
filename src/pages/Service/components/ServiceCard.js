import React from "react";
import { Col, Row } from "react-bootstrap";
import CustomCard from "../../../components/CustomCard/CustomCard";
import Accuracy from "../../../images/accuracy.svg";

const data = [
	{
		HeadingText: "Assisted labeling",
		paraText:
			"We provide assisted data collection, labeling and, model training with the help of our AI tools and ML algorithms. We have a rich interface of APIs for our clients to push huge volumes of data to our system and integrate results back to their systems.",
	},
	{
		HeadingText: "50% less manpower",
		paraText:
			"We provide assisted data collection, labeling and, model training with the help of our AI tools and ML algorithms. We have a rich interface of APIs for our clients to push huge volumes of data to our system and integrate results back to their systems.",
	},
	{
		HeadingText: "99% accuracy",
		paraText:
			"We provide assisted data collection, labeling and, model training with the help of our AI tools and ML algorithms. We have a rich interface of APIs for our clients to push huge volumes of data to our system and integrate results back to their systems.",
	},
];

export const ServiceCard = ({ classes }) => {
	return (
		<Row className={classes}>
			<Col
				xs={12}
				sm={12}
				className="d-flex flex-wrap justify-content-center"
			>
				{data.map((item) => {
					return (
						<CustomCard
							CardClasses="serviceCard d-flex flex-column align-items-start justify-content-around mr-3 mb-4 px-4 py-3"
							icon={Accuracy}
							iconClass="pt-4"
							HeadingText={item.HeadingText}
							headingClass="mt-2 serviceCardHeading"
							para
							paraText={item.paraText}
							paraClass=""
						/>
					);
				})}
			</Col>
		</Row>
	);
};
