import { useEffect, useState } from "react"
import {getProductsByCategory, obtenerProductos } from "../../assets/productos/products"
import ItemList from "../ItemList/ItemList"
import './ItemListContainer.css'
import { useParams } from "react-router-dom"

const ItemListContainer = ( {saludo} ) => {
    const [productos, setProductos] = useState([])

    const { categoryId } = useParams()

    useEffect(() => {
        const asyncFunc = categoryId ? getProductsByCategory : obtenerProductos
        
        asyncFunc(categoryId)
            .then(response => {
                setProductos(response)
            })
            .catch(error => {
                console.error(error)
            })
    }, [categoryId])

    return(
        <div className="contenedorProductos">
            <h1>{saludo}</h1>
            <ItemList productos={productos}/>
            
        </div>
    )
}

export default ItemListContainer
