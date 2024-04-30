import React from 'react'
import './Navbar.css'
import UperNavbar from '../../Components/UperNavbar/UperNavbar'
import LowerNavbar from '../../Components/LowerNavbar/LowerNavbar'
const Navbar = () => {
  return (
    <>
      <header>
        <UperNavbar/>
        <LowerNavbar/>
      </header>
    </>
  )
}

export default Navbar