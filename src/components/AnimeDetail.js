import React, {useEffect, useState} from 'react'
import { useParams } from 'react-router-dom';
const AnimeDetail = () => {
  
   const params = useParams();
   const {id} = params;
  console.log('params',params);
    const [AnimeDetail,setAnimeDetail] = useState([]);


    useEffect(()=>{
        const consultaApiByID = async ()=>{
            try {
                const response = await fetch (`https://api.jikan.moe/v4/anime/${id}`);
                const resultado = await response.json();
                console.log('resultado.data:',resultado.data);
                
                setAnimeDetail(resultado.data);
               
            } catch (error) {
                console.log('error:',error);
            }
        }
        consultaApiByID();
    },[])
  
    return (
    <div>
        AnimeDetail:
        {id}  
        <p>{AnimeDetail.title}</p>
        <p>{AnimeDetail.synopsis}</p>
        <p>{AnimeDetail.image_url}</p>
        <p>{AnimeDetail.episodes}</p>
        <p>{AnimeDetail.score}</p>
        <p>{AnimeDetail.type}</p>
        <p>{AnimeDetail.rating}</p>
        <p>{AnimeDetail.year}</p>
{/*         
        {AnimeDetail.genres.map((genre,index) =>{
            const {name} = genre;
            return(
                <p key={index}>{name}</p>
            )
        })} */}


        
        
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
        
        {console.log('AnimeDetail.trailer_url:',AnimeDetail.trailer)}
    </div>
  )
}

export default AnimeDetail