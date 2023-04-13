import React, {useContext, useEffect, useState} from 'react'
import { DataContext } from "../../../context/DataProvider";
import { useParams } from "react-router-dom";
import { ProductoItem } from "./ProductoItem";
import { sinimagen } from "../../../images/sinimagen.png";

export const ProductosDetalles = () => {
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

  console.log("XXXXXXXXXXX PRODUCTO DETALLES XXXXXXXXXXX")
  // console.log(sinimagen)
  console.log(apiUrl)

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
          {url ? <img src={imagess} alt={detalle.descripcion}/> : <img src={detalle.image} alt={detalle.title}/>}
          <div className="description">
          <p><b> Description: </b> Al que es amigo, jamás / lo dejen en la estacada / Pero no le pidan nada / Ni lo aguarden todo de él / Siempre el amigo más fiel / es una conduta honrada.</p>
          <p> Los hermanos sean unidos / porque ésa es la ley primera, / tengan unión verdadera, / en cualquier tiempo que sea, / porque si entre ellos se pelean / los devoran los de ajuera.</p>
          </div>
     
    <div className="detalles">
      {detalle.media && detalle.media.length && detalle.media.map(imagen =>
        <div key={apiUrl+imagen.id} className='col-sm-12 col-md-auto d-md-flex align-items-stretch'>
          <img className='thumb_galeria' src={apiUrl+imagen.original_url} alt={"imagen.file_name"} width={256} height={256}/>
        </div>
      )}
    </div>

    <div style={{textAlign:'center'}}>
      {detalle.media && detalle.media.length
        ? <img src={"https://scontent-eze1-1.xx.fbcdn.net/v/t31.18172-8/23826338_1494956747267465_1546498845198945599_o.jpg?stp=dst-jpg_p180x540&_nc_cat=102&ccb=1-7&_nc_sid=e3f864&_nc_ohc=Uu91sN_2A5MAX_VIfsW&_nc_ht=scontent-eze1-1.xx&oh=00_AfDiL_rrfJmnPChkpY7Z5zMzBTneybU0Saclz8vS4N4M-w&oe=645FE236"} alt={detalle.media[0].full_name} width={128} height={128}/>
        : <img src={ sinimagen } width={128} height={128}/>}
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
          // image={producto.media.original_url}
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
