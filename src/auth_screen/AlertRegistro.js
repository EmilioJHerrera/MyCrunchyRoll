import React, { useState } from 'react'
import { Alert, Button } from 'react-bootstrap'

import { useNavigate } from 'react-router-dom';

const AlertRegistro = ({email}) => {

    const [show, setShow]= useState(true);
    let navigate = useNavigate();

    return (
        <>
        <Alert show={show} variant="success">
          <Alert.Heading>Bienvenido</Alert.Heading>
          <p>
              Te doy la bienvenida a Crunchy!
          </p>
          <p>
              Recuerda tu correo: {email} y tu contraseña para poder acceder a tu cuenta.
          </p>
          <hr />
          <div className="d-flex justify-content-end">
            <Button onClick={() =>{
                setShow(false);
                navigate('/Main');
            } } variant="outline-success">
              Ir al inicio
            </Button>
          </div>
        </Alert>
  
        
      </>
    )
}

export default AlertRegistro