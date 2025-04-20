import React from 'react'
import Header from '../other/Header'
import CreateTask from '../other/CreateTask'
import AllTask from '../other/AllTask'

// admin dashboard component - it will show header and task creation section
const AdminDashboard = (props) => {
  
  return (
    <div className='h-screen w-full p-7'>

      {/* top header part !!!!  */}
      <Header changeUser={props.changeUser} />

      {/*this is the >>  section to create new task */}
      <CreateTask />

      {/* showing all tasks - currently not using it */}
      {/* <AllTask /> */}

    </div>
  )
}

export default AdminDashboard
