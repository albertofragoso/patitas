import React from 'react'
import Form from '../components/Form'
import { connect } from 'react-redux'
import { setUser, setLogin } from '../actions'
import { auth } from '../utils/firebase'

const Dashboard = ({ user, history, setUser, setLogin }) => {

  const logoutFacebook = () => {
    auth().signOut()
      .then(() => {
        setUser({})
        setLogin(false)
        history.push('/')
      })
  }

  return(
    <div className="Dashboard">
      <div className="Dashboard-container">
        <div className="Dashboard-content">
          <div className="Dashboard-form">
            <Form />
          </div>
          <div className="Dashboard-profile">
            <h2>Profile</h2>
            <div className="Dashboard-profile-info">
              <div>
                <img src={user.photoURL} alt={user.displayName}/>
                <br />
                <span>Name:</span>
                <h4>{user.displayName}</h4>
                <span>Email:</span>
                <h4>{user.email}</h4>
                <button onClick={logoutFacebook}>
                  <span>Logout</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

const mapStateToProps = state => ({
  user: state.user
}) 

const mapDispatchToProps = {
  setUser,
  setLogin
}

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard)