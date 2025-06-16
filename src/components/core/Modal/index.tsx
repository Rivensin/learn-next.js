'use client'

import { useRouter } from "next/navigation"
import { MouseEventHandler, useRef } from "react"

export default function Modal({children} : {children:React.ReactNode}){
  const overlay = useRef(null)
  const router = useRouter()

  const close : MouseEventHandler = e => {
    if(e.target === overlay.current){
      router.back()
    }
  }

  return (
    <div ref={overlay}
         className="fixed z-10 left-0 right-0 top-0 bottom-0 mx-auto bg-black/60"
         onClick={close}>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 p-6 bg-white rounded-lg w-96">
      <div onClick={() => router.back()} 
           className="cursor-pointer absolute -top-3 -right-4 rounded-full bg-gray-300 p-5 w-1 h-1 flex justify-center items-center">
        X
      </div>
        {children}
      </div>
    </div>
  )

}