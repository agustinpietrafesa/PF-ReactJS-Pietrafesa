import Card from 'react-bootstrap/Card';
import ItemCount from "../ItemCount/ItemCount";
import './ItemDetail.css'
import { Link } from 'react-router-dom';
import { useState, useContext } from 'react';
import { CartContext } from '../Context/CartContext';



const ItemDetail = ({ id, img, prenda, detalle, marca, precio, talle, stock}) => {

   const [cantidadAgregada, setCantidadAgregada] = useState(0)

   const {agregarItem} = useContext(CartContext)

   const handleOnAdd = (cantidad) => {
    setCantidadAgregada(cantidad)

    const item = {
      id, detalle, precio
    }

    agregarItem(item, cantidad)
   }

    return (
        <div>
        <Card className='tarjetasDetail'>
          <Card.Img variant="top" src={img} />
          <Card.Body>
            <Card.Title>{detalle} </Card.Title>
            <Card.Text>
                <h3>Talle {talle} </h3>
                <h5>Precio ${precio} </h5>
                <h6>Disponibles: {stock} </h6>
            </Card.Text>
           <footer>
                {cantidadAgregada > 0 ?
                (
                <Link to='/cart' variant="primary" className='btnFinalizarCompra'>Finalizar compra</Link>)
                :
                (<ItemCount inicial={1} stock={stock} onAdd={handleOnAdd} />)
                }
            </footer>
          </Card.Body>

          
        </Card>
      </div>

    )
}

export default ItemDetail