import React, {useContext} from 'react';
import Nike from "../../images/Nike.jpg";
import 'bootstrap/dist/css/bootstrap.min.css';
// import { Button } from 'react-bootstrap';
import { DataContext } from "../../context/Dataprovider";

export const Header = () => {
  const value = useContext(DataContext)
  const [menu, setMenu] = value.menu 

  const toogleMenu = ()=>{
      setMenu(!menu)
  }

  // const show1 = menu ? "carritos show" : "carritos";
  // const show2 = menu ? "carrito show" : "carrito";

  
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
        <a href='/lugares'> Lugares </a>
      </li>
      <li>
        <a href='/contacto'> Contacto </a>
    </li>
    </ul>

    <div className="cart" onClick={toogleMenu}>
      <box-icon name="cart"></box-icon>
      <span className="item__total">0</span>
    </div>
  </header>
  )
}