import { useContext } from 'react'
import Cart from './assets/img/cartWhite.png'
import { CartContext } from '../Context/CartContext'
import { Link } from 'react-router-dom'

const CartWidget = () => {
  
  const { cantidadTotal } = useContext(CartContext)

  return (
    <Link to='/cart' className='CartWidget' style={{ display: cantidadTotal() > 0 ? 'flex' : 'none'}}>
      <img className='CartImg' src={Cart} alt="Cart" />
      { cantidadTotal() }
    </Link>
  )
}

export default CartWidget