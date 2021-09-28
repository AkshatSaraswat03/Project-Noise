import React from 'react'
import { Button } from 'react-bootstrap'
import './ComingSoon.css'

const ComingSoon = () => {
  return (
    <div className='dark-bg mintCard'>
      <h1>#REF<span className='primary-text'>1</span>ECT</h1>
      <p>
        A set of 2,222 generative art pieces living on Solana blockchain, exploring noise as a determining variable.
      </p>
      {/* <hr /> */}
      <div className='hr-div'></div>
      <Button variant='secondary' className='btn-primary2 p-3 btn-block'> Coming Soon </Button>
      {/* <div className='cardDiv m-0 p-2' id='perPieceAmt'>2 SOL per piece</div> */}
      <div className='cardDiv m-0 p-2' id='pieceLeft'>2,222 pieces</div>

    </div>
  )
}

export default ComingSoon
