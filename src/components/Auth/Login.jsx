import React, { useState } from 'react'

// login component - this will handle the user login input and call the login function passed as prop
const Login = ({ handleLogin }) => {

  const [email, setEmail] = useState('')      // email state
  const [password, setPassword] = useState('')  // password state

  // this will run when form is submitted
  const submitHandler = (e) => {
    e.preventDefault()      // stop page from reloading

    handleLogin(email, password)     // calling login fn with email & pass

    setEmail("")     // reset email
    setPassword("")   // reset password
  }

  return (
    <div className='flex h-screen w-screen items-center justify-center bg-white'>
      
      <div className='border-2 border-black p-20 rounded-xl'>
        
        
        <form 
          onSubmit={submitHandler} 
          className='flex flex-col items-center justify-center'
        >

          
          <input
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className='border-2 border-red-600 rounded-full text-black px-4 py-2 placeholder:text-gray-500'
            type="email"
            placeholder='Enter your Email'
          />

          
          <input
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            className='border-2 border-red-600 rounded-full mt-3 text-black px-4 py-2 placeholder:text-gray-500'
            type="password"
            placeholder='Enter your Password'
          />

          
          <button className='bg-black text-white px-4 py-2 mt-4 rounded'>
            Log In
          </button>

        </form>
      </div>
    </div>
  )
}

export default Login
