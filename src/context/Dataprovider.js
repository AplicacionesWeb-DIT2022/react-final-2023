import React, { createContext, useState, useEffect } from "react";
import Data from "../Data.js";
import axios from 'axios'; // Importa la librería axios

export const DataContext = createContext();

export const DataProvider = (props) => {
	// const url = 'https://bakend-final-libre-conti.herokuapp.com/api/producto';
	// const url2 = 'https://bakend-final-libre-conti.herokuapp.com/api/lugare';
	

	const [data, setData] = useState(null);


	const [productos, setProductos] = useState([]);
	const [menu, setMenu] = useState(false)
	const [carrito, setCarrito] =useState([])
	const [total, setTotal] = useState(0)

  useEffect(() => {
		const producto = Data.items 
		if(producto){
			setProductos(producto)
		}else{
			setProductos([])
		}
	}, []);

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
				return prev + (item.price * item.cantidad)
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






	useEffect(() => {
		// Realizar una solicitud GET a una API usando Axios
		axios.get('https://bakend-final-libre-conti.herokuapp.com/api/lugare')
		  .then(response => {
			setData(response.data);
			console.log(response.data)
		})
		  .catch(error => {
			console.error('Error al obtener los datos:', error);
		  });
	  }, []);

	return (
		<DataContext.Provider value={value}>
			{props.children}			
		</DataContext.Provider>
	)
};
