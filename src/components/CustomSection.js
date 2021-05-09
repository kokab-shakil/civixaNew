import React from "react";
import { Col, Container, Row } from "react-bootstrap";

export default function CustomSection({ bgColor, height, classes, children }) {
  return (
    <Container
      fluid
      className={`${bgColor} ${
        height === "" ? "height-770 vh-100" : height
      } ${classes} `}
    >
      {children}
    </Container>
  );
}
