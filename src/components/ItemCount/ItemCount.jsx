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
            <div className='botones'>
                <button className='boton' onClick={decremento}>-1</button>
                <h3 className='Total'>{cantidad}</h3>
                <button className='boton' onClick={incremento}>+1</button>
            </div>
            <div>
                <button className='boton' onClick={() => onAdd(cantidad)} disabled={!stock} >Agregar al carrito</button>
            </div>
        </div>
    )
}

export default ItemCount
