"use client";
import ShoppingCart from "@material-ui/icons/ShoppingCart";
import { useContext } from "react";
import CartContext from "../Context/CartProdContext";
import botonStyle from "./BtnAdd.module.css";

export default function BtnAdd(producto) {

  const { addItemToCart, products } = useContext(CartContext);

  console.log("aaa",CartContext)

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
        onClick={() =>  addItemToCart(carritoProducto)}
        className="ContainerButtonAdd"
      >
        Agregar
        <ShoppingCart fontSize="small" width="20px" />
      </button>
    </div>
  );
}
