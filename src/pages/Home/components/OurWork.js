import React from "react";
import { Col, Row } from "react-bootstrap";
import Heading from "../../../components/Heading";
import repeatGrid from "../../../images/RepeatGrid.svg";
import ourworkcar from "../../../images//home/ourworkcar.svg";
import { SideIcon } from "../../../components/SideIcon/SideIcon";
import sideicon from "../../../images/sideicon.svg";
export const OurWork = ({ classes }) => {
  return (
    <Row className={classes}>
      <Heading
        HeadingText="Our Work Speaks For Itself"
        para
        paraClass="pt-2 w-70 text-center"
        paraText="All our resources are inhouse and with our ML-assisted tools, we provide 99.99% accuracy while maintaining high-quality standards using our built-in QC workflows and tools."
      />
      <Row className="pt-4">
        <Col xs={12} md={6} className={"position-relative"}>
          <img
            src={ourworkcar}
            className={"upper-grid top"}
            alt="data-label-web"
          ></img>
          <img className={"hide-grid"} src={repeatGrid} alt="data-label-web" />
        </Col>
        <Col xs={12} md={6} className={"pt-4"}>
          <Row>
            <Col xs={6} className="pb-4">
              <SideIcon
                iconHeading="d-flex flex-column pl-2"
                icon={sideicon}
                altText="sideIcon"
                HeadingText="Score"
                headingClass="text-small mb-0"
                para
                paraText="97.02%"
                paraClass="text-xs mb-0 text-danger"
              />
            </Col>
            <Col xs={6} className="pb-4">
              <SideIcon
                iconHeading="d-flex flex-column pl-2"
                icon={sideicon}
                altText="sideIcon"
                HeadingText="Score"
                headingClass="text-small mb-0"
                para
                paraText="97.02%"
                paraClass="text-xs mb-0 text-danger"
              />
            </Col>
            <Col xs={6} className="pb-4">
              <SideIcon
                iconHeading="d-flex flex-column pl-2"
                icon={sideicon}
                altText="sideIcon"
                HeadingText="Score"
                headingClass="text-small mb-0"
                para
                paraText="97.02%"
                paraClass="text-xs mb-0 text-danger"
              />
            </Col>
            <Col xs={6} className="pb-4">
              <SideIcon
                iconHeading="d-flex flex-column pl-2"
                icon={sideicon}
                altText="sideIcon"
                HeadingText="Score"
                headingClass="text-small mb-0"
                para
                paraText="97.02%"
                paraClass="text-xs mb-0 text-danger"
              />
            </Col>
            <Col xs={6} className="pb-4">
              <SideIcon
                iconHeading="d-flex flex-column pl-2"
                icon={sideicon}
                altText="sideIcon"
                HeadingText="Score"
                headingClass="text-small mb-0"
                para
                paraText="97.02%"
                paraClass="text-xs mb-0 text-danger"
              />
            </Col>
          </Row>
        </Col>
      </Row>
      <Row className="pt-4">
        <Col xs={12} md={6} lg={4} className="pb-4">
          <SideIcon
            iconHeading="d-flex flex-column pl-2"
            icon={sideicon}
            iconClass="mb-auto"
            altText="sideIcon"
            HeadingText="Transparency"
            headingClass=""
            para
            paraText="We keep our whole process transparent for you by keeping you involved in each step."
            paraClass=""
          />
        </Col>
        <Col xs={12} md={6} lg={4} className="pb-4">
          <SideIcon
            iconHeading="d-flex flex-column pl-2"
            icon={sideicon}
            iconClass="mb-auto"
            altText="sideIcon"
            HeadingText="Excellence"
            headingClass=""
            para
            paraText="We are extremely flexible as far as the requirement of quality and annotations is concerned"
            paraClass=""
          />
        </Col>
        <Col xs={12} md={6} lg={4} className="pb-4">
          <SideIcon
            iconHeading="d-flex flex-column pl-2"
            icon={sideicon}
            iconClass="mb-auto"
            altText="sideIcon"
            HeadingText="Accuracy"
            headingClass=""
            para
            paraText="All our team is in-house and we focus on training them as per customer needs. We take pride in our accuracy that is up to 99.99%"
            paraClass=""
          />
        </Col>
      </Row>
    </Row>
  );
};
