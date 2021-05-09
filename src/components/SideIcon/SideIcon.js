import React from "react";
import Heading from "../Heading";

export const SideIcon = ({
  icon,
  altText,
  HeadingText,
  headingClass,
  para,
  paraText,
  paraClass,
  iconClass,
  iconHeading,
}) => {
  return (
    <div className="d-flex flex-row">
      <img src={icon} alt={altText} className={iconClass} />
      <div className={iconHeading}>
        <Heading
          HeadingText={HeadingText}
          headingClass={headingClass}
          para={para}
          paraClass={paraClass}
          paraText={paraText}
        />
      </div>
    </div>
  );
};
