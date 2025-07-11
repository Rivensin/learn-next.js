'use client'
import { useRouter } from "next/navigation"
import { MouseEventHandler, useRef } from "react"
import { easeOut, motion } from "framer-motion"
import { cardVariant } from "@/components/fragments/motion"

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
        className="fixed z-10 left-0 right-0 top-0 bottom-0 bg-black/60"
        onClick={close}>
      <motion.div
        variants={cardVariant}
        initial={{
          opacity: 0,
        }}
        animate={{
          opacity:1,
        }}
        transition={{
          duration: 0.7
        }}
        className="absolute transform top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 p-6 bg-white w-full h-auto max-w-xs sm:max-w-lg md:max-w-xl lg:max-w-2xl xl:max-w-3xl 2xl:max-w-4xl md:mt-6">
        <div onClick={() => router.back()} 
            className="cursor-pointer absolute -top-3 -right-4 rounded-full bg-gray-300 p-5 w-1 h-1 flex justify-center items-center hover:bg-gray-500 duration-300">
          X
        </div>
        <div className="relative border-2 border-pinkBg p-4">
          {children}
        </div>
      </motion.div>
    </div>
  )

}