import React, { useContext, useState } from 'react'
import { AuthContext } from '../../context/AuthProvider'

const CreateTask = () => {

  // getting user data from AuthContext
  const [userData, setUserData] = useContext(AuthContext)

  // state to handle task form inputs
  const [taskTitle, setTaskTitle] = useState('')
  const [taskDescription, setTaskDescription] = useState('')
  const [taskDate, setTaskDate] = useState('')
  const [asignTo, setAsignTo] = useState('')  
  const [category, setCategory] = useState('')

  // this function will handle when form is submitted
  const submitHandler = (e) => {
    e.preventDefault()

    // creating new task object
    const taskObj = {
      taskTitle,
      taskDescription,
      taskDate,
      category,
      active: false,
      newTask: true,
      failed: false,
      completed: false,
    }

    // creating copy of userData so we dont mutate original one
    const data = userData.map((elem) => ({
      ...elem,
      tasks: [...elem.tasks],
      taskCounts: { ...elem.taskCounts }
    }))

    // assigning task to right employee
    data.forEach((elem) => {
      if (asignTo === elem.firstName) {
        elem.tasks.push(taskObj)
        elem.taskCounts.newTask += 1
      }
    })

    // update the global user data with new task
    setUserData(data)

    // just for checking in console
    console.log(data)

    // clearing the form fields after submission
    setTaskTitle('')
    setCategory('')
    setAsignTo('')
    setTaskDate('')
    setTaskDescription('')
  }

  return (
    <div className="p-8 mt-6 rounded-xl bg-gradient-to-br from-[#1a1a1d] via-[#1e1e24] to-[#23232b] shadow-lg border border-[#2d2d35]">
      
      <form
        onSubmit={submitHandler}
        className="flex flex-wrap w-full gap-8 justify-between"
      >

        <div className="w-full md:w-1/2 space-y-6">
          
          <div>
            <label className="block text-sm font-medium text-[#a8a8b3] mb-1">
              Task Title
            </label>
            <input
              value={taskTitle}
              onChange={(e) => setTaskTitle(e.target.value)}
              className="text-sm py-2 px-3 w-full rounded-lg outline-none bg-[#2c2c36] text-white border border-[#3d3d4d] focus:ring-2 focus:ring-[#4df3ff] transition-all duration-200"
              type="text"
              placeholder="Make a UI design"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-[#a8a8b3] mb-1">
              Date
            </label>
            <input
              value={taskDate}
              onChange={(e) => setTaskDate(e.target.value)}
              className="text-sm py-2 px-3 w-full rounded-lg outline-none bg-[#2c2c36] text-white border border-[#3d3d4d] focus:ring-2 focus:ring-[#4df3ff] transition-all duration-200"
              type="date"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-[#a8a8b3] mb-1">
              Assign to
            </label>
            <input
              value={asignTo}
              onChange={(e) => setAsignTo(e.target.value)}
              className="text-sm py-2 px-3 w-full rounded-lg outline-none bg-[#2c2c36] text-white border border-[#3d3d4d] focus:ring-2 focus:ring-[#4df3ff] transition-all duration-200"
              type="text"
              placeholder="Employee name"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-[#a8a8b3] mb-1">
              Category
            </label>
            <input
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              className="text-sm py-2 px-3 w-full rounded-lg outline-none bg-[#2c2c36] text-white border border-[#3d3d4d] focus:ring-2 focus:ring-[#4df3ff] transition-all duration-200"
              type="text"
              placeholder="Design, dev, etc"
            />
          </div>
        </div>


        <div className="w-full md:w-[45%] flex flex-col space-y-6">
          <div>
            <label className="block text-sm font-medium text-[#a8a8b3] mb-1">
              Description
            </label>
            <textarea
              value={taskDescription}
              onChange={(e) => setTaskDescription(e.target.value)}
              className="w-full h-44 text-sm py-3 px-4 rounded-lg outline-none bg-[#2c2c36] text-white border border-[#3d3d4d] resize-none focus:ring-2 focus:ring-[#4df3ff] transition-all duration-200"
            ></textarea>
          </div>

          <button className="bg-[#4df3ff] hover:bg-[#32dce6] transition-all duration-200 py-3 px-5 rounded-lg text-sm w-full text-black font-semibold shadow-lg shadow-[#4df3ff55]">
            Create Task
          </button>
        </div>
      </form>


      <div className="mt-12 bg-[#1e1e2f] bg-opacity-90 backdrop-blur-md p-6 rounded-xl shadow-lg text-white">
        
        <h2 className="text-xl font-semibold mb-4 border-b border-gray-600 pb-2">
          Employee Task Summary
        </h2>

        <div className="grid grid-cols-5 text-sm font-medium text-gray-300 border-b border-gray-600 pb-2">
          <div>Employee Name</div>
          <div className="text-center">New Task</div>
          <div className="text-center">Active Task</div>
          <div className="text-center">Completed</div>
          <div className="text-center">Failed</div>
        </div>

        {userData.map((emp, index) => (
          <div
            key={index}
            className="grid grid-cols-5 text-sm py-2 border-b border-gray-800 hover:bg-[#2c2c3f] transition-all duration-200 rounded-md"
          >
            <div className="font-medium">{emp.firstName}</div>

            <div className="text-center">
              <span className="bg-yellow-500 bg-opacity-20 text-yellow-300 px-2 py-0.5 rounded text-xs">
                {emp.taskCounts.newTask}
              </span>
            </div>

            <div className="text-center">
              <span className="bg-blue-500 bg-opacity-20 text-blue-300 px-2 py-0.5 rounded text-xs">
                {emp.taskCounts.active}
              </span>
            </div>

            <div className="text-center">
              <span className="bg-green-500 bg-opacity-20 text-green-300 px-2 py-0.5 rounded text-xs">
                {emp.taskCounts.completed}
              </span>
            </div>

            <div className="text-center">
              <span className="bg-red-500 bg-opacity-20 text-red-300 px-2 py-0.5 rounded text-xs">
                {emp.taskCounts.failed}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default CreateTask
