"use client"
import { createContext, useEffect, useState } from "react";
/* Creamos el context, se le puede pasar un valor inicial */
const CartContext = createContext();

export const CartProvider = ({ children }) => {
  /* Creamos un estado para el carrito */
  const [cartItems, setCartItems] = useState([]);
  const [products, setProducts] = useState([]);

  const getProducts = async () => {
    console.log('getProducts')
  };

  const getProductsCart = async () => {
    console.log('getProductsCart')
  };

  useEffect(() => {
    getProducts();
    getProductsCart();
  }, []);

  const addItemToCart = async (product) => {

   console.log(product)

    getProducts();
    getProductsCart();
  };


  return (
    /* Envolvemos el children con el provider y le pasamos un objeto con las propiedades que necesitamos por value */
    <CartContext.Provider
      value={{ cartItems, products, addItemToCart }}
    >
      {children}
    </CartContext.Provider>
  );
};

export default CartContext;
