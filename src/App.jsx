import React, { useContext, useEffect, useState } from 'react'
import Login from './components/Auth/Login'
import EmployeeDashboard from './components/Dashboard/EmployeeDashboard'
import AdminDashboard from './components/Dashboard/AdminDashboard'
import { AuthContext } from './context/AuthProvider'

const App = () => {

  // setting up state for user, logged-in data, and user data from context

  const [user, setUser] = useState(null)
  const [loggedInUserData, setLoggedInUserData] = useState(null)
  const [userData, SetUserData] = useContext(AuthContext)

  useEffect(() => {
    const loggedInUser = localStorage.getItem('loggedInUser')

    if (loggedInUser) {

      const userData = JSON.parse(loggedInUser)
      setUser(userData.role)
      setLoggedInUserData(userData.data)
    }
  }, []
)

  const handleLogin = (email, password) => {
    // Admin login validation

    if (email == 'admin@me.com' && password == '123') {

      setUser('admin') // Set user as admin
      setLoggedInUserData(null ) // Admin has no user data

      localStorage.setItem('loggedInUser', JSON.stringify({ role: 'admin' })) // Save admin info in localStorage
    } 
    else if (userData) {
      const employee = userData.find((e) => email == e.email && e.password == password)
      if (employee) {
        setUser('employee') // Set user as employee
        setLoggedInUserData(employee) // Store employee data
        localStorage.setItem('loggedInUser', JSON.stringify({ role: 'employee', data: employee })) // Save employee info in localStorage
      } else {
        alert("Invalid Credentials") 
      }
    } else {
      alert("Invalid Credentials")
    }
  }

  return (
    <>
      {!user ? <Login handleLogin={handleLogin} /> : ''}

      {/* Depending on the user role, show either Admin or Employee dashboard */}
      {user == 'admin' ? (
        <AdminDashboard changeUser={setUser} />
      ) : user == 'employee' ? (
        <EmployeeDashboard changeUser={setUser} data={loggedInUserData} />
      ) : null}
    </>
  )
}

export default App
