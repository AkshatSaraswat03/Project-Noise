import {useEffect, useState, useMemo } from 'react';
import { Row, Col, Form } from 'react-bootstrap'
import GalleryCard from '../components/GalleryCard/GalleryCard';
import Paginate from '../components/Pagination/Paginate';
import Paginate2 from '../components/Pagination/Paginate2';
import ReactPaginate from 'react-paginate'
import '../components/Pagination/Paginate.css'
import './gallery.css'
import allProducts from '../Data.json'

import { ConnectionProvider, WalletProvider, useConnection, useWallet } from '@solana/wallet-adapter-react';
import { WalletAdapterNetwork, WalletNotConnectedError } from '@solana/wallet-adapter-base';
import {
  getPhantomWallet,  
  getSolflareWallet,
  getSolletWallet,  
} from '@solana/wallet-adapter-wallets';
import {
  WalletModalProvider,
  WalletDisconnectButton,
  WalletMultiButton
} from '@solana/wallet-adapter-react-ui';
import { clusterApiUrl } from '@solana/web3.js';

// Default styles that can be overridden by your app
require('@solana/wallet-adapter-react-ui/styles.css');

const GalleryPage = () => {

  const perPage = 10;
  const [products, setProducts] = useState(allProducts);

  const [numberOfPages, setNumberOfPages] = useState(0)
  const [displayedProducts, setDisplayedProducts] = useState(allProducts.slice(0, perPage));


  // search for traits
  function getColors(allProducts) {
    // let colorsArr = products.filter((v, i, self) => {
    //   return i === self.indexOf(v)
    // })
    // console.log(colorsArr)

    // return colorsArr;

    let colorsArr = [...new Set(allProducts.map(x => x.traits[0].value))]
    return colorsArr

  }

  function getType() {
    // let colorsArr = products.filter((v, i, self) => {
    //   return i === self.indexOf(v)
    // })
    // console.log(colorsArr)

    // return colorsArr;

    let colorsArr = [...new Set(allProducts.map(x => x.traits[0].value))]
    return colorsArr
  }


  useEffect(() => {
    async function alignpages() {
      setNumberOfPages(allProducts.length / perPage);
      console.log(numberOfPages)
      console.log("acdbef")
    }
    alignpages();
  }, [])


  const updatePage = ({ selected }) => {
    selected = selected + 1;
    console.log(selected)
    setDisplayedProducts(allProducts.slice((selected - 1) * perPage, (selected * perPage)))
  }

  const typeChange = (e) => {
    console.log(e.target.value)
    setProducts(allProducts.filter(product => product.traits[1].value === undefined || product.traits[1].value === e.target.value))
    console.log(products)
    console.log(allProducts)
  }

  const colorChange = (e) => {
    console.log(e.target.value)

  }

  const { connection } = useConnection();
  const { publicKey } = useWallet();
  const wallet = useWallet();
  const [value, setValue] = useState({});
  const [check, setCheck] = useState(false);

  // Can be set to 'devnet', 'testnet', or 'mainnet-beta'
  const network = WalletAdapterNetwork.Devnet;

  // You can also provide a custom RPC endpoint
  const endpoint = useMemo(() => clusterApiUrl(network), [network]);

  // @solana/wallet-adapter-wallets includes all the adapters but supports tree shaking --
  // Only the wallets you configure here will be compiled into your application
  const wallets = useMemo(() => [
    getPhantomWallet(),    
    getSolletWallet({ network }),
    getSolflareWallet(),        
  ], [network]);


  return (
    <ConnectionProvider endpoint={endpoint}>
      <WalletProvider wallets={wallets} autoConnect>
        <WalletModalProvider >
          <div className='light-bg gallery-content'>
            <Row className=' light-bg mr-0'>
              <Col lg={3}></Col>

              <Col className='px-3'>
                <h3>THE ORIGIN SERIES</h3>
                <h1>#REF<span className='primary-text'>1</span>ECT</h1>
                <p>
                  It is a journey, a constant change, a re-evaluation.<br />
                  It is a whole wide spectrum beginning from clean lines and ending up on completely diffused noise.
                </p>
                <WalletMultiButton  />
              </Col>
              <Col lg={3}></Col>
              <Col lg={3}></Col>
            </Row>
            <Row className='sticky-row mr-0'>
              <Col lg={3}></Col>
              <Col lg={6} className='px-3'>
                <Row className='p-0'>
                  {/* <Col lg={9} className='p-0 filters'>
                    <Row className='p-0'>
                      <Col lg={4}>

                        <Form.Group>
                          <Form.Control as="select" className='form-select' onChange={typeChange} aria-label="Default select example">
                            <option value="all">Type: All</option>
                            <option value="washedone">Washed One</option>
                            <option value="washedtwo">Washed Two</option>
                            <option value="rippleone">Ripple One</option>
                            <option value="rippletwo">Ripple Two</option>
                            <option value="ripplethree">Ripple Three</option>
                            <option value="splitthree">Split Three</option>
                          </Form.Control>
                        </Form.Group>


                      </Col>
                      <Col lg={4}>

                        <Form.Group>
                          <Form.Control as="select" className='form-select' onChange={colorChange} aria-label="Default select example">
                            <option value="all">Color: All</option>
                            <option value="red">Red</option>
                            <option value="cyan">Cyan</option>
                            <option value="yellow">Yellow</option>
                            <option value="white">White</option>
                            <option value="black">Black</option>
                          </Form.Control>
                        </Form.Group>




                      </Col>
                      <Col lg={4}></Col>
                    </Row>
                  </Col> */}
                  {/* <Col lg={3} className='p-0'> */}
                  <div className='numberOfPieces'> {allProducts.length} pieces</div>
                  {/* </Col> */}
                </Row>
              </Col>
              <Col lg={3}></Col>
            </Row>
            <Row className='mr-0'>
              <Col lg={3}></Col>
              <Col lg={6} className='px-3'>
                <Row className='mr-0'>


                  {displayedProducts.map((product, i) => (
                    <Col key={i} sm={12} lg={6} style={{ padding: '5px' }}>
                      <GalleryCard product={product} />
                    </Col>
                  ))}
                </Row>
              </Col>
              <Col lg={3}></Col>
            </Row>

            <Row className='mr-0'>
              <Col lg={3}></Col>
              <Col lg={6} className='text-center'>
                {numberOfPages > 1 && <ReactPaginate
                  pageCount={numberOfPages}
                  pageRangeDisplayed={2}
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
          </WalletModalProvider>
       </WalletProvider>
     </ConnectionProvider>
  );
};

export default GalleryPage;