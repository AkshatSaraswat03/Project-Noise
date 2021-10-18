import './check.css'
import { listenerCount } from 'process';
import { Row, Col, Button } from 'react-bootstrap'
import { useState } from 'react';
import list from '../8wn96-5xm49.json'

const CheckResult = () => {
  const [selected, setSelected] = useState('');
  // var list=[
  //   {
  //     "walletAdderss" : "hfdnjnvjfdnjnvejdmnjmnm",
  //   },
  //   {
  //     "walletAdderss" : "49808eodufrdjm",
  //   }
  // ];
  const [info, setInfo] = useState('-');
  const handleSubmit = async () => {
    for (var i = 0; i < list.length; i++) {
      if (list[i].WalletAddress === selected) {
        setInfo("Congratulations, You’re in!");
        break;
      }
      else {
        setInfo("Sorry, you didn’t make it!");
      }
    }
    console.log(info);
  }
  return (
    <div className='dark-bg check-section'>
      <Row>
        <Col lg={3}></Col>
        <Col className='px-3' lg={6}>
          <Row>
            <Col lg={2}></Col>
            <Col lg={8} className='p-0'>
              <h4>#REF<span className='primary-text pb-3'>1</span>ECT</h4>
              <h1>THE WHITELIST</h1>
              <p>Fill in your wallet address below to check if you made it.</p>
              <h2 className="text-center tect primary-text">{info}</h2>
              <input type="text" class="text-light bg-dark" placeholder="Paste the wallet address" value={selected}
                onChange={(e) => {
                  setSelected(e.target.value);
                }} />
              <Button variant='secondary' className='btn-primary m-0 btn-block' onClick={handleSubmit}> Check if you’re on the list! </Button>
              {/* <Button type="submit" class='btn-primary btn-block' onClick={handleSubmit} >Check if you’re on the list!</Button> */}
            </Col>
            <Col lg={2}></Col>
          </Row>
        </Col>
        <Col lg={3}></Col>
      </Row>
    </div>
  );
};

export default CheckResult;