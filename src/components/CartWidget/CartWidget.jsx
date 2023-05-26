import { useContext } from 'react'
import cart from './assets/img/cart-white.png'
import './styles/CartWidgetStyles.css'
import { CartContext } from '../Context/CartContext'
import { Link } from 'react-router-dom'

const CartWidget = () => {

    const { cantidadTotal } = useContext(CartContext)

    return(
        <Link to='/cart' className='CartWidget' style={{ display: cantidadTotal > 0 ? 'flex' : 'none'}}>
        <img className='CartImg' src={cart} alt="Cart" />
        { cantidadTotal() }
      </Link>

    )
}

export default CartWidget