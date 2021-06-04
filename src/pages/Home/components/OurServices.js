import React from "react";
import { Row } from "react-bootstrap";
import ParentTab from "../../../components/CustomTabs/ParentTab";
import Heading from "../../../components/Heading";
import { ServiceCarousel } from "../../../components/ItemCarousel/ServiceCarousel";

export default function SectionTwo({ classes }) {
  let width = window.innerWidth;

  return (
    <Row className={classes}>
      <Heading
        headingClass="font-weight-900 d-flex align-items-center justify-content-center flex-column flex-md-row"
        HeadingText={[
          "Behold Our",
          <span className="position-relative">
            <span className="pl-2 underlined">Services</span>
          </span>,
        ]}
        para
        paraClass="w-50 text-center"
        paraText="Civixa.ai provides the following services. Feel free to reach us out if you need more details."
      />
      {width > 768 ? <ParentTab /> : <ServiceCarousel />}
    </Row>
  );
}
