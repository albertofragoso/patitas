import React from 'react'
import Form from '../components/Form'
import { connect } from 'react-redux'
import { setUser } from '../actions'

const Dashboard = ({ user }) => (
  <div className="Dashboard">
    { console.log('user', user) }
    <div className="Dashboard-container">
      <div className="Dashboard-content">
        <div className="Dashboard-form">
          <Form />
        </div>
        <div className="Dashboard-profile">
          <h2>Profile</h2>
          <div className="Dashborad-profile-info">
            <img src={user.photoURL} alt={user.displayName}/>
            <br />
            <span>Name:</span>
            <h4>{user.displayName}</h4>
            <span>Email:</span>
            <h4>{user.email}</h4>
            <button>Log out</button>
          </div>
        </div>
      </div>
    </div>
  </div>
)

const mapStateToProps = state => ({
  user: state.user
}) 

const mapDispatchToProps = {
  setUser
}

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard)