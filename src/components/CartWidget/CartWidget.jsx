import { useContext } from 'react'
import Cart from './assets/img/cartWhite.png'
import { CartContext } from '../Context/CartContext'
import { Link } from 'react-router-dom'
import './styles/CartWidgetStyles.css'

const CartWidget = () => {
  
  const { cantidadTotal } = useContext(CartContext)

  return (
    <Link to='/cart' className='CartWidget' style={{ display: cantidadTotal() > 0 ? 'flex' : 'none'}}>
      <h3 className='numCarrito'>
      { cantidadTotal() }
      </h3>

      <img className='img-carrito' src={Cart} alt="Cart" />

    </Link>
  )
}

export default CartWidget