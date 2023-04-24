import React, {useContext, useState, useEffect} from 'react'
import { DataContext } from "../../../context/DataProvider";
import { ProductoItem } from "./ProductoItem";
import { sinimagen } from "../../../images/sinimagen.png";

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
			  console.log(datosJson.productos)
			} else {
			  throw new Error('Error al obtener datos de la API');
			}
		  } catch (error) {
			console.error(error);
		}
		};
	
		obtenerDatosDeAPI();
	  }, []); 
    return (<>	
        <div className="productos">
        {
			datos.map(producto =>(
				<ProductoItem 
					key={producto.id}
					descripcion={producto.descripcion}
					// image={producto.image}
					tipo={producto.tipo}
					precio={producto.precio}
					id={producto.id}
				/>
				))
			}					
        </div>
		</>
    )
}