import React from 'react';
import { Row, Col, Nav } from 'react-bootstrap';
import link_arrow from '../assets/link_arrow.png';
import { ReactComponent as LogoSvg } from '../assets/logo.svg';
import { ReactComponent as Logo2Svg } from '../assets/logo2.svg';
// import LogoWeb from '../assets/Landingweb
import web_hero_gif from '../content/Untitled.png';
import mobile_hero_gif from '../assets/mobile_hero_gif.gif';
import HomeCarousel from '../components/Carousel/HomeCarousel';

import GoToMintInactive from '../components/MintSections/GoToMintInactive';
import GoToMintActive from '../components/MintSections/GoToMintActive';

import team1 from '../assets/team1.png'
import team2 from '../assets/team2.png'
import team3 from '../assets/team3.png'
import team4 from '../assets/team4.png'



import './home.css'

const BurnPortal = () => {
  return (
    <>
      <div className='section-2new'>
        <Row className='px-3 py-0'>
          <Col lg={3} className='p-0'></Col>
          <Col lg={6} className='p-0'>
            <div>
                <h2>Burning mechanism to claim Noise Pass!</h2>
                <ol type="1">
                    <li>Select 6 noises which you want to burn.</li>
                    <li>Burn & claim</li>
                </ol>
                <p style={{marginBottom: "43px"}}> NOTE: If you don’t have enough noises -<a href="">buy here</a> </p>
            </div>
            <div>
                <h3>My Noises (-)</h3>
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