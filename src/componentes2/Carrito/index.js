import React, {useContext} from 'react';
import Card from "../../images/img03.jpg";
import { DataContext } from "../../context/Dataprovider";

export const Carrito = () => {
    const value = useContext(DataContext);
    const [menu] = value.menu;

    // const tooglefalse = ()=>{
    //     setMenu(false);
    // }

    const show1 = menu ? "carritos show" : "carritos";
    const show2 = menu ? "carrito show" : "carrito";

    return(
        <div className={show1}>
            <div className={show2}>
                <div className="carrito__close">
                    <box-icon name="x"></box-icon>
                </div>
                
                <h2> Simulador de Pedido - Carrito </h2>
                
                <div className="carrito__center">
                    <div className="carrito__item">
                        <img src={Card} alt=""/>
                        <div>
                            <h3>Tejido C542</h3>
                            <p className="price">$543</p> 
                        </div>
                        <div>
                            <box-icon name="up-arrow" type="solid"></box-icon>
                            <p className="cantidad">1</p>
                            <box-icon name="down-arrow" type="solid"></box-icon>
                        </div>
                        <div className="remove__item">
                            <box-icon name="trash"></box-icon>
                        </div>
                    </div>

                    <div className="carrito__item">
                        <img src={Card} alt=""/>
                        <div>
                            <h3>Tejido C542</h3>
                            <p className="price">$543</p> 
                        </div>
                        <div>
                            <box-icon name="up-arrow" type="solid"></box-icon>
                            <p className="cantidad">1</p>
                            <box-icon name="down-arrow" type="solid"></box-icon>
                        </div>
                        <div className="remove__item">
                            <box-icon name="trash"></box-icon>
                        </div>
                    </div>

                    <div className="carrito__item">
                        <img src={Card} alt=""/>
                        <div>
                            <h3>Tejido C542</h3>
                            <p className="price">$543</p> 
                        </div>
                        <div>
                            <box-icon name="up-arrow" type="solid"></box-icon>
                            <p className="cantidad">1</p>
                            <box-icon name="down-arrow" type="solid"></box-icon>
                        </div>
                        <div className="remove__item">
                            <box-icon name="trash"></box-icon>
                        </div>
                    </div>
                </div>
                <div className="carrito__footer">
                    <h3>Total: $344</h3>
                    <button className="btn"> Finalizar pedido </button>
                </div>
                <div className="carrito__close">
                    <button className="btn btn-outline-info"> Exportar pedido</button>
                </div>
            </div>

            

        </div> 
    )
}