import React, { useState } from 'react'
import { Modal, Button } from 'react-bootstrap'
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

      <div className='cardDiv m-0 p-2' id='perPieceAmt'>2 SOL per piece</div>
      <div className='cardDiv m-0 p-2' id='pieceLeft'><span className='currpiece'>1240</span>/2,222 piece remaining</div>

    </div>
  )
}

export default SaleLive
