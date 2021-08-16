import React from "react";
import { Row } from "react-bootstrap";
import ParentTab from "../../../components/CustomTabs/ParentTab";
import Heading from "../../../components/Heading";
import { ServiceCarousel } from "../../../components/ItemCarousel/ServiceCarousel";
import { ServicesCarousel } from "./newcomponents/ServicesCarousel";

export default function SectionTwo({ classes }) {
	let width = window.innerWidth;

	return (
		<Row className={classes}>
			<Heading
				headingClass="font-weight-900 d-flex align-items-center justify-content-center flex-column flex-md-row padding-right-sm"
				HeadingText={[
					"Behold Our",
					<span className="position-relative">
						<span className="pl-2 underlined">Services</span>
					</span>,
				]}
				para
				paraClass="w-md-40 text-center padding-right-sm"
				paraText="Civixa.ai provides the following services. Feel free to reach us out if you need more details."
			/>
			<ServicesCarousel />
			{/* {width > 768 ? <ParentTab /> : <ServiceCarousel />} */}
		</Row>
	);
}
