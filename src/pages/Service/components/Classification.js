import React from "react";
import { Col, Row } from "react-bootstrap";
import Heading from "../../../components/Heading";
import copyright from "../../../images/copyright.png";
import Construction from "../../../images/construction.svg";
import tick from "../../../images/tick.svg";

import RepeatGrid from "../../../images/RepeatGrid.svg";

const data = [
	"Custom Pricing for High Volume",
	"Dedicated Account Managers",
	"24/7 Support",
	"Custom Workflows",
];

export const Classification = ({ classes }) => {
	return (
		<Row className={classes}>
			<Col xs={12} md={4} className="order-lg-last">
				<Heading
					iconBefore
					icon={Construction}
					altText=""
					headingClass="font-weight-normal mb-0 pl-2"
					HeadingText="Classification"
					para
					paraText="You can also track people not following the rules instantly on your screens using your live CCTV footage."
					paraClass="my-3"
				/>
				{data.map((item) => {
					return (
						<Heading
							iconBefore
							icon={tick}
							headingClass="text-small font-weight-normal pl-3"
							HeadingText={item}
						/>
					);
				})}
			</Col>
			<Col xs={12} md={8} className={"pt-4 order-lg-first"}>
				<img
					src={copyright}
					className={"upper-grid img-fluid"}
					alt="data-label-web"
				/>
				<img src={RepeatGrid} alt="Dots" className="topLeftDots" />
			</Col>
		</Row>
	);
};
