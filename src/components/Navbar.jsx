import React from 'react'
import { NavLink } from 'react-router-dom'
const Navbar = () => {
  return (
    <nav>
        <NavLink to="/inicio">Inicio</NavLink>
        <NavLink to="/cursos">Cursos</NavLink>
        <NavLink to="/contacto">Contacto</NavLink>
        <NavLink to="/acercade">Acerca de</NavLink>
    </nav>
  )
}

export default Navbar