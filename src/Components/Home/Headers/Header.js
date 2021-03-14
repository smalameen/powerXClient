import React, { useContext } from 'react'
import { Image, Nav, Navbar } from 'react-bootstrap';
import { UserContext } from '../../../App';
import "../Home.css";

const Header = () => {
  return (
    <div className="container">
      <Navbar expand="lg"
      >
        <Navbar.Brand href="#home">
          <h1 style={{color:"white"}}>
            Power<span style={{color:"yellow"}}>X</span>
          </h1>
        </Navbar.Brand>
        <Navbar.Toggle  style={{border:"1px solid yellow", backgroundColor:"yellow", opacity:"0.3",  }} aria-controls="basic-navbar-nav" />
        <Navbar.Collapse className="mr-1 justify-content-end">
          <Nav>
            <Nav.Link style={{ color: 'white' }} href="/home">
              Home
            </Nav.Link>
            <Nav.Link style={{ color: 'white' }} href="/classes">
              Price
            </Nav.Link>
            <Nav.Link style={{ color: 'white' }} href="/classes">
              Our Classes
            </Nav.Link>
            <Nav.Link style={{ color: 'white' }} href="/blogs">
              Blog
            </Nav.Link>
            <Nav.Link style={{ color: 'white' }} href="/auth">
              Log in 
             
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
