import React from 'react';
import { Row, Col, Nav } from 'react-bootstrap'
import { ReactComponent as LogoSvg } from '../assets/logo.svg';
import { ReactComponent as Logo2Svg } from '../assets/logo2.svg';
// import LogoWeb from '../assets/Landingweb
import web_hero_gif from '../assets/web_hero_gif.gif'
import mobile_hero_gif from '../assets/mobile_hero_gif.gif'
import HomeCarousel from '../components/Carousel/HomeCarousel';

import ComingSoon from '../components/MintSections/ComingSoon';
import Countdown from '../components/MintSections/Countdown';
import SaleLive from '../components/MintSections/SaleLive';
import Soldout from '../components/MintSections/Soldout';

import team1 from '../assets/team1.png'
import team2 from '../assets/team2.png'
import team3 from '../assets/team3.png'
import team4 from '../assets/team4.png'



import './home.css'

const HomePage = () => {
  return (
    <>
      <div className='section-1 dark-bg'>
        <Row className='px-3 m-0'>
          <Col lg={3}></Col>

          <Col lg={6}>
            <div className='main-section'>
              <div className='gifWeb'>
                <img src={web_hero_gif} alt='gif' />
              </div>
              <div className='mint-section'>
                <div className='mint-container'>
                  <ComingSoon />
                </div>
              </div>
            </div>
          </Col>
          <Col lg={6} className='mobile-section m-0 p-0'>
            <div className='mobileGifComponent'>
              <img src={mobile_hero_gif} alt='gif' className='gifMobile' />
            </div>
            <div className='mobileMintComponent p-0'>
              <ComingSoon />
            </div>
          </Col>

          <Col lg={3}></Col>
        </Row>
      </div>

      <div className='section-2'>
        <Row className='px-3 py-0'>
          <Col lg={3} className='p-0'></Col>
          <Col lg={6} className='p-0'>
            <h1 className='primary-text'>"Not deliberate, not random.</h1>
            <h1 className='primary-text'>Some place in between."</h1>
            <h5>- Nathan, Ex Machina</h5>
            <div className='m-0'>
              <p>Giving up control to achieve that place "in between" is our dilemma</p>
              <p>The dilemma - which gives rise to fascinating uncertain moments in the Cartesian plane.</p>
              <p>Here, we present to you, these moments.</p>
            </div>
          </Col>
          <Col lg={3} className='p-0'></Col>
        </Row>

      </div>

      <div className='section-3 dark-bg'>
        <Row className='px-3'>
          <Col lg={3}></Col>
          <Col lg={9}>
            <LogoSvg />
          </Col>

        </Row>
        <Row className='firstrow'>
          <Col lg={3}></Col>
          <Col lg={6}>
            <div style={{ width: 'max-content', maxWidth: '90vw' }}><h1>WHAT IS PROJECT NOISE?</h1>
              <div style={{ maxWidth: '90vw' }}>
                <h6>[Noise is a contronym]</h6>
              </div>
            </div>
          </Col>
          <Col lg={3}></Col>
        </Row>

        <Row className='px-3 m-0'>
          <Col lg={3}></Col>
          <Col lg={6} className=''>
            <p>
              Project noise is an art collective, embarking on a quest to reaffirm the idea of "art for art's sake." It dissolves the noise around and brings a clean sensory experience for the viewer.</p>
            <p>
              Devoid of any social constructs, it celebrates the human desire to create and to express.
            </p>
            <p>
              The journey will be broken down into different curations. Each curation will explore the overarching theme of '<span><a href='https://en.wikipedia.org/wiki/Chaos_theory' className='primary-text'>Chaos Theory</a></span>'.
            </p>
            <p>
              Organic but controlled experiments with innumerable yet unique possibilities.
            </p>
          </Col>
          <Col lg={3}></Col>
        </Row>

        <Row className='px-3'>
          <Col lg={3}></Col>
          <Col> <h4>THE ORIGIN SERIES</h4></Col>
        </Row>
        <Row className='px-3'>
          <Col lg={3}></Col>
          <Col className='reflect'> <h1>#REF<span className='primary-text'>1</span>ECT</h1></Col>
        </Row>

        <Row className='px-3'>
          <Col lg={3}></Col>
          <Col lg={6}>
            <p>
              REF1ECT is the first of many curations coming ahead. This series is conceived by Project Noise itself.
            </p>
            <p>
              2222 unique synaesthetic artworks stored immutably on Solana blockchain.REF1ECT is a whole wide spectrum beginning from clean lines and ending up on completely diffused noise and this journey is what we present to you.
            </p>
            <p>
              The aesthetics of the outputs incidentally resemble the movement of water as if it was captured onto a canvas and frozen in time.
            </p>
            <p>
              And, in the process of creation, the conscious is punctured by the unconscious at random intervals.
            </p>
          </Col>
          <Col lg={3}></Col>
        </Row>

      </div>
      <div className='section-4'>
        <Row className='section4-row1'>
          <Col><h1>UTILITY?</h1></Col>
        </Row>
        <Row className='section4-row2'>
          <Col><h1><a href='/art'>ART</a>.</h1></Col>
          <div>More about our roadmap <a href='/learn'>here</a>.</div>
        </Row>
      </div>

      <div className='section-5 dark-bg'>
        <Row className='px-3'>
          <Col lg={3}></Col>
          <Col lg={6}>
            <Logo2Svg />

            <h1 className='m-0'>WHY ART?</h1>
            <p>
              "We don't read and write poetry because it's cute. We read and write poetry because we are members of human race.<br />
              And the human race is filled with passion <br />
              And medicine, law, buisness, engineering, these are noble pursuits and necessary to sustain life.
            </p>
            <p>
              But poetry, beauty, romance, love, these are what we stay alive for. To quote from Whitman "O me! O life!... of the questions of thsese recurring; of the endless trains of the faithless... of cities filled with the foolish; what good amid these, O me, O life?"
            </p>
            <p>
              A nswer. That you are here - that life exists, and identity; that the powerful play goes on and you may contribute a verse. That the powerful play *goes on* and you may contribute a verse. What will your verse be?"
            </p>

            <h5>-John Keating, Dead Poets Society</h5>
          </Col>
          <Col lg={3}></Col>
        </Row>
      </div>

      <div className='section-6 dark-bg'>
        <Row className='px-3'>
          <Col></Col>
          <Col lg={6} >
            <Row className='p-0'><h1 className='p-0'>TEAM</h1></Row>
            <Row className='team-row p-0'>
              <Col lg={2} md={12} className='pl-0'><img src={team1} alt='team1'></img></Col>
              <Col lg={10} md={12} className='pl-0'>
                <h5>blackrabbit (Art)</h5>
                <div className='partition-div'></div>
                <p>Architect, procedural artist & thinker. </p>
              </Col>
            </Row>
            <Row className='team-row p-0'>
              <Col lg={2} md={12} className='pl-0'><img src={team2} alt='team2'></img></Col>
              <Col lg={10} md={12} className='pl-0'>
                <h5>0xfool (Design & Outreach)</h5>
                <div className='partition-div'></div>
                <p>Obsessed with jpegs, design & web 3.0 </p>
              </Col>
            </Row>
            <Row className='team-row p-0'>
              <Col lg={2} md={12} className='pl-0'><img src={team3} alt='team3'></img></Col>
              <Col lg={10} md={12} className='pl-0'>
                <h5>Ashish (Rust)</h5>
                <div className='partition-div'></div>
                <p>Everything defi, dapps and dex. </p>
              </Col>
            </Row>
            <Row className='team-row p-0'>
              <Col lg={2} md={12} className='pl-0'><img src={team4} alt='team4'></img></Col>
              <Col lg={10} md={12} className='pl-0'>
                <h5>HRJ (Front-end)</h5>
                <div className='partition-div'></div>
                <p>Student. Python & java dev. </p>
              </Col>
            </Row>
          </Col>
          <Col></Col>
        </Row>
      </div>


      <div className='light-bg section-7 px-3'>
        <Row>
          <Col lg={3}></Col>
          <Col lg={6} className='carousel-col'>
            <HomeCarousel />
          </Col>
          <Col lg={3}></Col>
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

export default HomePage;