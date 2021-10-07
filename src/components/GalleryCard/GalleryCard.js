import React, { useState } from 'react'
import { Modal, Button, Row, Col } from 'react-bootstrap'

import './GalleryCard.css'

const GalleryCard = ({ src, code }) => {
  const [show, setShow] = useState(false);
  const [image, setImage] = useState('');
  const [imgCode, setImgCode] = useState('');

  const updateImgandCode = (img, codeee) => {
    // console.log('abced')
    // console.log(img, codeee)
    // console.log('abced')
    setImage(img);
    setImgCode(codeee)
  }


  console.log(src, code)

  return (
    <>
      <div className='gallerycard' onClick={() => {
        setShow(true);
        updateImgandCode(src, code)
      }}>
        <div className='card-image'>
          <img src={src} alt='galleryimage' />
        </div>
        <div className='image-code'>
          {code}
        </div>
      </div>

      <Modal show={show} fullscreen='true' onHide={() => setShow(false)}>
        <Modal.Header closeButton className='custom'>
          <Modal.Title className='modal-title'></Modal.Title>
        </Modal.Header>
        <Modal.Body className='modal-body'>
          <Row >
            <Col lg={4}></Col>
            <Col className='px-3'>
              <Row className='heading-row'>
                <Col lg={6}><h2 className='m-0'>{imgCode}</h2></Col>
              </Row>
              <Row>
                <Col>
                  <div className='imgDiv'>
                    <img src={image} alt='modalimage' />
                  </div>
                  <Row className='ownedBy'>
                    <Col className='fade-text'>Owned By:</Col>
                    <Col className='text-end'>0xAE242E</Col>
                  </Row>
                  <div className='hrdiv'></div>
                  <h5 className='subheading-1'>Traits</h5>
                  <Row className='text-1'>
                    <Col className='fade-text'>Category</Col>
                    <Col className='text-end'>Wave <span className='fade-text'>(1777)</span></Col>
                  </Row>
                  <Row>
                    <Col className='fade-text'>Color</Col>
                    <Col className='text-end'>White <span className='fade-text'>(22)</span></Col>
                  </Row>
                </Col>
              </Row>
            </Col>
            <Col lg={4}></Col>
          </Row>
        </Modal.Body>
      </Modal>
    </>
  )
}

export default GalleryCard
