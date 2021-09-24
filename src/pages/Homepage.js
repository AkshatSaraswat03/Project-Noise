import React from 'react';
import { Row, Col } from 'react-bootstrap'
import { ReactComponent as LogoSvg } from '../assets/logo.svg';
import { ReactComponent as Logo2Svg } from '../assets/logo2.svg';
import { ReactComponent as LandingSvg } from '../assets/landinggif.svg';
import { FaTwitter, FaDiscord } from 'react-icons/fa'
import { RiInstagramFill } from 'react-icons/ri'

import ComingSoon from '../components/MintSections/ComingSoon';
import Countdown from '../components/MintSections/Countdown';
import SaleLive from '../components/MintSections/SaleLive';
import Soldout from '../components/MintSections/Soldout';
import './home.css'

const HomePage = () => {
  return (
    <>
      <div className='section-1 dark-bg'>
        <Row>
          <Col lg={3}>

          </Col>
          <Col lg={6} style={{ position: 'relative' }}>

            <LandingSvg className='gif' />
            <div className='mintComponent'>
              <SaleLive />
            </div>
          </Col>
          <Col lg={3}>

          </Col>
        </Row>
      </div>

      <div className='section-2'>
        <Row>
          <Col lg={3}></Col>
          <Col lg={6}>
            <h1 className='primary-text'>"Not deliberate, not random.</h1>
            <h1 className='primary-text'>Some place in between."</h1>
            <br />
            <p>-Ex Machina</p>
            <br />
            <br />

            <p>Giving up the control, to achieve that place in between is our dilemma</p>
            <p>The filemma - which gives rise to provoking uncertain moments in the Cartesian space.</p>
            <p>And these moments, we present to you.</p>
          </Col>
          <Col lg={3}></Col>
        </Row>

      </div>

      <div className='section-3 dark-bg'>
        <Row className='py-5'>
          <Col lg={3}></Col>
          <Col lg={9}>
            <LogoSvg />
          </Col>

        </Row>
        <Row>
          <Col lg={3}></Col>
          <Col lg={4}>
            <Row><h1>WHAT IS PROJECT NOISE?</h1></Row>
            <Row className='text-end'>
              <h3>[Noise is a contronym]</h3>
            </Row>
          </Col>
          <Col lg={5}></Col>
        </Row>

        <Row>
          <Col lg={3}></Col>
          <Col lg={3}>
            <p>
              Project noise embarks on a quest to reaffirm art for art's sake into the metaverse. Dissolving the noise around and bringing a clean sensory exxperience together.
            </p>
            <p>
              Devoid of any social constructs, it celebrates art as a medium of generating ecstasy.
            </p>
            <p>
              Eah series will explore the parameters of chaos theory, seeking an organic but controlled experiment with innumerable unique possibilities.
            </p>
          </Col>
          <Col lg={6}></Col>
        </Row>

        <Row>
          <Col lg={3}></Col>
          <Col> <h3>THE ORIGIN SERIES</h3></Col>
        </Row>
        <Row>
          <Col lg={3}></Col>
          <Col> <h1>#REF<span className='primary-text'>1</span>ECT</h1></Col>
        </Row>

        <Row>
          <Col lg={3}></Col>
          <Col lg={3}>
            <p>
              2,222 Unique synaesthetic pieces instigating touch and sound stimuli through visual media.
            </p>
            <p>
              Here, the physics of implosion is explored to create a dynamic movement on the canvas, mimicking the life force of nature.
            </p>
            <p>
              And the conscious is punctured by the unconscious at random intervals.
            </p>
          </Col>
          <Col lg={6}></Col>
        </Row>

      </div>
      <div className='section-4'>
        <Row className='py-5 my-5'>
          <Col><h1>UTILITY?</h1></Col>
        </Row>
        <Row className='py-5 my-5'>
          <Col><h1>ART.</h1></Col>
        </Row>
      </div>

      <div className='section-5 dark-bg'>
        <Row className='pb-5'>
          <Col lg={3}></Col>
          <Col lg={3}>
            <Logo2Svg />

            <h1 className='py-5'>WHY ART?</h1>
            <p>
              "We don't read and write poetry because it's cute. We read and write poetry because we are members of human race.<br />
              And the human race is filled with passion <br />
              And medicine, law, buisness, engineering, these are noble pursuits and necessary to sustain life.
            </p><br />
            <p>
              But poetry, beauty, romance, love, these are what we stay alive for. To quote from Whitman "O me! O life!... of the questions of thsese recurring; of the endless trains of the faithless... of cities filled with the foolish; what good amid these, O me, O life?"
            </p><br />
            <p>
              Answer. That you are here - that life exists, and identity; that the powerful play goes on and you may contribute a verse. That the powerful play *goes on* and you may contribute a verse. What will your verse be?"
            </p><br />
            <br />
            <br />
            <h3>-Dead Poet's Society</h3>
          </Col>
          <Col lg={6}></Col>
        </Row>

        <Row>
          <Col lg={3}></Col>
          <Col lg={6} className='footer'>
            <Row className='py-2'>
              <Col lg={4}><p>Project Noise</p></Col>
              <Col lg={5}></Col>
              <Col lg={3}>
                <FaTwitter size={25} className='mx-3' />
                <RiInstagramFill size={25} className='mx-3' />
                <FaDiscord size={25} className='mx-3' />
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