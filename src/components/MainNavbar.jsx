import React from "react";
import { Nav, Navbar, Button} from "react-bootstrap";
import { useSelector } from "react-redux";
import { Outlet, Link} from "react-router-dom";
import '../styles/navbar.css';

function MainNavbar() {
  const userLogin = useSelector(state => state.userReducer);

  return (
    <>
      <Navbar bg="dark" expand="lg" variant="dark" className="px-4">
      <Link to="/" className="navbar-brand">Haku Library</Link>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
        <Nav className="align-items-center">
          <Link to="/about" className="nav-link">About Us</Link>
          <Link to="/category" className="nav-link">Category</Link>
          {userLogin.name === '' ? (
            <>
              <Link to="/login" className="nav-link">Login</Link>
              <Link to="/register" className="nav-link"><Button className="m-0" variant='success'>Register</Button></Link>
            </>
          ) : (
            <Link to='/user' className="nav-link">{userLogin.name.charAt(0).toUpperCase() + userLogin.name.substring(1)}</Link>
          )}
          <Link to='/cart' className="cart"><img src={require('../images/icons/cart.png')} alt="cart" height='40px' /></Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>

    <Outlet/>

    </>
  );
}

export default MainNavbar;
