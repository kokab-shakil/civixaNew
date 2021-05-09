import React from "react";
import { Col, Row } from "react-bootstrap";
import Heading from "../../../components/Heading";
import SquareIcon from "../../../components/SquareIcon/SquareIcon";
import CivixaAi from "../../../images/home/CivixaAi.svg";
import Engineers from "../../../images/home/Engineers.svg";
import RawData from "../../../images/home/RawData.svg";

export default function SectionFour({ classes }) {
  return (
    <Row className={classes}>
      <Col>
        <h1 className={"data-heading text-center"}>A FULLSTACK CV COMPANY</h1>
        <p className={"text-center"}>
          We provide complete services for the companies in need to incorporate
          AI in their businesses from scratch. From data gathering to deployment
          of highly trained AI-models, Civixa.ai is the right choice
        </p>
        <Row className="data-square-icon d-flex align-items-center flex-column flex-xl-row flex-lg-row">
          <SquareIcon
            className={"icon-size"}
            titleOne="Raw Data"
            Icon={RawData}
            arrowAfter
          />
          <SquareIcon
            className={"icon-size"}
            titleOne="Civixa.ai"
            Icon={CivixaAi}
            arrowAfter
          />
          <SquareIcon
            className={"icon-size"}
            titleOne="Annotated Data"
            Icon={Engineers}
          />
        </Row>
        <Row>
          <Col xs={6} md={4}>
            <Heading
              headingClass={"data-heading text-center text-lg"}
              HeadingText={"2.2M"}
              para
              paraClass={"text-center"}
              paraText={"Images annotated"}
            />
          </Col>
          <Col xs={6} md={4}>
            <Heading
              headingClass={"data-heading text-center text-lg"}
              HeadingText={"250+"}
              para
              paraClass={"text-center"}
              paraText={"Expert labelers"}
            />
          </Col>
          <Col xs={6} md={4}>
            <Heading
              headingClass={"data-heading text-center text-lg"}
              HeadingText={"07"}
              para
              paraClass={"text-center"}
              paraText={"Engineers"}
            />
          </Col>
        </Row>
      </Col>
    </Row>
  );
}
