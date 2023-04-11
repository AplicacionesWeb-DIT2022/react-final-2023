import React, { useContext} from "react";
import { DataContext } from "../context/DataProvider";
import { Link } from "react-router-dom";
import Nike from "../images/Nike.jpg";
import 'bootstrap/dist/css/bootstrap.min.css';

export const Header = () => {
  const value = useContext(DataContext);
  const [carrito] = value.carrito;
  const [menu, setMenu] = value.menu;


  const toogleMenu = () =>{
    setMenu(!menu)
  }
 

  return (
    <header>
      <div className="menu">
      <box-icon name="menu"></box-icon>
      </div>
      <Link to="/">
      <div className="logo">
        <img src={ Nike } alt="Nike" width="150" />
      </div>
      </Link>
      <ul>
        <li>
          <Link to="/"> Inicio </Link>
        </li>
        <li>
          <Link to="/productos"> Productos </Link>
        </li>
        <li>
          <Link to="/lugares"> Sucursales </Link>
        </li>
        <li>
          <Link to="/contacto"> Contacto </Link>
        </li>
        
      </ul>
      <div className="cart" onClick={toogleMenu}>
        <box-icon name="cart"></box-icon>
        <span className="item__total"> {carrito.length} </span>
      </div>
    </header>
  );
};
