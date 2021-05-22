import React from "react";
import { Col, Row } from "react-bootstrap";
import CustomButton from "../../../components/CustomButton/CustomButton";
import Heading from "../../../components/Heading";
import tool from "../../../images/tool.png";

export const ServiceBanner = ({ classes }) => {
  return (
    <Row className={classes}>
      <Col md={4} sm={6} xs={12}>
        <img src={tool} alt="Tool" />
      </Col>
      <Col md={8} sm={6} xs={12}>
        <Heading
          headingClass="text-green text-lg font-weight-bold"
          HeadingText="Annotations"
          para
          paraClass="text-white"
          paraText="One platform for all sort of annotation"
          topHeading
          topHeadingText="CIVIXA"
          topHeadingClass="text-green-dark top-heading-bottom"
        >
          <div>
            <CustomButton
              btnClasses="text-white"
              btnColor="green"
              btnText="REQUEST DEMO"
            />
            <CustomButton
              btnClasses="text-prussian-blue"
              btnColor="white service-banner-button"
              btnText="REQUEST DEMO"
            />
          </div>
        </Heading>
      </Col>
    </Row>
  );
};
