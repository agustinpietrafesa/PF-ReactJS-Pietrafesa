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
      id, detalle, precio, img
    }

    agregarItem(item, cantidad)
   }

    return (

      <Card className='tarjetasDetail' >
          <Card.Img variant="top" src={img} />
        <Card.Body>
          <Card.Title>{detalle}</Card.Title>
            <Card.Text className='infoProd'>
                   Precio ${precio}
            </Card.Text>
            <Card.Text className='infoProd'>
                   Talle { talle}       
            </Card.Text>
            <Card.Text className='infoProd'>    
                   Disponibles: { stock} 
            </Card.Text>
            <Card.Footer className='footerDetail'>

                 {cantidadAgregada > 0 ?
                 (
               <Link to='/cart' className='btnFinalizarCompra'>Finalizar compra</Link>)
                 :
                 (<ItemCount inicial={1} stock={stock} onAdd={handleOnAdd} />)
               }
            </Card.Footer>
        </Card.Body>
      </Card>



      //   <div>
      //   <Card className='tarjetasDetail'>
      //     <Card.Img  className='ImgDetail' variant="top" src={img} />
      //     <Card.Body>
      //       <Card.Title>{detalle} </Card.Title>
      //       <Card.Text>
      //           Precio ${precio} 
      //           Talle {talle} 
      //           Disponibles: {stock} 
      //       </Card.Text>
      //      <footer>
      //           {cantidadAgregada > 0 ?
      //           (
      //           <Link to='/cart' variant="primary" className='btnFinalizarCompra'>Finalizar compra</Link>)
      //           :
      //           (<ItemCount inicial={1} stock={stock} onAdd={handleOnAdd} />)
      //           }
      //       </footer>
      //     </Card.Body>
      //   </Card>
      // </div>

    )
}

export default ItemDetail