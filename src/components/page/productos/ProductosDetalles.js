import React, {useContext, useEffect, useState} from 'react'
import { DataContext } from "../../../context/DataProvider";
import { useParams } from "react-router-dom";
import { ProductoItem } from "./ProductoItem";
import sinimagen from "../../../images/sinimagen.png";
import Nike from "../../../images/Nike.jpg";

export const ProductosDetalles = () => {
  const ruta = 'https://upload.wikimedia.org/wikipedia/commons/3/3d/Hola.jpg';

  const value = useContext(DataContext);
  const [productos] = value.productos;
  const addCarrito = value.addCarrito;
  const [detalle, setDetalle] = useState([])
  const [url, setUrl]= useState(0)
  const [imagess, setImages] = useState('')
  const params = useParams();
  let item = 0

  const apiUrl = process.env.NODE_ENV === "production"
    				? process.env.REACT_APP_API_URL
    				: `https://${process.env.REACT_APP_API_URL}`;

  useEffect(() =>{
    console.log('re render' , params.id)
    item=0;
    productos.forEach(producto =>{
      if(producto.id === parseInt(params.id)){
        setDetalle(producto)
        // setUrl(0)
      }
    })
  },[params.id, productos])

  // useEffect(() =>{
  //   const values = `${detalle.img1}${url}${detalle.img2}`;
  //   setImages(values) 
  // },[url, params.id])

  // const handleInput = (e) =>{
  // const number = e.target.value.toString().padStart(2,'01')
  //  setUrl(number)
  // }

  if(detalle.length < 1) return null;

  return (<>{
        <div className="detalles">
          <h2>{detalle.descripcion}</h2>
          <p className="price">${detalle.precio}</p>
          <button onClick={() => addCarrito(detalle.id)}>
            Añadir al carrito
          </button>
          {/* {url ? <img src={imagess} alt={detalle.descripcion}/> : <img src={detalle.original_url} alt={detalle.title}/>} */}
          
          {<img src={detalle.tipo} alt={detalle.file_name}/>}
          <div className="description">
            <p><b> Description: </b> Al que es amigo, jamás / lo dejen en la estacada / Pero no le pidan nada / Ni lo aguarden todo de él / Siempre el amigo más fiel / es una conduta honrada.</p>
            <p> Los hermanos sean unidos / porque ésa es la ley primera, / tengan unión verdadera, / en cualquier tiempo que sea, / porque si entre ellos se pelean / los devoran los de ajuera.</p>
          </div>

          {/* <div className="detalles">
            {detalle.media && detalle.media.length && detalle.media.map(imagen =>
              <div key={apiUrl+imagen.id} className='col-sm-12 col-md-auto d-md-flex align-items-stretch'>
                <img className='thumb_galeria' src={apiUrl+imagen.original_url} alt={"imagen.file_name"} width={256} height={256}/>
              </div>
            )}
          </div> */}

          <div style={{textAlign:'center'}}>
            <img src={sinimagen} width={128} height={128}/>
          </div>
        </div>
  }
    <div className="productos">
      {
        productos.map((producto)=>{
          if((item < 6)&&(detalle.tipo === producto.tipo)){
            item++;
          return <ProductoItem 
          key={producto.id}
          title={producto.descripcion}
          image={sinimagen}
          tipo={producto.tipo}
          precio={producto.precio}
          id={producto.id}
          />
          }
        })
      }
    </div>
    </>
  )
}