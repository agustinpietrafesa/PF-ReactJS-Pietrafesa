import { useState } from 'react'
import './CheckoutForm.css'


const CheckoutForm = ({ onConfirm }) => {
    const [nombre, setNombre] = useState('')
    const [telefono, setTelefono] = useState('')
    const [email, setEmail] = useState('')
   

    const handleConfirm = (e) => {
        e.preventDefault()

        const userData = {
            nombre, telefono, email
        }

        onConfirm(userData)
    }

    return (
        <div className='Formulario'>
            <form onSubmit={handleConfirm} className='Form'>
                <label className='Label'> Nombre completo </label>
                    <input className='Input' type="text" value={nombre} onChange={({ target }) => setNombre(target.value)} placeholder='Nombre y apellido' required/>
                
                <label className='Label'>
                    Contacto
                    <input className='Input' type="text" value={telefono} onChange={({ target }) => setTelefono(target.value)} placeholder='Telefono' required/>
                </label>    
                <label className='Label'>
                    Email
                    <input className='Input' type="text" value={email} onChange={({ target }) => setEmail(target.value)} placeholder='Email' required/>
                </label>
                <div className='Label Label-Button'>
                    <button className='btn btnForm' type='submit'>Crear orden</button>
                </div>
            </form>
            
        </div>
    )
}

export default CheckoutForm