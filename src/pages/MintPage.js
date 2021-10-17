import React from 'react'
import { Row, Col } from 'react-bootstrap'
import Countdown from '../components/MintPages/Countdown'
import ConnectWallet from '../components/MintPages/ConnectWallet'
import Mint from '../components/MintPages/Mint'
import Soldout from '../components/MintPages/Soldout'
import './mint.css'

const MintPage = () => {
  return (
    <div className='dark-bg mintpage-section'>
      <Row>
        <Col lg={4}></Col>
        <Col lg={4}>
          <Soldout />
        </Col>
        <Col lg={4}></Col>
      </Row>
    </div>
  )
}

export default MintPage
