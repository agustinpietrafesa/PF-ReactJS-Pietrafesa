import Card from 'react-bootstrap/Card';
import ItemCount from "../ItemCount/ItemCount";
import './ItemDetail.css'

const ItemDetail = ({ id, img, prenda, detalle, marca, precio, talle, stock}) => {
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
            <ItemCount inicial={1} stock={stock} onAdd={(cantidad) => console.log("cantidad agregada", cantidad)} />
          </Card.Body>

          
        </Card>
      </div>

    )
}

export default ItemDetail