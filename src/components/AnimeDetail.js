import React, {useEffect, useState} from 'react'
import { useParams } from 'react-router-dom';
import {Container, Row, Col, Spinner} from 'react-bootstrap'

import '../styles.css';


const AnimeDetail = () => {
  
   const params = useParams();
   const {id} = params;

    const [AnimeDetail,setAnimeDetail] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(()=>{
        const consultaApiByID = async ()=>{
            try {
                const response = await fetch (`https://api.jikan.moe/v4/anime/${id}`);
                const resultado = await response.json();
                // console.log('resultado.data:',resultado.data);
                
                setAnimeDetail(resultado.data);
                setLoading(false);
                // console.log('AnimeDetail: ok:', resultado.data);
               
            } catch (error) {
                console.log('error_detail:',error);
            }
        }
        consultaApiByID();
    },[])
  
    return (
    <div>
        {loading ?         
        <Spinner animation="border" variant="warning" />: 
        <>
        <Container fluid className='blackBg'>
        <h2>{AnimeDetail.title}</h2>
            <Row>
                <Col className='contenedor_text_detail'>
        
            <div>
            <p className='detail_label'>Sinopsis: </p>{AnimeDetail.synopsis}
            </div>
            <div>        
            <p className='detail_label'>Número de episodios: </p>{AnimeDetail.episodes}
            </div>
            <div>
            <p className='detail_label'>Score:</p> {AnimeDetail.score} /10
            </div>
            <div>
            <p className='detail_label'>Clasificacion:</p> {AnimeDetail.rating}
            </div>
                    <Row>
                        {AnimeDetail.genres.map((genre,index) =>{
                            const {name} = genre;
                            return(
                                <Col className='card_style' key={index}>
                                <p>{name}</p>
                                </Col>
                            )
                        })}

                    </Row>
                </Col>
                <Col>
                    <img src={AnimeDetail.images.jpg.large_image_url} alt={AnimeDetail.title} className='image_detail'/>
                    <p>{AnimeDetail.year}</p>
                </Col>
            </Row>
        </Container>
        
        </>
        }
        
    </div>
  )
}

export default AnimeDetail