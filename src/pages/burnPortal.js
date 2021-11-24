import React, { useState, useRef } from 'react';
import { Modal, Button, Row, Col, Overlay,Nav } from 'react-bootstrap'
import GalleryCard from '../GalleryCard/GalleryCard';
import { ReactComponent as Logo2Svg } from '../assets/logo2.svg';
import SelectCard from '../components/selectCard/selectCard'
// import LogoWeb from '../assets/Landingweb
import './burn.css'

const BurnPortal = () => {
    const [noise,SetNoise] = useState('-');
    const [connect,SetConnect] = useState(true);
    const cardInfo = [
      {
          "code": "#1240",
          "owner": "CM1CPAJPZ59VCMtFBP5pdN4LT3MaziYZoaxDSBPTvJ65",
          "src": "https://arweave.net/TFlPE0iN7DRzItMiGn97C53tMTE2gsg524hySCAi_So",
          "traits": [
              {
                  "trait_type": "Color",
                  "value": "Yellow"
              },
              {
                  "trait_type": "Type",
                  "value": "Ripple One"
              }
          ]
      },
      {
          "code": "#254",
          "owner": "G22JKaE5nPLT5b613QvjN6SdqpEK6c8noVtGPS99gq3C",
          "src": "https://arweave.net/jEsrUkwT0_5H4fvCbSVUW-9X-QSMXg4piYVBGUA5slU",
          "traits": [
              {
                  "trait_type": "Color",
                  "value": "White"
              },
              {
                  "trait_type": "Type",
                  "value": "Wave Two"
              }
          ]
      },
      {
          "code": "#254",
          "owner": "G22JKaE5nPLT5b613QvjN6SdqpEK6c8noVtGPS99gq3C",
          "src": "https://arweave.net/jEsrUkwT0_5H4fvCbSVUW-9X-QSMXg4piYVBGUA5slU",
          "traits": [
              {
                  "trait_type": "Color",
                  "value": "White"
              },
              {
                  "trait_type": "Type",
                  "value": "Wave Two"
              }
          ]
      },

  ];
  return (
    <>
      <div className='section-2new'>
        <Row className='px-3 py-0'>
          <Col lg={3} className='p-0'></Col>
          <Col lg={6} className='p-0'>
            <div>
                <h2>Burning mechanism to claim Noise Pass!</h2>
                <ol type="1">
                    <li style={{color: "#050505",opacity:"0.7",paddingTop:"7px",paddingBottom:"2px"}}>Select 6 noises which you want to burn.</li>
                    <li style={{color: "#050505",opacity:"0.7",paddingTop:"7px",paddingBottom:"2px"}}>Burn & claim</li>
                </ol>
                <p style={{marginBottom: "43px"}}> NOTE: If you don’t have enough noises -<a href="">buy here</a> </p>
            </div>
            <div style={{minHeight:"50vh"}}>
                <div style={{borderBottom: "solid 2px black"}}>
                    <p>My Noises ({noise})</p>
                </div>
                <div>
                    { connect ?
                        // {cardInfo.map((product, i) => (
                        //   <Col key={i} sm={12} lg={6} style={{ padding: '5px' }}>
                        //     <GalleryCard product={product} />
                        //   </Col>
                        // ))}
                        <div></div>
                    :
                    <button className="burnbutton" style={{marginTop:"43px",border:"0"}}>Connect Wallet</button>}
                    
                </div>
                
            </div>
            
          </Col>
          <Col lg={3} className='p-0'>
          
          </Col>
        </Row>

      </div>

      <div className='section-8 dark-bg px-3'>
        <Row>
          <Col lg={3}></Col>
          <Col lg={6} className='footer pt-1'>
            <Row className='pt-0 pb-2'>
              <Col lg={4} className='footer-brand pt-4 px-0'><p style={{ color: 'white' }}>Project Noise</p></Col>
              <Col lg={5}></Col>
              <Col lg={3} className='px-0'>
                <Row className='m-0 p-0'>
                  <Col lg={3}></Col>
                  <Col className='text-center p-0'>
                    <Nav.Link href='https://twitter.com/Prjctnoise' className='social-media-twitter'><div className='twitter' ></div></Nav.Link>
                  </Col>
                  <Col className='text-center p-0'>
                    <Nav.Link href='https://discord.gg/2AXCqUWX5J' className='social-media-discord'><div className='discord' ></div></Nav.Link>
                  </Col>
                </Row>
              </Col>
            </Row>
          </Col>
          <Col lg={3}></Col>
        </Row>
      </div>

    </>
  );
};

export default BurnPortal;