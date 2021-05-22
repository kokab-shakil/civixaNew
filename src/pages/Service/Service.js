import React from "react";
import Banner from "../../components/Banner";
import CustomSection from "../../components/CustomSection";
import { Classification } from "./components/Classification";
import { ServiceBanner } from "./components/ServiceBanner";
import { ServiceCard } from "./components/ServiceCard";
import { SmallBanner } from "./components/SmallBanner";
import { TextDetection } from "./components/TextDetection";
import { TypeofServices } from "./components/TypeofServices";
import { TypesofAnnotion } from "./components/TypesofAnnotion";
import "./Service.css";

export default function Service() {
  const commonClasses =
    "d-flex align-items-center justify-content-center h-100";
  return (
    <>
      <CustomSection
        height="h-auto header-margin"
        bgColor="bg-prussian-blue"
        classes="h-768"
      >
        <ServiceBanner classes={`${commonClasses} padding-all`} />
      </CustomSection>
      {/* <CustomSection height="h-auto" bgColor="bg-white">
        <TypesofAnnotion classes={`${commonClasses} padding-all`} />
      </CustomSection> */}
      <CustomSection height="h-auto" bgColor="bg-lightgray">
        <SmallBanner classes={`${commonClasses} padding-all`} />
      </CustomSection>
      <CustomSection height="h-768" bgColor="bg-white" classes="typeofservices">
        <TypeofServices classes={`${commonClasses} padding-all`} />
      </CustomSection>
      <CustomSection height="h-auto" bgColor="bg-white">
        <ServiceCard classes={`${commonClasses} padding-all`} />
      </CustomSection>
      <CustomSection height="h-auto" bgColor="bg-white">
        <TextDetection classes={`${commonClasses} padding-all`} />
      </CustomSection>
      <CustomSection height="h-auto" bgColor="bg-white">
        <Classification classes={`${commonClasses} padding-all`} />
      </CustomSection>
      <CustomSection height="h-auto" bgColor="bg-white">
        <TextDetection classes={`${commonClasses} padding-all`} />
      </CustomSection>
    </>
  );
}
