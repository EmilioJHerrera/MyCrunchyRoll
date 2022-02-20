import React, {useEffect, useState} from 'react'
import { useParams } from 'react-router-dom';
import {Container, Row, Col, Spinner} from 'react-bootstrap'


const AnimeDetail = () => {
  
   const params = useParams();
   const {id} = params;
  console.log('params',params);
    const [AnimeDetail,setAnimeDetail] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(()=>{
        const consultaApiByID = async ()=>{
            try {
                const response = await fetch (`https://api.jikan.moe/v4/anime/${id}`);
                const resultado = await response.json();
                console.log('resultado.data:',resultado.data);
                
                setAnimeDetail(resultado.data);
                setLoading(false);
                console.log('AnimeDetail: ok:', resultado.data);
               
            } catch (error) {
                console.log('error:',error);
            }
        }
        consultaApiByID();
    },[])
  
    return (
    <div>
        {loading ?         <Spinner animation="border" variant="warning" />: 
        <div>
        
        <Container>
        <h2>{AnimeDetail.title}</h2>
            <Row>
                <Col>
        <p>Sinopsis: {AnimeDetail.synopsis}</p>
                
        <p>Número de episodios: {AnimeDetail.episodes}</p>
        <p>Score: {AnimeDetail.score} /10</p>
        {/* <p>Tipo: {AnimeDetail.type}</p> */}
        <p>Clasificacion: {AnimeDetail.rating}</p>
<Row>
        {AnimeDetail.genres.map((genre,index) =>{
            const {name} = genre;
            return(
                <Col>
                <p key={index}>{name}</p>
                </Col>
            )
        })}



</Row>
                </Col>
                <Col>
        <img src={AnimeDetail.images.jpg.large_image_url} alt='...' className='image'/>
        <p>{AnimeDetail.year}</p>
                </Col>
            </Row>
        </Container>
        
        
        
        {id}  
        <p>{AnimeDetail.images.jpg.large_image_url}</p>
        


        
        
        {/* <iframe
        src={AnimeDetail.trailer.embed_url}
        >

        </iframe>
        
        <video width="320" height="240" controls>
            <source src={AnimeDetail.trailer_url} type="video/mp4"/>
        </video> */}


        {/* <p>{AnimeDetail.trailer.url}</p> */}
        {/* <p>{AnimeDetail.trailer.embed_url}</p> */}

        {/* <iframe
        src={AnimeDetail.trailer.embed_url}
        >

        </iframe> */}
        </div>
        }
        {console.log('AnimeDetail.trailer:',AnimeDetail.trailer)}
    </div>
  )
}

export default AnimeDetail