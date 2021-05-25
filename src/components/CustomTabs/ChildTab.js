import React from "react";
import { Col, Nav, Row, Tab } from "react-bootstrap";
import classification from "./TabIcons/classification.svg";
import box from "./TabIcons/box.svg";
import cuboid from "./TabIcons/Cuboid.svg";
import point from "./TabIcons/point.svg";
import polygons from "./TabIcons/Polygons.svg";
import polylines from "./TabIcons/polylines.svg";
import segmentation from "./TabIcons/segmentation.svg";
import transcription from "./TabIcons/Transcription.svg";
import TabData from "./TabData";
import Heading from "../Heading";

export default function ChildTab({ left }) {
  return (
    <Tab.Container id="Tabs" defaultActiveKey="classification">
      <Row
        className={`childTab d-flex justify-content-center ${left && "left"}`}
      >
        <Col sm={12} md={left ? 3 : "auto"} className="d-flex flex-column">
          {left && (
            <Heading
              HeadingText="Types Of Annotation"
              headingClass="text-small font-weight-bold"
            />
          )}
          <Nav
            variant="pills"
            className={`d-flex justify-content-center mb-2 ${
              left && "flex-row flex-lg-column w-max"
            }`}
          >
            <Nav.Item>
              <Nav.Link eventKey="classification">
                <img
                  src={classification}
                  alt="Classification"
                  className={"tabIcon pr-2"}
                />
                Classification
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey="polylines">
                <img
                  src={polylines}
                  alt="Polylines"
                  className={"tabIcon pr-2"}
                />
                Polylines
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey="points">
                <img src={point} alt="Point" className={"tabIcon pr-2"} />
                Point
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey="boundingbox">
                <img src={box} alt="bondingbox" className={"tabIcon pr-2"} />
                Bounding Box
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey="cuboid">
                <img src={cuboid} alt="Cuboid" className={"tabIcon pr-2"} />
                Cuboid
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey="polygons">
                <img src={polygons} alt="Polygons" className={"tabIcon pr-2"} />
                Polyons
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey="transcription">
                <img
                  src={transcription}
                  alt="Transcription"
                  className={"tabIcon pr-2"}
                />
                Transcription
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey="segmentation">
                <img
                  src={segmentation}
                  alt="Segmentation"
                  className={"tabIcon pr-2"}
                />
                Segmentation
              </Nav.Link>
            </Nav.Item>
          </Nav>
        </Col>
        <Col sm={8} md={left ? 9 : 8} className="pt-5">
          <Tab.Content>
            <Tab.Pane eventKey="classification">
              <TabData />
            </Tab.Pane>
            <Tab.Pane eventKey="polylines">
              <TabData />
            </Tab.Pane>
            <Tab.Pane eventKey="points">
              <TabData />
            </Tab.Pane>
            <Tab.Pane eventKey="boundingbox">
              <TabData />
            </Tab.Pane>
            <Tab.Pane eventKey="cuboid">
              <TabData />
            </Tab.Pane>
            <Tab.Pane eventKey="polygons">
              <TabData />
            </Tab.Pane>
            <Tab.Pane eventKey="transcription">
              <TabData />
            </Tab.Pane>
            <Tab.Pane eventKey="segmentation">
              <TabData />
            </Tab.Pane>
          </Tab.Content>
        </Col>
      </Row>
    </Tab.Container>
  );
}
