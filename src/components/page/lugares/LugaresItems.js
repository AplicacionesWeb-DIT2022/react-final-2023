import React, { useEffect, useState } from 'react';
import { Lugares } from "./Lugares";

export const LugaresList = () => {
  const [datos, setDatos] = useState([]); // Estado para almacenar los datos de la API

  useEffect(() => {
    const obtenerDatosDeAPI = async () => {
      try {
        const respuesta = await fetch('https://bakend-final-libre-conti.herokuapp.com/api/lugare'); // Hacer la petición a la API
        if (respuesta.ok) { // Verificar si la respuesta es exitosa
          const datosJson = await respuesta.json(); // Convertir la respuesta a JSON
          setDatos(datosJson[0].lugares.data); // Actualizar el estado con los datos de la API
          console.log(datosJson[0].lugares.data)
          // console.log()
        } else {
          throw new Error('Error al obtener datos de la API'); // Manejar errores de respuesta
        }
      } catch (error) {
        console.error(error); // Manejar errores de conexión o parsing de JSON
      }
    };

    obtenerDatosDeAPI(); // Llamar a la función para obtener los datos de la API al montar el componente
  }, []); // El arreglo vacío [] como segundo argumento de useEffect hace que se ejecute solo una vez al montar el componente

  return (
    <div>
      <p>f</p>
      <p>f</p>
      <p>f</p>
      <p>f</p>
      <p>f</p>
      <p>f</p>
      <p>f</p>
      <p>f</p>
      {datos.map(dato => (
        <p key={dato.id}>{dato.nombre}</p>
      ))}
    </div>
  );
};

export default LugaresList;