import React from 'react';
import { Container,Row, Col } from 'react-bootstrap';

import '../styles.css'


const Footer = () => {
  return (
    <div>
         <Container fluid className='background_orange_gradient paddingVertical'>
            <Container className='blackBg'>
            <Row>
      <Col>
      <img src={require('../images/logo.png')} alt='logo crunchy' className='logo'/>
      </Col>
            </Row>
            </Container>
        </Container>
    </div>
  )
}

export default Footer