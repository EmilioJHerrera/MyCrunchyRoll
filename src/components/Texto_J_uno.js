import React, {useState} from 'react'
import { Container, Row, Col } from 'react-bootstrap'; 
import Jumbo_list from './Jumbo_list';

import '../styles.css';


const Texto_J_uno = ({title,subTitle,Data}) => {

    

  return (
    <div>
        <Container className='contenedor_text_intro contenedor_max_vh'>
            <h3 className='texto_blanco'>{title}</h3>
            <p className='texto_gris'>{subTitle}</p>


            <Jumbo_list Data= {Data}/>
            </Container>        
    </div>
  )
}

export default Texto_J_uno