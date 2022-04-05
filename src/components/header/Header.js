import React from 'react'
import Navbar from 'react-bootstrap/Navbar'
import { Container, Nav } from 'react-bootstrap'
import './header.css'

const Header = () => {
  return (
    <div>
      <>
        <Navbar bg="dark" variant="dark" sticky="top">
          <Container>
            <Navbar.Brand href="#home">
              <img
                alt=""
                src="./assets/logo.png"
                // width="50"
                // height="50"
                className="d-inline-block align-top"
              />{' '}
            </Navbar.Brand>

            <Nav className="" >
              <Nav.Link href="#home">Home</Nav.Link>
              <Nav.Link href="#Domestic">Domestic</Nav.Link>
              <Nav.Link href="#Outgoing">Outgoing</Nav.Link>
              <Nav.Link href="#flight">flight</Nav.Link>
              <Nav.Link href="#Tours">Tours</Nav.Link>
              <Nav.Link href="#Honey moon">Honey moon</Nav.Link>
              <Nav.Link href="#Day Tripsng">Day Trips</Nav.Link>
              <Nav.Link href="#Contact Us">Contact Us</Nav.Link>
            </Nav>
          </Container>
        </Navbar>
      </>
    </div>
  )
}

export default Header