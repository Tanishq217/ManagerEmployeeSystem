import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import AuthContext from './context/AuthContext.jsx'
import React from 'react'
import TaskContext from './context/TaskContext.jsx'

createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <TaskContext>
       <AuthContext>
          <App/>
       </AuthContext>
    </TaskContext>
    
  </React.StrictMode>,
)
