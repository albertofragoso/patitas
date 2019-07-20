import React, { useState } from 'react'
import { storage, database } from '../utils/firebase'
import toastr from 'toastr'

const Form = () => {

  const [petPhoto, setPetPhoto] = useState('')

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
      'photo': petPhoto,
      'profilePic': '',
      'userContact': '',
      'userName': ''
    }

    database.ref('pets').push(data)
      .then(() => {
        toastr.success('Nice! Your pet has been registered')
      })
      .catch(() => toastr.error('Something went wrong'))

      e.target.reset();
  }

  const handleUpload = e => {
    const file = e.target.files[0]
    const storageRef = storage.ref()
    const name = (+new Date()) + '-' + file.name    
    const uploadFile = storageRef.child(name).put(file)
 
    uploadFile
      .then(snapshot => {
        snapshot.ref.getDownloadURL()
          .then(downloadURL => setPetPhoto(downloadURL))
      })
  }

  return (
    <div className="Form">
      <div className="Form-head">
        <h2>Put up for adoption</h2>
      </div>
      <div className="Form-item">
        <form onSubmit={handleSubmit}>
          <input type="text" name="name" placeholder="Pet's name..." required />
          <input type="text" name="description" placeholder="Describe your pet..." required />
          <select name="type" required>
            <option selected value="">Choose their name...</option>
            <option value="dog">🐶</option>
            <option value="cat">😼</option>
          </select>
          <select name="gender" required>
            <option selected value="">Choose their gender...</option>
            <option value="male">Male</option>
            <option value="female">Female</option>
          </select>
          <select name="adopt" required>
            <option selected value=""></option>
            <option value="true">Put up for adoption</option>
            <option value="false">Take care</option>
          </select>
          <input type="file" name="photo" onChange={handleUpload} required />
          <button>Let's go 🚀</button>
        </form>
      </div>
    </div>
  )
}

export default Form