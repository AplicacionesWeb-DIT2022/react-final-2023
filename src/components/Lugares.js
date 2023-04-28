import React, { useEffect, useState } from 'react';
import Card from 'react-bootstrap/Card';
import PuntoVenta from "../images/lugares.png";
import Button from 'react-bootstrap/Button';

export const Lugares = () => {

  
  const [datos, setDatos] = useState([]); // Estado para almacenar los datos de la API
  
  const fetch = require('node-fetch');
  var respuesta;

  
 
  
  // const respuesta = fetch('https://bakend-final-libre-conti.herokuapp.com/api/lugare'); // Hacer la petición a la API
  // const datosJson = await respuesta.json(); // Convertir la respuesta a JSON
  // console.log(respuesta);

  useEffect(() => {
    // const obtenerDatosDeAPI = async () => {
      var obtenerDatosDeAPI = async function (username){
        const url = `https://bakend-final-libre-conti.herokuapp.com/api/lugare`;
        var respuesta = await fetch (url);
        var response = await respuesta.json();
        console.log(response);
    
        // return response.login;        
      // }
      try {
        // const respuesta = await fetch('https://bakend-final-libre-conti.herokuapp.com/api/lugare'); // Hacer la petición a la API
        if (response) { // Verificar si la respuesta es exitosa
          // const datosJson = await respuesta.json(); // Convertir la respuesta a JSON
          setDatos(response.lugares); // Actualizar el estado con los datos de la API
          // console.log(datosJson[0].lugares.data);
          // console.log()
        } else {
          throw new Error('Error al obtener datos de la API'); // Manejar errores de respuesta
        }
      } catch (error) {
        console.error(error); // Manejar errores de conexión o parsing de JSON
      }
    };

    obtenerDatosDeAPI(); // Llamar a la función para obtener los datos de la API al montar el componente
  }, []) // El arreglo vacío [] como segundo argumento de useEffect hace que se ejecute solo una vez al montar el componente

  return (
    <div>
      <div className='productos'> 
      {datos.map(dato => (<>
        {/* <div className='productos'>         */}
        <Card style={{ width: '28rem' }}>
            <Card.Img variant="top" src={ PuntoVenta } width="100" height="250"  />
            <Card.Body>
            <Card.Title> Sucursal { dato.nombre } </Card.Title>
            <Card.Text>
              <p>
                Direccion: { dato.direccion } 
              </p>
              <p>
                Ciudad: { dato.ciudad }
              </p>
              <p>
                CP: { dato.CP}.
              </p>


            </Card.Text>
            <a href="https://goo.gl/maps/3e7DJYgL7NWrzXpdA" target="_blank">
              <button type="button" class="btn btn-outline-success">🛰 Ver Ubicacion</button>
            </a>
              


            </Card.Body>
        </Card>
        </>
      ))}
    </div>
  </div>
  );
};

export default Lugares;