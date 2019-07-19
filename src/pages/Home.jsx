import React from 'react'
import useGetPets from '../hooks'
import PetItems from '../components/PetItems';

const API = 'https://us-central1-patitas-fad2d.cloudfunctions.net/api'

const Home = () => {
  const pets = useGetPets(API)
  return (
    <div className="Home">
      <div className="Home-container">
        <div className="Home-items">
          { pets.map((pet, index) => 
            <PetItems pet={pet} key={`pet-${index}`} />
          )}
        </div>
      </div>
    </div>
  )
}

export default Home