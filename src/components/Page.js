import React from "react";
import { Switch, Route} from "react-router-dom";
import Inicio from "./page/inicio";
import { ProductosList } from "./page/productos";
import { Contacto } from "./Contacto";
import { ProductosDetalles } from "./page/productos/ProductosDetalles";
import Lugares from "./Lugares";

export default function Page() {
  return (
    <section>
      <Switch>
				<Route path="/" exact component={ Inicio } />
				<Route path="/productos" exact component={ ProductosList } />
        <Route path="/producto/:id" exact component={ ProductosDetalles } />
        <Route path="/contacto" exact component={ Contacto } />
        <Route path="/lugares" exact component={ Lugares } />
			</Switch>
    </section>
  );
}
