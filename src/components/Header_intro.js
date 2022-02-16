import React from 'react'
import { Container,Row, Col } from 'react-bootstrap'

import { Link } from 'react-router-dom'

import '../styles.css'



const Header_intro = () => {
  return (
    <div >
        <Container fluid className='blackBg paddingVertical'>
            <Row>
      <Col>
      <Link to='/'>

      <img src={require('../images/logo.png')} alt='logo crunchy' className='logo'/>
      </Link>
      </Col>
            </Row>
        </Container>
    </div>
  )
}

export default Header_intro