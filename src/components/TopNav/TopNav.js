import React from 'react'
import { withRouter } from 'react-router-dom';
import { Nav, Navbar, Container, Button, Row, Col } from 'react-bootstrap'
import { LinkContainer } from 'react-router-bootstrap'
import { FaTwitter, FaDiscord } from 'react-icons/fa'
import { RiInstagramFill } from 'react-icons/ri'
import './nav.css'

const TopNav = () => {


  return (
    <>
      <Navbar collapseOnSelect expand="lg" variant="dark" className='py-3 dark-bg navbar' sticky="top">
        <Container>
          <Navbar.Brand className='primary-text nav-brand'>Project Noise</Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              <LinkContainer to='/home'>
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
              <Button variant='secondary' className='p-2 mx-4 btn-outline' id='wallet-btn'>Connect Wallet</Button>
              <Row>
                <Col>
                  <Nav.Link className='mx-1 twitter'><FaTwitter size={25} /></Nav.Link>
                </Col>
                <Col>
                  <Nav.Link className='mx-1 instagram'><RiInstagramFill size={25} /></Nav.Link>
                </Col>
                <Col>
                  <Nav.Link className='mx-1 discord'><FaDiscord size={25} /></Nav.Link>
                </Col>
              </Row>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  )

}

export default withRouter(TopNav)
