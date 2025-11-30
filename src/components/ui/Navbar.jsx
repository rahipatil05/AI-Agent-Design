import React from 'react'
import './navbar.css'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <>
      <nav className="navbar">
        <div className="logo">
          <h1 className='font-bold'>AI Agents</h1>
        </div>

        <div className="menu-sections">
          <ul>
            <li>
              <Link to='/' >Home</Link>
            </li>
            <li>
              <Link to='/about' >About</Link>
            </li>
            <li>
              <Link to='/services' >Services</Link>
            </li>
            <li>
              <Link to='/contact' >Contact</Link>
            </li>
            <li>
              <Link to='/Demo' >Demo</Link>
            </li>
          </ul>
        </div>
      </nav>
    </>
  )
}

export default Navbar