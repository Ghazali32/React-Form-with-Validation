import { Heading } from './components/Heading'
import { SubHeading } from './components/SubHeading'
import { InputFeild } from './components/InputFeild'
import { useState } from 'react'


function App() {
  const [formData, setFormData] = useState({
    email: '',
    Username: '',
    country: '',
    age: '',
    password: '',
  });

  const [errors, setErrors] = useState({
    email: '',
    Username: '',
    country: '',
    age: '',
    password: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    })
    console.log(formData)
    if (name === 'email') {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      setErrors({
        ...errors,
        email: emailRegex.test(value) ? '' : 'Invalid email format',
      });
    } else if (name === 'password') {
      setErrors({
        ...errors,
        password: value.length >= 8 ? '' : 'Password must be at least 8 characters long',
      });
    }
    else if(name === 'userName')
    {
      setErrors({
        ...errors,
        Username : !value.Username ? 'Enter a username' : ''
      })
    }
    else if(name === 'age')
    {
      setErrors({
        ...errors,
        Username : !value.age ? 'Enter a age' : ''
      })
    }
    else if(name === 'country')
    {
      setErrors({
        ...errors,
        Username : !value.country ? 'Enter a country' : ''
      })
    }
  };

  const handleSubmit = (e) =>{
    e.preventDefault(); //To avoid the page refreshing when we submit the form
    alert('Form Submission successfull')
  }
  const isFormValid = formData.email && formData.Username && formData.country && formData.age && formData.password && !errors.email && !errors.password;

  return (
    <div className='w-screen h-screen bg-slate-100 flex justify-center items-center'>
      <div className='bg-white p-3 h-3/4 w-1/4 rounded-md shadow-md'>
        <Heading text='Sign Up'></Heading>
        <InputFeild label='Email' name={'email'} placeholder='ghz@yahoo.com' value={formData.email} onChange={handleChange}></InputFeild>
        <div>
        {errors.email && <span  className="text-red-500">{errors.email}</span>}
        </div>
        <InputFeild label='Name' name={'Username'} placeholder='Ghazali' value={formData.Username} onChange={handleChange}></InputFeild>
        <InputFeild label='Country' name={'country'} placeholder='India' value={formData.country} onChange={handleChange}></InputFeild>
        <InputFeild label='Age' name={'age'} placeholder='20' value={formData.age} onChange={handleChange}></InputFeild>
        <InputFeild type='password' name={'password'} label='Password' value={formData.password} onChange={handleChange}></InputFeild>
        {errors.password && <span  className="text-red-500">{errors.password}</span>}
        <div className='w-full p-2 text-center'>
        {
          isFormValid ? <button onClick={handleSubmit} className='bg-black text-white w-full p-2 pt-2 pb-2 rounded mt-2 hover:bg-gray-700'>Sign Up</button> : <div></div>
        }        
        </div>
      </div>
    </div>
  )
}

export default App
