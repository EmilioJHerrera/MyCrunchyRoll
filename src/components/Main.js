import React,{useEffect, useState} from 'react'
import { Container, Spinner } from 'react-bootstrap'
import Carrousel from './Carrousel';

import Main_hero from './Main_hero';

const Main = () => {
    const [data, setData] = useState([]);
    

    const [isComplete, setIsComplete] = useState(false);
    const [loading, setLoading] = useState(false);
    const [heroNum, setHeroNum] = useState(0);
        
    const randomNumber = (min,max) =>{
      return Math.floor(Math.random() * (max - min)) + min;
    }

  useEffect(()=>{
    setLoading(true);  
    const ConsultarApi =() =>{
          const consulta = async () =>{
              
            try {
                const response = await fetch ('https://api.jikan.moe/v4/top/anime');
                const resultado = await response.json();
                // console.log('resultado:',resultado.data);
                setData(resultado.data);
                setHeroNum(randomNumber(0,26));
            } catch (error) {
                console.log('error:',error);
            }          
          }
            consulta();
      }
        ConsultarApi();
        

        
setIsComplete(true);
        

  },[])


  useEffect(()=>{
    
    setTimeout(()=>{
      setLoading(false);

    },1000);
    console.log('data:',data);
    
    //aqui apagar el loading
  },[isComplete])


  
  
    return (
    <div>
        <h1>Bienvenido</h1>

        <Container  fluid className='blackBg'>

        
        {loading? 
        <Spinner animation="border" variant="warning" />
        :
        <>
        {data.length > 0 &&

<Main_hero title={data[heroNum].title} sinopsis={data[heroNum].synopsis} image={data[heroNum].images.jpg.image_url} id={data[heroNum].mal_id}/>
}

<h3>Top animes</h3>
<Carrousel data={data}/>
        
        </>             
         }

         

        </Container>
    </div>
  )
}

export default Main