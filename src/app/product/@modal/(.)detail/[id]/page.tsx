'use client'
import Image from "next/image"
import dynamic from "next/dynamic"
import useSWR from "swr"
import { useParams } from "next/navigation"

const fetcher = (url: string) => fetch(url).then(res => res.json())

export default function DetailProductPage(props: any){
  const params = useParams()
  const id = params.id
  // const product = await getData(`${process.env.NEXT_PUBLIC_API_URL}/api/product?id=${id}`)
  
  const {data, error, isLoading} = useSWR(`${process.env.NEXT_PUBLIC_API_URL}/api/product?id=${id}`, fetcher)
  
  const product = {
    data: data?.data
  }

  const Modal = dynamic(() => import("@/components/core/Modal"),{
    loading: () => 
      <div className="absolute left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 flex items-center justify-center max-w-5xl">
         <div className="h-6 w-6 border-4 border-t-transparent border-white rounded-full animate-spin"></div>
        <span className="text-3xl text-white">Loading...</span>
      </div>
  })

  return (
    <Modal>
      <img src={product.data?.image}
             className="w-full object-cover aspect-square col-span-2 h-[500px]"
             alt={product.data?.name}>
      </img>
      <div className="bg-white mt-6">
        <h3>{product.data?.name}</h3>
        <p>{product.data?.desc}</p>
      </div>
    </Modal>
      
  )
}