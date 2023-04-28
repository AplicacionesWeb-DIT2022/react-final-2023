import React, {useContext} from "react";
import { Link } from "react-router-dom";
import { DataContext } from "../../../context/DataProvider";

export const ProductoItem = ({descripcion, tipo, precio, id}) => {

  // const ruta = 'https://upload.wikimedia.org/wikipedia/commons/3/3d/Hola.jpg';
  const value = useContext(DataContext);
  const addCarrito = value.addCarrito;

  return (
    <div key={id} className="producto">
      <Link to={`/producto/${id}`}>
      <div className="producto__img">
        <img src={tipo} alt={descripcion} width="100" height="220"/>
      </div>
      </Link>
      <div className="producto__footer">
      <h1>{descripcion}</h1>
        <p className="price">${precio} </p>
      </div>
      <div className="bottom">
        <button onClick={() => addCarrito(id)} className="btn">Añadir al carrito</button>
        <div>
        <Link to={`/producto/${id}`} className="btn">Vista</Link>
        </div>
      </div>
    </div>
  );
};