import React from "react";
import Banner from "../../components/Banner";
import CustomSection from "../../components/CustomSection";
import HomeBanner from "./components/HomeBanner";
import PreTrainedModels from "./components/PreTrainedModels";
import SectionFour from "./components/SectionFour";
import SectionOne from "./components/SectionOne";
import SmallBanner from "./components/SmallBanner";
import OurServices from "./components/OurServices";
import { OurWork } from "./components/OurWork";
import { HappyClient } from "./components/HappyClient";
import "./Home.css";
import useWindowSize from "../../WindowSize";

export default function Home({ handleHeaderColor }) {
  const [width] = useWindowSize();

  handleHeaderColor("prussian-blue");
  const commonClasses =
    "d-flex align-items-center justify-content-center h-100";
  return (
    <>
      <CustomSection height="h-auto " bgColor="white" classes={"p-0"}>
        <HomeBanner classes={`${commonClasses} m-0 padding-left pb-0`} />
      </CustomSection>
      <CustomSection height="min-full-height" bgColor="bg-grayish" classes={""}>
        <SectionOne classes={`${commonClasses} padding-all`} />
      </CustomSection>
      <CustomSection height="h-auto" bgColor="white" classes="">
        <OurServices
          classes={`${commonClasses} padding-all flex-wrap flex-column`}
        />
      </CustomSection>
      <CustomSection
        height="min-full-height"
        bgColor="light-gray-color"
        classes={""}
      >
        <SectionFour classes={`${commonClasses} padding-all`} />
      </CustomSection>
      <CustomSection height="h-auto" bgColor="white" classes="">
        <PreTrainedModels classes={`${commonClasses} padding-all`} />
      </CustomSection>
      <CustomSection height="h-auto" bgColor="bg-prussian-blue" classes="">
        <SmallBanner classes={`${commonClasses} padding-x py-4`} />
      </CustomSection>
      <CustomSection height="h-auto" bgColor="bg-lightgray" classes="">
        <OurWork classes={`${commonClasses} padding-all`} />
      </CustomSection>
      <CustomSection height="h-auto" bgColor="white" classes="">
        <HappyClient classes={`${commonClasses} padding-all`} />
      </CustomSection>
    </>
  );
}
