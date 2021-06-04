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
        <Heading
          headingClass="font-weight-900 d-flex align-items-center justify-content-center flex-column flex-md-row"
          HeadingText={[
            "A",
            <span className="position-relative">
              <span className="px-2 underlined">FULLSTACK</span>
            </span>,
            "CV COMPANY",
          ]}
          para
          paraClass="w-70 text-center m-auto"
          paraText="We provide complete services for the companies in need to incorporate
          AI in their businesses from scratch. From data gathering to deployment
          of highly trained AI-models, Civixa.ai is the right choice"
        />
        <Row className="data-square-icon d-flex align-items-center flex-column flex-xl-row flex-lg-row w-70 m-auto">
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
        <Row className="pt-5 d-flex justify-content-lg-start justify-content-center">
          <Col xs={6} md={4}>
            <Heading
              headingClass={"data-heading text-center text-lg"}
              HeadingText={"1M+"}
              para
              paraClass={"text-center text-prussian-blue font-weight-600"}
              paraText={"Data Generated"}
            />
          </Col>
          <Col xs={6} md={4}>
            <Heading
              headingClass={"data-heading text-center text-lg"}
              HeadingText={"7.2M+"}
              para
              paraClass={"text-center text-prussian-blue font-weight-600"}
              paraText={"Images annotated"}
            />
          </Col>
          <Col xs={6} md={4}>
            <Heading
              headingClass={"data-heading text-center text-lg"}
              HeadingText={"06+"}
              para
              paraClass={"text-center text-prussian-blue font-weight-600"}
              paraText={"Deployed"}
            />
          </Col>
        </Row>
      </Col>
    </Row>
  );
}
