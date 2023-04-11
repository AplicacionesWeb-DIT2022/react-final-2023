import React, { useContext } from 'react'
import { DataContext } from "../../context/Dataprovider";

import { Link } from "react-router-dom";

export const ProductoItem = ({title, image, category, price, id}) => {
  const value = useContext(DataContext);
  const addCarrito = value.addCarrito;
  return (
    <div key={id} className="producto">
      <Link to={'/producto.id'}>
      <div className="producto__img">
        <img src={image} alt={title} />
      </div>
      </Link>
      <div className="producto__footer">
        <h1>{title}</h1>
        <p>{category}</p>
        <p className="price">${price} </p>
      </div>
      <div className="buttom">
        <button onClick={() => addCarrito(id)} className="btn">Añadir al carrito</button>
        <div>
        <Link to={'/producto/${id}'} className="btn">Vista</Link>
        </div>
      </div>
    </div>
  );
};