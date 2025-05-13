'use client'
import React, { useState } from 'react'
import Link from 'next/link'
import { redirect } from 'next/dist/server/api-utils'
import { signIn } from 'next-auth/react'
import { useRouter } from 'next/navigation'

function LoginPage({searchParams}: any) {
  const router = useRouter()
  const [error,setError] = useState('')
  const [isLoading,setIsLoading] = useState(false)
  const callbackURL = searchParams.callbackUrl || '/'
  const handleLogin = async(e: any) => {
    setIsLoading(true)
    e.preventDefault()
    try{
      const res = await signIn('credentials', {
        redirect: false,
        email: e.target.email.value,
        password: e.target.password.value,
        callbackUrl: callbackURL
      })

      if(!res?.error){
        setIsLoading(false)
        router.push(callbackURL)
      } else {
        if(res.status === 401){
          setIsLoading(false)
          setError('Email or Password is Incorrect!')
        }
        
      }
    } catch(err) {
      console.log(err)
    }
  }

  return (
    <div className="flex min-h-screen flex-col justify-center px-6 py-12 lg:px-8 border">
      <div className='mx-auto shadow-gray-400 px-10 py-10 rounded-lg shadow-md'>
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          <img className="mx-auto h-10 w-auto" src="https://tailwindcss.com/plus-assets/img/logos/mark.svg?color=indigo&shade=600" alt="Your Company"/>
        <h2 className="mt-10 text-center text-2xl/9 font-bold tracking-tight text-gray-900">Sign in to your account</h2>
        </div>

        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
          <form className="space-y-6" onSubmit={e => handleLogin(e)}>
            <div>
              <label htmlFor="email" className="block text-sm/6 font-medium text-gray-900">Email address</label>
              <div className="mt-2">
                <input type="email" name="email" id="email" required className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6" placeholder='Email'/>
              </div>
            </div>

            <div>
              <div className="flex items-center justify-between">
                <label htmlFor="password" className="block text-sm/6 font-medium text-gray-900">Password</label>
              </div>
              <div className="mt-2">
                <input type="password" name="password" id="password" required className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6" placeholder='Password'/>
              </div>
            </div>

            {error !=='' && (<div className='text-center font-bold text-red-500 mb-3'>{error}</div>)}
            
            <div>
              <button 
                type="submit" 
                disabled={isLoading} 
                className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm/6 font-semibold text-white shadow-xs hover:bg-indigo-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
                  {isLoading ? 'Loading...' : 'Login'}
              </button>
            </div>
          </form>

          <p className="mt-10 text-center text-sm/6 text-gray-500">
            Not a member?
            <Link href="/register" className="font-semibold text-indigo-600 hover:text-indigo-500"> Register</Link>
          </p>
        </div>
      </div>
    </div>
  )}
  
export default LoginPage