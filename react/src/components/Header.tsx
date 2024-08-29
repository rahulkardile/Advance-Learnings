import React from 'react'
import { NavLink } from 'react-router-dom'

const Header = () => {
  return (
    <header id='head'>
        <h1 className="">Advance React</h1>
        <nav>
            <NavLink to={"/"} className={({isActive})=> `a ${isActive ? "active" : ""}`} >Home</NavLink>
            <NavLink to={"/about"} className={({isActive})=> `a ${isActive ? "active" : ""}`} >About</NavLink>
            <NavLink to={"/contact"} className={({isActive})=> `a ${isActive ? "active" : ""}`} >Contact</NavLink>
            <NavLink to={"/login"} className={({isActive})=> `a ${isActive ? "active" : ""}`} >Login</NavLink>
        </nav>
    </header>
  )
}

export default Header