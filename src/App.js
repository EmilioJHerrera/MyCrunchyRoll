import logo from './logo.svg';
import './App.css';



import Intro from './components/Intro';
import Header_intro from './components/Header_intro';
import Jumbo_uno from './components/Jumbo_uno';
import Jumbo_dos from './components/Jumbo_dos';
import Jumbo_tres from './components/Jumbo_tres';
import Footer from './components/Footer';


import Registro from './auth_screen/Registro';
import Main from './components/Main';
import Main_hero from './components/Main_hero';
import Home from './components/Home';
import React_router from './RouteDom/React_router';
import {BrowserRouter as Router} from 'react-router-dom';
import { UserProvider } from './Context/UserContext';

function App() {
  return (
    <UserProvider>
    <div className="App">
      
    <React_router/>


      
       {/* <Home/> */}

      {/*<Registro/> */}
      
      {/* <Main/> */}

    </div>
    </UserProvider>
  );
}

export default App;
