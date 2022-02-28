import React from "react";
import { Nav, Navbar, Container } from "react-bootstrap";

function MainNavbar() {
  return (
    <>
      <Navbar bg="dark" expand="lg" variant="dark">
  <Container>
    <Navbar.Brand href="#home">Haku Library</Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
      <Nav>
        <Nav.Link href="#about">About Us</Nav.Link>
        <Nav.Link href="#category">Category</Nav.Link>
        <Nav.Link href="#login">Login</Nav.Link>
        <Nav.Link href="#register">Register</Nav.Link>
      </Nav>
    </Navbar.Collapse>
  </Container>
</Navbar>
    </>
  );
}

export default MainNavbar;
