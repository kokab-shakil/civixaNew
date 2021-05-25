import React, { useEffect, useState } from "react";
import { Nav, Navbar, NavLink } from "react-bootstrap";
import civixaWhite from "./images/civixaWhite.svg";
import civixa from "./images/civixa.svg";

import "./Header.css";
import { Link } from "react-router-dom";

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
      <Navbar.Brand href="/" className="d-flex align-items-center">
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
          <Link to="/" className="px-3 nav-link">
            Home
          </Link>
          <Link to="/about" className="px-3 nav-link">
            About
          </Link>
          <Link to="/service" className="px-3 nav-link">
            Services
          </Link>
          <Link to="/" className="px-3 nav-link">
            How It Works
          </Link>
          <Link to="/covid" className="px-3 nav-link">
            Covid
          </Link>
        </Nav>
        <Nav className="d-flex pl-lg-0 pl-5 align-items-lg-center">
          <Link href="/" className="px-3 nav-link ">
            Support
          </Link>
          <Link href="/" className="px-3 nav-link ">
            Login
          </Link>
          <button className="btnReqDemo py-2 px-4 ml-4">Request Demo</button>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}
