import React, {useState} from 'react';
import { Container,Row, Col } from 'react-bootstrap'

import '../styles.css'
import Texto_J_uno from './Texto_J_uno';

import Data_Jumbo_1 from '../Data/Data_Jumbo_1';


const Jumbo_uno = () => {
    const [Data, setData] = useState(Data_Jumbo_1);
  return (
    <div>
        
        <Container fluid className='blackBg'>
            <Row>
      <Col>
      <Texto_J_uno title={'Te sentirás más en casa que nunca con la nueva página principal'} subTitle={'Lo hemos reorganizado todo a tu conveniencia.'} Data={Data}/>
      </Col>
      <Col>
      <img src={require('../images/smartmockups.png')} alt='logo crunchy' className='image'/>
      </Col>
            </Row>
        </Container>
    
    </div>
  )
}

export default Jumbo_uno