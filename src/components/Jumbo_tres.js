import React, {useState} from 'react'
import { Container,Row, Col } from 'react-bootstrap'

import '../styles.css'
import Texto_J_uno from './Texto_J_uno';

import Data_Jumbo_3 from '../Data/Data_Jumbo_3';

const Jumbo_tres = () => {
  const [Data, setData] = useState(Data_Jumbo_3);
    return (
    <>
      <Container fluid className='blackBg'>
            <Row>
      <Col>
      <Texto_J_uno title={'Toma el control con las Crunchylistas'} subTitle={'¿Quieres hacerte una colección de series con protagonistas de pelo verde? Pues sin problema:'} Data={Data}/>
      </Col>
      <Col>
      <img src={require('../images/mockup.png')} alt='mockups' className='image'/>
      </Col>
            </Row>
        </Container>
    
    </>
  )
}

export default Jumbo_tres