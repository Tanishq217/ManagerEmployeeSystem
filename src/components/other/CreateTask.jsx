import React from 'react';

const CreateTask = () => {
  return (
    <div className='bg-black w-full p-10'>

      <div className='mt-10'>
        <form className='flex flex-wrap gap-8 bg-red-200 p-6 rounded-xl shadow-lg w-full items-start justify-between'>

          <div className='flex flex-col gap-4 w-[48%]'>
            <div>
              <label className='text-lg font-medium mb-1 block'>Task Title</label>
              <input
                type='text'
                placeholder='Make a Design'
                className='w-full px-4 py-2 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-red-500'
              />
            </div>

            <div>
              <label className='text-lg font-medium mb-1 block'>Date</label>
              <input
                type='date'
                className='w-full px-4 py-2 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-red-500'
              />
            </div>

            <div>
              <label className='text-lg font-medium mb-1 block'>Assign to</label>
              <input
                type='text'
                placeholder='Employee Name'
                className='w-full px-4 py-2 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-red-500'
              />
            </div>

            <div>
              <label className='text-lg font-medium mb-1 block'>Category</label>
              <input
                type='text'
                placeholder='Design, Dev, Etc.'
                className='w-full px-4 py-2 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-red-500'
              />
            </div>
          </div>

          <div className='flex flex-col gap-4 w-[48%]'>
            <div>
              <label className='text-lg font-medium mb-1 block'>Description</label>
              <textarea
                placeholder='Enter task details...'
                rows='8'
                className='w-full px-4 py-2 rounded border border-gray-300 resize-none focus:outline-none focus:ring-2 focus:ring-red-500'
              ></textarea>
            </div>

            <button
              type='submit'
              className='bg-red-600 text-white px-6 py-3 rounded hover:bg-red-700 transition-all mt-2 self-end'
            >
              Create Task
            </button>
          </div>

        </form>
      </div>
    </div>
  );
};

export default CreateTask;
