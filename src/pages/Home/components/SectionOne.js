import React from "react";
import { Col, Row } from "react-bootstrap";
import SquareIcon from "../../../components/SquareIcon/SquareIcon";
import dataLabelImage from "../../../images/datalabel.svg";
import group24 from "../../../images/home/group24.svg";
import group69 from "../../../images/home/group69.svg";
import group2640 from "../../../images/home/Group2640.svg";
import repeatGrid from "../../../images/RepeatGrid.svg";

export default function SectionOne({ classes }) {
  return (
    <Row className={classes}>
      <Col xs={12} md={6} className={"position-relative"}>
        <img
          src={dataLabelImage}
          className={"upper-grid top"}
          alt="data-label-web"
        ></img>
        <img className={"hide-grid"} src={repeatGrid} alt="data-label-web" />
      </Col>
      <Col xs={12} md={6} className={"pt-4"}>
        <h1 className={"data-heading"}>
          One stop shop for
          <span className={"data-heading"}>
            <h1 className={"position-relative data-heading w-auto"}>
              data labeling
              <span className={"position-absolute underlineSm"}></span>
            </h1>
          </span>
        </h1>
        <p>
          Civixa.ai empowers organisations by providing a combination of
          pre-requisite services for the training of any AI-model. Civixa.ai
          empowers organisations by providing a combination of pre-requisite
          services for the training of any AI-model.
        </p>
        <Row className="data-square-icon  d-flex justify-content-between align-items-center">
          <SquareIcon
            className={"icon-size"}
            titleOne="99%"
            titleTwo="Accurate"
            Icon={group24}
          />
          <SquareIcon
            className={"icon-size"}
            Icon={group69}
            titleOne="Premium customer"
            titleTwo="support"
          />
          <SquareIcon
            className={"icon-size"}
            Icon={group2640}
            titleOne="Assisted data"
            titleTwo="labeling"
          />
        </Row>
      </Col>
    </Row>
  );
}
