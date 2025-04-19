import React, { createContext, useEffect, useState } from 'react'
import { getLocalStorage } from '../utils/localstorage'
import { setLocalStorage } from '../utils/localstorage'
export const AuthContext = createContext()

const AuthProvider = ({ children }) => {
  const [userData, setUserData] = useState(null)

  useEffect(() => {
    
    const { employees } = getLocalStorage()
    setUserData(employees)
  }, [])

  return (
    <AuthContext.Provider value={[userData, setUserData]}>
      {children}
    </AuthContext.Provider>
  )
}

export default AuthProvider
