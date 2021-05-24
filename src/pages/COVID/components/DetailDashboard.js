import React from "react";
import { Col, Row } from "react-bootstrap";
import Heading from "../../../components/Heading";
import Dashboard from "../../../images/dashboard.png";

export const DetailDashboard = ({ classes }) => {
  return (
    <Row className={classes}>
      <Col
        md={12}
        xs={12}
        className="d-flex flex-column justify-content-center"
      >
        <Heading
          HeadingText="Detailed Dashboard"
          headingClass="text-center text-uppercase font-weight-900"
        />
        <img src={Dashboard} alt="Dashboard" className="img-fluid" />
      </Col>
    </Row>
  );
};
