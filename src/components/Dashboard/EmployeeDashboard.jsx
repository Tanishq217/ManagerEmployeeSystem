import React from 'react'
import Header from '../other/Header'
import TaskListNumbers from '../other/TaskListNumbers'
import TaskList from '../TaskList/TaskList'

// employee dashboard - for showing header, stats and task list
const EmployeeDashboard = (props) => {
  
  return (
    <div className='p-10 bg-black h-screen'>

      <Header changeUser={props.changeUser} data={props.data} />

      {/* section showing numbers / task count > pasisng porops data here  */}
      <TaskListNumbers data={props.data} />
      
      <TaskList data={props.data} />

    </div>
  )
}

export default EmployeeDashboard
