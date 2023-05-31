
# 🔎Projecto de App Web - Examen Libre - CONTI MARTIN

El proyecto consiste en una aplicación web full-stack, por medio de servicios web. Esto significa que se realizo tanto los desarrollos del lado cliente como del lado servidor, de manera ordenada y con apropiada separación de responsabilidades. 

Técnicamente son dos aplicaciones diferentes e independientes. El frontend en React, mientras que el backend fue implementado en Laravel. El desarrollo sigue el siguiente orden:

    1. Back-end
    2. API
    3. Front-end


![Logo](https://imguh.com/images/2023/05/31/todalaapp4bc52ca43db17eae.png)
## 🛠 Backend
El backend implementa altas, bajas y modificaciones de ítems en la colección de datos. Implementado en Laravel y la vista de la aplicación backend usa Blade. El backend se aloja en Heroku y la base de datos esta en PostgreSQL.
Repositorio de Github LARAVEL:

Repositorio de el Backend en Laravel
- https://github.com/AplicacionesWeb-DIT2022/ContiFinalLibre22

La aplicacion en LARAVEL, funciona desde el lado del SERVIDOR, está pensado desde el rol de un usuario administrativo de la organización el cual va a tener las siguientes funcionalidades:

- ABM Usuarios de la App.
- ABM de Productos.
- ABM de Lugares de venta.
- ABM de Clientes.
## ✈ API Reference
El API se implementa también en Laravel y ofrece una interfaz REST que como incluye:
- Obtener todos los ítems, con algún esquema de paginado apropiado.
- Obtener algunos ítems, de acuerdo a criterios de búsqueda.
- Obtener un ítem en particular
- Agregar un ítem a la colección
- Actualizar información de un ítem de la colección.

#### Get all productos

```http
  GET /api/productos
```

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `api_key` | `string` | **Required**. Your API key |

#### Get item

```http
  GET /api/producto/${2}
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `id`      | `string` | **Required**. Id of item to fetch |

## 🏝 Frontend
El frontend esta implementado en React y ofrece los datos a los usuarios finales.
Por esta razón se pone mayor énfasis en el diseño visual. Es una app responsiva para poder verse apropiadamente en un celular o Tablet. En este caso se puede agregar productos a un carrito de compras y calcular el costo todal de envio.

## ℒ Librerias
Dentro de las librerias utilizadas tenemos:
- React Router
- Redux
- Axios
- Material-UI

## 📰 Repositorio de Git
https://github.com/AplicacionesWeb-DIT2022/react-final-2023.git

## 🚀 Perfil de Github 
Full stack developer
https://github.com/ContiMartin
## Tecnologías utilizadas
- Laravel 9: Framework de desarrollo web utilizado para construir la aplicación.
- PostgreSQL: Base de datos utilizada para almacenar la información.
- HTML, CSS y JavaScript: Lenguajes de programación utilizados para el desarrollo frontend.
- Bootstrap 5: Framework CSS utilizado para el diseño y la estructura del sitio.
- Heroku


## Heroku: 
Dicha App estaba montada en un servicio de Heroku pago, el cual fue dado de baja una vez rendida la materia App Web.
- https://bakend-final-libre-conti.herokuapp.com/


## Requisitos previos
Requisitos previos necesarios para ejecutar la aplicación:

- PHP 8 o superior
- Composer
- PostgreSQL

## Instalación
Clona este repositorio en tu máquina local.
Abre una terminal y navega hasta la carpeta raíz del proyecto.

Ejecuta el siguiente comando para instalar las dependencias de Composer:
Copy code
composer install
Crea una copia del archivo .env.example y nómbrala .env.

Genera una clave de aplicación utilizando el siguiente comando:
vbnet
Copy code
php artisan key:generate

Configura las variables de entorno en el archivo .env según tu configuración local (por ejemplo, información de la base de datos).

Ejecuta las migraciones para crear las tablas de la base de datos:
Copy code
php artisan migrate

Inicia el servidor de desarrollo:
Copy code
php artisan serve

Accede a la aplicación en tu navegador web usando la URL http://localhost:8000.

## Contacto
- Conti Martin
- 2804809000
- martinfranciscolucasconti@gmail.com



![Logo](https://scontent.frel2-1.fna.fbcdn.net/v/t39.30808-6/307584256_491065153061008_2880358394830040367_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=FO606KPAPZMAX9AgJ7a&_nc_ht=scontent.frel2-1.fna&oh=00_AfClPisrTdZfSaV0oot4VthsD5nZbncOIJ7qRltNxmhCLw&oe=647BB071)
