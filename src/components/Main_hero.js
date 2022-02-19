import React from 'react'
import { Container,Row, Col } from 'react-bootstrap'

import { Link, useParams } from 'react-router-dom'

import '../styles.css'


const Main_hero = ({title, sinopsis, image, id}) => {
  
  
//   const slug = title;
//     console.log ('id:',id);



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
        <p>{id}</p>
        <button><Link to ={`/detail/${id}`} >ver detalles</Link></button>
        </div>
        

    </div>
    </Container>
  )
}

export default Main_hero