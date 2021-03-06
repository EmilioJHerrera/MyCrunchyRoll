import React, {useRef} from 'react'
import { Container, Row, Col } from 'react-bootstrap'; 
import '../styles.css';
import { NavLink, Link } from 'react-router-dom';
import { scroller } from 'react-scroll';

const Texto_intro = () => {
   
  return (
    <Container>
        <h1>Mi versión de Crunchyroll</h1>
        <p>No cabemos en nosotros del gozo por poder compartir nuestro nuevo aspecto y funcionamiento, además de algunas funcionalidades extra para ayudarte a disfrutar más del anime. Mientras exploras, siéntete libre de remitirnos cualquier sugerencia para que podamos hacer Crunchyroll todavía mejor.</p>

        <Container>
            <Row>
                {/* <Col><button className='boton' onClick={()=>{console.log('aqui')}}>miboton</button></Col> */}
                <Col><Link to='/Login' className='boton'>LogIn</Link></Col>
                <Col><button onClick={()=>scroller.scrollTo('jumbo') } className='boton'>SCROLL HACIA ABAJO</button></Col>
                {/* <Col><button className='boton'>miboton</button></Col> */}
            </Row>
        </Container>

    </Container>
  )
}

export default Texto_intro