import React from "react";
import { Col, Nav, Row, Tab } from "react-bootstrap";
import Typeofserviceimage from "../../../images/typeofservice.png";

export const TypeofServices = ({ classes }) => {
  return (
    <Row className={classes}>
      <Col md={12} sm={12} xs={12}>
        <Tab.Container className="serviceTab" defaultActiveKey="annotation">
          <Row className="position-relative">
            <Col sm={12} className="z-1">
              <Nav
                variant="pills"
                className="flex-row align-items-center justify-content-center mt-4 w-max mx-auto"
              >
                <Nav.Item>
                  <Nav.Link eventKey="annotation">Annotation</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="dataGeneration">Data Generation</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="aiAsService">AI as a Service</Nav.Link>
                </Nav.Item>
              </Nav>
            </Col>
            <Col sm={12} className="position-absolute">
              <Tab.Content>
                <Tab.Pane eventKey="annotation">
                  <img
                    src={Typeofserviceimage}
                    alt="Type of Service"
                    className="img-fluid"
                  />
                </Tab.Pane>
                <Tab.Pane eventKey="dataGeneration">
                  <img
                    src={Typeofserviceimage}
                    alt="Type of Service"
                    className="img-fluid"
                  />
                </Tab.Pane>
                <Tab.Pane eventKey="aiAsService">
                  <img
                    src={Typeofserviceimage}
                    alt="Type of Service"
                    className="img-fluid"
                  />
                </Tab.Pane>
              </Tab.Content>
            </Col>
          </Row>
        </Tab.Container>
      </Col>
    </Row>
  );
};
