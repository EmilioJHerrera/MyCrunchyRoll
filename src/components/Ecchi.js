import React, {useEffect, useState} from 'react'
import Carrousel from './Carrousel'
const Ecchi = () => {

useEffect(()=>{
    const consulta = async () =>{
                
              try {
                  const response = await fetch (`https://api.jikan.moe/v4/recommendations/anime`);
                  const resultado = await response.json();
                  console.log('resultado:',resultado.data);
                  
                  
              } catch (error) {
                  console.log('error:',error);
              }          
            }
              consulta();
},[])

  return (
    <div>
        Ecchi
    </div>
  )
}

export default Ecchi