import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import CustomButton from "../../../components/CustomButton/CustomButton";
import CustomCard from "../../../components/CustomCard/CustomCard";
import Heading from "../../../components/Heading";
import tick from "../../../images/tick.svg";
import useWindowSize from "../../../WindowSize";

import "./ContactDetails.css";

const data = [
	{
		headingText: "Learn How Your Business Can Use Civixa",
		paraText:
			"No memorized scripts. No generic sales pitches. Your demo is yours. We’ll share actionable advice on how you can use Sleeknote on your website. 🚀",
	},
	{
		headingText: "See Our Products in Action",
		paraText:
			"We can keep writing about how amazing our products and features are, but it’s nothing compared to seeing them in action. Let us show you how you can use Sleeknote on your site, so you can collect more emails and increase your sales with our top features. 💫",
	},
	{
		headingText: "Get Insights From Insiders",
		paraText:
			"We have 1,500+ happy customers in over 15 industries. Some of them are just like you. Learn their secrets to getting more subscribers and increasing sales day by day (and how you can, too.) 😉",
	},
];

export const ContactDetails = ({ classes }) => {
	const [width] = useWindowSize();
	return (
		<Row
			className={`${classes} position-relative justify-content-lg-start`}
		>
			<Col
				xs={12}
				md={12}
				lg={8}
				className={`bg-prussian-blue d-flex flex-column align-items-center justify-content-center padding-all img-fluid mb-md-0 mb-4 contactDetails left-0 ${
					width <= 992 && "contactusinfo"
				}`}
			>
				<Heading
					HeadingText="In 30 Minutes You Will…"
					headingClass="text-white text-center w-100"
				/>

				<Row className={`justify-content-center py-3 px-5 px-md-4 `}>
					{data.map((item) => {
						return (
							<Col
								md={7}
								xs={12}
								className="d-flex flex-nowrap align-items-start pb-3 m-auto"
							>
								<img
									src={tick}
									alt="Tick"
									className="contactIcon align-items-start pt-1"
								/>
								<div className="pl-3">
									<h3 className="data-heading text-small font-weight-normal text-white text-left">
										{item.headingText}
									</h3>
									<p className="text-white">
										{item.paraText}
									</p>
								</div>
							</Col>
						);
					})}
				</Row>
			</Col>
			<Col
				xs={12}
				md={12}
				lg={4}
				className={`contactDetails-card ${
					width <= 992 && "contactusinfo-form"
				}`}
			>
				<CustomCard
					CardClasses="px-5 padding-y my-3 contactCard "
					HeadingText="Let's meet"
					headingClass="font-weight-900 text-center"
					icon=""
					iconClass=""
					para
					paraClass="text-center text-prussian-blue"
					paraText="Enter your email address and we’ll connect you with the right person."
				>
					<input
						class="form-control form-control-lg my-4"
						type="text"
						placeholder=""
					></input>
					<CustomButton
						btnColor="prussian-blue"
						btnClasses="text-white m-auto"
						btnText="Get Started"
						// btnSize="small"
					/>
				</CustomCard>
			</Col>
			{/* <Col sm={12} md={7} className="bg-prussian-blue">
        {" "}
        Col 1
      </Col>
      <Col sm={12} md={5}>
        {" "}
        Col 1
      </Col> */}
		</Row>
	);
};
