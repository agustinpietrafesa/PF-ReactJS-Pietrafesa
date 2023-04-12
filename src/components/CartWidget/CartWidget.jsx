import cart from './assets/img/cart-white.png'
import './styles/CartWidgetStyles.css'

const CartWidget = () => {
    return(
        <div className='carrito'>
            <img src={cart} className='img-carrito' alt="cart-widget" />
            <p>0</p>
        </div>

    )
}

export default CartWidget