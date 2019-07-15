import React from 'react'
import { Link } from 'react-router-dom'

const Nav = () => (
  <div className="Nav">
    <ul>
      <li>
        <Link to="/">Inicio</Link>
      </li>
      <li>
        <Link to="/pets">Adoption</Link>
      </li>
      <li>
        <Link to="/login">Account</Link>
      </li>
      <li>
        <Link to="/dashboard">Dashboard</Link>
      </li>
    </ul>
  </div>
)

export default Nav