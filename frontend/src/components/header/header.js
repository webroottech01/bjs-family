import React from 'react';
import "./header.scss";
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { LinkContainer } from 'react-router-bootstrap';

const Header = () => {
  return (
    <>
<div className='header sticky-top'>
<div className='container'>
          <Navbar expand="lg" className="bg-body-tertiary">

          <Navbar.Brand>
            <LinkContainer to="/">  
              <img src={process.env.PUBLIC_URL + "/FamilyLogo.png"} alt="" /></LinkContainer></Navbar.Brand>
              
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav" className='justify-content-end'>
              <Nav className="mainNavigation">
              <LinkContainer to="/about">
                 <Nav.Link>Our Services</Nav.Link>
              </LinkContainer>
                <NavDropdown title="About BJS" id="basic-nav-dropdown">
                  <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.2">
                    Another action
                  </NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item href="#action/3.4">
                    Separated link
                  </NavDropdown.Item>
                </NavDropdown>
                <Nav.Link href="#home">News</Nav.Link>
                <Nav.Link href="#home">Careers</Nav.Link>
              </Nav>
            </Navbar.Collapse>
            <Nav className="me-auto navbarsecond">
              <Nav.Link href="#home"><button className='talktous'>Talk to us</button></Nav.Link>
              <NavDropdown title="Us" id="basic-nav-dropdown" className='flags'>
                  <NavDropdown.Item href="#action/3.1">Uk</NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.2">
                    Us
                  </NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.3">Uk</NavDropdown.Item>
                  </NavDropdown>

            </Nav>

          </Navbar>
        </div>
      </div>
    </>
 )
}
export default Header;