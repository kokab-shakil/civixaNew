import React from "react";
import CustomSection from "../../components/CustomSection";
import { ContactBanner } from "./components/ContactBanner";
import { ContactDetails } from "./components/ContactDetails";
import "./ContactUs.css";

const ContactUs = ({ handleHeaderColor }) => {
  handleHeaderColor("white");
  const commonClasses =
    "d-flex align-items-center justify-content-center h-100";
  return (
    <>
      <CustomSection height="h-auto" bgColor="white" classes="">
        <ContactBanner classes={`${commonClasses} flex-column padding-all`} />
      </CustomSection>
      <CustomSection height="h-auto" bgColor="white" classes="">
        <ContactDetails
          classes={`${commonClasses} postion-relative padding-y padding-right`}
        />
      </CustomSection>
    </>
  );
};

export default ContactUs;
