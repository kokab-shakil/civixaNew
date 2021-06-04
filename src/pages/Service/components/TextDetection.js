import React, { useState } from "react";
import { Col, Row } from "react-bootstrap";
import Heading from "../../../components/Heading";
import TextDetectionImage from "../../../images/TextDetection-img.png";
import Construction from "../../../images/construction.svg";
import tick from "../../../images/tick.svg";

const data = [
  {
    id: 1,
    itemText: "Custom Pricing for High Volume",
    itemImage: TextDetectionImage,
  },
  {
    id: 2,
    itemText: "Dedicated Account Managers",
    itemImage: TextDetectionImage,
  },
  {
    id: 3,
    itemText: "24/7 Support",
    itemImage: TextDetectionImage,
  },
  {
    id: 4,
    itemText: "Custom Workflows",
    itemImage: TextDetectionImage,
  },
];

export const TextDetection = ({ classes }) => {
  const [dataImage, setDataImage] = useState(TextDetectionImage);

  // const handleClick = (itemImage) => {
  //   setDataImage(itemImage);
  //   console.log(itemImage);
  // };

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
            <div
              onClick={() => {
                setDataImage(item.itemImage);
                console.log(item.id);
              }}
            >
              <Heading
                iconBefore
                icon={tick}
                headingClass="text-small font-weight-normal pl-3"
                HeadingText={item.itemText}
              />
            </div>
          );
        })}
      </Col>
      <Col xs={12} md={8} className={"pt-4"}>
        <img src={dataImage} className={"upper-grid"} alt="data-label-web" />
      </Col>
    </Row>
  );
};
