import React, { useState } from 'react'

// util functions for localStorage (getting and setting values)
import { getLocalStorage, setLocalStorage } from '../../utils/localStorage'


const Header = (props) => {

  // we were gonna use this maybe later
  // const [username, setUsername] = useState('')

  // hmm, no data? use admin as fallback
  // if(!data){
  //   setUsername('Admin')
  // }else{
  //   setUsername(data.firstName)
  // }

  // logout user function
  const logOutUser = () => {

    // clear user from local storage
    localStorage.setItem('loggedInUser', '')

    // also update in parent comp (passing empty)
    props.changeUser('')

  }

  return (
    <div className='flex items-end justify-between'> 

        {/* lil greeting here */}
        <h1 className='text-2xl font-medium'>
          Hello <br /> 
          <span className='text-3xl font-semibold'>there , </span>
        </h1>

        {/* log out btn - red and bold */}
        <button 
          onClick={logOutUser} 
          className='bg-red-600 text-base font-medium text-white px-5 py-2 rounded-sm'
        >
          Log Out
        </button>

    </div>
  )
}

export default Header
