import React, {useState} from 'react';
import { Container,Row, Col } from 'react-bootstrap'

import '../styles.css'
import Texto_J_uno from './Texto_J_uno';

import Data_Jumbo_2 from '../Data/Data_Jumbo_2';



const Jumbo_dos = () => {
  const [Data, setData] = useState(Data_Jumbo_2);
    return (
    <>
  
  <Container fluid className='background_gray_gradient'>
            <Row>
      <Col>
      <img src={require('../images/keyarts.png')} alt='key arts' className='image'/>
      </Col>
      <Col>
      <Texto_J_uno title={'Te sentirás más en casa que nunca con la nueva página principal'} subTitle={'Lo hemos reorganizado todo a tu conveniencia.'} Data={Data}/>
      </Col>
            </Row>
        </Container>
    </>
  )
}

export default Jumbo_dos