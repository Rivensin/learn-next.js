'use client'
import React, { useEffect } from 'react'
import { usePathname } from 'next/navigation'

function ScrollTop(){
  const pathname = usePathname()

  useEffect(() => {
    function scrollToTop(){
      window.scrollTo(0,0)
  }
  scrollToTop()
  },[pathname])

  return null
}

export default ScrollTop