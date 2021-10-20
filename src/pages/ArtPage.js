import React from 'react';
import { Row, Col } from 'react-bootstrap'
import './art.css'
import art1 from '../assets/art1.png'
import art2 from '../assets/art2.png'
import art3 from '../assets/art3.png'
import art4 from '../assets/art4.png'
import art5 from '../assets/art5.png'
import art6 from '../assets/art6.png'


const ArtPage = () => {
  return (
    <div>
      <Row className='art-content'>
        <Col lg={3}></Col>

        <Col lg={6} className='px-3'>

          <div className='text-center bottom-margin-80'>
            <h1 className='primary-text'>“Impulse. Response. Fluid. Imperfect. Patterned. Chaotic.”</h1>
            <h5>- Nathan, Ex Machina</h5>
          </div>

          {/* <div className='video-player bottom-margin-80'>
            VIDEO PLAYER
          </div> */}


          <div>
            <h4>Inspiration</h4>
            <p>
              REF1ECT is a journey, a constant change, a re-evaluation.<br /><br />

              It is a celebration of those moments where lines are interspersed with noise.<br /><br />

              It is an experiment, a living laboratory, unearthing the images beyond human perception. It is an invention of a constant hit and trial, a culmination of many minds coming together into creating something unexpected. <br /><br />

              It is a product of the whims that an artist develops over the years. The whims, which originated from music, architecture, art and everything that is this life. Influenced by Refik Anadol, infusing dream-like qualities into spatial narratives by using lines and noise. By Jackson Pollock revolutionizing the meaning of art by splattering the paint in a controlled chaos. By Ludovico Einaudi, tinkering the unconscious state of the being through his piano.By Pak proving that more than the artwork itself, it's the story behind that matters.<br /><br />
            </p>
          </div>

          <div className='division-div'></div>

          <div className='text-center bottom-margin-80'>
            <h1 className='primary-text'> “The possible ranks higher than the actual.”</h1>
            <h5>- Martin Heidegger</h5>
          </div>


          <div className='bottom-margin-80'>
            <h4>“Lines” & “Noise”</h4>
            <p>
              These thoughts culminate into a play of “lines” and “noise”. REF1ECT is a whole wide spectrum beginning from clean lines and ending up on completely diffused noise and this journey is what we present to you.<br /><br />

              Everything originates from one mother script. This script helps us in giving up the control as artists and helping to achieve something that is a balance between complete chaos and order. An experiment with innumerable possibilities.
            </p>
          </div>


          <div>
            <h5 className='text-center'><u>FAILED EXPERIMENTS</u></h5>
            <img src={art1} alt='art1'></img>
          </div>

          <div className='division-div'></div>

          <div className='bottom-margin-80'>
            <h4>Derivations</h4>
            <p>
              4 unique styles are extracted from the mother script, each having a fixed set of outcomes. The number of these outcomes are proportional to the variations that the particular style can create. Each piece created, of the whole 2,222 collection is unique. The breakup of the styles are presented through a flow chart below :
            </p>
            <Row className='flow-chart'>
              <Col lg={2}></Col>
              <Col lg={8}>
                <img src={art2} alt='art2'></img>
              </Col>
              <Col lg={2}></Col>
            </Row>
            <h5 className='text-center' ><u>SPLIT</u></h5>
            <img src={art3} alt='art3'></img>
            <h5 className='text-center' ><u>WAVE</u></h5>
            <img src={art4} alt='art4'></img>
            <h5 className='text-center' ><u>RIPPLE</u></h5>
            <img src={art5} alt='art5'></img>
            <h5 className='text-center' ><u>WASHED</u></h5>
            <img src={art6} alt='art6'></img>

          </div>


          <div>
            <h4>RARITY</h4>
            <p>
              There is no intentional rarity. Total number of ‘wave’, ‘split’, ‘ripple’ and ‘washed’ are same but the number of variation in each category may differ. <br /><br />
              The biggest governing factor will be the aesthetic of the art in itself. We believe that beauty lies in the eyes of the beholder and that it should alone be the measuring scale for its value. Thus,  “Art for Art’s sake”.
            </p>
          </div>


        </Col>
        <Col></Col>
        <Col lg={3}></Col>
      </Row>
    </div>
  );
};

export default ArtPage;