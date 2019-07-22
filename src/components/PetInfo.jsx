import React from 'react'

const PetInfo = ({ pet }) => {

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
              <button className="PetInfo-btn">
                To adopt
              </button>
            </div>
            <div className="PetInfo-profile-adopt">
              <div className="PetInfo-item">
                <h3>Contact info:</h3>
                <span>Owner: </span>
                <h4>Alberto Fragoso</h4>
                <span>Email: </span>
                <h4>hola@albertofragoso.com</h4>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default PetInfo