import React from "react";
import { Row } from "react-bootstrap";
import CustomButton from "../../../components/CustomButton/CustomButton";
import Heading from "../../../components/Heading";

export const PricingBanner = ({ classes }) => {
  return (
    <Row className={classes}>
      <Heading
        headingClass="text-white font-weight-900"
        HeadingText="Flexible & Transparent Pricing"
        para
        paraText="Try Civixa.ai free before deciding the plan or take pay as you go plan"
        paraClass="text-white text-center"
      >
        <CustomButton
          btnText="REQUEST DEMO"
          btnColor="green"
          btnClasses="text-white"
        />
      </Heading>
    </Row>
  );
};
