import React, { useContext, useEffect } from "react";
import Contexto from "../context/Contexto";
import "../assests/css/Home.css";
import Item from "../components/Item";
export default function Home() {
  const { listameProductos, productos } = useContext(Contexto);
 
  useEffect(() => {
    listameProductos();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <div className="container">
        <div className="wraper">
          <div className="home">
            {productos.map((item) => (
              <Item {...item} key={item.id}></Item>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
