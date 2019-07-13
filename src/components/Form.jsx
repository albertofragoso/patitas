import React from 'react'

const Form = () => (
  <div className="Form">
    <div className="Form-head">
      <h2>Put up for adoption</h2>
    </div>
    <div className="Form-item">
      <form>
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
        <input type="file" name="photo" />
        <button>Let's go 🚀</button>
      </form>
    </div>
  </div>
)

export default Form