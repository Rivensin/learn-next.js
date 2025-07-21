'use client'
import React, { useState } from 'react'
import Link from 'next/link'
import { signIn } from 'next-auth/react'
import { useRouter, useSearchParams } from 'next/navigation'
import Image from 'next/image'

function LoginPage() {
  
  const router = useRouter()
  const [error,setError] = useState('')
  const [isLoading,setIsLoading] = useState(false)  
  // const searchParams = useSearchParams()
  // const callbackURL = searchParams.get('callbackUrl') || '/'   
  
  const handleLogin = async(e: any) => {
    setIsLoading(true)
    e.preventDefault()
    try{
      const res = await signIn('credentials', {
        redirect: false,
        email: e.target.email.value,
        password: e.target.password.value,
        callbackUrl: '/review/form'
      })

      if(!res?.error){
        setIsLoading(false)
        router.push('/review/form')
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
    <div className="flex flex-col justify-center pt-4 lg:px-10 mt-32">
      <div className='mx-auto shadow-gray-400 px-10 py-10 rounded-lg shadow-md border-t-2'>
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
            <Image 
              className="mx-auto w-36 h-32"
              unoptimized 
              src="/icons/icon.png" 
              alt="Dlooti" 
              width={500} 
              height={500} 
            />
          <h2 className="mt-2 text-center text-2xl/3 font-bold tracking-tight text-gray-900">
            Sign in to your account
          </h2>
        </div>

        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
          <form className="space-y-6" onSubmit={e => handleLogin(e)}>
            <div>
              <label htmlFor="email" className="block text-sm/6 font-medium text-gray-900 ">Email address</label>
              <div className="mt-2">
                <input type="email" name="email" id="email" required className="input-text" placeholder='Email'/>
              </div>
            </div>

            <div>
              <div className="flex items-center justify-between">
                <label htmlFor="password" className="block text-sm/6 font-medium text-gray-900">Password</label>
              </div>
              <div className="mt-2">
                <input type="password" name="password" id="password" required className="input-text" placeholder='Password'/>
              </div>
            </div>

            {error !=='' && (<div className='text-center font-bold text-red-500 mb-3'>{error}</div>)}
            
            <div>
              <button 
                type="submit" 
                disabled={isLoading} 
                className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm/6 font-semibold text-white shadow-xs hover:bg-indigo-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 shadow-lg duration-700 transition-all">
                  {isLoading ? 'Loading...' : 'Login'}
              </button>
            </div>
          </form>

          <p className="mt-6 text-center text-sm text-gray-500">
            Not a member?
            <Link href="/register" className="font-semibold text-indigo-600 hover:text-indigo-500 duration-700 transition-all hover:opacity-80"> Register</Link>
          </p>
          <div 
            className="flex items-center justify-center mt-4 border-2 border-slate-200 rounded-xl  p-1 cursor-pointer hover:shadow-lg hover:bg-slate-200 duration-500 transition-all"
            onClick={() => signIn('google',{callbackUrl: '/review/form', redirect: false})}>
            <Image src='/icons/google.png' 
                   className='w-5 h-5'
                   unoptimized
                   width={30} 
                   height={30}
                   alt='google'/>
            <button 
              type='button' 
              className="ml-2 text-sm/6 text-gray-500">
              Login With Google
            </button>
          </div>
        </div>
      </div>
    </div>
  )}
  
export default LoginPage