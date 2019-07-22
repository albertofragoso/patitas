import React, { useState } from 'react'
import { connect } from 'react-redux'
import logo from '../images/logo.png'
import { Link } from 'react-router-dom'
import Nav from './Nav'
import Modal from '../components/Modal'
import Form from '../components/Form'
import Login from '../pages/Login'

const Header = ({ login }) => {

  const [modal, setModal] = useState(false)
  
  const showModal = () => setModal(!modal)

  return(
    <div className="Header">
      <div className="Header-container">
        <div className="Header-content">
          <Link to="/"className="Header-logo">
            <img src={logo} alt="Patitas logo" />
            <span className="Header-logo-title">Patitas</span>
          </Link>
          <div className="Header-nav">
            <Nav showModal={showModal}/>
          </div>
        </div>
      </div>
      <Modal 
        show={modal}
        showModal={showModal}
      >
        {login 
          ? <Form />
          : <Login />
        }
      </Modal>
    </div>
  )
}

const mapStateToProps = state => ({ login: state.login })

export default connect(mapStateToProps)(Header)
