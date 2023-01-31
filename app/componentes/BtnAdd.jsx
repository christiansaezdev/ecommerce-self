"use client";
import ShoppingCart from "@material-ui/icons/ShoppingCart";
import { useContext } from "react";
import {useCarritoContext} from "../Context/CarritoContext";
import botonStyle from "./BtnAdd.module.css";

export default function BtnAdd(producto) {

  const context = useContext(useCarritoContext);

  console.log("aaa",context)

  const carritoProducto = {
    id: producto.producto.id,
    precio: producto.producto.precio,
    precio_oferta:producto.producto.precio_oferta,
    stock: producto.producto.stock,
    imagenurl:producto.producto.imagenurl,
    cantidad: 0,
  };
  return (
    <div className={botonStyle.container}>
    
      <button
        onClick={() =>  context.agregarProducto(carritoProducto)}
        className="ContainerButtonAdd"
      >
        Agregar
        <ShoppingCart fontSize="small" width="20px" />
      </button>
    </div>
  );
}
