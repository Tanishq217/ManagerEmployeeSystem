import React , {useState} from 'react'

const Login = () => {

    const [email , setEmail] = useState('')
    const [password, setPassword] = useState('')

    
    const submithandler = (e)=>{
        e.preventDefault()
        console.log("Email is - > " , email )
        console.log("Password is -> " , password)

    setEmail("") 
    setPassword("")

    }


  return (
    <div className='flex h-screen w-screen items-center justify-center'>
        <div className='border-2 border-black p-20 rounded-xl'>
            <form 
            onSubmit={(e)=>{
                submithandler(e)
            }}
             className='flex flex-col items-center justify-center'>
                <input 
                value={email}
                onChange={(e)=>{
                    setEmail(e.target.value)
                }} 
                required
                className='border-2 border-red-600 rounded-full text-black' type="email" placeholder='Enter your Email' 
                />
                <input 

                value={password}
                onChange={(e)=>{
                    setPassword(e.target.value)
                }} 
                required 
                className='border-2 border-red-600 rounded-full mt-3 text-black'  type="password" placeholder='Enter your Password' />
                <button className='bg-black text-white px-4 py-2 mt-4 rounded'>Log In</button>
            </form>
        </div>
    </div>
  )
}

export default Login