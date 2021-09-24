import React, { useState } from 'react'
import { Modal, Button, Row, Col } from 'react-bootstrap'
import './SaleLive.css'

const SaleLive = () => {

  // const [fullscreen, setFullscreen] = useState(true);
  const [show, setShow] = useState(false);

  return (
    <div className='transparent-bg'>
      <h1>#REF<span className='primary-text'>1</span>ECT</h1>
      <p>
        The first set of 2,222 art pieces on Solana blockchain exploring noise as a deterministic function.
      </p>
      <hr />
      <div className='py-2 primary-text'>Sale Live!</div>
      <Button variant='secondary' className='btn-primary p-3 btn-block' onClick={() => setShow(true)}> MINT </Button>
      <Modal show={show} fullscreen='true' onHide={() => setShow(false)}>
        <Modal.Header closeButton className='custom'>
          <Modal.Title className='modal-title'></Modal.Title>
        </Modal.Header>
        <Modal.Body className='modal-body'>
          <Row >
            <Col></Col>
            <Col>
              <h1 className='mt-5 pt-5'>MINT #REF<span className='primary-text'>1</span>ECT</h1>
              <Button variant='secondary' className='btn-primary btn-block py-3 my-5'>CHECKOUT</Button>
            </Col>
            <Col></Col>
          </Row>
        </Modal.Body>
      </Modal>

      <div className='cardDiv m-0 p-2' id='perPieceAmt'>2 SOL per piece</div>
      <div className='cardDiv m-0 p-2' id='pieceLeft'><span className='currpiece'>1240</span>/2,222 piece remaining</div>

    </div>
  )
}

export default SaleLive
