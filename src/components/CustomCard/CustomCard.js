import React from "react";
import Heading from "../Heading";
import "./CustomCard.css";

export default function CustomCard({
  CardClasses,
  icon,
  iconClass,
  headingClass,
  HeadingText,
  cardalt,
  para,
  paraText,
  paraClass,
}) {
  return (
    <div className={`card ${CardClasses}`}>
      <img src={icon} className={iconClass} alt={cardalt} />
      <Heading
        headingClass={headingClass}
        HeadingText={HeadingText}
        para={para}
        paraClass={paraClass}
        paraText={paraText}
      />
    </div>
  );
}
