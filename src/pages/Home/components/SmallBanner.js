import React from "react";
import { Col, Row } from "react-bootstrap";
import CustomButton from "../../../components/CustomButton/CustomButton";
import Heading from "../../../components/Heading";

export default function SmallBanner({ classes }) {
	return (
		<Row className={classes}>
			<Col xs={12} md={7}>
				<Heading
					headingClass="bannerheading font-weight-900 d-flex align-items-center text-white justify-content-start flex-column flex-md-row"
					HeadingText={[
						"Make",
						<span className="position-relative">
							<span className="mx-2 underlined">Civixa</span>
						</span>,
						"your competative advantage",
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
					"p-md-0 d-flex justify-content-start justify-content-md-center"
				}
			>
				<Row>
					<Col xs={12} sm={6} className="px-md-1">
						<CustomButton
							btnColor="green"
							btnClasses="text-white mr-1"
							btnText="Request Demo"
						/>
					</Col>
					<Col xs={12} sm={6} className="px-md-1">
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
