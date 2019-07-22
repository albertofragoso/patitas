import React from 'react'
import { auth, provider } from '../utils/firebase'
import { connect } from 'react-redux'
import { setUser, setLogin } from '../actions'

const Login = ({ history, setUser, setLogin }) => {

  const loginFacebook = () => {
    auth().signInWithPopup(provider)
      .then(({ user }) => {
        setUser(user)
        setLogin(true)
        history.push('/dashboard')
      })
  }

  return (
    <div className="Login">
      <div className="Login-container">
        <div className="Login-content">
          <h2>Signup or Login</h2>
          <button onClick={loginFacebook}>
            <i className="fab fa-facebook-square" />
            <span> Login with Facebook</span>
          </button>
        </div>
      </div>
    </div>
  )
}

const mapDispatchToProps = {
  setUser,
  setLogin
}

export default connect(null, mapDispatchToProps)(Login)