import React from 'react'
import { Row, Col } from 'react-bootstrap'


const Countdown = () => {
  return (
    <Row className='px-3'>
      <Col className='p-0'>
        <h1>MINT YOUR NOISE TODAY!</h1>
        <div className='hr-div'></div>
        <Row className='mb-4'>
          <Col className='p-0 op-60' xs={7}><h4>COST PER NOISE</h4></Col>
          <Col className='p-0 text-end' xs={5}><h4>1 SOL</h4></Col>
        </Row>
        <Row>
          <Col className='p-0 op-60' xs={7}><h4>NOISES MINTED</h4></Col>
          <Col className='p-0 text-end' xs={5}><h4>0/2,222</h4></Col>
        </Row>
        <div className='countdown-div text-center'>0d 23h 05m 32s</div>
        <div className='medium-text text-center'>Refresh the page at the end of the timer</div>
      </Col>
    </Row>
  )
}

export default Countdown
