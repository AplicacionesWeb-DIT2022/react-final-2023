import React, { useState, useEffect, createContext } from "react";

import data from '../Data.js' 

export const DataContext = createContext();

export const DataProvider = (props) =>{
    const [productos, setProductos] = useState([])
    
    // CONTEXTO PARA EL CARRITO
    const [menu, setMenu] = useState(false);

    useEffect(() =>{
        const producto = data.items
        if(producto){
            setProductos(producto)
        }else{
            setProductos([]) 
        }
    },[])

    const value = {
        productos : [productos],
        menu : [menu, {setMenu}]
    }

    return (
        <DataContext.Provider value = {value}>
            {props.children}
        </DataContext.Provider>
    )
} 