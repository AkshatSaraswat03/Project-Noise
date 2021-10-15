import React, { useState, useEffect } from 'react';
import { Row, Col } from 'react-bootstrap'
import GalleryCard from '../components/GalleryCard/GalleryCard';
import Paginate from '../components/Pagination/Paginate';
import Paginate2 from '../components/Pagination/Paginate2';
import ReactPaginate from 'react-paginate'
import '../components/Pagination/Paginate.css'
import './gallery.css'

const GalleryPage = () => {

  let products = [];
  // const products = [
  //   {
  //     src: '/GalleryImages/gallery1.png',
  //     code: '#0001',
  //     traits: []
  //   },
  //   {
  //     src: '/GalleryImages/gallery2.png',
  //     code: '#0002'
  //   },
  //   {
  //     src: '/GalleryImages/gallery3.png',
  //     code: '#0003'
  //   },
  //   {
  //     src: '/GalleryImages/gallery4.png',
  //     code: '#0004'
  //   },
  //   {
  //     src: '/GalleryImages/gallery5.png',
  //     code: '#0005'
  //   },
  //   {
  //     src: '/GalleryImages/gallery6.png',
  //     code: '#0006'
  //   },
  //   {
  //     src: '/GalleryImages/gallery7.png',
  //     code: '#0007'
  //   },
  //   {
  //     src: '/GalleryImages/gallery8.png',
  //     code: '#0008'
  //   },
  //   {
  //     src: '/GalleryImages/gallery9.png',
  //     code: '#0009'
  //   },
  //   {
  //     src: '/GalleryImages/gallery1.png',
  //     code: '#0010'
  //   },
  //   {
  //     src: '/GalleryImages/gallery2.png',
  //     code: '#0011'
  //   },
  //   {
  //     src: '/GalleryImages/gallery4.png',
  //     code: '#0012'
  //   },
  //   {
  //     src: '/GalleryImages/gallery3.png',
  //     code: '#0013'
  //   },

  // ]
  const perPage = 2;
  const numberOfPages = (products.length % perPage === 0) ? parseInt(products.length / perPage) : parseInt(products.length / perPage) + 1;
  console.log(numberOfPages)
  const [displayedProducts, setDisplayedProducts] = useState(products.slice(0, perPage));
  let imageUri = "";
  const updatePage = ({ selected }) => {
    console.log(selected)
    selected = selected + 1;
    setDisplayedProducts(products.slice((selected - 1) * perPage, (selected * perPage)))
    console.log("abcd")
    console.log(displayedProducts)
  }

  useEffect(() => {
    (async () => {
      console.log("calling api");
        //TODO: update details for production server
        fetch('http://62.171.171.181:8080/WalletPOC/w2/rest/v1/wallets')        
          .then(response => response.json())
          .then(data => {

            if (data.success) {
              console.log(data.result);              
              for (var i = 0; i < data.result.data.length; i++) {
                // console.log(data.result.data[i].transaction);
                let mint = data.result.data[i].transaction.toString();
                  let product = {
                    code: "",
                    owner: "",
                    src: "",
                    traits: {}
                  };
                  //get NFT details from mint - 
                  //TODO: update details for mainnet
                  fetch('https://api-devnet.solscan.io/account?address=' + mint)
                  .then(response => response.json())
                  .then(data => {
                    // console.log(data.data.tokenInfo);
                    let tokenInfo = data.data.tokenInfo;
                    let uri = data.data.metadata.data.uri;
                    product.code = tokenInfo.name;
                    product.owner = tokenInfo.tokenAuthority;
                    //get Image
                    fetch(uri)
                    .then(response => response.json())
                    .then(data => {
                      // console.log(data.attributes);
                      let attributes = data.attributes;
                      imageUri = data.image;
                      // console.log(imageUri);
                      product.src = imageUri;
                      product.traits = attributes;
                    });
                })
                .catch(error => {
                  console.log(error.message);
                });   
                
                products.push(product);
              }  
              console.log(products);                           
            }
            else {
              console.log(data.result.message);
            }
            
          });
    })();
  });
  return (
    <div className='light-bg'>
      <Row className='gallery-content light-bg mr-0'>
        <Col lg={3}></Col>

        <Col className='px-3'>
          <h3>THE ORIGIN SERIES</h3>
          <h1>#REF<span className='primary-text'>1</span>ECT</h1>
          <p>
            Here the physics of implosion is explored to create a dynamic movement on the canvas, mimicking the life force of nature.
          </p>          
          {/* <GalleryCard src={imageUri} code="ASH" /> */}
        </Col>
        <Col lg={3}></Col>
        <Col lg={3}></Col>
      </Row>
      <Row className='sticky-row mr-0'>
        <Col lg={3}></Col>
        <Col lg={6} className='px-3'>
          <div className='numberOfPieces'> 2,222 pieces</div>
        </Col>
        <Col lg={3}></Col>
      </Row>
      <Row className='mr-0'>
        <Col lg={3}></Col>
        <Col lg={6} className='px-3'>
          <Row className='mr-0'>
            {/* {products.slice((pageNumber - 1) * 1, (pageNumber * 1)).map((product, i) => (
              <Col key={i} sm={12} lg={6} style={{ padding: '5px' }}>
                <GalleryCard src={product.src} code={product.code} />
              </Col>
            ))} */}
            {displayedProducts.map((product, i) => (
              <Col key={i} sm={12} lg={6} style={{ padding: '5px' }}>
                <GalleryCard src={product.src} code={product.code} />
              </Col>
            ))}
          </Row>
        </Col>
        <Col lg={3}></Col>
      </Row>

      <Row className='mr-0'>
        <Col lg={3}></Col>
        <Col lg={6} className='text-center'>
          {/* <Paginate totalPages={numberOfPages} page={pageNumber} /> */}
          {numberOfPages > 1 && <ReactPaginate
            pageCount={numberOfPages}
            pageRangeDisplayed={4}
            marginPagesDisplayed={1}
            onPageChange={updatePage}
            containerClassName="pagination"
            activeClassName="active"
            pageLinkClassName="page-link"
            breakLinkClassName="page-link"
            nextLinkClassName="page-link"
            previousLinkClassName="page-link"
            pageClassName="page-item"
            breakClassName="page-item"
            nextClassName="page-item"
            previousClassName="page-item"
            previousLabel={<>&laquo;</>}
            nextLabel={<>&raquo;</>}
          />}
        </Col>
        <Col lg={3}></Col>
      </Row>

    </div>
  );
};

export default GalleryPage;