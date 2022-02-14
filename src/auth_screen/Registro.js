import React,{useState} from 'react'
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";

import { createUserWithEmailAndPassword } from "firebase/auth";

import { SIGN_UP_URL } from '../Data/Urls';

const Registro = () => {
  
    const [email, setEmail] = useState('');
    const [passwd, setPasswd] = useState('');
    const [isValidMin, setIsValidMin] = useState(false);
    const [isValidNum, setIsValidNum] = useState(false);
    const [isValidUpper, setIsValidUpper] = useState(false);

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
//----------------------------------------------------------------------------------
 const REGISTRO_EMAIL = ()=>{
    //valida el mail----------------------------------------------------------------> crea los helpers y acomoda el codigo
    
    const auth = getAuth();
    createUserWithEmailAndPassword(auth, email, passwd)
      .then((userCredential) => {
        // Signed in 
        const user = userCredential.user;
        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        console.log('errorCode:',errorCode)
        const errorMessage = error.message;
        console.log('errorMessage:',errorMessage)
        // ..
      });
 }

//----------------------------------------------------------------------------------

 
    const handleSubmit = (e) => {
      e.preventDefault();
      if(isValidMin && isValidNum && isValidUpper){
        console.log('password valido');
        // 
        REGISTRO_EMAIL();
    }else{
        console.log('no valido');	
    }      

     };

     const handleValidateEmail = (text) => {
        const emailRegex = new RegExp(/[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$/i);
        if(!emailRegex.test(text)){
          console.log('email no valido');
        }
      }

  const validarRegexCaracteres = (texto) => {
      const regex = new RegExp (/^.{7,}$/); // min 7 chars
        if(regex.test(texto)){
            setIsValidMin(true);
        }else{
            setIsValidMin(false);
        }
  }
  const validarRegexUpper = (texto) => { 
    const regex = new RegExp (/(?=.*[A-Z])/);  // uppercase letter
      if(regex.test(texto)){
          setIsValidUpper(true);
      }else{
          setIsValidUpper(false);
      }
}
const validarRegexNumber = (texto) => {
    const regex = new RegExp (/^((?=\S*?[0-9]).{0,})\S$/); // number required
      if(regex.test(texto)){
          setIsValidNum(true);
      }else{
          setIsValidNum(false);
      }
}
const validar = (password) =>{
    validarRegexCaracteres(password);
    validarRegexNumber(password);
    validarRegexUpper(password);

    
}

// const RegistroFIREBASE = () =>{
//     const registra = async () => {
//         try{
//             const response  = await fetch( SIGN_UP_URL,{
//                 method: 'POST',
//                 headers:{
//                     'Contenxt-Type': 'application/json',
//                 },
                
//                 body: JSON.stringify({
//                     email,
//                     passwd,
//                     returnSecureToken: true,
//                 }),
//             });
        
//             const resultado = await response.json();
//             console.log('resultado:',resultado);
//         }
//         catch(error){
//             console.log('error:',error)
//         }
//     }
//     registra();

// };


    return (
    <div>
        <h1>Registro</h1>
            <form onSubmit={handleSubmit}>
            <div>
                <label>Nombre o correo:</label>
                <input type="text" value={email} onChange={(e)=>setEmail(e.target.value)}/>
            </div>
            <div>
                <label>contraseña:</label>
                <input type="password" 
                value={passwd}
                onChange={(e)=>{setPasswd(e.target.value); validar(e.target.value)}}
                // pattern={[
                //     '^.{7,}$', // min 7 chars
                    
                //     '(?=.*[A-Z])', // uppercase letter
                // ]}
                
                />
            </div>
            <input type="submit" value="Registrar"/>
            </form>

        <div>
            <p style={{ color: isValidMin ? 'green' : 'red' }}>minimo 7 caracteres</p>
            <p style={{ color: isValidNum ? 'green' : 'red' }}>un numero</p>
            <p style={{ color: isValidUpper ? 'green' : 'red' }}>una mayuscula</p>
        </div>

        <button onClick={()=>REGISTRO_GOOGLE()}>registroGoogle</button>
                <p>¿Ya tienes una cuenta?</p>
                <p>INICIAR SESSION</p>
    </div>
  )
}

export default Registro