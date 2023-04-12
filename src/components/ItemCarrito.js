import React, { useContext } from "react";

import "../assests/css/ItemCarrito.css";
import Borrar from "../assests/statics/borrar.png";
import Contexto from "../context/Contexto";

export default function ItemCarrito(props) {
  const { nombre, precio, img, id } = props;
  const { eliminarCarrito } = useContext(Contexto);

  return (
    <>
      <div className="carrito-item">
        <img src={img} alt="" className="carrito-item-img" />
        <div className="carrito-txt">
          <h1 className="carrito-item-titulo">{nombre}</h1>
          <h3 className="carrito-item-precio">AR$ {precio}</h3>
        </div>
        <img
          src={Borrar}
          alt=""
          className="carrito-item-borrar"
          onClick={() => eliminarCarrito(id)}
        />
      </div>
    </>
  );
}
