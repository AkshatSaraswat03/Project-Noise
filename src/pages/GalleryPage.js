import { useState, useEffect } from 'react';
import { Row, Col } from 'react-bootstrap'
import GalleryCard from '../components/GalleryCard/GalleryCard';
import Paginate from '../components/Pagination/Paginate';
import Paginate2 from '../components/Pagination/Paginate2';
import ReactPaginate from 'react-paginate'
import '../components/Pagination/Paginate.css'
import './gallery.css'
import products from '../Data.json'

const GalleryPage = () => {

  const perPage = 10;
  const [allProducts, setAllProducts] = useState([]);

  // const [displayedProducts, setDisplayedProducts] = useState([]);
  // const [loading, setLoading] = useState(true)
  // const [dummy, setDummy] = useState(false)

  // let products = [
  //   {
  //     "code": "#1240",
  //     "owner": "CM1CPAJPZ59VCMtFBP5pdN4LT3MaziYZoaxDSBPTvJ65",
  //     "src": "https://arweave.net/TFlPE0iN7DRzItMiGn97C53tMTE2gsg524hySCAi_So",
  //     "traits": [
  //       {
  //         "trait_type": "Color",
  //         "value": "Yellow"
  //       },
  //       {
  //         "trait_type": "Type",
  //         "value": "Ripple One"
  //       }
  //     ]
  //   },
  //   {
  //     "code": "#254",
  //     "owner": "G22JKaE5nPLT5b613QvjN6SdqpEK6c8noVtGPS99gq3C",
  //     "src": "https://arweave.net/jEsrUkwT0_5H4fvCbSVUW-9X-QSMXg4piYVBGUA5slU",
  //     "traits": [
  //       {
  //         "trait_type": "Color",
  //         "value": "White"
  //       },
  //       {
  //         "trait_type": "Type",
  //         "value": "Wave Two"
  //       }
  //     ]
  //   },
  //   {
  //     "code": "#1762",
  //     "owner": "8TyvhCyyYfSPRcqoT1f7UkBANPT4VUi7arnk5t6XrFeG",
  //     "src": "https://arweave.net/cMHrUj2e-56YHf9VvxVRE5AKsZn2rrO3Ib5yH7sw29o",
  //     "traits": [
  //       {
  //         "trait_type": "Color",
  //         "value": "Cyan"
  //       },
  //       {
  //         "trait_type": "Type",
  //         "value": "Washed One"
  //       }
  //     ]
  //   },
  //   {
  //     "code": "#1795",
  //     "owner": "A13Qaiq6venyFa7KT2geaoySSPaudgngPHtCNQtPXYmh",
  //     "src": "https://arweave.net/FjtQkKgeZFds54xdj7HidEAXMDY04gIsm1WeXU4wzL8",
  //     "traits": [
  //       {
  //         "trait_type": "Color",
  //         "value": "Yellow"
  //       },
  //       {
  //         "trait_type": "Type",
  //         "value": "Washed One"
  //       }
  //     ]
  //   },
  //   {
  //     "code": "#1843",
  //     "owner": "Fw7tgsp872HmLzLvEY7Mj13bAYJzQ1Gqv5Es9r2k9wfH",
  //     "src": "https://arweave.net/hiK2jediBM__jmsweGJ44g0SI_DqQgeDnpKKBPn1T4c",
  //     "traits": [
  //       {
  //         "trait_type": "Color",
  //         "value": "White"
  //       },
  //       {
  //         "trait_type": "Type",
  //         "value": "Washed One"
  //       }
  //     ]
  //   },
  //   {
  //     "code": "#1291",
  //     "owner": "GgP4YvVvP28mcinvBNLJeUf5gFsJgLMxzgwvEVdMg6r9",
  //     "src": "https://arweave.net/1keIHLjSHDrBGpDFPHMfYP0y8kHm7EuqxsSPOq_X3TE",
  //     "traits": [
  //       {
  //         "trait_type": "Color",
  //         "value": "White"
  //       },
  //       {
  //         "trait_type": "Type",
  //         "value": "Ripple One"
  //       }
  //     ]
  //   },
  //   {
  //     "code": "#309",
  //     "owner": "6yn57aNiuW3iM68GMCsCHv1LwrU4D3QRZshHAEL16bq2",
  //     "src": "https://arweave.net/2q1G0EI29h81KKrkQNUQyIG5bFyDdALN8u2pYNoY55s",
  //     "traits": [
  //       {
  //         "trait_type": "Color",
  //         "value": "Red"
  //       },
  //       {
  //         "trait_type": "Type",
  //         "value": "Wave Three"
  //       }
  //     ]
  //   },
  //   {
  //     "code": "#1223",
  //     "owner": "7QH9sLYS2usbTqu6Q2USVGbr4gvvmPt31HbiPXCjBs7J",
  //     "src": "https://arweave.net/UAMS4hCqdiwnwleWRNhQuVLePejTDFcjQojD9eEuqmU",
  //     "traits": [
  //       {
  //         "trait_type": "Color",
  //         "value": "Cyan"
  //       },
  //       {
  //         "trait_type": "Type",
  //         "value": "Ripple One"
  //       }
  //     ]
  //   },
  //   {
  //     "code": "#1649",
  //     "owner": "EsdoPmXa1sZYfnjhJHrfwNKPxVhcb2pviyVV8mwr864B",
  //     "src": "https://arweave.net/hCZMN82ol03wzA5BYU6hYN_kld2W_ClPfMA4yYlisKo",
  //     "traits": [
  //       {
  //         "trait_type": "Color",
  //         "value": "White"
  //       },
  //       {
  //         "trait_type": "Type",
  //         "value": "Ripple Three"
  //       }
  //     ]
  //   },
  //   {
  //     "code": "#258",
  //     "owner": "DzitEJasKawje6mKdhT5twsXo2h6n6mbSQbbSaZNGYXY",
  //     "src": "https://arweave.net/2fm8Dr8gkuf2dtvxpG15YlpMb-htIeaYY2zZcxc8bgQ",
  //     "traits": [
  //       {
  //         "trait_type": "Color",
  //         "value": "White"
  //       },
  //       {
  //         "trait_type": "Type",
  //         "value": "Wave Two"
  //       }
  //     ]
  //   },
  //   {
  //     "code": "#260",
  //     "owner": "8t3xJhtWmGoiCUTv1fzSJTdLRBkkG8kAxUjyKv8iNwGi",
  //     "src": "https://arweave.net/mgWpNodG-3HKS6Nec-pLTQJgdirWOXcBrHEBSMoSb-w",
  //     "traits": [
  //       {
  //         "trait_type": "Color",
  //         "value": "White"
  //       },
  //       {
  //         "trait_type": "Type",
  //         "value": "Wave Two"
  //       }
  //     ]
  //   },
  //   {
  //     "code": "#192",
  //     "owner": "2DZYhWvsUDUg3qmWuvLZ3xATwVH4zzJq7CEXB3axKTHX",
  //     "src": "https://arweave.net/6Qca0vB1zzuzFB5asizZe8pgThaoPcAxXPKBTjddv7A",
  //     "traits": [
  //       {
  //         "trait_type": "Color",
  //         "value": "Cyan"
  //       },
  //       {
  //         "trait_type": "Type",
  //         "value": "Wave Two"
  //       }
  //     ]
  //   },
  //   {
  //     "code": "#1505",
  //     "owner": "3gtMEHx2ho953tqNFefya6BHmEJfZZJLzd8KiQxLexJv",
  //     "src": "https://arweave.net/Cf-6Y60SHoSCHOOvvTXHQ_VN1LTqT_-2bFKPPECRGsY",
  //     "traits": [
  //       {
  //         "trait_type": "Color",
  //         "value": "Black"
  //       },
  //       {
  //         "trait_type": "Type",
  //         "value": "Ripple Three"
  //       }
  //     ]
  //   },
  //   {
  //     "code": "#775",
  //     "owner": "EueDpCgu1riw9AUW6ZcmiASLvUikkigG1jAraunqEb4i",
  //     "src": "https://arweave.net/_lUdQZ8D3LsCAiqhiflU0LQQNNmiOmvOD0DY4iDSXtk",
  //     "traits": [
  //       {
  //         "trait_type": "Color",
  //         "value": "Cyan"
  //       },
  //       {
  //         "trait_type": "Type",
  //         "value": "Split Two"
  //       }
  //     ]
  //   },
  //   {
  //     "code": "#1208",
  //     "owner": "EsxGkUjHwSDy5BmzJbVuHSbrs3RJvrFHZxJfEVGGbh8G",
  //     "src": "https://arweave.net/d4zJOA7J59DtSw4UMnz8yzSluCX7phRxwDLw05OkQuY",
  //     "traits": [
  //       {
  //         "trait_type": "Color",
  //         "value": "Cyan"
  //       },
  //       {
  //         "trait_type": "Type",
  //         "value": "Ripple One"
  //       }
  //     ]
  //   },
  //   {
  //     "code": "#2019",
  //     "owner": "Bv8AgsvPD38GfrYioKfv9wvktRXT6aiAvCwm4drxdoi3",
  //     "src": "https://arweave.net/ND4A9rYlLv9V3k7pxAPH1-m9N1gcs1oRFbpMw1BELkg",
  //     "traits": [
  //       {
  //         "trait_type": "Color",
  //         "value": "White"
  //       },
  //       {
  //         "trait_type": "Type",
  //         "value": "Washed Two"
  //       }
  //     ]
  //   },
  //   {
  //     "code": "#1019",
  //     "owner": "GqpoQtEQXfXoQAWUoVcc8MJzWBUz2Q3SnXoAyM8QQRRG",
  //     "src": "https://arweave.net/_zHKZHCiY7mNdjpfIzymofDHqYjUHeTwcV2IM9sIxak",
  //     "traits": [
  //       {
  //         "trait_type": "Color",
  //         "value": "Red"
  //       },
  //       {
  //         "trait_type": "Type",
  //         "value": "Split Four"
  //       }
  //     ]
  //   },
  //   {
  //     "code": "#1081",
  //     "owner": "4Kf7iPdpiaqjihFABhm1gevEEXgwQihHq2frcaBaxMgT",
  //     "src": "https://arweave.net/-O3dJ-LmcEf9XcAwN8ZeU9BfQWRj0HdhkhrU8MS_EM4",
  //     "traits": [
  //       {
  //         "trait_type": "Color",
  //         "value": "Yellow"
  //       },
  //       {
  //         "trait_type": "Type",
  //         "value": "Split Four"
  //       }
  //     ]
  //   },
  //   {
  //     "code": "#66",
  //     "owner": "9v8ZPdHTokoHhFnhVGVWyWMw2dWNC3UFULuVuJufWGBh",
  //     "src": "https://arweave.net/2Z8zp58od2sN4HsRHpiLiITv6TQwea44u3BCDoq70ys",
  //     "traits": [
  //       {
  //         "trait_type": "Color",
  //         "value": "Cyan"
  //       },
  //       {
  //         "trait_type": "Type",
  //         "value": "Wave One"
  //       }
  //     ]
  //   },
  //   {
  //     "code": "#1645",
  //     "owner": "AeP4RjEowHME2AuypW3RRNF1RaUpwk5QbS1ubYNCLk9S",
  //     "src": "https://arweave.net/IBXWuL3kDA8klWJXBNmB87GJWwSEdSbENuw_j7MDwhM",
  //     "traits": [
  //       {
  //         "trait_type": "Color",
  //         "value": "White"
  //       },
  //       {
  //         "trait_type": "Type",
  //         "value": "Ripple Three"
  //       }
  //     ]
  //   },
  //   {
  //     "code": "#1746",
  //     "owner": "BBR1W86uHH84sqpXYn3eQSwvhprzQvG2DywASGgtshkw",
  //     "src": "https://arweave.net/GiYQ9eFoAEPZ_2ViCkmgaKvJRcbxfWA9pDBBKn5OXx8",
  //     "traits": [
  //       {
  //         "trait_type": "Color",
  //         "value": "Cyan"
  //       },
  //       {
  //         "trait_type": "Type",
  //         "value": "Washed One"
  //       }
  //     ]
  //   },
  //   {
  //     "code": "#1381",
  //     "owner": "G1MWWcZAX1XYhYTwim3p8Sxz1y75Ci7YjjBRfobyJ1Tb",
  //     "src": "https://arweave.net/G4Vdu_fJbt3xtyQ3RRHInK-l3VeN63pEqmi6Ko7uWZU",
  //     "traits": [
  //       {
  //         "trait_type": "Color",
  //         "value": "Cyan"
  //       },
  //       {
  //         "trait_type": "Type",
  //         "value": "Ripple Two"
  //       }
  //     ]
  //   },
  //   {
  //     "code": "#1063",
  //     "owner": "G87WMPcXnpErNcXc46X22WS8g3sDyDmJ1KmQXia6RkH8",
  //     "src": "https://arweave.net/4xbkfncfN7hWeVf1yFm7uXlrFxQpES0Nfhjnxe27N_Y",
  //     "traits": [
  //       {
  //         "trait_type": "Color",
  //         "value": "Cyan"
  //       },
  //       {
  //         "trait_type": "Type",
  //         "value": "Split Four"
  //       }
  //     ]
  //   },
  //   {
  //     "code": "",
  //     "owner": "",
  //     "src": "",
  //     "traits": {}
  //   },
  //   {
  //     "code": "",
  //     "owner": "",
  //     "src": "",
  //     "traits": {}
  //   },
  //   {
  //     "code": "#2206",
  //     "owner": "2Bca4LXmhrb2aC7doNqigQU3VSXH7cpMiLUZKeZMhKQN",
  //     "src": "https://arweave.net/fEk9c5HBKkkQ06qP9Porc5p_LlOlvxc4M0LzSfpONDQ",
  //     "traits": [
  //       {
  //         "trait_type": "Color",
  //         "value": "Black"
  //       },
  //       {
  //         "trait_type": "Type",
  //         "value": "Washed Three"
  //       }
  //     ]
  //   },
  //   {
  //     "code": "#2044",
  //     "owner": "JjJUHd4im1igUGBaAT4ubg15q6JHk9tWEWaBDC1UkGM",
  //     "src": "https://arweave.net/a3KojVCYm4xRkYwIMHk-8PDSiXfV9ftofEawulxTzf4",
  //     "traits": [
  //       {
  //         "trait_type": "Color",
  //         "value": "Black"
  //       },
  //       {
  //         "trait_type": "Type",
  //         "value": "Washed Three"
  //       }
  //     ]
  //   },
  //   {
  //     "code": "#1585",
  //     "owner": "9UQ1KdWiP18TYYUeJYTfZKViXjZybXwb7ZeAK3qnuY4E",
  //     "src": "https://arweave.net/PGSv2ueSH11GEoNazyoibrnPtIB_fGsPQSeeZNvx4t0",
  //     "traits": [
  //       {
  //         "trait_type": "Color",
  //         "value": "Cyan"
  //       },
  //       {
  //         "trait_type": "Type",
  //         "value": "Ripple Three"
  //       }
  //     ]
  //   },
  //   {
  //     "code": "#2131",
  //     "owner": "HKEP7LohoaiafNG86tfesnDagMWBN4QU46t1cPEfBr5u",
  //     "src": "https://arweave.net/ip5EMQhUpna2qR-BpmaV4hh_L57p2tKasCjtYYAGfK4",
  //     "traits": [
  //       {
  //         "trait_type": "Color",
  //         "value": "Cyan"
  //       },
  //       {
  //         "trait_type": "Type",
  //         "value": "Washed Three"
  //       }
  //     ]
  //   },
  //   {
  //     "code": "#977",
  //     "owner": "8xWaQLZYhVhCWv5nxm8fSRRNYNqrAj7kswpfG7P92Vca",
  //     "src": "https://arweave.net/hCgrhfXuQRdQOY8EsA47jodV2-8Lktk9H-r3kNbep4M",
  //     "traits": [
  //       {
  //         "trait_type": "Color",
  //         "value": "Black"
  //       },
  //       {
  //         "trait_type": "Type",
  //         "value": "Split Four"
  //       }
  //     ]
  //   },
  //   {
  //     "code": "#173",
  //     "owner": "F8GvbMEiqZBZ6MRufvR8g7QWxqRfiZzEp8wnvp31tZ24",
  //     "src": "https://arweave.net/TqVtgd57AJIDxYO5yik-0QG5l55GWJaZxRviL9OnUhw",
  //     "traits": [
  //       {
  //         "trait_type": "Color",
  //         "value": "Red"
  //       },
  //       {
  //         "trait_type": "Type",
  //         "value": "Wave Two"
  //       }
  //     ]
  //   },
  //   {
  //     "code": "#769",
  //     "owner": "5Y9ezH1WPs3qVaA8RKJkfei8GK8gwrstWPsXadBC2nS",
  //     "src": "https://arweave.net/wGCLEJEMi-2SjL0Bz-Y9IwasfDKWD_AzZFg_EFGh13g",
  //     "traits": [
  //       {
  //         "trait_type": "Color",
  //         "value": "Cyan"
  //       },
  //       {
  //         "trait_type": "Type",
  //         "value": "Split Two"
  //       }
  //     ]
  //   },
  //   {
  //     "code": "#1852",
  //     "owner": "HGnSJtnqbY1JD4mqrggXBSPEU4TyWm4cRLi6s23CNY1M",
  //     "src": "https://arweave.net/sLgY8W9A3fVubz0Nbe7PKaOzABtG7OdeeOhrazunny0",
  //     "traits": [
  //       {
  //         "trait_type": "Color",
  //         "value": "White"
  //       },
  //       {
  //         "trait_type": "Type",
  //         "value": "Washed One"
  //       }
  //     ]
  //   },
  //   {
  //     "code": "#447",
  //     "owner": "CPF5uMkNynccS1tJcLYZq2KyJTjoFQXdGN27jPzwuo4o",
  //     "src": "https://arweave.net/a5Y48VIa697XJuf5qiluLGxVceavfFur1Dit8aB9nBU",
  //     "traits": [
  //       {
  //         "trait_type": "Color",
  //         "value": "Red"
  //       },
  //       {
  //         "trait_type": "Type",
  //         "value": "Wave Four"
  //       }
  //     ]
  //   },
  //   {
  //     "code": "#1027",
  //     "owner": "yoJL9FecLbDvJhcZvzy39fM7tLCegnFfkwPgeQXdv9j",
  //     "src": "https://arweave.net/o3enwjtMgXVd4SUAscQvL4iCISYWj-eDnr2Jje4q4No",
  //     "traits": [
  //       {
  //         "trait_type": "Color",
  //         "value": "Red"
  //       },
  //       {
  //         "trait_type": "Type",
  //         "value": "Split Four"
  //       }
  //     ]
  //   },
  //   {
  //     "code": "#626",
  //     "owner": "CHBZDv6GnMqVT8t8JV98JR3nWZodzri5NbcNwVFJ3XmP",
  //     "src": "https://arweave.net/o6cvNNhX77OIS7LGnF9L36bXq6kuKJdbgECNXt7rIGM",
  //     "traits": [
  //       {
  //         "trait_type": "Color",
  //         "value": "Cyan"
  //       },
  //       {
  //         "trait_type": "Type",
  //         "value": "Split One"
  //       }
  //     ]
  //   },
  //   {
  //     "code": "#1272",
  //     "owner": "E7hiZK9nrd447j9zkdQXpgDbnQkYWru51Gv7R2jVaoxP",
  //     "src": "https://arweave.net/YC1HcGvKY966oxECG1z7vUJANwbYYaC7bkK0OPBm_v0",
  //     "traits": [
  //       {
  //         "trait_type": "Color",
  //         "value": "White"
  //       },
  //       {
  //         "trait_type": "Type",
  //         "value": "Ripple One"
  //       }
  //     ]
  //   },
  //   {
  //     "code": "#179",
  //     "owner": "DKUJ4yHrR2EyBfboF1DPfPdLS8NSam2sA7QxFpWVQvfT",
  //     "src": "https://arweave.net/lGiEsyvO9FEoFfu0zCnw4ZOGLGKVxpu0gf5aSJpmcuw",
  //     "traits": [
  //       {
  //         "trait_type": "Color",
  //         "value": "Red"
  //       },
  //       {
  //         "trait_type": "Type",
  //         "value": "Wave Two"
  //       }
  //     ]
  //   },
  //   {
  //     "code": "#76",
  //     "owner": "EvvAETWDqGhPKaN8tkKukpa8NUEk2V7YJ17EeAAy2dPt",
  //     "src": "https://arweave.net/nsIc0xzHVwyFgWWg1HE4pzX_P5i3vhOn74mlT3KvVBc",
  //     "traits": [
  //       {
  //         "trait_type": "Color",
  //         "value": "Cyan"
  //       },
  //       {
  //         "trait_type": "Type",
  //         "value": "Wave One"
  //       }
  //     ]
  //   },
  //   {
  //     "code": "#968",
  //     "owner": "ACAq2DyoY93gtNcmzzLv3xfyvWsC3r8ZoZKvRFX4Lc5v",
  //     "src": "https://arweave.net/MGTBbGOX1agKiyzdD9-VKMDKZWQvnbvfWAEDjVMgjl4",
  //     "traits": [
  //       {
  //         "trait_type": "Color",
  //         "value": "White"
  //       },
  //       {
  //         "trait_type": "Type",
  //         "value": "Split Three"
  //       }
  //     ]
  //   },
  //   {
  //     "code": "#1414",
  //     "owner": "4RB6xN2rgE4WxR2HvnNpXWk9txjkrjSunFTBfdm7irvR",
  //     "src": "https://arweave.net/yBWicr3JSz8f2pCkRhHK86KT8BtLXoUL9QY_wi4lcKQ",
  //     "traits": [
  //       {
  //         "trait_type": "Color",
  //         "value": "Cyan"
  //       },
  //       {
  //         "trait_type": "Type",
  //         "value": "Ripple Two"
  //       }
  //     ]
  //   },
  //   {
  //     "code": "#1830",
  //     "owner": "3hgqdWvBr1dmgQbbY5iguPXc2EEu1iu6ZHMT2J6cNAGZ",
  //     "src": "https://arweave.net/Or3Vpo1ul-ERDAQ9qzGUPwkarP12btDKC-pDhRWHYe0",
  //     "traits": [
  //       {
  //         "trait_type": "Color",
  //         "value": "White"
  //       },
  //       {
  //         "trait_type": "Type",
  //         "value": "Washed One"
  //       }
  //     ]
  //   },
  //   {
  //     "code": "#41",
  //     "owner": "9VRYioEzN1Cfownqj8kDZhVaT5avQESovsiDNM23UXPr",
  //     "src": "https://arweave.net/nXkqsUWJaMUum7-i8jr4KY5btAaMGuMCKVzcEKgS95Q",
  //     "traits": [
  //       {
  //         "trait_type": "Color",
  //         "value": "Red"
  //       },
  //       {
  //         "trait_type": "Type",
  //         "value": "Wave One"
  //       }
  //     ]
  //   },
  //   {
  //     "code": "#1382",
  //     "owner": "GLSNzk5RgzujT94fmyBuR9n2urkqbTroWHv8f2HzHL9n",
  //     "src": "https://arweave.net/2KSg8atpsgiDR8pIuLPAfq_Jbs8IBG_El0hsOReUaqI",
  //     "traits": [
  //       {
  //         "trait_type": "Color",
  //         "value": "Cyan"
  //       },
  //       {
  //         "trait_type": "Type",
  //         "value": "Ripple Two"
  //       }
  //     ]
  //   },
  //   {
  //     "code": "#365",
  //     "owner": "FcWUKESmXkBdUmd7wRkq2JVSMfoy6WMmmEggTs8HTh7i",
  //     "src": "https://arweave.net/mseREfkV-g84DUQTLnsB6vmuonJ0kmbtsCXqqbaBDt0",
  //     "traits": [
  //       {
  //         "trait_type": "Color",
  //         "value": "Yellow"
  //       },
  //       {
  //         "trait_type": "Type",
  //         "value": "Wave Three"
  //       }
  //     ]
  //   },
  //   {
  //     "code": "#1338",
  //     "owner": "J3YQ8qE1xtfjkyCGv4SieNcZpFFFWfyqDxwN9CawpJ97",
  //     "src": "https://arweave.net/Cqpkc7E6hrB_6x4A4RPKFZun2pymF0j-gi1-y85Dvyw",
  //     "traits": [
  //       {
  //         "trait_type": "Color",
  //         "value": "Black"
  //       },
  //       {
  //         "trait_type": "Type",
  //         "value": "Ripple Two"
  //       }
  //     ]
  //   },
  //   {
  //     "code": "#442",
  //     "owner": "BXU5QSoAvwbyzuatWS8TGzyNmYacBMCiCSKMeCTFbRrw",
  //     "src": "https://arweave.net/iy1n84D2iFXYzX1YEI1i3irmoJaxTHV26qEgkjbdbwM",
  //     "traits": [
  //       {
  //         "trait_type": "Color",
  //         "value": "Red"
  //       },
  //       {
  //         "trait_type": "Type",
  //         "value": "Wave Four"
  //       }
  //     ]
  //   },
  //   {
  //     "code": "#422",
  //     "owner": "3NKzxYU2TF71TsK5DLuutTiWerVWwdwwK4HpABGGm747",
  //     "src": "https://arweave.net/_5cPU3j-_SlVHeLvwlW7JDFS1CanEU_06aAkmGAD-YE",
  //     "traits": [
  //       {
  //         "trait_type": "Color",
  //         "value": "Black"
  //       },
  //       {
  //         "trait_type": "Type",
  //         "value": "Wave Four"
  //       }
  //     ]
  //   },
  //   {
  //     "code": "#532",
  //     "owner": "99idvkFUQN6vrRNohFmkJKUUuUdRxqz1AuY1Ng1Wqt8N",
  //     "src": "https://arweave.net/-GHj3UH9tA4ZTRUYxRVtLUBXv0J5_4VNtjn1CTAc1Yc",
  //     "traits": [
  //       {
  //         "trait_type": "Color",
  //         "value": "White"
  //       },
  //       {
  //         "trait_type": "Type",
  //         "value": "Wave Four"
  //       }
  //     ]
  //   }
  // ];

  // useEffect(() => {
  //   async function fetchData() {

  //     let products = [];

  //     //TODO: update details for production server
  //     await fetch('https://mintapi.projectnoise.io:8443/WalletPOC/w2/rest/v1/wallets')
  //       .then(response => response.json())
  //       .then(data => {

  //         if (data.success) {
  //           console.log(data.result);
  //           for (var i = 0; i < data.result.data.length; i++) {
  //             let mint = data.result.data[i].transaction.toString();
  //             let product = {
  //               code: "",
  //               owner: "",
  //               src: "",
  //               traits: {}
  //             };
  //             //get NFT details from mint - 
  //             //TODO: update details for mainnet
  //             fetch('https://api.solscan.io/account?address=' + mint)
  //               .then(response => response.json())
  //               .then(data => {
  //                 let tokenInfo = data.data.tokenInfo;
  //                 let uri = data.data.metadata.data.uri;
  //                 product.code = tokenInfo.name;
  //                 product.owner = tokenInfo.tokenAuthority;
  //                 //get Image
  //                 fetch(uri)
  //                   .then(response => response.json())
  //                   .then(data => {
  //                     // console.log(data.attributes);
  //                     let attributes = data.attributes;
  //                     imageUri = data.image;
  //                     // console.log(imageUri);
  //                     product.src = imageUri;
  //                     product.traits = attributes;
  //                   });
  //               })
  //               .catch(error => {
  //                 console.log(error.message);
  //               });

  //             products.push(product);
  //           }
  //           setAllProducts(products)
  //           // console.log(allProducts)
  //           let num = (products.length % perPage === 0) ? parseInt(products.length / perPage) : parseInt(products.length / perPage) + 1;
  //           // console.log(num)
  //           setNumberOfPages(num)

  //           // console.log(products.slice(0, perPage))
  //           setDisplayedProducts(products.slice(0, perPage));
  //           setLoading(false)
  //         }
  //         else {
  //           console.log(data.result.message);
  //         }


  //       });
  //   }

  //   fetchData()

  // }, []);

  const [numberOfPages, setNumberOfPages] = useState(0)
  const [displayedProducts, setDisplayedProducts] = useState(products.slice(0, perPage));

  useEffect(() => {
    async function alignpages() {
      setNumberOfPages(products.length / perPage);
      console.log(numberOfPages)
      console.log("acdbef")
    }
    alignpages();
  }, [])


  const updatePage = ({ selected }) => {
    selected = selected + 1;
    console.log(selected)
    setDisplayedProducts(products.slice((selected - 1) * perPage, (selected * perPage)))
  }


  return (
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
  );
};

export default GalleryPage;