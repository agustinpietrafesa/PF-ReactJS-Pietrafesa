import { useState } from "react";
import { useEffect } from "react";
import { getDoc, doc } from 'firebase/firestore'
import { db } from '../../services/firebase/firebaseConfig'
import ItemDetail from "../ItemDetail/ItemDetail";
import './ItemDetailContainer.css'
import { useParams } from "react-router-dom";

const ItemDetailContainer = () => {
    const [producto, setProducto] = useState(null)
    const [loading, setLoading] = useState(true)

     const { productoId } = useParams()

     useEffect(() => {
        setLoading(true)

        const docRef = doc(db, 'Productos', productoId)

        getDoc(docRef)
            .then(res => {
                const data = res.data()
                const productsAdapted = { id: res.id, ...data }
                setProducto(productsAdapted)
            })
            .catch(error => {
                console.error(error)
            })
            .finally(() => {
                setLoading(false)
            })
    }, [productoId])

    return(
        <div>
       { 
       loading 
        ?
        <h4>Cargando</h4>
        :
       <div className="ItemDetailContainer">
                <ItemDetail {...producto} />
            </div>}
        </div>
    )

}

export default ItemDetailContainer

