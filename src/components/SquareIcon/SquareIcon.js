import React from "react";
import { Col } from "react-bootstrap";
import "./SquareIcon.css";

export default function SquareIcon({
  Icon,
  className,
  titleOne,
  titleTwo,
  arrowAfter,
}) {
  return (
    <>
      <Col
        xs={6}
        md={4}
        className={`d-flex align-items-center justify-content-center ${
          arrowAfter ? "arrow-after flex-column flex-xl-row flex-lg-row" : ""
        }`}
      >
        <div className={"sq-icon d-flex flex-column align-items-center"}>
          <img className={className} src={Icon} alt="data-label-web" />
          <p className={"mt-2 text-center"}>{titleOne}</p>
          <p className={"lineHeight text-center"}>{titleTwo}</p>
        </div>
      </Col>
    </>
  );
}
