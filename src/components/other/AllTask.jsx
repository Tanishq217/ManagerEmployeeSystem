import React from 'react'
import TaskList from '../TaskList/TaskList'
const AllTask = () => {
  return (
    <div className='bg-[#1c1c1c] px-10 py-8 mt-10 text-white'>

  <div className='overflow-y-auto h-[400px]'>  {/* Scrollable container with fixed height */}

    {/* Task 1 */}
    <div className='bg-purple-400 text-black py-4 px-6 rounded-lg shadow-lg mb-6 flex justify-between items-center'>
      <h2 className='text-xl font-bold'>Tanishq</h2>
      <h3 className='text-lg'>Create Dashboard UI</h3>
      <h5 className='text-sm font-semibold'>Status: In Progress</h5>
    </div>

    {/* Task 2 */}
    <div className='bg-red-400 text-black py-4 px-6 rounded-lg shadow-lg mb-6 flex justify-between items-center'>
      <h2 className='text-xl font-bold'>Riya</h2>
      <h3 className='text-lg'>Fix Login Bug</h3>
      <h5 className='text-sm font-semibold'>Status: Pending</h5>
    </div>

    {/* Task 3 */}
    <div className='bg-green-400 text-black py-4 px-6 rounded-lg shadow-lg mb-6 flex justify-between items-center'>
      <h2 className='text-xl font-bold'>Aarav</h2>
      <h3 className='text-lg'>Update API Routes</h3>
      <h5 className='text-sm font-semibold'>Status: Completed</h5>
    </div>

    {/* Task 4 */}
    <div className='bg-blue-400 text-black py-4 px-6 rounded-lg shadow-lg mb-6 flex justify-between items-center'>
      <h2 className='text-xl font-bold'>Meera</h2>
      <h3 className='text-lg'>Design Landing Page</h3>
      <h5 className='text-sm font-semibold'>Status: On Hold</h5>
    </div>

    {/* You can add more tasks below as needed */}
    {/* Task 5 */}
    <div className='bg-pink-400 text-black py-4 px-6 rounded-lg shadow-lg mb-6 flex justify-between items-center'>
      <h2 className='text-xl font-bold'>Liam</h2>
      <h3 className='text-lg'>Build Admin Panel</h3>
      <h5 className='text-sm font-semibold'>Status: In Progress</h5>
    </div>

    {/* Task 6 */}
    <div className='bg-yellow-400 text-black py-4 px-6 rounded-lg shadow-lg mb-6 flex justify-between items-center'>
      <h2 className='text-xl font-bold'>Ava</h2>
      <h3 className='text-lg'>Implement Payment Gateway</h3>
      <h5 className='text-sm font-semibold'>Status: Pending</h5>
    </div>

  </div>

</div>

  )
}

export default AllTask
