import React, { useState } from 'react'
import { Button, Row, Col } from 'react-bootstrap'
import { LinkContainer } from 'react-router-bootstrap'
import './GoToMintActive.css'

const GoToMintActive = ({ location }) => {

  const [path, setPath] = useState('/')

  return (
    <div className='dark-bg mintCard'>
      <h1>#REF<span className='primary-text'>1</span>ECT</h1>
      <p>
        A set of 2,222 generative art pieces on Solana blockchain, exploring noise as a determining variable.
      </p>
      {/* <LinkContainer to='/'> */}
      <Button variant='secondary' className='btn-primary2 m-0 btn-block'> <a style={{ textDecoration: 'none', color: '#000000' }} href='https://mint.projectnoise.io/'>GO TO MINT PAGE</a> </Button>
      {/* </LinkContainer> */}
      <div className='calender m-0'>
        <div className='text-center cardDivLarge text-white p-2'>21st OCT 2021</div>
        <Row className='p-1 cardDivSmall'>
          <Col className='p-0 small-text'>Pre-Sale:</Col>
          <Col className='p-0 text-end'>1600 UTC</Col>
        </Row>
        <Row className='p-1 cardDivSmall'>
          <Col className='p-0 small-text'>Public Sale:</Col>
          <Col className='p-0 text-end'>1700 UTC</Col>
        </Row>
        <Row className='p-1 cardDivSmall'>
          <Col className='p-0 small-text'>Mint Price:</Col>
          <Col className='p-0 text-end'>1 SOL</Col>
        </Row>
      </div>

    </div>
  )
}

export default GoToMintActive
