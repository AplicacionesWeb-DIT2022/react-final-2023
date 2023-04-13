import React, { useContext} from "react";
import { DataContext } from "../context/DataProvider";
import { Link } from "react-router-dom";
import Nike from "../images/Nike.jpg";
import 'bootstrap/dist/css/bootstrap.min.css';
import UseAnimations from "react-useanimations";
import airplay from "react-useanimations/lib/airplay";
import home from "react-useanimations/lib/home";
import infinity from "react-useanimations/lib/infinity";
import codepen from "react-useanimations/lib/codepen";


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
          <Link to="/"> <UseAnimations animation={ home } size={60}/> Inicio </Link>
        </li>
        <li>
          <Link to="/productos"> <UseAnimations animation={airplay} size={60}/>   Productos </Link>
        </li>
        <li>
          <Link to="/lugares"> <UseAnimations animation={ codepen } size={60}/> Sucursales </Link>
        </li>
        <li>
          <Link to="/contacto"> <UseAnimations animation={ infinity } size={60}/> Contacto </Link>
        </li>
        
      </ul>
      <div className="cart" onClick={toogleMenu}>
        <box-icon name="cart"></box-icon>
        <span className="item__total"> {carrito.length} </span>
      </div>
    </header>
  );
};
