import { useState } from "react";
import { useEffect } from "react";
import { getProductById } from "../../assets/productos/products";
import ItemDetail from "../ItemDetail/ItemDetail";
import './ItemDetailContainer.css'
import { useParams } from "react-router-dom";

const ItemDetailContainer = () => {
    const [producto, setProducto] = useState(null)

     const { productoId } = useParams()

    useEffect(() => {
        getProductById(productoId)
        .then(response => {
            setProducto(response)
        })
        .catch(error => {
            console.error(error)
        })
    }, [productoId])

    return(
        <div className="ItemDetailContainer">
            <ItemDetail {...producto} />
        </div>
    )

}

export default ItemDetailContainer

