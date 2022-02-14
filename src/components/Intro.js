import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'; 
import '../styles.css';
import Texto_intro from './Texto_intro';


const Intro = () => {
  return (
    <div >
       <Container fluid className='background_orange_gradient paddingVertical'>

        <Container className='blackBg'>
            <Row>
          <Col >
          
            <Texto_intro/>
          </Col>
          <Col>
          
          <img src={require('../images/hime-top.png')} alt='hime' className='image'/>
          </Col>
          </Row>
        </Container>
      </Container>
    </div>
  )
}

export default Intro