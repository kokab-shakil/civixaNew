import React from "react";
import CustomSection from "../../components/CustomSection";
import { CovidBanner } from "./components/CovidBanner";
import "./Covid.css";

export const Covid = () => {
  const commonClasses = "d-flex justify-content-center h-100";
  return (
    <>
      <CustomSection
        height="h-auto header-margin"
        bgColor="bg-prussian-blue"
        classes={"h-768"}
      >
        <CovidBanner classes={`${commonClasses} m-0 padding-all pb-0`} />
      </CustomSection>
    </>
  );
};
