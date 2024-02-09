import './App.css';
import { useState } from 'react';

function App() {
  const [userInput, setUserInput] = useState({
    name: '',
    email: '',
    password: '',
    address: '',
    age: '',
    gender: '',
    city: ''
  })
  const [errors, setErrors] = useState({})
  const handleChange = (e) => {
    const { name, value } = e.target
    setUserInput(prevState => ({
      ...prevState, [name]: value
    }))
  }
  const handleSubmit = (e) => {
    e.preventDefault()

    const Validation = () => {
      let newErrors = {}
      if (!userInput.name) {
        newErrors.name = 'Name cannot be empty'
      }
      if (!userInput.email) {
        newErrors.email = 'Email cannot be empty '
      } 
      // else if (/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/.test(userInput.email)) {
      //   newErrors.email = 'Invalid Email'
      // }
      if (!userInput.password) {
        newErrors.password = ' Password cannnot be empty '
      }
      else if (userInput.password.length <= 4) {
        newErrors.password = ' Password length cannot be less than 5 letters'
      }
      if (!userInput.address) {
        newErrors.address = 'Address field cannot be empty'
      }
      if (!userInput.age) {
        newErrors.age = 'Age cannot be empty'
      } else if (userInput.age <= 0) {
        newErrors.age = 'Age should be greater than 0 '
      }
      if (!userInput.gender) {
        newErrors.gender = 'Please Select Gender'
      }
      if (!userInput.city) {
        newErrors.city = 'Please select city'
      }
      setErrors(newErrors)
      return Object.keys(newErrors).length === 0
    }
    const isValid = Validation()

    if (isValid) {
      console.log("form submitted successfully");
      console.log(userInput);
      // setUserInput([])
    } else {
      console.log('validation failed');
    }

  }
  return (
    <>
      <h1>Form With Validation</h1>

      <div>
        <form onSubmit={handleSubmit}>
          <label>Name : </label>
          <input type='text' placeholder='Enter your Name' name='name' value={userInput.name} onChange={handleChange} />
          {errors.name && <span>{errors.name}</span>}
          <br />
          <label>Email : </label>
          <input type='email' placeholder='Enter your Email' name='email' value={userInput.email} onChange={handleChange} />
          {errors.email && <span>{errors.email}</span>}
          <br />
          <label>Password : </label>
          <input type='password' placeholder='Enter your Password' name='password' value={userInput.password} onChange={handleChange} />
          {errors.password && <span>{errors.password}</span>}
          <br />
          <label>Address : </label>
          <input type='textarea' placeholder='Enter your Address' name='address' value={userInput.address} onChange={handleChange} />
          {errors.address && <span>{errors.address}</span>}
          <br />
          <label>Age : </label>
          <input type='number' placeholder='Enter your Age' name='age' value={userInput.age} onChange={handleChange} />
          {errors.age && <span>{errors.age}</span>}
          <br />
          <label>Gender :
            <input type='radio' name='gender' value='male' onChange={handleChange} checked={userInput.gender === 'male'} />Male
            <input type='radio' name='gender' value='female' onChange={handleChange} checked={userInput.gender === 'female'} />Female
          </label>
          {errors.gender && <span>{errors.gender}</span>}
          <br />
          <label>Select your city</label>
          <select id='city' value={userInput.city} onChange={handleChange} name='city'>
            <option value='' disabled>Select City</option>
            <option value='Halisahar'>Halisahar</option>
            <option value='Kanchrapara'>Kanchrapara</option>
            <option value='Kalyani'>Kalyani</option>
          </select>
          {errors.city && <span>{errors.city}</span>}
          <br />
          <button type='submit'>Submit</button>
        </form>
      </div>

    </>
  );
}

export default App;
