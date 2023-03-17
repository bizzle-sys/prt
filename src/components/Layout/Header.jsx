
import React from 'react'
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';


export const Header = () => {
  return (
    <>
    <Navbar bg="light"  expand="lg">
      <Container>
        <Navbar.Brand href="#">Reeamsh {"</>"}</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="ms-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <Navbar className='ms-auto  '>
            <Nav.Link className='text-dark nav-links' href="#">Home</Nav.Link>
            <Nav.Link className='text-dark nav-links' href="#">Skills</Nav.Link>
            <Nav.Link className='text-dark nav-links' href="#">Projects</Nav.Link>
            </Navbar>
            
            
          </Nav>
         
            <Button variant="outline-success">Download CV</Button>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  </>
  )
}
