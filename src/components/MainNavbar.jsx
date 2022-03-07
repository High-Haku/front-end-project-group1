import React from "react";
import { Nav, Navbar} from "react-bootstrap";
import { Outlet, Link } from "react-router-dom";

function MainNavbar() {
  return (
    <>
      <Navbar bg="dark" expand="lg" variant="dark" className="px-4">
      <Navbar.Brand href="/">Haku Library</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
        <Nav>
          <Nav.Link href="/about">About Us</Nav.Link>
          <Nav.Link href="/category">Category</Nav.Link>
          <Nav.Link href="/login">Login</Nav.Link>
          <Nav.Link href="/register">Register</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>

    <Outlet/>

    </>
  );
}

export default MainNavbar;
