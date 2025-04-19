import React from 'react'

export const TaskListNumber = () => {
  return (
    <div className='p-4 rounded-xl flex mt-10 justify-between gap-6 screen'>
      <div className=' h-40 w-[40%] bg-red-300 rounded-xl flex flex-col items-center justify-center shadow-md'>
        <h2 className='bg-red-300 text-5xl font-bold text-black-800'>0</h2>
        <h3 className='bg-red-300 text-xl font-medium text-gray-700'>New Task</h3>
      </div>
      <div className=' h-40 w-[40%] bg-blue-300 rounded-xl flex flex-col items-center justify-center shadow-md'>
        <h2 className='bg-blue-300 text-5xl font-bold text-black-800'>0</h2>
        <h3 className='bg-blue-300 text-xl font-medium text-gray-700'>New Task</h3>
      </div>
      <div className=' h-40 w-[40%] bg-green-300 rounded-xl flex flex-col items-center justify-center shadow-md'>
        <h2 className='bg-green-300 text-5xl font-bold text-black-800'>0</h2>
        <h3 className='bg-green-300 text-xl font-medium text-gray-700'>New Task</h3>
      </div>
      <div className=' h-40 w-[40%] bg-yellow-300 rounded-xl flex flex-col items-center justify-center shadow-md'>
        <h2 className='bg-yellow-300 text-5xl font-bold text-black-800'>0</h2>
        <h3 className='bg-yellow-300 text-xl font-medium text-gray-700'>New Task</h3>
      </div>
    </div>
  )
}
