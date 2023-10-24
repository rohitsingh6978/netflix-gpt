import React, { useState } from 'react'
import Header from './Header'

const Login = () => {
    const[isSignInForm,setIsSignInForm] = useState(true)

    const toggleSignInForm = ()=>{
        setIsSignInForm(!isSignInForm)
    }
  return (
    <div>
        <Header/>
        <div className='absolute'>
        <img src='https://assets.nflxext.com/ffe/siteui/vlv3/a73c4363-1dcd-4719-b3b1-3725418fd91d/fe1147dd-78be-44aa-a0e5-2d2994305a13/IN-en-20231016-popsignuptwoweeks-perspective_alpha_website_large.jpg' alt='logo'/>
        </div>
        <form className='absolute mt-44 mx-auto right-0 left-0 w-3/12 bg-black opacity-80  content-center text-white rounded'>
        <h1 className='font-bold text-2xl ml-10 mt-20'>{isSignInForm ? "Sign In" : "Sign Up"}</h1>
        {
            isSignInForm && <input type='text' placeholder='Full Name' className='w-64 p-3 m-2 ml-10 rounded  hover:bg-slate-300'/>
        }
            <input type='text' placeholder='Email Address' className=' w-64 p-3 m-2 ml-10 rounded hover:bg-slate-300'/>
            <input type='text' placeholder='Password' className='w-64 p-3 m-2 ml-10 rounded  hover:bg-slate-300'/>
            <button className='w-64 bg-red-600 pt-2 mt-6 ml-10 rounded p-2'>{isSignInForm?"Sign In":"Sign Up"}</button>
            <br/>
            <input type='checkbox' className='ml-10'/><span className='text-xs gap-1'>Remember me</span>
            <h6 className='text-xs mt-16 ml-10 cursor-pointer' onClick={toggleSignInForm}>{isSignInForm ? "Already a user ? Sign up now.":"New to Netflix? Sign In now."}</h6>
            <p className='text-xs mb-20 ml-10 mt-2'>This page is protected by Google reCAPTCHA to ensure you're not a bot. Learn more.</p>
        </form>
    </div>
  )
}

export default Login