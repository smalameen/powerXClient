import React from 'react'
import { Image, Nav, Navbar } from 'react-bootstrap';
import "../Home.css";

const Header = () => {
  return (
    <div className="container">
      <Navbar expand="lg"
      >
        <Navbar.Brand href="#home">
          <h1 style={{color:"white"}}>
            Power <span style={{color:"yellow"}}>X</span>
          </h1>
        </Navbar.Brand>
        <Navbar.Toggle class="toggle-icon" style={{border:"1px solid yellow", backgroundColor:"yellow", opacity:"0.3" }} aria-controls="basic-navbar-nav" />
        <Navbar.Collapse className="mr-1 justify-content-end">
          <Nav>
            <Nav.Link style={{ color: 'white' }} href="#home">
              Home
            </Nav.Link>
            <Nav.Link style={{ color: 'white' }} href="#link">
              Price
            </Nav.Link>
            <Nav.Link style={{ color: 'white' }} href="#home">
              Our Classes
            </Nav.Link>
            <Nav.Link style={{ color: 'white' }} href="#link">
              Blog
            </Nav.Link>
            <Nav.Link style={{ color: 'white' }} href="#home">
              Our team
            </Nav.Link>
            <Nav.Link style={{ color: 'white' }} href="#link">
              Contact with us
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </div>
  )
}

export default Header
