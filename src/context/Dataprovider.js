import React, { createContext, useState, useEffect } from "react";

export const DataContext = createContext();

export const DataProvider = (props) => {
	const [productos, setProductos] = useState([]);
	const [menu, setMenu] = useState(false)
	const [carrito, setCarrito] =useState([])
	const [total, setTotal] = useState(0)
 
	useEffect(() => {
		const obtenerDatosDeAPI = async () => {
		  try {
			const respuesta = await fetch('https://bakend-final-libre-conti.herokuapp.com/api/producto'); // Hacer la petición a la API
			// const respuesta2 = fetch('https://bakend-final-libre-conti.herokuapp.com/api/lugare'); // Hacer la petición a la API
  // const datosJson = await respuesta.json(); // Convertir la respuesta a JSON
  			// console.log(respuesta2);
  			// console.log(respuesta);

			// const respuesta = await fetch('https://bakend-final-libre-conti.herokuapp.com/api/lugare'); // Hacer la petición a la API
			
			if (respuesta.ok) { // Verificar si la respuesta es exitosa
			  const datosJson = await respuesta.json(); // Convertir la respuesta a JSON
			  setProductos(datosJson.productos); // Actualizar el estado con los datos de la API
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
	
	const addCarrito = (id) =>{
		const check = carrito.every(item =>{
			return item.id !== id
			
		})
	
		if(check){
			const data = productos.filter(producto =>{
				return producto.id === id
			})
			setCarrito([...carrito, ...data])
		}else{
			alert("El producto se ha añadido al carrito")
		}
	}
	
	useEffect(() =>{
		const dataCarrito = JSON.parse(localStorage.getItem('dataCarrito'))
		if(dataCarrito){
			setCarrito(dataCarrito)
		}
	},[])

	useEffect(() =>{
		localStorage.setItem('dataCarrito', JSON.stringify(carrito))
	},[carrito])

	useEffect(() =>{
		const getTotal = () =>{
			const res = carrito.reduce((prev, item) =>{
				return prev + (item.precio * item.cantidad)
			},0)
			setTotal(res)
		}
		getTotal()
	},[carrito])
	
	const value = {
		productos : [productos],
		menu: [menu, setMenu],
		carrito: [carrito, setCarrito],
		addCarrito: addCarrito,
		total: [total, setTotal]
	}

	return (
		<DataContext.Provider value={value}>
			{props.children}			
		</DataContext.Provider>
	)
};