import React from "react";
import { Col, Row } from "react-bootstrap";
import CustomButton from "../CustomButton/CustomButton";
import CustomSection from "../CustomSection";
import Heading from "../Heading";
import "./Footer.css";
import facebook from "../../images/facebook.svg";
import twitter from "../../images/twitter.svg";
import linkedin from "../../images/linkedin.svg";
import logoFooter from "../../images/footer/logo-footer.svg";
import nvedia from "../../images/footer/nvedia.png";

export const Footer = () => {
  return (
    <CustomSection bgColor="bg-footer" height="h-auto" classes="">
      <Row className="padding-all">
        <Col
          xs={12}
          className="d-flex align-items-center justify-content-center flex-column pb-2"
        >
          <Heading
            headingClass="footer-heading text-center text-height-1"
            HeadingText="Get Started With Civixa.Ai Today"
          />
          <CustomButton
            btnColor="green"
            btnText="Request A Demo"
            btnClasses="text-white my-4"
          />
        </Col>
        <Col xs={12} className="pt-4 pb-3">
          <Row className="d-flex justify-content-between px-5">
            <Col xs={12} md={8} className="d-flex ">
              <div>
                <h1 className="text-xs font-weight-bold pr-5">Services</h1>
                <h1 className="text-xs ">Services</h1>
                <h1 className="text-xs ">Services</h1>
                <h1 className="text-xs ">Services</h1>
                <h1 className="text-xs ">Services</h1>
              </div>
              <div>
                <h1 className="text-xs font-weight-bold pr-5">Services</h1>
                <h1 className="text-xs ">Services</h1>
                <h1 className="text-xs ">Services</h1>
                <h1 className="text-xs ">Services</h1>
                <h1 className="text-xs ">Services</h1>
              </div>
              <div>
                <h1 className="text-xs font-weight-bold pr-5">Services</h1>
                <h1 className="text-xs ">Services</h1>
                <h1 className="text-xs ">Services</h1>
                <h1 className="text-xs ">Services</h1>
                <h1 className="text-xs ">Services</h1>
              </div>
            </Col>
            <Col xs={12} md={4} lg={2} className="text-right pt-3 pt-lg-0">
              <h1 className="footer-follow text-xs underline-green text-left font-weight-600">
                Follow Us
              </h1>
              <div className="d-flex justify-content-lg-between justify-content-around">
                <img src={facebook} alt="Facebook Logo" />
                <img src={twitter} alt="Twitter Logo" />
                <img src={linkedin} alt="LinkedIn Logo" />
              </div>
            </Col>
          </Row>
        </Col>
        <Col xs={12}>
          <Row className="d-flex align-items-end justify-content-center justify-content-md-between pb-0 border-bottom">
            <Col xs={12} md={6} className="pl-0 pt-2 order-lg-first order-last">
              <img src={logoFooter} alt="Logo Footer" />
              <Heading
                HeadingText="CIVIXA"
                headingClass="font-weight-normal mb-0 text-left"
                para
                paraText="Enabling AI Transformation "
                paraClass="font-weigt-bold text-xxs w-max border-bottom-green mb-0 pb-3"
              />
            </Col>
            <Col
              xs={12}
              md={6}
              lg={6}
              className="d-flex flex-wrap flex-row-reverse justify-content-center justify-content-lg-start pt-2"
            >
              <h6 className="text-prussian-blue text-uppercase">
                Proudly supported by
              </h6>
              <div className="d-flex flex-wrap justify-content-center justify-content-lg-start">
                <img src={nvedia} alt="Facebook Logo" />
                <img src={nvedia} alt="Twitter Logo" />
                <img src={nvedia} alt="LinkedIn Logo" />
                <img src={nvedia} alt="LinkedIn Logo" />
              </div>
            </Col>
          </Row>
          <Row className="d-flex flex-wrap flex-column pt-2">
            <h1 className="text-xs ">Civixa SPA</h1>
            <h1 className="text-xxs ">Services</h1>
            <h1 className="text-xxs ">Services</h1>
            <h1 className="text-xxs ">Services</h1>
          </Row>
        </Col>
      </Row>
    </CustomSection>
  );
};
