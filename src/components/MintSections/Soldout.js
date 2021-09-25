import React from 'react'
import { Button } from 'react-bootstrap'
import './Soldout.css'

const Soldout = () => {
  return (
    <div className='dark-bg card'>
      <h1>#REF<span className='primary-text'>1</span>ECT</h1>
      <p>
        The first set of 2,222 art pieces on Solana blockchain exploring noise as a deterministic function.
      </p>
      <hr />
      <Button variant='secondary' className='btn-primary2 p-3 btn-block'> View on Solanart.io </Button>
      <div className='soldoutDiv text-center m-0 p-1'>Sold out! </div>

    </div>
  )
}

export default Soldout
