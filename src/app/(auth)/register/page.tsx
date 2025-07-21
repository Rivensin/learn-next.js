'use client'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { useState } from 'react'
import Image from 'next/image'

function Register() {
  const router = useRouter()
  const [error,setError] = useState('')
  const [isLoading,setIsLoading] = useState(false)

  const handleSubmit = async (e: any) => {
    e.preventDefault()
    setError('')
    setIsLoading(true)
    const res = await fetch('/api/auth/register', {
      method: 'POST',
      body : JSON.stringify({
        fullname: e.target.fullname.value,
        email : e.target.email.value,
        password: e.target.password.value
      })
    })
    
    if(res.status === 200){
      e.target.reset()
      setIsLoading(false)
      router.push('/login')
    } else {
      setError('email already exist')
      setIsLoading(false)
    } 
  }

  return (
    <div className="flex flex-col justify-center pt-2 lg:px-8 mt-36">
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
          <h2 className="mt-2 text-center text-2xl/3 font-bold tracking-tight text-gray-900">Register your account</h2>
        </div>

        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
          <form className="space-y-6" onSubmit={e => handleSubmit(e)}>
            <div>
              <label htmlFor="name" className="block text-sm/6 font-medium text-gray-900">Full Name</label>
              <div className="mt-2">
                <input type="text" name="fullname" id="name" required className="input-text" placeholder='Full Name'/>
              </div>
            </div>

            <div>
              <label htmlFor="email" className="block text-sm/6 font-medium text-gray-900">Email address</label>
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
                className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm/6 font-semibold text-white shadow-xs hover:bg-indigo-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                disabled={isLoading}>
                  {isLoading ? 'Loading...' : 'Sign up Account'}
              </button>
            </div>
          </form>

          <p className="mt-8 text-center text-sm/4 text-gray-500">
            Already a member? 
            <Link href="/login" className="font-semibold text-indigo-600 hover:text-indigo-500 duration-700 transition-all hover:opacity-80"> Login</Link>
          </p>
        </div>
      </div>
    </div>
  )}

export default Register