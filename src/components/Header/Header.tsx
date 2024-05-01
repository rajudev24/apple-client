import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import "bootstrap/dist/css/bootstrap.min.css";
import { FaApple } from "react-icons/fa";
import { CiSearch } from "react-icons/ci";
import { IoBagOutline } from "react-icons/io5";

const Header = () => {
  return (
    <Navbar
      collapseOnSelect
      expand="lg"
      className="bg-body-tertiary "
      fixed="top"
    >
      <Container>
        <Navbar.Brand className="ms-20">
          {" "}
          <FaApple />{" "}
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />

        <Nav className="me-20">
          <Nav.Link>Store</Nav.Link>
          <Nav.Link className="mx-2">Mac</Nav.Link>
          <Nav.Link>iPad</Nav.Link>
          <Nav.Link className="mx-2">iPhone</Nav.Link>
          <Nav.Link>Watch</Nav.Link>
          <Nav.Link className="mx-2">Vision</Nav.Link>
          <Nav.Link>AirPods</Nav.Link>
          <Nav.Link className="mx-2">TV & Home</Nav.Link>
          <Nav.Link> Entertainment </Nav.Link>
          <Nav.Link className="mx-2"> Accessories</Nav.Link>
          <Nav.Link>Suppport</Nav.Link>
          <Nav.Link className="mt-1.5 mx-2">
            <CiSearch />
          </Nav.Link>
          <Nav.Link className="mt-1">
            <IoBagOutline />
          </Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  );
};

export default Header;
