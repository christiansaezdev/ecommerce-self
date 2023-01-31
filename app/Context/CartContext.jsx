"use client"
import { useState, useContext, createContext } from "react";

//Context
export const CartContext = createContext(null);

//Provider
export const CartProvider = ({ children }) => {
  const [cartItem, setCartItem] = useState(() => {
    try {
      const productEnLocalStorage = JSON.parse(
        localStorage.getItem("cartProduct")
      );
      return productEnLocalStorage ? JSON.parse(productEnLocalStorage) : [];
    } catch (err) {
      return [];
    }
  });

  useEffect(() => {
    localStorage.setItem("cartProduct", JSON.stringify(cartItem));
  }, [cartItem]);

  const addItemToCart = (product) => {
    const inCart = cartItem.find(
      (productInCart) => productInCart.id === product.id
    );
    if (inCart) {
      setCartItem.map((productInCart) => {
        if (productInCart.id === product.id) {
          return { ...inCart, amount: inCart.amount + 1 };
        } else {
          return productInCart;
        }
      });
    } else {
      setCartItem([...cartItem, { ...product, amount: 1 }]);
    }

    const deleteItemToCart = (product) => {
      const inCart = cartItem.find(
        (productInCart) => productInCart.id === product.id
      );
      if (inCart.amount === 1) {
        setCartItem(
          cartItem.filter((productInCart) => productInCart.id !== product.id)
        );
      } else {
        setCartItem((productInCart) => {
          if (productInCart.id === product.id) {
            return { ...inCart, amount: inCart.amount - 1 };
          } else return productInCart;
        });
      }
    };
    return (
      <CartContext.Provider
        value={{
          cartItem,
          addItemToCart,
          deleteItemToCart,
        }}
      >
        {children}
       /</CartContext.Provider> 
    )
  };
};
