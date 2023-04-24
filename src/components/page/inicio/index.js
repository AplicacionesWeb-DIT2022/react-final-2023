import React from 'react'

import Carrousel1 from "../../../images/carrousel1.png";
import Carrousel2 from "../../../images/carrousel2.png";
import Carrousel3 from "../../../images/carrousel3.png";
import Carrousel4 from "../../../images/carrousel4.png";
import PuntoVenta from "../../../images/Punto-de-Venta.png";
import ContactoImg from "../../../images/ContactoImg.png";
import ProductosIng from "../../../images/ProductosImg.png";
 
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Carousel from 'react-bootstrap/Carousel';
// import deploy from '../../../images/deploy-react-app-heroku.jpg';

export default function Inicio() {
    return (
        <div className="inicio">
        <h2>Tienda Online</h2>
        <Carousel>
        <Carousel.Item>
            <img class="d-block w-100" src={ Carrousel3 } alt="1 slide"/>
            <Carousel.Caption>
            <h3> Madera </h3>
            <p> Los mejores productos artesanales, en madera de alta calidad.</p>
            </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
            <img class="d-block w-100" src={ Carrousel2 } alt="2 slide"/>
            <Carousel.Caption>
            <h3> Telares </h3>
            <p> Una de las mejores telas del mundo, premiada muchas veces.</p>
            </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
        <img class="d-block w-100" src={ Carrousel4 } alt="3 slide"/>
            <Carousel.Caption>
            <h3> Vasijas </h3>
            <p> Artesanalmente los mejores productos, unicos y en cada detalle. </p>
            </Carousel.Caption>      
        </Carousel.Item>
        <Carousel.Item>
        <img class="d-block w-100" src={ Carrousel1 } alt="4 slide"/>
            <Carousel.Caption>
            <h3> Artesanias Patagonicas </h3>
            <p> Praesent commodo cursus magna, vel scelerisque nisl consectetur. </p>
            </Carousel.Caption>
        </Carousel.Item>
        </Carousel>
            
        <p>
            <hr>
            </hr>
        </p>

        <div className='productos'>
        <Card style={{ width: '28rem' }}>
            <Card.Img variant="top" src={ ProductosIng } width="100" />
            <Card.Body>
            <Card.Title> Productos </Card.Title>
            <Card.Text>
                Productos para todas las edades, estilos, con la mejor de las ondas.
            </Card.Text>
            <a href='/productos'>
            <Button variant="primary"> Ir a Productos </Button>
            </a>
            </Card.Body>
        </Card>
        
        <Card style={{ width: '28rem' }}>
            <Card.Img variant="top" src={ PuntoVenta } width="100" height="250"  />
            <Card.Body>
            <Card.Title> Sucursales </Card.Title>
            <Card.Text>
                Unicos, son los puntos de venta que estas buscando.
            </Card.Text>
            <a href='/lugares'>
            <Button variant="primary"> Puntos de Venta </Button>
            </a>
            </Card.Body>
        </Card>
        
        <Card style={{ width: '28rem' }}>
            <Card.Img variant="top" src={ ContactoImg } />
            <Card.Body>
            <Card.Title> Contacto </Card.Title>
            <Card.Text>
                Accede desde un lugar comodo, con nosotros, contactate y suscribete a nuestras redes.
            </Card.Text>
            <a href='/contacto'>
            <Button variant="primary"> Ir a Contacto </Button>
            </a>
            </Card.Body>
        </Card>
        
        </div>
        <p>
            <hr>
            </hr>
        </p>
        </div>
  )
}