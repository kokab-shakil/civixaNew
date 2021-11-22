import React from "react";
import { Row } from "react-bootstrap";
import ParentTab from "../../../components/CustomTabs/ParentTab";
import Heading from "../../../components/Heading";
import { ServiceCarousel } from "../../../components/ItemCarousel/ServiceCarousel";
import { ServicesCarousel } from "./newcomponents/ServicesCarousel";

export default function SectionTwo({ classes }) {
	return (
		<Row className={classes}>
			<Heading
				headingClass="font-weight-900 xs-fontSize-boldHeading d-flex align-items-center justify-content-center  flex-md-row "
				HeadingText={[
					"Behold Our",
					<span className="position-relative">
						<span className="pl-2 underlined">Services</span>
					</span>,
				]}
				para
				paraClass="w-lg-80 text-center "
				paraText="Civixa.ai provides the following services. Feel free to reach out if you need more details.
New: Your model’s annotation needs can be different according to the requirements of your business. Here are the services Civixa has to offer inorder to annotate your dataset.
"
			/>
			<ServicesCarousel />
			{/* {width > 768 ? <ParentTab /> : <ServiceCarousel />} */}
		</Row>
	);
}
