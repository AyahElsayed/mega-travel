import React from 'react'
import './footer.css'
import { IconContext } from "react-icons";
import { FiMail } from 'react-icons/fi';
import { BsTelephone, BsFacebook, BsTwitter, BsInstagram, BsLinkedin } from 'react-icons/bs';
import Navbar from 'react-bootstrap/Navbar'
import { Container, Nav } from 'react-bootstrap'

const Footer = () => {
  return (
    <div className=' footer'>
      <div className='contact'>
        <h1>Contact Us</h1>
        <span><FiMail /> smart-vesion@support.com</span>
        <span><BsTelephone /> +1-866-832-3090</span>
      </div>

      <div className='follow'>
        <Navbar bg="dark" variant="dark" >

          <Container>
            <Navbar.Brand href="#home">
              <img
                alt=""
                src="./assets/logo.png"
                className="d-inline-block align-top"
              />{' '}
            </Navbar.Brand>

            <Nav className="" >
              <Nav.Link href="#facebook">
                <IconContext.Provider value={{ className: "iconStyle" }}>
                  <div>
                    <BsFacebook />
                  </div>
                </IconContext.Provider>
              </Nav.Link>
              <Nav.Link href="#Twitter">
                <IconContext.Provider value={{ className: "iconStyle" }}>
                  <div>
                    <BsTwitter />
                  </div>
                </IconContext.Provider>
              </Nav.Link>
              <Nav.Link href="#Instagram">
                <IconContext.Provider value={{ className: "iconStyle" }}>
                  <div>
                    <BsInstagram />
                  </div>
                </IconContext.Provider>
              </Nav.Link>
              <Nav.Link href="#Linkedin">
                <IconContext.Provider value={{ className: "iconStyle" }}>
                  <div>
                    <BsLinkedin />
                  </div>
                </IconContext.Provider>
              </Nav.Link>
            </Nav>
          </Container>
        </Navbar>
      </div>
    </div>
  )
}

export default Footer