import React from 'react'
import { Row, Col, Button } from 'react-bootstrap'
import './ComingSoon.css'

const ComingSoon = () => {
  return (
    <div className='dark-bg card'>
      <h1>#REF<span className='primary-text'>1</span>ECT</h1>
      <p>
        The first set of 2,222 art pieces on Solana blockchain exploring noise as a deterministic function.
      </p>
      <hr />

      <Button variant='secondary' className='btn-primary2 p-3 btn-block'> Coming Soon </Button>
      <div className='cardDiv m-0 p-2' id='perPieceAmt'>2 SOL per piece</div>
      <div className='cardDiv m-0 p-2' id='pieceLeft'>2,222 piece remaining</div>

    </div>
  )
}

export default ComingSoon
