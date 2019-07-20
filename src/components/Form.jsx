import React from 'react'
import { storage, database } from '../utils/firebase'

const Form = () => {

  const handleSubmit = e => {
    e.preventDefault()
    const form = new FormData(e.target)
    const newDate = new Date().toISOString()

    const data = {
      'name': form.get('name'),
      'description': form.get('description'),
      'type': form.get('type'),
      'gender': form.get('gender'),
      'adopt': form.get('adopt'),
      'date': newDate,
      'photo': '',
      'profilePic': '',
      'userContact': '',
      'userName': ''
    }

    database.ref('pets').push(data)
      .then(response => console.log(response))
      .catch(error => console.log(error))
  }

  const handleUpload = e => {
    const file = e.target.files[0]
    const storageRef = storage.ref()
    const name = (+new Date()) + '-' + file.name    
    const uploadFile = storageRef.child(name).put(file)
 
    uploadFile
      .then(snapshot => {
        snapshot.ref.getDownloadURL()
          .then(downloadURL => console.log(downloadURL))
      })
  }

  return (
    <div className="Form">
      <div className="Form-head">
        <h2>Put up for adoption</h2>
      </div>
      <div className="Form-item">
        <form onSubmit={handleSubmit}>
          <input type="text" name="name" placeholder="Pet's name..." />
          <input type="text" name="description" placeholder="Describe your pet..." />
          <select name="type">
            <option disabled  selected>Choose their name...</option>
            <option value="dog">🐶</option>
            <option value="cat">😼</option>
          </select>
          <select name="gender">
            <option disabled selected>Chosee their gender...</option>
            <option value="male">Male</option>
            <option value="female">Female</option>
          </select>
          <select name="adopt">
            <option disabled selected></option>
            <option value="true">Put up for adoption</option>
            <option value="false">Take care</option>
          </select>
          <input type="file" name="photo" onChange={handleUpload} />
          <button>Let's go 🚀</button>
        </form>
      </div>
    </div>
  )
}

export default Form