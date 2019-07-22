import React from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'

const Nav = ({ login, showModal }) => (
  <div className="Nav">
    <ul>
      <li>
        <Link to="/">Inicio</Link>
      </li>
      <li>
        <a onClick={showModal}>Adoption</a>
      </li>
      <li>
        {login 
          ? <Link to="/dashboard">Dashboard</Link>
          : <Link to="/login">Account</Link>
        }
      </li>
    </ul>
  </div>
)

const mapStateToProps = state => ({ login: state.login })

export default connect(mapStateToProps)(Nav)