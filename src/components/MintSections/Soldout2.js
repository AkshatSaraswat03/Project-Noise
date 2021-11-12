import React from 'react'
import { Button, Row, Col } from 'react-bootstrap'
import link_arrow from '../../assets/link_arrow.png'
import './Soldout2.css'

const Soldout2 = () => {
  return (
    <div className='dark-bg mintCard'>

      <h1>#REF<span className='primary-text'>1</span>ECT</h1>
      <p>
        A set of 2,222 generative art pieces on Solana blockchain, exploring noise as a determining variable.
      </p>
      {/* <Button variant='secondary' className='btn-primary2 m-0 btn-block'> SOLD OUT ! </Button> */}
      <div className='outline-div'>SOLD OUT !</div>
      <div className='calender m-0'>
        <div className='text-center cardDivLarge text-white p-2'>Available on</div>
        <Row className='p-1 cardDivSmall'>
          <Col xs={10} className='p-0 small-text'>Magic Eden</Col>
          <Col xs={2}>
            <a href='https://magiceden.io/marketplace/project_noise'><img src={link_arrow} alt='link' /></a>
          </Col>
        </Row>

      </div>

    </div>
  )
}

export default Soldout2
