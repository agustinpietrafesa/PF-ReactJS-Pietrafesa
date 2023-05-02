import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import './Item.css'

const Item = ({id, img, prenda, detalle, marca, precio, talle}) => {
    return(
        <div>
          <Card className='tarjetas'>
            <Card.Img variant="top" src={img} />
            <Card.Body>
              <Card.Title>{detalle} </Card.Title>
              <Card.Text>
                  <h3>Talle {talle} </h3>
              </Card.Text>
              <Button variant="primary">Ver más</Button>
            </Card.Body>
          </Card>
        </div>
    )
}

export default Item


