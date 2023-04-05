import React from 'react'
import unipat from "../../images/unipat.png"
import logodit from "../../images/logodit.png"

export const Footer = () => {
	return (
		<div id="page-footer" className= "producto">
			<div id='footer-content' className="row" style={{"gap":"3rem"}}>
				<div className="d-none d-sm-block col-2" style={{textAlign: "center"}}>
					<img src={logodit} alt="logodit" width="200" height="200"/>
					<img src={unipat} alt="unipat" width="120" height="120"/>
				</div>
				<div id="links-interes" className="col-auto">
                    <p><u></u></p>
                    <p><u>UNPSJB</u></p>
                    <p>Facultad de Ingenieria</p>
                    <p>Licenciatura en Sistemas</p>
				</div>
				
				<div className="col-auto">
                    <p><u></u></p>
					<p><u>- App Web 2023 -</u></p>
					<div id="redes-list" className='row'>
						<a>Prof Diego Martinez</a>
                        <a>Prof Gabriel Ingravallo</a>
                        <a>Alumno Martin Conti</a>
					</div>
				</div>
			</div>
		</div>
	)
}