import Card from 'react-bootstrap/Card';
import './Item.css'
import { Link } from 'react-router-dom';

const Item = ({id, img, prenda, detalle, marca, precio, talle}) => {
    return(
        <div>
          <Card className='tarjetas'>
            <Card.Img variant="top" className='imgTarjeta' src={img} />
            <Card.Body>
              <Card.Title>{detalle} </Card.Title>
              <Card.Text>
                  Talle {talle} 
              </Card.Text>
                <Link to={`/producto/${id}`} className='BtnVerMas'>Ver más</Link>
            </Card.Body>
          </Card>
        </div>
    )
}

export default Item


