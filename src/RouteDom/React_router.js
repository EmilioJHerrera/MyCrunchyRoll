import React from 'react';
import {
    BrowserRouter as Router,
    
    Route,
    useParams,
    Routes
  } from "react-router-dom";

import Home from '../components/Home';
import Registro from '../auth_screen/Registro';
import Login from '../auth_screen/Login';
import Main from '../components/Main';
import AnimeDetail from '../components/AnimeDetail';
import AlertRegistro from '../auth_screen/AlertRegistro';


const React_router = () => {
    
  return (
    <Router>
        <Routes>
            <Route exact path="/" element={<Home/>} />
            
            <Route path="/Registro" element={<Registro/>} />
            <Route path="/Registro/OK" element={<AlertRegistro/>} />
            
            <Route path="/Login" element={<Login/>} />
            
            <Route path='/Main' element={<Main />} />
            
            
            <Route path='/detail/:id' element={<AnimeDetail />} />

         </Routes>   
    </Router>
  )
}

export default React_router