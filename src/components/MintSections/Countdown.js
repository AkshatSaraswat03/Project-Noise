import React from 'react'
import { Button } from 'react-bootstrap'
import './Countdown.css'

const Countdown = () => {
  return (
    <div className='dark-bg mintCard'>
      <h1>#REF<span className='primary-text'>1</span>ECT</h1>
      <p>
        The first set of 2,222 art pieces on Solana blockchain exploring noise as a deterministic function.
      </p>
      <div className='hr-div'></div>
      <div className='py-4' style={{ fontSize: '20px' }}>
        Countdown : <span className='time-left primary-text'>22:22:22:22</span>
      </div>
      <Button variant='secondary' className='btn-primary p-3 btn-block'> MINT </Button>
      <div className='cardDiv m-0 p-2' id='perPieceAmt'>2 SOL per piece</div>
      <div className='cardDiv m-0 p-2' id='pieceLeft'>2,222 piece remaining</div>

    </div>
  )
}

export default Countdown
