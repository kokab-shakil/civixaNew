import React from "react";
import { Col, Row } from "react-bootstrap";
import CustomButton from "../../../components/CustomButton/CustomButton";
import CustomCard from "../../../components/CustomCard/CustomCard";
import Heading from "../../../components/Heading";
import CovidModel from "../../../images/CovidModel.svg";

export default function PreTrainedModels({ classes }) {
  return (
    <Row className={classes}>
      <Col
        xs={12}
        md={9}
        className={
          "d-flex flex-wrap justify-content-center justify-content-lg-start"
        }
      >
        <CustomCard
          icon={CovidModel}
          CardClasses={
            "d-flex flex-column align-items-center justify-content-around mr-3 mb-4 cardList"
          }
          HeadingText="COVID19 Model"
          headingClass="card-heading w-min-content text-center"
        />
        <CustomCard
          icon={CovidModel}
          CardClasses={
            "d-flex flex-column align-items-center justify-content-around mr-3 mb-4 cardList"
          }
          HeadingText="COVID19 Model"
          headingClass="card-heading w-min-content text-center"
        />
        <CustomCard
          icon={CovidModel}
          CardClasses={
            "d-flex flex-column align-items-center justify-content-around mr-3 mb-4 cardList"
          }
          HeadingText="COVID19 Model"
          headingClass="card-heading w-min-content text-center"
        />
        <CustomCard
          icon={CovidModel}
          CardClasses={
            "d-flex flex-column align-items-center justify-content-around mr-3 mb-4 cardList"
          }
          HeadingText="COVID19 Model"
          headingClass="card-heading w-min-content text-center"
        />
      </Col>
      <Col xs={12} md={3}>
        <Heading
          HeadingText="Pre-trained models"
          headingClass="font-weight-900"
          para
          paraText="We have pre developed models which you can plug in your system. Reach out to us for more details."
        />
        <CustomButton
          btnColor="green"
          btnText="Request A Demo"
          btnClasses="text-white mt-2"
        />
      </Col>
    </Row>
  );
}
