import React, { useState } from 'react'
import { connect } from 'react-redux'
import Login from '../pages/Login'

const PetInfo = ({ pet, login }) => {

  const [adopt, setAdopt] = useState(false)

  return(
    <div className="PetInfo">
      <div className="PetInfo-container">
        <div className="PetInfo-content">
          <div className="PetInfo-avatar">
            <img src={pet.photo} alt={pet.name} />
          </div>
          <div className="PetInfo-profile">
            <h2>{pet.name}</h2>
            <span>
              {pet.type === "dog" && '🐶'}
              {pet.type === "cat" && '😼'}
            </span>
            <p>{pet.description}
              <i>
                {pet.gender ===  'male' && '♂'}
                {pet.gender === 'female' && '♀'}
              </i>
            </p>
            <div className="PetInfo-type">
              <button onClick={() => setAdopt(!adopt)} className="PetInfo-btn">
                To adopt
              </button>
            </div>
            {adopt &&
              <div>
                {login 
                ? <div className="PetInfo-profile-adopt">
                    <div className="PetInfo-item">
                      <h3>Contact info:</h3>
                      <span>Owner: </span>
                      <h4>{pet.userName}</h4>
                      <span>Email: </span>
                      <h4>{pet.userContact}</h4>
                    </div>
                  </div>
                : <Login />
                }
              </div>
            }
          </div>
        </div>
      </div>
    </div>
  )
}

const mapStateToProps = state => ({ login: state.login })

export default connect(mapStateToProps)(PetInfo)