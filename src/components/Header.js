import React, { useContext} from "react";
import { DataContext } from "../context/DataProvider";
import { Link } from "react-router-dom";
import Nike from "../images/Nike.jpg";
import 'bootstrap/dist/css/bootstrap.min.css';
import UseAnimations from "react-useanimations";
import archive from "react-useanimations/lib/archive";
import home from "react-useanimations/lib/home";
import instagram from "react-useanimations/lib/instagram";
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
        <img src={ Nike } alt="Nike" width="200" />
      </div>
      </Link>
      <ul>
        <li>
          <h3>
            <Link to="/"> <strong>Inicio</strong> </Link>
          </h3>
        </li>
        <li>
        <h3>
          <Link to="/productos"> <strong>Productos</strong> </Link>
          </h3>
        </li>
        <li>
        <h3>
          <Link to="/lugares"> <strong>Sucursales</strong> </Link>
        </h3>
        </li>
        <li>
        <h3>
          <Link to="/contacto"> <strong>Contacto</strong> </Link>
          </h3>
        </li>
        
      </ul>
      <div className="cart" onClick={toogleMenu}>
        <box-icon name="cart"></box-icon>
        <span className="item__total"> {carrito.length} </span>
      </div>
    </header>
  );
};
