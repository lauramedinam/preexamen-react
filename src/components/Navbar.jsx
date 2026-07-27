import React from 'react'
import { NavLink } from 'react-router-dom'
const Navbar = () => {
  return (
    <nav className='navbar'>
        <NavLink to="/">Inicio</NavLink>
        <NavLink to="/Cursos">cursos</NavLink>
        <NavLink to="/Contacto">Contacto</NavLink>
        <NavLink to="/AcercaDe">acercaDe</NavLink>
    </nav>
  )
}

export default Navbar