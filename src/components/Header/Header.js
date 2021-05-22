import React, { useEffect, useState } from "react";
import { Nav, Navbar } from "react-bootstrap";
import civixaWhite from "./images/civixaWhite.svg";
import civixa from "./images/civixa.svg";

import "./Header.css";

export default function Header({ headercolor }) {
  const [headersticky, setHeaderSticky] = useState(false);
  useEffect(() => {
    const scrollCallBack = window.addEventListener("scroll", () => {
      if (window.pageYOffset > 0) {
        setHeaderSticky(true);
      } else {
        setHeaderSticky(false);
      }
    });
    return () => {
      window.removeEventListener("scroll", scrollCallBack);
    };
  }, []);
  return (
    <Navbar
      fixed="top"
      collapseOnSelect
      expand="lg"
      bg={headercolor}
      variant="light"
      className={`header py-4 container-fluid w-100 ${
        headersticky ? "sticky" : ""
      }`}
    >
      <Navbar.Brand href="#home" className="d-flex align-items-center">
        <img
          alt="Civixa"
          src={`${headersticky ? civixaWhite : civixa}`}
          width="46"
          height="50"
          className="d-inline-block align-top icon-white"
        />
        <span className="pl-2 logo-heading text-uppercase">Civixa</span>
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="mr-auto pl-5 align-items-lg-center">
          <Nav.Link href="/" className="px-3">
            Home
          </Nav.Link>
          <Nav.Link href="/" className="px-3">
            About
          </Nav.Link>
          <Nav.Link href="/service" className="px-3">
            Services
          </Nav.Link>
          <Nav.Link href="/" className="px-3">
            How It Works
          </Nav.Link>
          <Nav.Link href="/covid" className="px-3">
            Covid
          </Nav.Link>
        </Nav>
        <Nav className="d-flex pl-lg-0 pl-5 align-items-lg-center">
          <Nav.Link href="/" className="px-3 ">
            Support
          </Nav.Link>
          <Nav.Link href="/" className="px-3 ">
            Login
          </Nav.Link>
          <button className="btnReqDemo py-2 px-4 ml-4">Request Demo</button>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}
