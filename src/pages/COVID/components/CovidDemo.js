import React from "react";
import { Col, Nav, Row, Tab } from "react-bootstrap";
import Heading from "../../../components/Heading";
import { CovidCarrousel } from "./common/CovidCarrousel";
import { CovidDemoCarousel } from "./common/CovidDemoCarousel";

export const CovidDemo = ({ classes }) => {
	return (
		<Row className={classes}>
			<Col xs={12} md={12}>
				<Heading
					HeadingText="VIEW DEMO"
					headingClass="text-center"
					para
					paraText="Protect your workers so you can maintain business operations"
					paraClass="text-center"
				/>
			</Col>
			<Col xs={12} md={12} className="covidTab">
				<CovidDemoCarousel />
				{/* <Tab.Container defaultActiveKey="socialdistance">
					<Row>
						<Col sm={12} className="z-1">
							<Nav
								variant="pills"
								className="flex-row align-items-center justify-content-center mt-4 w-max mx-auto"
							>
								<Nav.Item>
									<Nav.Link eventKey="socialdistance">
										Social Distance
									</Nav.Link>
								</Nav.Item>
								<Nav.Item>
									<Nav.Link eventKey="maskdetection">
										Mask Detection
									</Nav.Link>
								</Nav.Item>
							</Nav>
						</Col>
						<Col sm={12}>
							<Tab.Content>
								<Tab.Pane
									eventKey="socialdistance"
									className="pt-4 covidcarousel"
								>
									<CovidCarrousel />
								</Tab.Pane>
								<Tab.Pane
									eventKey="maskdetection"
									className="pt-4 covidcarousel"
								>
									<CovidCarrousel />
								</Tab.Pane>
							</Tab.Content>
						</Col>
					</Row>
				</Tab.Container> */}
			</Col>
		</Row>
	);
};
