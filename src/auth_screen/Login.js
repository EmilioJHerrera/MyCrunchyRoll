import React,{useEffect, useState} from 'react'
import { Container,Row, Col } from 'react-bootstrap'

import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { signInWithEmailAndPassword } from "firebase/auth";

import { Link, useNavigate } from 'react-router-dom';
import Header_intro from '../components/Header_intro';

const Login = () => {
    const [email, setEmail] = useState('');
    const [passwd, setPasswd] = useState('');
    const [user, setUser] = useState('');
    let navigate = useNavigate();
   //---------------------------------------------------------------------------------
// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDhPZeABVwUWbIUeRE1ZiWOAPLIvdwAiyY",
    authDomain: "crunchy-9dcd7.firebaseapp.com",
    databaseURL: "https://crunchy-9dcd7-default-rtdb.firebaseio.com",
    projectId: "crunchy-9dcd7",
    storageBucket: "crunchy-9dcd7.appspot.com",
    messagingSenderId: "584399508592",
    appId: "1:584399508592:web:4aed5af554d622c1f2d0b5"
  };
  
  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
 //---------------------------------------------------------------------------------
 
 const provider = new GoogleAuthProvider();
 //---------------------------------------------------------------------------------

    const REGISTRO_GOOGLE = () => {
    console.log('aqui')
    const auth = getAuth();
signInWithPopup(auth, provider)
  .then((result) => {
    // This gives you a Google Access Token. You can use it to access the Google API.
    const credential = GoogleAuthProvider.credentialFromResult(result);
    const token = credential.accessToken;
    // The signed-in user info.
    const user = result.user;
    const Nombreuser = result.user.displayName;
    console.log('Nombreuser:',Nombreuser)
    
   setUser(Nombreuser);
    console.log('user:',user)
    
     navigate('/main')
    // ...
  }).catch((error) => {
    // Handle Errors here.
    const errorCode = error.code;
    const errorMessage = error.message;
    // The email of the user's account used.
    const email = error.email;
    // The AuthCredential type that was used.
    const credential = GoogleAuthProvider.credentialFromError(error);
    // ...
  });
}


const handleValidateEmail = (text) => {
    const emailRegex = new RegExp(/[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$/i);
    if(!emailRegex.test(text)){
      console.log('email no valido');
    }
  }

  const consulta_ingreso = ()=>{
      console.log('aqui hay que hacer las consulta firebase')
      const auth = getAuth();
signInWithEmailAndPassword(auth, email, passwd)
  .then((userCredential) => {
    // Signed in
    const user = userCredential.user;
    console.log('user:',user)
    navigate('/main')
    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    console.log(errorCode)
    const errorMessage = error.message;
    console.log(errorMessage)
  });
  }

    const handleSubmit = (e) =>{
        e.preventDefault();
        //if(handleValidateEmail(email)){
            consulta_ingreso();
        //}else{
            console.log('email no valido');
        //}
    }


    return (
        <div className='blackBg contenedor_max_vh'>
        <Header_intro/>
        <h1>Login</h1>
          <Container>
              <Row className="flex-justificar-center">
                  <Col> <img src={require('../images/login.png')} alt='Hime login'/></Col>
                  <Col>
                  
                        <form onSubmit={handleSubmit} className='form-group'>
                        <div>
                            <label className='form-label'>Nombre o correo:</label>
                            <input 
                            type="text"
                            value={email}
                            className='form-input' 
                            onChange={(e)=>setEmail(e.target.value)}/>
                        </div>
                        <div>
                            <label className='form-label'>Contrase??a:</label>
                            <input type="password" 
                            value={passwd}
                            onChange={(e)=>{setPasswd(e.target.value)}}
                            className='form-input'
                             />
                        </div>
                        <input type="submit" value="Ingresar" className='boton'/>
                        </form>
  
                    
                  </Col>
              </Row>
          </Container>
  
          <button className='form-btn-google' onClick={()=>REGISTRO_GOOGLE()}>
          <img src={require('../images/buscar.png')} alt='google' className='iconito-google'/>
          Entra con Google
          </button>
                  <p>??No tienes una cuenta?</p>
                  {/* <p>Registrate</p> */}
                  <Link to='/Registro'>Registrate</Link>

      

      </div>
  )
}

export default Login