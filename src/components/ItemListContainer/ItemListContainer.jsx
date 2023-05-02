import { useEffect, useState } from "react"
import { obtenerProductos } from "../../assets/productos/products"
import ItemList from "../ItemList/ItemList"
import './ItemListContainer.css'

const ItemListContainer = ( {saludo} ) => {
    const [productos, setProductos] = useState([])

    useEffect(() => {
        obtenerProductos()
            .then(response => {
                setProductos(response)
            })
            .catch(error => {
                console.error(error)
            })
    }, [])

    return(
        <div className="contenedorProductos">
            <h1>{saludo}</h1>
            <ItemList productos={productos}/>
            
        </div>
    )
}

export default ItemListContainer


