import React, {useContext, useState, useEffect} from 'react'
import { DataContext } from "../../../context/DataProvider";
import { ProductoItem } from "./ProductoItem";

export const ProductosList = () => {
	const [datos, setDatos] = useState([]); // Estado para almacenar los datos de la API

	const value = useContext(DataContext)
	const [productos] = value.productos;

	useEffect(() => {
		const obtenerDatosDeAPI = async () => {
		  try {
			const respuesta = await fetch('https://bakend-final-libre-conti.herokuapp.com/api/producto'); // Hacer la petición a la API
			if (respuesta.ok) { // Verificar si la respuesta es exitosa
			  const datosJson = await respuesta.json(); // Convertir la respuesta a JSON
			  setDatos(datosJson.productos); // Actualizar el estado con los datos de la API
			  console.log("XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX"); 
			  console.log(datosJson.productos)
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
	


    return (<>




	
        <div className="productos">
        {
			datos.map(producto =>(
				<ProductoItem 
					key={producto.id}
					descripcion={producto.descripcion}
					image={producto.image}
					category={producto.category}
					price={producto.price}
					id={producto.id}
				/>
			))
		}					
        </div>
		</>
    )
}