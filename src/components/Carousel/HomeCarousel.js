import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import './HomeCarousel.css'
import carousel1 from '../../assets/carousel1.png'
import carousel2 from '../../assets/carousel2.png'
import carousel3 from '../../assets/carousel3.png'
import carousel4 from '../../assets/carousel4.png'
import carousel5 from '../../assets/carousel5.png'
import carousel6 from '../../assets/carousel6.png'


const HomeCarousel = () => {

  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 1,
      partialVisibilityGutter: 250 // this is needed to tell the amount of px that should be visible.
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 1,
      partialVisibilityGutter: 80 // this is needed to tell the amount of px that should be visible.
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
      partialVisibilityGutter: 60 // this is needed to tell the amount of px that should be visible.
    }
  }

  const img = [
    carousel1,
    carousel2,
    carousel3,
    carousel4,
    carousel5,
    carousel6
  ]



  return (
    <>
      <Carousel
        swipeable={true}
        draggable={false}
        responsive={responsive}
        // ssr={true} 
        // partialVisible={true}
        infinite={true}
        keyBoardControl={true}
        containerClass="carousel-container"
        removeArrowOnDeviceType={["tablet", "mobile"]}
        deviceType="Desktop"
        itemClass="carousel-item-padding-40-px"
        className='homecarousel'
      >
        {img.map((image, index) => {
          return (
            <div key={index} style={{ position: "relative" }}>
              <img
                draggable={false}
                alt="text"
                style={{ width: "100%", height: "100%" }}
                src={image}
              />
            </div>
          );
        })}
      </Carousel>
    </>
  )
}

export default HomeCarousel
