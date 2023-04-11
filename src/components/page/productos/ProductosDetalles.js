import React, {useContext, useEffect, useState} from 'react'
import { DataContext } from "../../../context/DataProvider";
import { useParams } from "react-router-dom";
import { ProductoItem } from "./ProductoItem";

export const ProductosDetalles = () => {
  const value = useContext(DataContext);
  const [productos] = value.productos;
  const addCarrito = value.addCarrito;
  const [detalle, setDetalle] = useState([])
  const [url, setUrl]= useState(0)
  const [images, setImages] = useState('')
  const params = useParams();
  let item = 0;

  useEffect(() =>{
    console.log('re render' , params.id)
    item=0;
    productos.forEach(producto =>{
      if(producto.id === parseInt(params.id)){
        setDetalle(producto)
        setUrl(0)
      }
    })
  },[params.id, productos])

  console.log(url)

  useEffect(() =>{
    const values = `${detalle.img1}${url}${detalle.img2}`;
    setImages(values) 
  },[url, params.id])

  const handleInput = (e) =>{
  const number = e.target.value.toString().padStart(2,'01')
   setUrl(number)
  }

  if(detalle.length < 1) return null;

  return (<>{
        <div className="detalles">
          <h2>{detalle.title}</h2>
          <p className="price">${detalle.price}</p>
          <button onClick={() => addCarrito(detalle.id)}>
            Añadir al carrito
          </button>
          {url ? <img src={images} alt={detalle.title}/> : <img src={detalle.image} alt={detalle.title}/>}
          <div className="description">
          <p><b> Description: </b> Al que es amigo, jamás / lo dejen en la estacada / Pero no le pidan nada / Ni lo aguarden todo de él / Siempre el amigo más fiel / es una conduta honrada.</p>
          <p> Los hermanos sean unidos / porque ésa es la ley primera, / tengan unión verdadera, / en cualquier tiempo que sea, / porque si entre ellos se pelean / los devoran los de ajuera.</p>
          </div>
     </div>
   }
    <div className="productos">
      {
        productos.map((producto)=>{
          if((item < 6)&&(detalle.category === producto.category)){
            item++;
          return <ProductoItem 
          key={producto.id}
          title={producto.title}
          image={producto.image}
          category={producto.category}
          price={producto.price}
          id={producto.id}
          />
          }
          
        
        })
      }
     
    </div>
    </>
  )
}
