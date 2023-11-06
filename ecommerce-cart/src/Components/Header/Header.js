import React from 'react'
import {Link} from "react-router-dom"

const Header = () => {
  return (
    <div>
      <nav className='container  bg-light d-flex justify-content-between'>
        <h1>E-Commerce</h1>
        <ul className='d-flex gap-5'>
        <Link to="/">
            <li> Home</li>
            </Link>
            <Link to="/login">
            <li> Login</li>
            </Link>
            <Link to="/register">
            <li> Register</li>
            </Link>
            <Link to="/Profile">
            <li> profile</li>
            </Link>
            <Link to="/cart">
            <li> cart</li>
            </Link>
        </ul>
      </nav>
    </div>
  )
}

export default Header;
