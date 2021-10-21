import React, { useState } from 'react'
import { Modal, Button, Row, Col } from 'react-bootstrap'

import './GalleryCard.css'

const GalleryCard = ({ product }) => {
  const [show, setShow] = useState(false);
  const [image, setImage] = useState('');
  const [imgCode, setImgCode] = useState('');
  const [owner, setOwner] = useState('');
  const [color, setColor] = useState('');
  const [type, setType] = useState('');


  const updateImgandCode = (product) => {
    setImage(product.src);
    setImgCode(product.code)
    setOwner(product.owner)
    setColor(product.traits[0].value)
    setType(product.traits[1].value)
  }
  console.log(product)

  return (
    <>
      <div className='gallerycard' onClick={() => {
        setShow(true);
        updateImgandCode(product)
      }}>
        <div className='card-image'>
          <img src={product.src} alt='galleryimage' />
        </div>
        <div className='image-code'>
          {product.code}
        </div>
      </div>

      <Modal show={show} fullscreen='true' onHide={() => setShow(false)}>
        <Modal.Header closeButton className='custom'>
          <Modal.Title className='modal-title'></Modal.Title>
        </Modal.Header>
        <Modal.Body className='modal-body'>
          <Row >
            <Col lg={3}></Col>
            <Col lg={6} className='px-3'>



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
                    <Col className='text-end'>{owner}</Col>
                  </Row>
                  <div className='hrdiv'></div>
                  <h5 className='subheading-1'>Traits</h5>
                  <Row className='text-1'>
                    <Col className='fade-text'>Category</Col>
                    <Col className='text-end'>{type}</Col>
                  </Row>
                  <Row>
                    <Col className='fade-text'>Color</Col>
                    <Col className='text-end'>{color}</Col>
                  </Row>
                </Col>
              </Row>



            </Col>
            <Col lg={3}></Col>
          </Row>
        </Modal.Body>
      </Modal>
    </>
  )
}

export default GalleryCard
