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
  sideIconClass,
  children,
}) => {
  return (
    <div
      className={`d-flex flex-column flex-lg-row align-items-lg-start align-items-center ${sideIconClass}`}
    >
      <img src={icon} alt={altText} className={iconClass} />
      <div className={iconHeading}>
        <Heading
          HeadingText={HeadingText}
          headingClass={headingClass}
          para={para}
          paraClass={paraClass}
          paraText={paraText}
        />
        {children}
      </div>
    </div>
  );
};
