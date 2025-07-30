'use client'
import { time } from "console";
import { signOut } from "next-auth/react";
import { useSession } from "next-auth/react";
import { useEffect, useRef } from "react";

export default function IdleSessionWatcher(){
  const {data :session } = useSession()
  const timeoutRef = useRef<NodeJS.Timeout | null>(null) 
  
  // Set idle timeout (20 minutes)
  const startIdleTimer = () => {
    if(timeoutRef.current) clearTimeout(timeoutRef.current) //jika ada timeout yang sedang berjalan akan di clear
    timeoutRef.current = setTimeout(() => { //buat timeout baru dengan batas 20menit 
      signOut({callbackUrl: '/login'})
    },20*60*1000)
  }

  //  Reset timer on any user interaction
  const resetIdleTimer = () => startIdleTimer() //fungsi reset = fungsi start

  useEffect(() => {
    if(!session) return //jika tidak ada session maka return

    startIdleTimer() //jalankan fungsi start

    const events = ['mousemove','mousedown','keydown','scroll','touchstart'] 
    events.forEach(event => {
      window.addEventListener(event, resetIdleTimer) //jika user melakukan event yang ditentukan akan mereset timer
    })

    return () => {
      events.forEach(event => window.removeEventListener(event,resetIdleTimer))
      if(timeoutRef.current) clearTimeout(timeoutRef.current)
    }
  },[session])

  return null
}