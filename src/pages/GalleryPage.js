import { useEffect, useState, useMemo } from 'react';
import { Row, Col, Form } from 'react-bootstrap'
import GalleryCard from '../components/GalleryCard/GalleryCard';
import Paginate from '../components/Pagination/Paginate';
import Paginate2 from '../components/Pagination/Paginate2';
import ReactPaginate from 'react-paginate'
import '../components/Pagination/Paginate.css'
import './gallery.css'
import allProducts from '../Data.json'
import Select from 'react-select'
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
  const [displayedProducts, setDisplayedProducts] = useState(products.slice(0, perPage));
  const { connection } = useConnection();
  const { publicKey } = useWallet();
  const wallet = useWallet();
  const [value, setValue] = useState({});
  const [check, setCheck] = useState(false);
  const [type,setType] = useState('All');
  const [color,setcolor] = useState('All');

  // search for traits
  function getColors(allProducts) {
    let colorsArr = [...new Set(allProducts.map(x => x.traits[0].value))]
    return colorsArr
  }

  //search for types
  function getType() {
    let typeArr = [...new Set(allProducts.map(x => x.traits[1].value))]
    return typeArr
  }


  useEffect(() => {
    async function alignpages() {
      setNumberOfPages(products.length / perPage);
      console.log(numberOfPages)
      console.log("acdbef")
    }
    alignpages();
  }, [displayedProducts, products, numberOfPages])


  const updatePage = ({ selected }) => {
    selected = selected + 1;
    console.log(selected)
    console.log(products)
    setDisplayedProducts(products.slice((selected - 1) * perPage, (selected * perPage)))
  }


  // const [tempproducts, setTempProducts] = useState([]);
  async function changeProducts(valuetype,valuecolor) {
    //type
    //0 - color
    //1 - type
    console.log(valuetype)
    console.log(valuecolor)
    
    if(valuetype=='All' && valuecolor=='All'){
      await setProducts(allProducts)
      await setDisplayedProducts(products.slice(0, perPage))
    }
    else if(valuetype=='All'){
      await setProducts(allProducts.filter(product => product.traits[0].value === valuecolor))
      await setDisplayedProducts(products.slice(0, perPage))
    }
    else if(valuecolor='All'){
      await setProducts(allProducts.filter(product => product.traits[1].value === valuetype))
      await setDisplayedProducts(products.slice(0, perPage))
    }
    else{
      await setProducts(allProducts.filter(product => product.traits[1].value === valuetype && product.traits[0].value === valuecolor))
      // await setProducts(tempproducts.filter(product => product.traits[0].value === valuecolor))
      await setDisplayedProducts(products.slice(0, perPage))
    }
    
    console.log(products)

  }

  const typeChange = async (e) => {
    
    setType(e.value)
    await changeProducts(e.value, color)
    // await setProducts(allProducts.filter(product => product.traits[1].value === e.value), () => {
    //   console.log(products)
    // })
    
    // console.log(allProducts)
    //console.log(getType())
  }





  const colorChange = async (e) => {
    // console.log(e.value)
    setcolor(e.value)
    await changeProducts(type,e.value )
    // await setProducts(allProducts.filter(product => product.traits[0].value === e.value), () => {
    //   console.log(products)
    // })
    // await setDisplayedProducts(products.slice(0, perPage))
  }

  
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

  const customStyles = {
      option: (provided, state) => ({
        ...provided,
        color: state.isFocused ? "black" : "rgba(0, 0, 0, 0.4)",
        backgroundColor: state.isFocused ? "white" : "white",
      }),
      placeholder: () => ({
        color:  "black" ,
      }),
      input: (state)=>({
        opacity: "0",
        display:"none",
      }),
      control: ()=>({
        borderTop: "solid 2px black !important",
        borderLeft: "solid 2px black !important",
        borderRight: "solid 2px black !important",
        borderBottom: "solid 2px black !important",
        borderRadius: "0 !important",
        display: "flex",
      }),
      menu: (provided, state)=>({
        ...provided,
        marginTop: "0",
        borderLeft: "solid 2px black !important",
        borderRight: "solid 2px black !important",
        borderBottom: "solid 2px black !important",
        borderRadius: "0 !important",
      })
  }

  const options1 = [
    { value: 'All', label: 'Type: All' },
    { value: 'Washed One', label: 'Washed One' },
    { value: 'Washed Two', label: 'Washed Two' },
    { value: 'Ripple One', label: 'Ripple One' },
    { value: 'Ripple Two', label: 'Ripple Two' },
    { value: 'Ripple Three', label: 'Ripple Three' },
    { value: 'Split', label: 'Split' },
  ];
  const options2 = [
    { value: 'All', label: 'Color: All' },
    { value: 'Red', label: 'red' },
    { value: 'Cyan', label: 'cyan' },
    { value: 'Yellow', label: 'yello' },
    { value: 'White', label: 'white' },
    { value: 'Black', label: 'black' },
  ];
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
                {/* <WalletMultiButton /> */}
              </Col>
              <Col lg={3}></Col>
              <Col lg={3}></Col>
            </Row>
            <Row className='sticky-row mr-0'>
              <Col lg={3}></Col>
              <Col lg={6} className='px-3'>
                <Row className='p-0'>
                  <Col lg={9} className='p-0 filters'>
                    <Row className='p-0'>
                      <Col lg={4}>

                        {/* <Form.Group>
                          <Form.Control as="select" className='form-select' style={{color:  ? 'red' : 'blue'}} onChange={typeChange} aria-label="Default select example">
                            <option style = {customStyles} value="all">Type: All</option>
                            <option value="Washed One">Washed One</option>
                            <option value="Washed Two">Washed Two</option>
                            <option value="Ripple One">Ripple One</option>
                            <option value="Ripple Two">Ripple Two</option>
                            <option value="Ripple Three">Ripple Three</option>
                            <option value="Split Three">Split Three</option>
                          </Form.Control>
                        </Form.Group> */}
                        <Select
                          styles={customStyles}
                          options={options1}
                          onChange={typeChange} 
                          
                          placeholder={options1[0].label}
                          aria-label="Default select example"
                        />
                      </Col>
                      <Col lg={4}>

                        {/* <Form.Group>
                          <Form.Control as="select" className='form-select' onChange={colorChange} aria-label="Default select example">
                            <option value="all">Color: All</option>
                            <option value="red">Red</option>
                            <option value="cyan">Cyan</option>
                            <option value="yellow">Yellow</option>
                            <option value="white">White</option>
                            <option value="black">Black</option>
                          </Form.Control>
                        </Form.Group> */}
                        <Select
                          styles={customStyles}
                          options={options2}
                          onChange={colorChange} 
                          
                          placeholder={options2[0].label}
                          aria-label="Default select example"
                        />



                      </Col>
                      <Col lg={4}></Col>
                    </Row>
                  </Col>
                  {/* <Col lg={3} className='p-0'> */}
                  <div className='numberOfPieces'> {products.length} pieces</div>
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