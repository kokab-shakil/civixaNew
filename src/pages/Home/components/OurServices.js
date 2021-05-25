import React from "react";
import { Row } from "react-bootstrap";
import ParentTab from "../../../components/CustomTabs/ParentTab";
import Heading from "../../../components/Heading";

export default function SectionTwo({ classes }) {
  return (
    <Row className={classes}>
      <Heading
        headingClass="font-weight-900"
        HeadingText="Behold Our Services"
        para
        paraClass="w-50 text-center"
        paraText="Civixa.ai provides the following services. Feel free to reach us out if you need more details."
      />
      <ParentTab />
    </Row>
  );
}
