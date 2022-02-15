import React from 'react'
import { Container,Row, Col, Spinner } from 'react-bootstrap'
import Card_main from './Card_main';




import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 5
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 5
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1
  }
};





const Carrousel = ({data}) => {
  return (
<Carousel responsive={responsive}

infinite={true}
keyBoardControl={true}
removeArrowOnDeviceType={["tablet", "mobile"]}>

{data.map((item,index)=>{
          return(
            <Card_main index={index} item={item}/>
            // <Col>
            //     <div key={index}>
            //         <img src={item.images.jpg.image_url} alt="{item.title}"/>
            //         {/* <p>{item.mal_id}</p> */}
            //         <p>{item.title}</p>
            //         {/* <p>{item.images.jpg.image_url}</p> */}
            //     </div>
            //     </Col>
            )
          })}
        
        
</Carousel>
    
  )
}

export default Carrousel