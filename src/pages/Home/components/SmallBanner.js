import React from "react";
import { Col, Row } from "react-bootstrap";
import CustomButton from "../../../components/CustomButton/CustomButton";
import Heading from "../../../components/Heading";

export default function SmallBanner({ classes }) {
  return (
    <Row className={classes}>
      <Col xs={12} md={7}>
        <Heading
          headingClass="text-white"
          HeadingText="Make Civixa your competitive advantage"
          para
          paraClass="text-white"
          paraText="It’s easy to get started. Reachout to us and our representative will get in touch with you."
        />
      </Col>
      <Col xs={12} md={5} className={"p-0 d-flex justify-content-start"}>
        <CustomButton
          btnColor="green"
          btnClasses="text-white mr-2"
          btnText="Request Demo"
        />
        <CustomButton
          btnColor="white"
          btnClasses="text-prussian-blue"
          btnText="Request Demo"
        />
      </Col>
    </Row>
  );
}
