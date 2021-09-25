import React from 'react';
import { Row, Col } from 'react-bootstrap'
import './learn.css'

const LearnPage = () => {
  return (
    <div>
      <Row className='content'>
        <Col></Col>

        <Col>
          <h2>How to Mint</h2>
          <p>
            If you enjoy the style of a work
            that is hosted on the Art Blocks
            platform you can mint a unique
            iteration for yorself. The work is
            minted/generated/created on demand
            so you don't actually know what the
            specific piece you are getting will
            look like!
          </p>
          <p>
            To mint, visit a project while
            connected to Metamask. If you do not
            already have Metamask installed
            you'll need to visit https://metamsk.io/
            to install the extension
            in your browser.
          </p>

          <h2>License</h2>
          <p>
            The creator of each project will
            select a license type that is
            granted to the purchaser of a token
            for that project. These licenses can
            range from "unrestricted" allowing
            full commercial use of the
            generative content to more
            restrictive license type that might
            only allow a token holder to print
            the work for personal use. The
            license is fully at the discretion
            of the projevt creator.
          </p>

          <h2>Platform Fees and Additional Payees</h2>
          <p>
            The Art Blocks platform charges a
            fee for projects listed on the
            platform of 10%. At the time of purchase
            price is transferred to the Art
            Blocks address with the balance
            immediately transferred to the
            project creator.
          </p>
          <p>
            Project Creators can optionally
            designate an additional payee for
            each project. The creator will
            indicate the receiving address and %
            of the purchase price that will be
            sent to this additional payee
            instanty at the time of purchase.
            This feature will enable estabilished
            platforms to monetize representation
            of a creator on their platform or
            create an automatic method for a
            collaboration of creators to split
            the proceeds of a sale.
          </p>

          <h2>More Info</h2>
          <p>
            For more information please reach
            out to us at info at artblocks.io
            or join the conversation in
            Discord
          </p>
        </Col>
        <Col></Col>
        <Col></Col>
      </Row>
    </div>
  );
};

export default LearnPage;