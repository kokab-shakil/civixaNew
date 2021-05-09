import React from "react";

export default function Heading({
  headingClass,
  HeadingText,
  paraClass,
  paraText,
  para,
}) {
  return (
    <>
      <h1 className={`data-heading ${headingClass}`}>{HeadingText}</h1>
      {para ? <p className={paraClass}>{paraText}</p> : null}
    </>
  );
}
