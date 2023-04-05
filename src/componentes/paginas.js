import React from "react";
import { BrowserRouter as Switch, Route } from "react-router-dom";

import { Inicio } from "./Inicio/index";
import { ProductosLista } from "./Productos/index";
import { Lugares } from "./Lugares/index";
import { Contacto } from "./Contacto/index";

export const Paginas = () => {
  return (
    <section>
      <Switch>
        <Route path="/" exact component={ Inicio } />
        <Route path="/productos" exact component={ ProductosLista } />
        <Route path="/lugares" exact component={ Lugares } />
        <Route path="/contacto" exact component={ Contacto } />
      </Switch>
    </section>
  )
}