import React from "react";
import { Col, Row } from "react-bootstrap";
import CustomCard from "../../../components/CustomCard/CustomCard";
import Accuracy from "../../../images/accuracy.png";
import manPower from "../../../images/manPower.png";
import assited from "../../../images/assisted.png";

const data = [
	{
		icon: assited,
		HeadingText: "Assisted labeling",
		paraText:
			"We provide assisted data collection, labeling and, model training with the help of our AI tools and ML algorithms. We have a rich interface of APIs for our clients to push huge volumes of data to our system and integrate results back to their systems.",
	},
	{
		icon: manPower,
		HeadingText: "50% less manpower",
		paraText:
			" Due to our intelligent AI-tools and algorithms we provide features like semi-autmoated and fully-automated annotations reducing the required manpower to 50%",
	},
	{
		icon: Accuracy,
		HeadingText: "99% accuracy",
		paraText:
			"We maintain a high level of quality standards by our AI algorithms. Once a data set is processed, it is validated by a domain expert through random sampling to weed out any imperfections, ensure consistency, and accuracy. This way, we increase efficiency by up to 99%",
	},
];

export const ServiceCard = ({ classes }) => {
	return (
		<Row className={classes}>
			<Col
				xs={12}
				sm={12}
				className="d-flex flex-wrap justify-content-center px-xs-0"
			>
				{data.map((item) => {
					return (
						<CustomCard
							CardClasses="serviceCard d-flex flex-column align-items-start justify-content-around mr-md-3 mb-4 px-3 px-md-4 py-3"
							icon={item.icon}
							iconClass="pt-4  iconWidth"
							HeadingText={item.HeadingText}
							headingClass="mt-2 serviceCardHeading"
							para
							paraText={item.paraText}
							paraClass="heightpara"
						/>
					);
				})}
			</Col>
		</Row>
	);
};
