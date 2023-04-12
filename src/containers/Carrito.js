import React, { useContext } from "react";
import "../assests/css/Carrito.css";
import ItemCarrito from "../components/ItemCarrito";
import Contexto from "../context/Contexto";

export default function Carrito() {
  const { carrito } = useContext(Contexto);
  return (
    <>
      <div className="carrito">
        <div className="carrito-listadito">
          {carrito.map((item, i) => (
            <ItemCarrito
              {...item}
              key={i}
             
            ></ItemCarrito>
          ))}
        </div>
        <div className="carrito-precio">
          <h5>Total a pagar:</h5>
          <h1>
            AR$
            {carrito.reduce(function (accumulator, curValue) {
              return accumulator + curValue.precio;
            }, 0)}
          </h1>
        </div>
      </div>
    </>
   
   
  ); 
} 
