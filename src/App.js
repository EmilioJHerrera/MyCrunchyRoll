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


function App() {
  return (
    <div className="App">
      {/* <Header_intro/>
      <Intro />
      <Header_intro/>
      <Jumbo_uno/>
      <Jumbo_dos/>
      <Jumbo_tres/>
      <Footer/> */}

      <Registro/>
      
      {/* <Main/> */}

    </div>
  );
}

export default App;
