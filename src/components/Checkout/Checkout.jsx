import { useContext, useState } from "react"
import { CartContext } from "../Context/CartContext"
import { Timestamp, addDoc, collection, documentId, getDocs, query, where, writeBatch } from "firebase/firestore"
import CheckoutForm from "../CheckoutForm/CheckoutForm"
import { db } from "../../services/firebase/firebaseConfig"




const Checkout = () => {
    const [loading, setLoading] = useState(false)
    const [orderId, setOrderId] = useState('')

    const { carrito, total, vaciarCarrito } = useContext(CartContext)

    const createOrder = async ({ nombre, telefono, email }) => {
        setLoading(true)

        try {
            const objOrder = {
                comprador: {
                    nombre, telefono, email 
                },
                productos: carrito,
                total: total(),
                date: Timestamp.fromDate(new Date())
            }

            const batch = writeBatch(db)

            const outOfStock = []

            const ids = carrito.map(prod => prod.id)

            const productsRef = collection(db, 'Productos')

            const productsAddedFromFirestore = await getDocs(query(productsRef, where(documentId(), 'in', ids)))

            const { docs } = productsAddedFromFirestore

            docs.forEach(doc => {
                const dataDoc = doc.data()
                const stockDb = dataDoc.stock

                const productsAddedToCart = carrito.find(prod => prod.id === doc.id)
                const prodQuantity = productsAddedToCart?.cantidad

                if(stockDb >= prodQuantity) {
                    batch.update(doc.ref, { stock: stockDb - prodQuantity })
                } else {
                    outOfStock.push({ id: doc.id, ...dataDoc })
                }
            })

            if(outOfStock.length === 0) {
                await batch.commit()

                const orderRef = collection(db, 'orders')

                const orderAdded = await addDoc(orderRef, objOrder)

                setOrderId(orderAdded.id)
                vaciarCarrito()
            } else {
                console.error('No hay stock')
            }
        } catch (error) {
            console.log(error)
        } finally {
            setLoading(false)
        }
    }

    if(loading) {
        return <div className='Container-Title'><h1 className="Title">Se esta procesando su orden...</h1></div>
    }

    if(orderId) {
        return  <div className='Container-Title'>
                    <h1 className="Title">El ID de su orden es: {orderId}</h1>
                    <h2>Llego el momento de lucir tu pilcha!!</h2>
                </div>
    }

    return (
        <div className='Container-Title'>
            <h1 className="Title">Checkout</h1>
            <CheckoutForm onConfirm={createOrder}/>
        </div>
    )
}

export default Checkout