import React from "react";
import { Nav, Navbar } from "react-bootstrap";
import "./NavBar.css";
import logo from "../../Images/logo.png";
function NavBar() {
  return (
    <Navbar className="navbar" bg="transparent" expand="lg">
      <Navbar.Brand href="#home">
        <img className="navbar__logo" src={logo} alt="brand logo" />
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ml-auto">
          <Nav.Link className="navbar__link" href="#home">
            Home
          </Nav.Link>
          <Nav.Link className="navbar__link" href="#about">
            About
          </Nav.Link>
          <Nav.Link className="navbar__link" href="#services">
            Services
          </Nav.Link>
          <Nav.Link className="navbar__link" href="#pricing">
            Pricing
          </Nav.Link>
          <Nav.Link className="navbar__link" href="#about">
            Our Team
          </Nav.Link>
          <button className="navbar__btn">Contact us</button>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default NavBar;
