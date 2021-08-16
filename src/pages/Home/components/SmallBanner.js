import React from "react";
import { Col, Row } from "react-bootstrap";
import CustomButton from "../../../components/CustomButton/CustomButton";
import Heading from "../../../components/Heading";

export default function SmallBanner({ classes }) {
	return (
		<Row className={classes}>
			<Col xs={12} md={7}>
				<Heading
					headingClass="text-white font-weight-900 text-medium text-left"
					HeadingText={[
						<span className="position-relative">
							<span className="pr-2 underlined-bottom">
								Make Civixa
							</span>
						</span>,
						"your competitive advantage",
					]}
					para
					paraClass="text-white w-70"
					paraText="It’s easy to get started. Reachout to us and our representative will get in touch with you."
				/>
			</Col>
			<Col
				xs={12}
				md={5}
				className={
					"p-md-0 d-flex justify-content-start justify-content-md-center justify-content-lg-end"
				}
			>
				<Row>
					<Col xs={12} sm={6}>
						<CustomButton
							btnColor="green"
							btnClasses="text-white mr-2"
							btnText="Request Demo"
						/>
					</Col>
					<Col xs={12} sm={6}>
						<CustomButton
							btnColor="white"
							btnClasses="text-prussian-blue"
							btnText="Request Demo"
						/>
					</Col>
				</Row>
			</Col>
		</Row>
	);
}
