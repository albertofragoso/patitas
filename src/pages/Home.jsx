import React from 'react'
import useGetPets from '../hooks'
import PetItems from '../components/PetItems';
import { Link } from 'react-router-dom'

const API = 'https://us-central1-patitas-fad2d.cloudfunctions.net/api'

const Home = () => {
  const pets = useGetPets(API)
  return (
    <div className="Home">
      <div className="Home-container">
        <div className="Home-items">
          { pets.map((pet, index) =>
            <Link to={{
              pathname: `/${index}-${pet.name}/pets`,
              state: { ...pet }
            }}>
              <PetItems pet={pet} key={`pet-${index}`} />
            </Link>
          )}
        </div>
      </div>
    </div>
  )
}

export default Home