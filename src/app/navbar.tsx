'use client'
import { signIn, useSession, signOut } from 'next-auth/react'
import Link from 'next/link'
import { usePathname, useRouter } from 'next/navigation'

function Navbar() {
  const {status} : {status: string} = useSession()
  const pathname = usePathname()
  const router = useRouter()
  const disableNavbar = ['/login', '/register']

  if(disableNavbar.includes(pathname)){
    return null
  }
  
  return (
    <div className='flex bg-gray-800 py-2 px-5 justify-between'>
      <div className='flex'>
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
          <button 
          className='bg-white rounded-md px-3 h-7 text-sm cursor-pointer'
          onClick={() => signOut()}>
            Logout 
        </button>
        )}
      </div>
    </div>
   )
} 

export default Navbar