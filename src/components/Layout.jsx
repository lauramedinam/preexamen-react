import React from 'react'
import { Outlet } from "react-router-dom";
import Footer from './Footer';
import Navbar from "./Navbar";

const Layout = () => {
  return (
    <>
    <h1 className='titulo'>Institución Educativa</h1>

      <Navbar />
      <hr />
    
{/* este es un comentario */}
      <Outlet />
      
      <hr />
      <Footer/>
    </>
  )
}

export default Layout