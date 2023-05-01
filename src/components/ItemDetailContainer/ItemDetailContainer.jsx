import { useState } from "react";
import { useEffect } from "react";
import { getProductById } from "../../assets/productos/products";
import ItemDetail from "../ItemDetail/ItemDetail";

const itemDetailContainer = () => {
    const [producto, setProducto] = useState(null)

    useEffect(() => {
        getProductById(1)
        .then(response => {
            setProducto(response)
        })
        .catch(error => {
            console.error(error)
        })
    }, [])

    return(
        <div className="ItemDetailContainer">
            <ItemDetail {...producto} />
        </div>
    )

}
