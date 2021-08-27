import React from "react";
import { Col, Row } from "react-bootstrap";
import Heading from "../../../components/Heading";
import repeatGrid from "../../../images/RepeatGrid.svg";
import ourworkcar from "../../../images//home/ourworkcar.svg";
import { SideIcon } from "../../../components/SideIcon/SideIcon";
import sideicon from "../../../images/sideicon.svg";

// Icons
import AccuracyIcon from "../Icons/accuracy-icon.svg";
import Confidence from "../Icons/confidence.svg";
import IncorrectGeometry from "../Icons/incorrectgemoetry.svg";
import IncorrectLabel from "../Icons/incorrectlabel.svg";
import IncorrectLabel2 from "../Icons/incorrectlabel2.svg";
import Score from "../Icons/score.svg";

import WorkAccuracy from "../Icons/work-accuracy.svg";
import Excellence from "../Icons/excellence.svg";
import Transparency from "../Icons/transparency.svg";

export const OurWork = ({ classes }) => {
	return (
		<Row className={classes}>
			<Heading
				headingClass="font-weight-900 d-flex flex-column flex-md-row align-items-center justify-content-center"
				HeadingText={[
					<span className="position-relative m-auto m-md-0">
						<span className="pr-2 underlined">Our Work</span>
					</span>,
					"Speaks For Itself",
				]}
				HeadingContainer="w-100"
				para
				paraClass="pt-2 w-70 text-center"
				paraText="All our resources are inhouse and with our ML-assisted tools, we provide 99.99% accuracy while maintaining high-quality standards using our built-in QC workflows and tools."
			/>
			<Row className="pt-4">
				<Col xs={12} md={6} className={"position-relative"}>
					<img
						src={ourworkcar}
						className={"upper-grid top img-fluid"}
						alt="data-label-web"
					></img>
					<img
						className={"hide-grid"}
						src={repeatGrid}
						alt="data-label-web"
					/>
				</Col>
				<Col
					xs={12}
					md={6}
					className={
						"d-flex align-items-center justify-content-center"
					}
				>
					<Row>
						<Col xs={6} className="pb-4">
							<SideIcon
								alignLg="align-items-lg-center"
								iconHeading="d-flex flex-column pl-2"
								icon={Score}
								altText="sideIcon"
								HeadingText="Score"
								headingClass="text-normal text-center text-lg-left font-weight-600 mb-0"
								para
								paraText="97.02%"
								paraClass="line-height-1 text-xs text-center text-lg-left font-weight-bold mb-0 text-danger"
							/>
						</Col>
						<Col xs={6} className="pb-4">
							<SideIcon
								alignLg="align-items-lg-center"
								iconHeading="d-flex flex-column pl-2"
								icon={AccuracyIcon}
								altText="sideIcon"
								HeadingText="Accuracy"
								headingClass="text-normal text-center text-lg-left font-weight-600 mb-0"
								para
								paraText="99.7%"
								paraClass="line-height-1 text-xs text-center text-lg-left font-weight-bold mb-0 text-danger"
							/>
						</Col>
						<Col xs={6} className="pb-4">
							<SideIcon
								alignLg="align-items-lg-center"
								iconHeading="d-flex flex-column pl-2"
								icon={Confidence}
								altText="sideIcon"
								HeadingText="Confidence"
								headingClass="text-normal text-center text-lg-left font-weight-600 mb-0"
								para
								paraText="93.02%"
								paraClass="line-height-1 text-xs text-center text-lg-left font-weight-bold mb-0 text-danger"
							/>
						</Col>
						<Col xs={6} className="pb-4">
							<SideIcon
								alignLg="align-items-lg-center"
								iconHeading="d-flex flex-column pl-2"
								icon={IncorrectGeometry}
								altText="sideIcon"
								HeadingText="Incorrect Geometry"
								headingClass="text-normal text-center text-lg-left font-weight-600 mb-0"
								para
								paraText="2/42"
								paraClass="line-height-1 text-xs text-center text-lg-left font-weight-bold mb-0 text-gray"
							/>
						</Col>
						<Col xs={6} className="pb-4">
							<SideIcon
								alignLg="align-items-lg-center"
								iconHeading="d-flex flex-column pl-2"
								icon={IncorrectLabel}
								altText="sideIcon"
								HeadingText="Incorrect Label"
								headingClass="text-normal text-center text-lg-left font-weight-600 mb-0"
								para
								paraText="1/42"
								paraClass="line-height-1 text-xs text-center text-lg-left font-weight-bold mb-0 text-gray"
							/>
						</Col>
						<Col xs={6} className="pb-4">
							<SideIcon
								alignLg="align-items-lg-center"
								iconHeading="d-flex flex-column pl-2"
								icon={IncorrectLabel2}
								altText="sideIcon"
								HeadingText="Incorrect Label"
								headingClass="text-normal text-center text-lg-left font-weight-600 mb-0"
								para
								paraText="41/42"
								paraClass="line-height-1 text-xs text-center text-lg-left font-weight-bold mb-0 text-gray"
							/>
						</Col>
					</Row>
				</Col>
			</Row>
			<Row className="pt-5 ">
				<Col>
					<SideIcon
						iconHeading="d-flex flex-column align-items-lg-start align-items-center pl-2"
						icon={Transparency}
						iconClass="mb-auto pb-3 pr-md-2"
						altText="sideIcon"
						HeadingText="TRANSPARENCY"
						headingClass=""
						para
						paraText="We keep our whole process transparent for you by keeping you involved in each step."
						paraClass="text-center text-lg-left"
					/>
				</Col>
				<Col>
					<SideIcon
						iconHeading="d-flex flex-column align-items-lg-start align-items-center pl-2"
						icon={WorkAccuracy}
						iconClass="mb-auto pb-3 pr-md-2"
						altText="sideIcon"
						HeadingText="ACCURACY"
						headingClass=""
						para
						paraText="All our team is in-house and we focus on training them as per customer needs. We take pride in our accuracy that is up to 99.99%"
						paraClass="text-center text-lg-left"
					/>
				</Col>
				<Col>
					<SideIcon
						iconHeading="d-flex flex-column align-items-lg-start align-items-center pl-2"
						icon={Excellence}
						iconClass="mb-auto pb-3 pr-md-2"
						altText="sideIcon"
						HeadingText="FLEXIBILITY"
						headingClass=""
						para
						paraText="We are extremely flexible as far as the file format (e.g. jpeg, png) is concerned"
						paraClass="text-center text-lg-left"
					/>
				</Col>
			</Row>
		</Row>
	);
};
