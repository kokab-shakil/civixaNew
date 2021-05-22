import React from "react";
import { Col, Row } from "react-bootstrap";
import Heading from "../../../components/Heading";
import TextDetectionImage from "../../../images/TextDetection-img.png";
import Construction from "../../../images/construction.svg";
import tick from "../../../images/tick.svg";

const data = [
  "Custom Pricing for High Volume",
  "Dedicated Account Managers",
  "24/7 Support",
  "Custom Workflows",
];

export const TextDetection = ({ classes }) => {
  return (
    <Row className={classes}>
      <Col xs={12} md={4}>
        <Heading
          iconBefore
          icon={Construction}
          altText=""
          headingClass="font-weight-normal"
          HeadingText="TEXT DETECTION"
          para
          paraText="You can also track people not following the rules instantly on your screens using your live CCTV footage."
          paraClass=""
        />
        {data.map((item) => {
          return (
            <Heading
              iconBefore
              icon={tick}
              headingClass="text-small font-weight-normal pl-3"
              HeadingText={item}
            />
          );
        })}
      </Col>
      <Col xs={12} md={8} className={"pt-4"}>
        <img
          src={TextDetectionImage}
          className={"upper-grid"}
          alt="data-label-web"
        />
      </Col>
    </Row>
  );
};
