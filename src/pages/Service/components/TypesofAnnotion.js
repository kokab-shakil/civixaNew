import React from "react";
import { Row } from "react-bootstrap";
import ChildTab from "../../../components/CustomTabs/ChildTab";

export const TypesofAnnotion = ({ classes }) => {
  return (
    <Row className={classes}>
      <ChildTab left />
    </Row>
  );
};
