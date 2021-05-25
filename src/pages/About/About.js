import React from "react";
import CustomSection from "../../components/CustomSection";
import { DataList } from "../../components/DataList/DataList";

export default function About() {
  return (
    <>
      <CustomSection
        height="h-auto header-margin"
        bgColor="bg-prussian-blue"
        classes="h-768"
      >
        <DataList />
      </CustomSection>
    </>
  );
}
