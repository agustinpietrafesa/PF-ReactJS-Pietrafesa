import { useState } from "react";
import { createContext } from "react";

export const CartContext = createContext({
    carrito: []
})

export const CartProvider = ({ children }) => {
    const [carrito, setCarrito] = useState([])



    const agregarItem = (item, cantidad) => {
        if(!isInCart(item.id)) {
            setCarrito(prev => [...prev, {...item, cantidad}])
        } else {
            setCarrito(carrito.map(prod => {
                return prod.id === item.id ? {...prod, cantidad: prod.cantidad + cantidad} : prod
            }))
        }
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
        return carrito.reduce((prev, act) => prev + act.cantidad * act.precio, 0);
    }

    const cantidadTotal = () => {
        return carrito.reduce((acu, productoActual) => acu + productoActual.cantidad, 0);
    }

    
    
    return (
        <CartContext.Provider value={{ carrito, agregarItem, eliminarItem, vaciarCarrito, total, cantidadTotal }}>
            { children }
        </CartContext.Provider>
    )



}