'use client'
import { useState } from "react"

export default function AdminProductPage(){ 
  const [status,setStatus] = useState('')
  
  const revalidate = async() => {
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/revalidate?tag=products&secret=Riven12345`,{
      method: 'POST'
    })

    if(res.ok){
      const response = await res.json()

      if(response.revalidate){
        setStatus('revalidate success')
      }
    } else {
      setStatus('revalidate failed')
    }
  }

  return (
    <div className="w-3/6 h-96 bg-gray-300 rounded-[12px] flex justify-center items-center mr-5">
      <div>{status}</div>
      <button className='bg-black text-white p-3 cursor-pointer m-5' onClick={revalidate}>revalidate</button>
    </div>
  )
}