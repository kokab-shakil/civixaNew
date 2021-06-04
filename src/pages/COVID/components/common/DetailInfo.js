import React from "react";
import { Col } from "react-bootstrap";
import CustomCard from "../../../../components/CustomCard/CustomCard";

export const DetailInfo = ({ cardCol, imageCol, cardData, children }) => {
  const data = cardData;
  return (
    <>
      <Col xs={12} md={7} className={cardCol}>
        {data.map((item) => {
          return (
            <CustomCard
              CardClasses={`${item.CardClass} covidCardClass d-flex flex-column  mb-4`}
              HeadingText={item.headingText}
              headingClass={`covidCardHeading ${item.headingClass}`}
              para
              paraText={item.paraText}
              paraClass={` ${item.paraClass} `}
            />
          );
        })}
      </Col>
      <Col xs={12} md={5} className={`${imageCol} d-flex align-items-center`}>
        {children}
      </Col>
    </>
  );
};
