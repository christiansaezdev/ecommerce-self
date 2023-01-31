"use client"
import { useState, createContext } from 'react';


const CarritoContext = createContext();

export function CarritoProvider({ children }) {
    const [productos, setProductos] = useState([]);
    const agregarProducto = (producto) => {
      console.log(0);
    };
    const eliminarProducto = id => {
      setProductos(productos.filter(producto => producto.id !== id));
    };
    return (
      <CarritoContext.Provider value={{  agregarProducto, eliminarProducto }}>
        {children}
      </CarritoContext.Provider>
    );
  }

  export const useCarritoContext = () => useContext(CarritoContext);
