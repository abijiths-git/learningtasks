import React from 'react'
import { Link } from "react-router-dom"

const Navbar = () => {
  return (
    <div>
        <h1>Navbar</h1> 
        <Link to='/'>All</Link>
        <Link to='/men'>Men</Link>
        <Link to='/women'>Women</Link>
    </div>
  )
}

export default Navbar