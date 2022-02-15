import React,{useState} from 'react'
import { Container,Row, Col } from 'react-bootstrap'

import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";

import { createUserWithEmailAndPassword } from "firebase/auth";

const Login = () => {
    const [email, setEmail] = useState('');
    const [passwd, setPasswd] = useState('');

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
    console.log('user:',user)
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
      console.log('aqui hay que hacer las consula firebase')
  }

    const handleSubmit = (e) =>{
        e.preventDefault();
        if(handleValidateEmail(email)){
            consulta_ingreso();
        }else{
            console.log('email no valido');
        }
    }


    return (
        <div className='blackBg'>
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
                            <label className='form-label'>Contraseña:</label>
                            <input type="password" 
                            value={passwd}
                            onChange={(e)=>{setPasswd(e.target.value)}}
                            className='form-input'
                             />
                        </div>
                        <input type="submit" value="Ingresar"/>
                        </form>
  
                    
                  </Col>
              </Row>
          </Container>
  
          <button className='form-btn-google' onClick={()=>REGISTRO_GOOGLE()}>
          <img src={require('../images/buscar.png')} alt='google' className='iconito-google'/>
          Registra con Google
          </button>
                  <p>¿No tienes una cuenta?</p>
                  <p>Registrate</p>
      </div>
  )
}

export default Login