import React from 'react'
import { Container,Row, Col } from 'react-bootstrap'

import '../styles.css'


const Header_intro = () => {
  return (
    <div >
        <Container fluid className='blackBg paddingVertical'>
            <Row>
      <Col>
      <img src={require('../images/logo.png')} alt='logo crunchy' className='logo'/>
      </Col>
            </Row>
        </Container>
    </div>
  )
}

export default Header_intro