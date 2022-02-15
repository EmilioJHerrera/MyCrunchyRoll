import React from 'react'
import { Container,Row, Col } from 'react-bootstrap'

import '../styles.css'


const Main_hero = ({title, sinopsis, image}) => {
  
  
  



    return (
    <Container> 
    <div className='contenedor_hero'>
        <div className='bg-image'>
        {console.log('Image:',)}
            {/* <img src={require('../images/keyarts.png')} alt='logo crunchy' className='image_hero'/> */}
            <img src={image} alt='logo crunchy' className='image_hero'/>
        </div>
        
        <div className='bg-text'>
        <h1>{title}</h1>
        <p>{sinopsis}</p>
        </div>
        

    </div>
    </Container>
  )
}

export default Main_hero