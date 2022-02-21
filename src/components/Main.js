import React,{useEffect, useState} from 'react'
import { Container,Row, Col, Spinner } from 'react-bootstrap'
import Card_main from './Card_main';
import Carrousel from './Carrousel';
import Ecchi from './Ecchi';
import Main_hero from './Main_hero';

//import { useGlobalContext } from '../Context/UserContext';

const Main = () => {

    // const [idAnime, setIdAnime] = useState('');
    const [data, setData] = useState([]);
    const [data1, setData1] = useState([]);
    const [data2, setData2] = useState([]);
    const [data3, setData3] = useState([]);

    const [isComplete, setIsComplete] = useState(false);
    const [loading, setLoading] = useState(false);
    const [heroNum, setHeroNum] = useState(0);
    // porque viste https://api.jikan.moe/v4/anime/{id}/recommendations
    // seleccion al azar https://api.jikan.moe/v4/random/anime
    // top https://api.jikan.moe/v4/top/anime
    //  la info el onclick: https://api.jikan.moe/v4/anime/{id}

//    const {userData} = useGlobalContext();
    
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
        

        const ConsultarApiByTop =() =>{
            const consulta = async () =>{
              let info=[]
              let data1=[]
              let data2 =[] 
              let data3=[]
              
              try {
 
                  const response = await fetch ('https://api.jikan.moe/v4/genres/anime');
                  const resultado = await response.json();
                  // console.log('resultado_TOP:',resultado);
                  info = resultado.data;

                  console.log('info',info)
                  data1 = info.splice(0,25);
                  data2 = info.splice(26,50);
                  data3 = info.splice(51,75);

                    //   info.forEach(element => {
                    // // console.log('element.name',element.name)
                    //         if(element.name === 'Comedy'){
                    //           comedia.push(element)
                    //         } 
                    //         if (element.name === 'Ecchi'){
                    //           ecchi.push(element)
                    //         }
                    //         if(element.name === 'School'){
                    //           school.push(element)
                    //         }
                    //       }
                    //       );  
              } catch (error) {
                console.log('error:',error);
              }
              
              setData1(data1);
              setData2(data2);
              setData3(data3);
              
              
            }
              consulta();
        }
      //        ConsultarApiByTop();

setIsComplete(true);
        //   const ConsultarEcchi =() =>{
        //     const consulta = async () =>{
        //         console.log('idEcchi:',id_Ecchi);
        //       try {
        //           const response = await fetch (`https://api.jikan.moe/v4/anime/9/recommendations`);
        //           const resultado = await response.json();
        //           // console.log('resultado:',resultado.data);
                  
        //           setDataEcchi(resultado.data);
        //           console.log('dataEcchi:',dataEcchi);
        //           setIsComplete(true);
        //       } catch (error) {
        //           console.log('error:',error);
        //       }          
        //     }
        //       consulta();
        // }
        //   ConsultarEcchi();
        

  },[])


  useEffect(()=>{
    
    setTimeout(()=>{
      setLoading(false);

    },1000);
    console.log('data:',data);
    
    //aqui apagar el loading
  },[isComplete])


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
        {/* <Row>
        {data.map((item,index)=>{
          return(
            <Card_main index={index} item={item}/>
          )
          })}
        </Row> */}
        <h3>Data 1</h3>
          <Ecchi/>
        </>             
         }

         

        </Container>
    </div>
  )
}

export default Main