import React from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import { Link, useLocation } from 'react-router-dom';

const NavigationBar = () => {
  const location = useLocation();

  return (
    <Navbar bg="white" expand="lg" className="navbar-custom fixed-top">
      <Container>
        <Navbar.Brand as={Link} to="/" className="d-flex align-items-center">
          <img
            src="/Logo.jpg"
            alt="MK Hospital Logo"
            className="hospital-logo"
          />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mx-auto">
            <div className="radio-inputs">
              <label className="radio">
                <input 
                  type="radio" 
                  name="nav-radio" 
                  checked={location.pathname === '/'} 
                  readOnly
                />
                <Link to="/" className="name">Home</Link>
              </label>
              <label className="radio">
                <input 
                  type="radio" 
                  name="nav-radio" 
                  checked={location.pathname === '/about'} 
                  readOnly
                />
                <Link to="/about" className="name">About</Link>
              </label>
              <label className="radio">
                <input 
                  type="radio" 
                  name="nav-radio" 
                  checked={location.pathname === '/services'} 
                  readOnly
                />
                <Link to="/services" className="name">Services</Link>
              </label>
              <label className="radio">
                <input 
                  type="radio" 
                  name="nav-radio" 
                  checked={location.pathname === '/contact'} 
                  readOnly
                />
                <Link to="/contact" className="name">Contact</Link>
              </label>
            </div>
          </Nav>
          <div className="nav-buttons d-flex gap-2">
            <Link to="/login" className="hover-btn">
              <span className="btn-text-one">Sign In</span>
              <span className="btn-text-two">Welcome!</span>
            </Link>
            <Link to="/register" className="button">
              Register
              <svg className="icon" viewBox="0 0 24 24" fill="currentColor">
                <path
                  fillRule="evenodd"
                  d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zm4.28 10.28a.75.75 0 000-1.06l-3-3a.75.75 0 10-1.06 1.06l1.72 1.72H8.25a.75.75 0 000 1.5h5.69l-1.72 1.72a.75.75 0 101.06 1.06l3-3z"
                  clipRule="evenodd"
                ></path>
              </svg>
            </Link>
          </div>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavigationBar; 