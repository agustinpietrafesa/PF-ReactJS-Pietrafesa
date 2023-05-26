import { useContext } from "react"
import { CartContext } from "../Context/CartContext"
import './CartItem.css'



export const CartItem = ( { id, detalle, img, cantidad, precio } ) => {


    const { eliminarItem } = useContext( CartContext );


    return (
        <section >
            <header>
                <h2>{detalle}</h2>
            </header>
            <picture className='CartImg'>
                <img className="cartItemImg" src={img} alt="detalle"/>
            </picture>
            <div>
                <p>Cantidad: {cantidad}</p>

                <p>Precio unitario: ${precio}</p>

                <p>Subtotal: ${cantidad * precio}</p>
            </div>
            <div>
                <button className='ButtonDelete' onClick={ () => eliminarItem(id) }>X</button>
            </div>
        </section>
    )
}
  


export default CartItem;