import React from 'react'
import Form from '../components/Form'

const Dashboard = () => (
  <div className="Dashboard">
    <div className="Dashboard-container">
      <div className="Dashboard-content">
        <div className="Dashboard-form">
          <Form />
        </div>
        <div className="Dashboard-profile">
          <h2>Profile</h2>
          <div className="Dashborad-profile-info">
            <img src="/" alt="User's name"/>
            <span>Name:</span>
            <h4>Alberto Fragoso</h4>
            <span>Email:</span>
            <h4>hola@albertofragoso.com</h4>
            <button>Log out</button>
          </div>
        </div>
      </div>
    </div>
  </div>
)

export default Dashboard