import React, { useContext } from "react";
import { DataContext } from "../context/DataProvider";
import Nike from "../images/Nike.jpg";
import UseAnimations from "react-useanimations";
import trash2 from 'react-useanimations/lib/trash2';
import error from 'react-useanimations/lib/error';
import arrowDown from 'react-useanimations/lib/arrowDown';
import arrowUp from 'react-useanimations/lib/arrowUp';
import archive from 'react-useanimations/lib/archive';

import jsPDF from 'jspdf';

export const Carrito = () => {
  const ruta = 'https://upload.wikimedia.org/wikipedia/commons/3/3d/Hola.jpg';

  const value = useContext(DataContext);
  const [menu, setMenu] = value.menu;
  const [carrito, setCarrito] = value.carrito;
  const [total] = value.total;
  const tooglefalse = () => {
    setMenu(false);
	};
	const reduce = id =>{
		carrito.forEach(item =>{
			if(item.id === id){
        item.cantidad === 1 ? item.cantidad = 1: item.cantidad -=1;
			}
			setCarrito([...carrito])
		})
	}
	const increase = id =>{
    carrito.forEach(item =>{
      if(item.id === id){
        item.cantidad +=1;
			}
			setCarrito([...carrito])
		})
	}
	const removeProducto = id =>{
		if(window.confirm("¿Quieres suspender el producto?")){
			carrito.forEach((item, index)=>{
				if(item.id === id){
					item.cantidad = 1;
					carrito.splice(index, 1)
				}
			})
			setCarrito([...carrito])
		}
	}
  const show1 = menu ? "carritos show" : "carrito";
  const show2 = menu ? "carrito show" : "carrito";

  const generatePdf = () => {
    const pdf = new jsPDF();
    pdf.addImage(Nike, "JPEG", 1, 1, 40, 40);
    pdf.text('¡-Simulador de Pedido -!', 20, 20);
    pdf.text('Total:', 20, 30);
    pdf.save('pdf')
  }

  return (
    <div className="contenido" id="contenido">
    <div className={show1}>
      <div className={show2}>
        <div onClick={tooglefalse} className="carrito__close">
          <UseAnimations animation={error} size={50}/>
        </div>
		    
        <div>
          <img src={ Nike } alt="logo" width="120"/>
        </div>
        
        <h2> Simulador de Pedido - Carrito de Compras</h2>
        <div className="carrito__center">{
          carrito.length === 0 ? <h2 style={{textAlign: "center", fontSize: "3rem"}}>Carrito Vacio</h2> :<>{
            carrito.map((producto) => (
              <div className="carrito__item" key={producto.id}>
                <img src={producto.tipo}/>
                <div>
                  <h3> {producto.descripcion} </h3>
                  <p className="price">${producto.precio}</p>
                </div>
                <div>
                  {/* <UseAnimations animation={arrowUp} size={50} onClick={() => increase(producto.id)} name="up-arrow" type="solid"/> */}
                  <box-icon onClick={() => increase(producto.id)} name="up-arrow" type="solid"/>
                  <p className="cantidad">{producto.cantidad}</p>
                  {/* <UseAnimations animation={arrowDown} size={50} onClick={() => reduce(producto.id)} name="down-arrow" type="solid"/> */}
                  <box-icon onClick={() => reduce(producto.id)} name="down-arrow" type="solid"/>
                </div>
                <div onClick={() => removeProducto(producto.id)} className="remove__item">
                  <UseAnimations animation={trash2} size={50}/>
                </div>
              </div>
              ))
            }</>
          }
	      </div>
  
        <div className="carrito__footer">
            <h3> <UseAnimations animation={archive} size={50}/> Total: ${total}</h3>
            {/* <UseAnimations animation={archive} size={50}/> */}
            {/* <button className="btn btn-outline-info" style={{textAlign:'center'}} onClick={generatePdf}> Exportar pedido</button> */}
        </div>
        <div className="detalles">
          <div className="carrito__footer">
            <button onClick={tooglefalse}> Ver mas productos </button>
          </div>
          </div>
      </div>
    </div>
  </div>
  );
};