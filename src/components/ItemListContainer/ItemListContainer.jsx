import { useEffect, useState } from "react"
import ItemList from "../ItemList/ItemList"
import './ItemListContainer.css'
import { useParams } from "react-router-dom"
import { getDocs, collection, query, where } from 'firebase/firestore'
import { db } from '../../services/firebase/firebaseConfig'

const ItemListContainer = ( {saludo} ) => {
    const [productos, setProductos] = useState([])
    const [loading, setLoading] = useState(true)

    const { categoryId } = useParams()

    useEffect(() => {
        setLoading(true)
    
        const collectionRef = categoryId
          ? query(collection(db,'Productos'), where('prenda', '==', categoryId))
          : collection(db, 'Productos')
    
          getDocs(collectionRef)
            .then(res => {
              const productsAdapted = res.docs.map(doc => {
                const data = doc.data()
                return {id: doc.id, ...data}
              })
              setProductos(productsAdapted);
        })
        .catch(error => {
          console.log(error);
        })
        .finally( () => {
          setLoading(false);
        })
      }, [categoryId])

    return(
        
        <div>
            {
            loading
            ?
            <h4>Cargando</h4>
            :     
            <div className="contenedorProductos">
                <h1>{saludo}</h1>
                <ItemList productos={productos}/>
                
            </div>
    }
    </div>
     )
}

export default ItemListContainer
