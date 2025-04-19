import React from 'react'

const Header = () => {
  return (
    <div className='flex items-center justify-between px-4 py-3 bg-gray-100 rounded-xl shadow-md'>
      <h1 className='text-2xl font-semibold'>
        Hello <br /> Tanishq 👋
      </h1>
      <button className='flex items-center justify-center bg-red-600 text-white px-5 py-2 rounded-md'>
        Log Out
      </button>
    </div>
  )
}

export default Header
