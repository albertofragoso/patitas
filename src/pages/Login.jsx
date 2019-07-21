import React from 'react'
import { auth, provider } from '../utils/firebase'
import { connect } from 'react-redux'
import { setUser } from '../actions'

const Login = props => {

  const loginFacebook = () => {
    auth().signInWithPopup(provider)
      .then(({ user }) => {
        props.setUser(user)
        props.history.push('/dashboard')
      })
  }

  const logoutFacebook = () => {
    auth().signOut()
      .then(() => props.history.push('/'))
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
          <button onClick={logoutFacebook}>
            <i className="fab fa-facebook-square" />
            <span> Logout</span>
          </button>
        </div>
      </div>
    </div>
  )
}

const mapDispatchToProps = {
  setUser,
}

export default connect(null, mapDispatchToProps)(Login)