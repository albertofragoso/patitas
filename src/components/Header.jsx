import React from 'react'
import logo from '../images/logo.png'
import { Link } from 'react-router-dom'
import Nav from './Nav'

const Header = () => (
  <div className="Header">
    <div className="Header-container">
      <div className="Header-content">
        <div className="Header-logo">
          <Link to="/" className="Header-logo">
            <img className="Header-logo-img" src={logo} alt="Patitas logo" />
          </Link>
        </div>
        <div className="Header-nav">
          <Nav />
        </div>
      </div>
    </div>
  </div>
)

export default Header
