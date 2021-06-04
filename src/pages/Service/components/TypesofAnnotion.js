import React, { useEffect } from "react";
import { Row } from "react-bootstrap";
import ChildTab from "../../../components/CustomTabs/ChildTab";
import { ResponsiveCarousel } from "../../../components/CustomTabs/ResponsiveCarousel";

export const TypesofAnnotion = ({ classes }) => {
  let width = window.innerWidth;

  return (
    <Row className={classes}>
      {width > 992 ? <ChildTab left /> : <ResponsiveCarousel />}
    </Row>
  );
};
