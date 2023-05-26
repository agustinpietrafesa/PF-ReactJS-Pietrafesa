import { useState } from "react";
import { createContext } from "react";

export const CartContext = createContext({
    carrito: []
})

export const CartProvider = ({ children }) => {
    const [carrito, setCarrito] = useState([])

    console.log(carrito)

    const agregarItem = (item, cantidad) => {
        (!isInCart(item.id)) 
        ? 
        (setCarrito(prev => [...prev, {...item, cantidad}]))
        :
        (console.error('El producto ya fue agregado'))
    }

    const eliminarItem = (itemId) => {
        const carritoEstado = carrito.filter(prod => prod.id !== itemId)
        setCarrito(carritoEstado)
    }

    const vaciarCarrito = () => {
        setCarrito([])
    }

    const isInCart = (itemId) => {
        return carrito.some(prod => prod.id === itemId)
    }

    const total = () => {
        return carrito.reduce((prev, act) => prev + act.carrito * act.precio, 0);
    }

    const cantidadTotal = () => {
        return carrito.reduce((acu, productoActual) => acu + productoActual.carrito, 0);
    }

    
    
    return (
        <CartContext.Provider value={{ carrito, agregarItem, eliminarItem, vaciarCarrito, total, cantidadTotal }}>
            { children }
        </CartContext.Provider>
    )



}