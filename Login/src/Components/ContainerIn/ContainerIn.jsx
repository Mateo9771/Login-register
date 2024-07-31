import React from 'react'
import './Container.css'
import { FaUserSecret } from "react-icons/fa6";
import {Link} from 'react-router-dom'
import Login from '../Login/Login';

const ContainerIn = () => {
  return (
    <div className='ContainerIn col-12'>
        <div className='Container col-6'>
            
            <FaUserSecret size="10rem" color='black'/>
                <h2>Inicio sesión</h2>
                <Login/>
            <Link to="/">¿Olvidaste tu contraseña?</Link>
            <Link to="/create-user">Crear Usuario</Link>
        </div>
    </div>
  )
}

export default ContainerIn
