import React from 'react';
import { Row, Col } from 'react-bootstrap'
import './gallery.css'

const GalleryPage = ({ match }) => {

  const pageNumber = match.params.pageNumber || 1

  return (
    <div>
      <Row className='content'>
        <Col lg={3}></Col>

        <Col className='px-3'>
          <h3>THE ORIGIN SERIES</h3>
          <h1>#REF<span className='primary-text'>1</span>ECT</h1>
          <p>
            Here the physics of implosion is explored to create a dynamic movement on the canvas, mimicking the life force of nature.
          </p>
        </Col>
        <Col lg={3}></Col>
        <Col lg={3}></Col>
      </Row>
      <Row className='sticky-row'>
        <Col lg={3}></Col>
        <Col lg={6}>
          <div className='numberOfPieces'> 2,222 pieces</div>
        </Col>
        <Col lg={3}></Col>
      </Row>
      <Row>
        <Col lg={3}></Col>
        <Col lg={6} className='p-0'>
          <Row>
            <Col lg={6}></Col>
            <Col lg={6}></Col>
          </Row>
        </Col>
        <Col lg={3}></Col>
      </Row>
    </div>
  );
};

export default GalleryPage;