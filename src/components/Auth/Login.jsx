import React, { useState } from 'react'

const Login = ({handleLogin}) => {

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const submithandler = (e) => {
    e.preventDefault()
    handleLogin(email , password)


    setEmail("")
    setPassword("")
  }

  return (
    <div className='flex h-screen w-screen items-center justify-center bg-gradient-to-r from-purple-500 to-indigo-500'>
      <div className='border-2 border-black p-10 rounded-xl bg-white shadow-lg w-full sm:w-[400px]'>
        <h2 className='text-3xl font-bold text-center mb-8 text-gray-700'>Log In</h2>
        <form onSubmit={(e) => { submithandler(e) }} className='flex flex-col items-center justify-center'>
          {/* Email Input */}
          <input
            value={email}
            onChange={(e) => { setEmail(e.target.value) }}
            required
            className='border-2 border-gray-300 rounded-full text-black p-4 w-full mb-4 focus:ring-2 focus:ring-blue-500 focus:outline-none'
            type="email"
            placeholder='Enter your Email'
          />

          {/* Password Input */}
          <input
            value={password}
            onChange={(e) => { setPassword(e.target.value) }}
            required
            className='border-2 border-gray-300 rounded-full text-black p-4 w-full mb-4 focus:ring-2 focus:ring-blue-500 focus:outline-none'
            type="password"
            placeholder='Enter your Password'
          />

          {/* Log In Button */}
          <button className='bg-black text-white px-6 py-3 mt-4 rounded-full hover:bg-gray-800 transition duration-300'>
            Log In
          </button>
        </form>
      </div>
    </div>
  )
}

export default Login
