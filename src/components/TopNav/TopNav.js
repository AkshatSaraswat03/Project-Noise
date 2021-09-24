import React from 'react'
import { withRouter, BrowserRouter as Router } from 'react-router-dom';
import { Nav, Navbar, Container, Button } from 'react-bootstrap'
import { LinkContainer } from 'react-router-bootstrap'
import { FaTwitter, FaDiscord } from 'react-icons/fa'
import { RiInstagramFill } from 'react-icons/ri'
import './nav.css'

const TopNav = () => {


  return (
    <>
      <Navbar collapseOnSelect expand="lg" variant="dark" className='py-3 dark-bg' sticky="top">
        <Container>
          <LinkContainer to='/'>
            <Navbar.Brand href="/" className='primary-text'>Project Noise</Navbar.Brand>
          </LinkContainer>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              <LinkContainer to='/'>
                <Nav.Link className='home-nav'>Home</Nav.Link>
              </LinkContainer>
              <LinkContainer to='/gallery'>
                <Nav.Link className='gallery-nav'>Gallery</Nav.Link>
              </LinkContainer>
              <LinkContainer to='/learn'>
                <Nav.Link className='learn-nav'>Learn</Nav.Link>
              </LinkContainer>
            </Nav>
            <Nav>
              <Button variant='danger' className='p-2 mx-4 btn-outline'>Connect Wallet</Button>
              <LinkContainer className='mx-1' to='/'>
                <Nav.Link><FaTwitter size={25} /></Nav.Link>
              </LinkContainer>
              <LinkContainer className='mx-1' to='/'>
                <Nav.Link><RiInstagramFill size={25} /></Nav.Link>
              </LinkContainer>
              <LinkContainer className='mx-1' to='/'>
                <Nav.Link><FaDiscord size={25} /></Nav.Link>
              </LinkContainer>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  )

}

export default withRouter(TopNav)
