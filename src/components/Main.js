import React,{useEffect, useState} from 'react'
import { Container,Row, Col, Spinner } from 'react-bootstrap'
import Main_hero from './Main_hero';

const Main = () => {
  
    // const [idAnime, setIdAnime] = useState('');
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(false);
    const [heroNum, setHeroNum] = useState(0);
    // porque viste https://api.jikan.moe/v4/anime/{id}/recommendations
    // seleccion al azar https://api.jikan.moe/v4/random/anime
    // top https://api.jikan.moe/v4/top/anime
    //  la info el onclick: https://api.jikan.moe/v4/anime/{id}


    
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
        

        // const ConsultarApiByTop =() =>{
        //     const consulta = async () =>{
                
        //       try {
        //           const response = await fetch ('https://api.jikan.moe/v4/top/anime');
        //           const resultado = await response.json();
        //           console.log('resultado_TOP:',resultado);
        //           console.log('resultado_TOP data:',resultado.data);
        //           console.log('resultado_TOP id:',resultado.data[0].mal_id);
        //             setIdAnime(resultado.data[0].mal_id);
        //           console.log('resultado_TOP title:',resultado.data[0].title);
        //           console.log('resultado_TOP image:',resultado.data[0].images.jpg.image_url);
                  

        //       } catch (error) {
        //           console.log('error:',error);
        //       }
  
  
              
        //     }
        //       consulta();
        // }
        //   ConsultarApiByTop();


      

  },[])


  useEffect(()=>{
    
    setTimeout(()=>{
      setLoading(false);

    },1000);
    console.log('data:',data);
    
    //aqui apagar el loading
  },[data])


  // useEffect(()=>{
  //   const ConsultarApiByID =() =>{
  //       const consulta = async () =>{
            
  //         try {
  //             const response = await fetch ('https://api.jikan.moe/v4/anime/'+idAnime);
  //             const resultado = await response.json();
  //             console.log('resultado_ID:',resultado);
  //             console.log('resultado_ID data:',resultado.data);
  //           //   console.log('resultado_TOP id:',resultado.data[0].mal_id);
  //           //   console.log('resultado_TOP title:',resultado.data[0].title);
  //           //   console.log('resultado_TOP image:',resultado.data[0].images.jpg.image_url);
              

  //         } catch (error) {
  //             console.log('error:',error);
  //         }


          
  //       }
  //         consulta();
  //   }
  //     ConsultarApiByID();

  // },[idAnime])


  
  
    return (
    <div>
        <h1>Main</h1>

        <Container>

        
        {loading? 
        <Spinner animation="border" variant="warning" />
        :
        <>
        {data.length > 0 &&

<Main_hero title={data[heroNum].title} sinopsis={data[heroNum].synopsis} image={data[heroNum].images.jpg.image_url} />
}
        <Row>
        {data.map((item,index)=>{
          return(
            <Col>
                <div key={index}>
                    <img src={item.images.jpg.image_url} alt="{item.title}"/>
                    {/* <p>{item.mal_id}</p> */}
                    <p>{item.title}</p>
                    {/* <p>{item.images.jpg.image_url}</p> */}
                </div>
                </Col>
            )
          })}
        </Row>
        </>             
         }

         

        </Container>
    </div>
  )
}

export default Main