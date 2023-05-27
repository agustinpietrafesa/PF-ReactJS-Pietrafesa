import { useContext } from "react"
import { CartContext } from "../Context/CartContext"
import './CartItem.css'
import Button from 'react-bootstrap/Button';



export const CartItem = ( { id, detalle, img, cantidad, precio } ) => {


    const { eliminarItem } = useContext( CartContext );


    return (
        <section className="carritoItem" >
            <picture className='CartImg'>
                <img className="cartItemImg" src={img} alt="detalle"/>
            </picture>
            <div className="datosItems">
                <h2>{detalle}</h2>
                <p>Cantidad: {cantidad}</p>

                <p>Precio unitario: ${precio}</p>

                <p>Subtotal: ${cantidad * precio}</p>
            </div>
            <div className="btnEliminarItem">
                 <Button variant="danger"  onClick={ () => eliminarItem(id) }>X</Button>
            </div>
        </section>
    )
}
  


export default CartItem;