import React from 'react'
import logo from '../images/logo.png'

const Header = () => (
  <div className="Header">
    <div className="Header-container">
      <div className="Header-content">
        <div className="Header-logo">
          <img className="Header-logo-img" src={logo} alt="Patitas logo" />
        </div>
        <div className="Header-nav">
          Menu
        </div>
      </div>
    </div>
  </div>
)

export default Header
