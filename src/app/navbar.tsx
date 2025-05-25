'use client'
import { signIn, useSession, signOut } from 'next-auth/react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import Image from 'next/image'

function Navbar() {
  const {data: session, status} : {data: any, status: string} = useSession()
  const pathname = usePathname()
  const disableNavbar = ['/login', '/register']
  
  if(disableNavbar.includes(pathname)){
    return null
  }
  
  return (
    <div className='flex bg-gray-800 py-2 px-5 justify-between '>
      <div className='flex items-center'>
        <h1 className='text-white'>navbar</h1>
        <ul className='flex ml-5'>
          <Link href='/'>
          <li className={`mr-3 ${pathname === '/' ? 'text-blue-300' : 'text-white'} cursor-pointer`}>Home</li>
          </Link>
          <Link href='/about'>
          <li className={`mr-3 ${pathname === '/about' ? 'text-blue-300' : 'text-white'} cursor-pointer`}>About</li>
          </Link>
          <Link href='/about/profile'>
          <li className={`mr-3 ${pathname === '/about/profile' ? 'text-blue-300' : 'text-white'} cursor-pointer`}>Profile</li>
          </Link>
          <Link href='/product'>
          <li className={`mr-3 ${pathname === '/product' ? 'text-blue-300' : 'text-white'} cursor-pointer`}>Product</li>
          </Link>
        </ul>
      </div>
      <div>
        {status === 'unauthenticated' ? (
          <button 
            className='bg-white rounded-md px-3 h-7 text-sm cursor-pointer'
            onClick={() => signIn()}>
              Login
          </button>
        ) : (
          <div className='flex justify-center items-center'>
            <Image src='/images/profile.png' className='w-10 h-10 rounded-full mr-3' alt='profile' width={100} height={100}/>
            <h4 className='text-white mr-3'>{session?.user?.name}</h4>
            <button 
              className='bg-white rounded-md px-3 h-7 text-sm cursor-pointer'
              onClick={() => signOut()}>
                Logout 
          </button>
          </div>
        )}
      </div>
    </div>
   )
} 

export default Navbar