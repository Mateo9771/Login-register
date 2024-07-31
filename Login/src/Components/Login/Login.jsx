import { useState } from 'react'
import React from 'react'
import './Login.css'
import axios from 'axios'

const Login = () => {
    const [email, setEmail] = useState ('')
    const [password, setPassword] = useState ('')

    const handleSubmit = async (e) => {
        e.preventDefault()
        try{
            const response =  await axios.post('/api/login', {email, password})
            //guarda el token en el almacenamiento local
            localStorage.setItem('token', response.data.token)
            alert('Inicio de sesión exitoso')
        } catch(error){
            alert ("Error en el inicio de sesión")
        }
    }

  return (
    <form onSubmit={handleSubmit}>
    <input type="text" placeholder='Email' value={email} onChange={(e) => setEmail(e.target.value)}/>
    <input type="password" placeholder='Password' value={password} onChange={(e) => setPassword(e.target.value)}/>
    <button type='submit'>Iniciar</button>
    </form>
  )
}

export default Login

