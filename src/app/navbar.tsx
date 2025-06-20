'use client'
import { signIn, useSession, signOut } from 'next-auth/react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import Image from 'next/image'
import { useEffect, useState } from 'react'

function Navbar() {
  const {data: session, status} : {data: any, status: string} = useSession()
  const pathname = usePathname()
  const disableNavbar = ['/login', '/register']
  const [hamburgerMenu,setHamburgerMenu] = useState(false)
  
  if(disableNavbar.includes(pathname)){
    return null
  }

  useEffect(() => {
    const header = document.querySelector('header');
  
    const handleScroll = () => {
      if(window.pageYOffset > 0){
        header?.classList.add('navbar-fixed');
      } else {
        header?.classList.remove('navbar-fixed');
      }
    };
  
    window.addEventListener('scroll',handleScroll);

    return () => {
      window.removeEventListener('scroll',handleScroll);
    }
  },[])
  
  return (
    <header className='w-full flex bg-[#f7f7f9] items-center justify-between lg:justify-center absolute top-0 left-0 z-[9999] 4xl:py-2 4xl:px-5'>
      <div className='flex items-center'>
        <button type='button' className='ml-2 mr-3 lg:hidden' onClick={() => setHamburgerMenu(prev => !prev)}>
          <span className='w-[30px] h-[2px] my-2 block bg-black opacity-50 rounded'></span>
          <span className={`${hamburgerMenu ? 'w-[30px]' : 'w-[18px]'} h-[2px] my-2 block bg-black opacity-50 rounded duration-700`}></span>
          <span className='w-[30px] h-[2px] my-2 block bg-black opacity-50 rounded'></span>
        </button>  

        <Link href='/'>
          <Image 
              src='/icon-removebg-preview.png' 
              alt='dlooti-logo'
              className='w-36 h-24 -ml-2 4xl:ml-32'
              width={500}
              height={500}
              priority
          />
        </Link>
      </div>
      
      <div className={`${hamburgerMenu ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none -translate-y-4 lg:-translate-y-0 lg:pointer-events-auto'} absolute top-full left-0 bg-white/50 backdrop-blur-sm z-50 duration-700 lg:opacity-100 lg:bg-[#f7f7f9] lg:relative lg:top-auto lg:mx-14 lg:flex lg:items-center`}>
        <ul className='flex flex-col ml-6 lg:flex-row lg:text-md xl:text-md 4xl:text-xl mb-1 lg:mb-0'>
          <Link href='/'>
            <li className={`lg:mr-14 mr-4 hover:text-purple-700 duration-500 ${pathname === '/' ? 'text-purple-700' : 'text-black'} cursor-pointer`}>Home</li>
          </Link>
          <Link href={`/product/${encodeURIComponent('Burnt Cheese Cake')}`}>
            <li className={`lg:mr-14 mr-4 hover:text-purple-700 duration-500 ${pathname === '/product' ? 'text-purple-700' : 'text-black'} cursor-pointer`}>Product</li>
          </Link>
          <Link href='/about'>
            <li className={`lg:mr-14 mr-4 hover:text-purple-700 duration-500 ${pathname === '/about' ? 'text-purple-700' : 'text-black'} cursor-pointer`}>About</li>
          </Link>
          <Link href='/outlet'>
            <li className={`lg:mr-14 mr-4 hover:text-purple-700 duration-500 ${pathname === '/outlet' ? 'text-purple-700' : 'text-black'} cursor-pointer`}>Outlet</li>
          </Link>
          <Link href='/about/profile'>
            <li className={`lg:mr-14 mr-4 hover:text-purple-700 duration-500 ${pathname === '/about/profile' ? 'text-purple-700' : 'text-black'} cursor-pointer`}>Review</li>
          </Link>
        </ul>
      </div>

      <div>
        <Image 
          src='/icons/instagram.png' 
          alt='instagram'
          className='w-9 h-9 mr-4'
          width={500}
          height={500}
        />
      </div>
    </header>
  ) 
}
      {/* <div>
        {status === 'unauthenticated' ? (
          <button 
            className='text-black cursor-pointer '
            onClick={() => signIn()}>
              Login
          </button>
        ) : (
          <div className='flex justify-center items-center'>
            <Image src='/images/profile.png' className='w-10 h-10 rounded-full mr-3' alt='profile' width={100} height={100}/>
            <h4 className='text-black mr-3'>{session?.user?.name}</h4>
            <button 
              className='bg-white rounded-md px-3 h-7 text-sm cursor-pointer'
              onClick={() => signOut()}>
                Logout 
          </button>
          </div>
        )}
      </div> */}

  
   

export default Navbar