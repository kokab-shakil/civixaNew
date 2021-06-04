import React from "react";
import { Col, Row } from "react-bootstrap";
import CustomButton from "../../../components/CustomButton/CustomButton";
import Heading from "../../../components/Heading";
import HomeBannerImage from "../../../images/home/HomeBanner.png";
import Teamcore from "../../../images/home/teamcore.png";
import Forcast from "../../../images/home/Forcast.png";
import Tars from "../../../images/home/Tars.png";
import { Link } from "react-router-dom";

export default function HomeBanner({ classes }) {
  return (
    <Row className={classes}>
      <Col xs={12} md={12} lg={6} className={"z-1 py-3"}>
        <Heading
          headingClass={"text-lg font-weight-900 d-flex flex-wrap"}
          HeadingText={[
            <span className="pr-2 pr-md-4 underlined">Enabling </span>,
            "AI",
            <h1 className="text-lg font-weight-900 ml-2 ml-md-0">
              Transformation
            </h1>,
          ]}
          para
          paraClass={""}
          paraText={
            "Civixa.ai empowers organisations by providing a combination of pre-requisite services for the training of any AI-model."
          }
        />
        <Row className="d-flex">
          <Col xs={10} md={6}>
            <CustomButton
              btnSize="md"
              btnColor="green"
              btnText="GET your quote"
              btnClasses="text-white w-100"
            />
          </Col>
          <Col xs={10} md={6}>
            <div className={"px-2"}>
              <p className={"m-0"}>Start annotations with Civixa.ai</p>
              <p className="m-0 question">
                Questions?
                <Link className="question">Contact our sales team</Link>
              </p>
            </div>
          </Col>
        </Row>
        <Row className="pt-5 d-flex flex-column">
          <Col>
            <span className="text-prussian-blue">
              YOU ARE IN A LOVED COMPANY
            </span>
          </Col>
          <Col className="pt-3">
            <img src={Teamcore} alt="TeamCore" />
            <img src={Forcast} alt="Forcast" />
            <img src={Tars} alt="Tars" />
          </Col>
        </Row>
      </Col>
      <Col xs={12} md={6} className={"p-0 d-none d-lg-block"}>
        <img src={HomeBannerImage} className={"w-100 h-100"} />
      </Col>
    </Row>
  );
}
