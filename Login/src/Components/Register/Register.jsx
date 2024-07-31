import React, { useState } from 'react'
import './Register.css'
import { FaUserCog } from "react-icons/fa";
import axios from 'axios'

const Register = () => {
    const [username, setUsername] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')

    const handleSubmit = async (e) => {
        e.preventDefault()
        if(password !== confirmPassword){
            alert('La contraseña no coincide')
            return
        }
        try{
            const response = await axios.post('/api/register',{
                username, 
                email, 
                password
            })
            alert ('Registro Exitoso')
        }
        catch(error){
            alert ('Error en el registro')
        }
    }

  return (
    <div className='ContainerRegister col-12'>
    <div className='Register col-6'>
    <FaUserCog size="10rem" color='black'/>
    <form onSubmit={handleSubmit}>
        <input type="text" placeholder='Username' value={username} onChange={(e) => setUsername(e.target.value)}/>
        <input type="text" placeholder='Email' value={email} onChange={(e) => setEmail(e.target.value)}/>
        <input type="password" placeholder='Password' value={password} onChange={(e) => setPassword(e.target.value)}/>
        <input type="password" placeholder='Confirm Password' value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} />
        <button type='submit'>Registrarse</button>
        </form>
    </div>
    </div>
  )
}

export default Register
