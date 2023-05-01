import './ItemList.css'
import Item from '../Item/Item'


const ItemList = ({productos }) => {
    return(
        <div className='listaProductos'>
            {productos.map(productos => <Item key={productos.id} {...productos} />)}
            

        </div>
    )
}

export default ItemList




