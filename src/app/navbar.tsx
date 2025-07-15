'use client'
import { signIn, useSession, signOut } from 'next-auth/react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import Image from 'next/image'
import { useEffect, useState } from 'react'

function Navbar() {
  const pathname = usePathname()
  // const disableNavbar = ['/login', '/register']
  // if(disableNavbar.includes(pathname)){
  //   return null
  // }

  const {data: session, status} : {data: any, status: string} = useSession()
  const [hamburgerMenu,setHamburgerMenu] = useState(false)

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
    <header className='w-full flex bg-whiteNav items-center justify-between lg:justify-center absolute top-0 left-0 z-[9999] 4xl:py-2 4xl:px-5'>
      <div className='flex items-center'>
        <button type='button' className='ml-2 mr-3 lg:hidden' onClick={() => setHamburgerMenu(prev => !prev)}>
          <span className='w-[30px] hamburger-line'></span>
          <span className={`${hamburgerMenu ? 'w-[30px]' : 'w-[18px]'} hamburger-line duration-700`}></span>
          <span className='w-[30px] hamburger-line'></span>
        </button>  

        <Link href='/'>
          <Image 
            src='/icons/icon-removebg-preview.png' 
            alt='dlooti-logo'
            quality={75}
            className='w-36 h-24 ml-2 4xl:ml-32'
            width={150}
            height={100}
            priority
            onClick={() => setHamburgerMenu(false)}
          />
        </Link>
      </div>
      
      <div className={`${hamburgerMenu ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none -translate-y-4 lg:-translate-y-0 lg:pointer-events-auto'} absolute top-full left-0 bg-white/50 backdrop-blur-sm z-50 duration-700 lg:opacity-100 lg:bg-whiteNav lg:relative lg:top-auto lg:mx-14 lg:flex lg:items-center`}>
        <ul className='flex flex-col ml-6 lg:flex-row lg:text-md xl:text-md 4xl:text-xl mb-1 lg:mb-0'>
          <Link href='/' onClick={() => setHamburgerMenu(false)}>
            <li className={`nav-menu ${pathname === '/' ? 'text-purple-700' : 'text-black'} `}>Home</li>
          </Link>
          <Link href={`/product/burnt-cheese-cake`} onClick={() => setHamburgerMenu(false)}>
            <li className={`nav-menu ${pathname === '/product' ? 'text-purple-700' : 'text-black'}`}>Product</li>
          </Link>
          <Link href='/about' onClick={() => setHamburgerMenu(false)}>
            <li className={`nav-menu ${pathname === '/about' ? 'text-purple-700' : 'text-black'}`}>About</li>
          </Link>
          <Link href='/outlet' onClick={() => setHamburgerMenu(false)}>
            <li className={`nav-menu ${pathname === '/outlet' ? 'text-purple-700' : 'text-black'}`}>Outlet</li>
          </Link>
          <Link href='/review' onClick={() => setHamburgerMenu(false)}>
            <li className={`nav-menu ${pathname === '/review' ? 'text-purple-700' : 'text-black'}`}>Review</li>
          </Link>
        </ul>
      </div>

      <div className='flex'>
        <div className='group'>
          <Link href='https://www.instagram.com/dlooti_' target='_blank'>
            <Image 
            src='/icons/instagram.png' 
            alt='instagram'
            className='navbar-icon'
            width={500}
            height={500}
            />
        </Link>
      </div>

      <div className='group'>
        <Link href='https://www.tiktok.com/@dlooti' target='_blank'>
          <Image 
            src='/icons/tiktok.png' 
            alt='tiktok'
            className='navbar-icon'
            width={500}
            height={500}
            />
        </Link>
      </div>
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