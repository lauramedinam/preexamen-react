import React from 'react'
import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";

const Layout = () => {
  return (
    <>
    <h1>Institución Educativa</h1>

      <Navbar />

      <hr />

      <Outlet />
    
    </>
  )
}

export default Layout