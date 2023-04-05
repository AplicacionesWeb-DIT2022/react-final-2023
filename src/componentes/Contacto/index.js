import React, {useContext} from "react";
import Nike from "../../images/Nike.jpg";
import { DataContext } from "../../context/Dataprovider";

export const Contacto = () => {
  // const value = useContext(DataContext) 
  return (
    <>
      <div className= "producto">
      <div className="col">
					<a><p> z </p></a>
          <a><p> z</p></a>
          <a><p> z </p></a>
          <img src={ Nike } alt="Nike" width="250" height="250"/>
      </div>
      
			<div id='footer-content' className="row" style={{"gap":"3rem"}}>

				<div id="links-interes" className="col-auto">
          <p><u></u></p>
          <p><u> Redes y Contactos </u></p>
          <i className="bi bi-telephone col"> +54 9 280 441-6543</i>
          <p><u></u></p>
          <i className="bi bi-mailbox col"> patagoniacreativa.info@gmail.com</i>
          <p><u></u></p>
          <i className="bi bi-instagram col"> Siguenos en Instagram</i>
          <p><u></u></p>
          <i className="bi bi-facebook col"> Siguenos en Facebook</i>
				</div>

				<div className="col-auto">
          <p><u></u></p>
          <div className="row">
          <div className="col-auto">
            <p> Nombre</p>
            <input className="form-control col-md col-sm-auto"></input>
            <p> Mail</p>
            <input className="form-control col-md col-sm-auto"></input>
            <p> Telefono (opcional) </p>
            <input className="form-control col-md col-sm-auto"></input>
            <p> Mensaje</p>
            <textarea className="form-control col-md col-sm-auto" name="comentarios" rows="10" cols="40">Hola! Escribo para: ...</textarea>
            <p><u></u></p>
            <div class="mb-3 form-check">
              <input type="checkbox" class="form-check-input" id="exampleCheck1"/>
              <label class="form-check-label" for="exampleCheck1">Verificado</label>
            </div>
            <button type="button" className="btn btn-primary col-auto">Enviar</button>
            <p><u></u></p>
            <p><u></u></p>
            <p><u></u></p>
          </div>
				  </div>
			  </div>
		</div>
    </div>  

    </>
  )
}