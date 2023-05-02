import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import './ItemCount.css'
import { useState } from 'react'

const ItemCount = ({stock, inicial, onAdd}) => {
    const [cantidad, setcantidad] = useState(inicial)

    const incremento = () => {
        if(cantidad < stock){
            setcantidad(cantidad + 1)
        }
    }

    const decremento = () => {
        if(cantidad > 1){
            setcantidad(cantidad - 1)
        }
    }

    return(
        <div className='contador'>
            <Card>
            <Card.Body>
                <Card.Title>Total: {cantidad} </Card.Title>
                <div className='botones'>
                    <Button variant="primary" className='btn'   onClick={decremento}>-1</Button>
                    <Button variant="primary" className='btn'  onClick={() => onAdd(cantidad)} disabled={!stock} >Agregar al carrito</Button>
                    <Button variant="primary" className='btn'  onClick={incremento}>+1</Button>
                </div>
            </Card.Body>
            </Card>            
        </div>
    )
}

export default ItemCount
