import React, { useContext } from "react";
import Insta from "../../images/logoinsta.png";
import Nike from "../../images/Nike.jpg";
import 'bootstrap/dist/css/bootstrap.min.css';
import { DataContext } from "../../context/Dataprovider";
// import { DataContext } from "context/DataProvider";

import Card from "../../images/img03.jpg";

export const Header = () => {
  const value = useContext(DataContext);
  // const [carrito] = value.carrito;
  const [carrito, setCarrito] = value.carrito;
  const [total] = value.total;

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





  return (
  <header>
    <a href="/">
      <div className="logo">
        <img src={ Nike } alt="logo" width="150"/>
      </div>
    </a>

    <ul>
      <li>
        <a href='/'> Inicio </a>
      </li>
      <li>
        <a href='/productos'> Productos </a>
      </li>
      <li>
        <a href='/lugares'> Sucursales </a>
      </li>
      <li>
        <a href='/contacto'> Contacto </a>
    </li>
    </ul>
        
    <div class="offcanvas offcanvas-start w-75 p-3" tabindex="-1" id="offcanvasExample" aria-labelledby="offcanvasExampleLabel">
      <div class="offcanvas-header">
        <div className="logo">
          <img src={ Nike } alt="logo" width="80"/>
        </div>
          <h2> Simulador de Pedido - Carrito de Compras</h2>
        <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
      </div>

      <div class="offcanvas-body">
        <div>
          Some text as placeholder. In real life you can have the elements.
        </div>
        <div class="dropdown mt-3">
            


        <h2>Su Carrito</h2>
        <div className="carrito__center">
					{
					
					
					carrito.length === 0 ? <h2 style={{textAlign: "center", fontSize: "3rem"}}>Carrito Vacio</h2> :<>
					{
					carrito.map((producto) => (
            <div className="carrito__item" key={producto.id}>
              <img src={producto.image} alt={producto.title} />
              <div>
                <h3> {producto.title} </h3>
                <p className="price">${producto.price}</p>
              </div>
              <div>
								<box-icon 
									onClick={() => increase(producto.id)} name="up-arrow" 
									type="solid"
									/>
                <p className="cantidad">{producto.cantidad}</p>
								<box-icon 
									onClick={() => reduce(producto.id)} 
									name="down-arrow" 
									type="solid" 
									/>
              </div>
							<div 
							onClick={() => removeProducto(producto.id)} 
							className="remove__item"
							>
                <box-icon name="trash" />
              </div>
            </div>
					))
				}
					
					</>
					}
        </div>

        <div className="carrito__footer">
          <h3>Total: ${total}</h3>
          <button className="btn">Payment</button>
        </div>
 
        <div className="carrito__close">
          <button className="btn btn-outline-info"> Exportar pedido</button>
        </div>

            
          </div>
          <div className="carrito__center">
            <img src={ Insta } alt="IMG insta"/>
          </div>
      </div>
    </div>
    
    <div className="cart" data-bs-toggle="offcanvas" href="#offcanvasExample" role="button" aria-controls="offcanvasExample">
      <box-icon name="cart"></box-icon>
      <span className="item__total">{carrito.length}</span>
    </div>
  </header>
  )
}