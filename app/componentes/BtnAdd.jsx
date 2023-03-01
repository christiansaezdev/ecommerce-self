"use client";
import ShoppingCart from "@material-ui/icons/ShoppingCart";
import { useContext } from "react";
import CartContext from "../Context/CartProdContext";
import botonStyle from "./BtnAdd.module.css";

export default function BtnAdd({producto}) {

  const { addItemToCart, products } = useContext(CartContext);

console.log(producto);
  const carritoProducto = {
    id: producto.id,
    precio: producto.precio,
    precio_oferta:producto.precio_oferta,
    stock: producto.stock,
    imagenurl:producto.imagenurl,
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
