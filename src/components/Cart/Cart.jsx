import { useContext } from "react"
import { CartContext } from "../Context/CartContext"
import { Link } from "react-router-dom"
import CartItem from "../CartItem/CartItem"
import './Cart.css'

const Cart = () => {

    const { carrito, vaciarCarrito, total } = useContext(CartContext)
 
    if( carrito.length === 0){
        return(
            <div>
                <h1>No hay Items en el carrito</h1>

                <Link to='/' className="Option">
                    <button className='btnCart'>
                        Productos
                    </button>      
                </Link>
            </div>
        )
    }


    return(
        <div>
            {
                carrito.map(p => <CartItem key={p.id} {...p} />)}
            <section>
                <h2>Total: ${total()} </h2>
                <button onClick={() => vaciarCarrito()} className='btnCart'>Vaciar carrito</button>
                <Link to='/checkout' >                    
                    <button className='btnCart'>
                     Checkout
                    </button>      
                </Link>
            </section>


        </div>
    )
}

export default Cart