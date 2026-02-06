'use client'
import dynamic from "next/dynamic"
import useSWR from "swr"
import { useParams } from "next/navigation"
import Image from "next/image"
import { useEffect } from "react"
import { div } from "framer-motion/client"

const fetcher = (url: string) => fetch(url).then(res => res.json())

export default function DetailProductPage(props: any){
  const {id} = useParams()
  
  const {data, error, isLoading} = useSWR(`${process.env.NEXT_PUBLIC_API_URL}/api/product?id=${id}`, fetcher)
  if (isLoading) return null
  
  const product = {
    data: data?.data
  }

  const Modal = dynamic(() => import("@/components/core/Modal")
  ,{
    ssr: false,
    loading: () =>   
      <div className="fixed z-10 left-0 right-0 top-0 bottom-0 mx-auto bg-black/60">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 p-6 bg-white w-full h-auto max-w-xs sm:max-w-lg md:max-w-xl lg:max-w-2xl xl:max-w-3xl 2xl:max-w-4xl md:mt-6 transform">
          <div className="absolute -top-3 -right-4 rounded-full bg-slate-300 p-5 w-1 h-1 flex justify-center items-center duration-300 animate-pulse">
          </div>
          <div className="border-4 border-pinkBg p-4">
            <div className="w-[236px] h-[236px] sm:w-[428px] sm:h-[428px] md:w-[492px] md:h-[492px] lg:w-[588px] lg:h-[500px] xl:w-[684px] 2xl:w-[812px] bg-slate-300 mx-auto animate-pulse duration-700"></div>
            <div className="mt-6 -mb-3 md:mb-0 ">
              <h3 className="bg-slate-300 animate-pulse w-[233px] h-[24px]"></h3>
              <p className="bg-slate-300 animate-pulse"></p>
            </div>
          </div>
        </div>
      </div>
    }
  )

  return (
    product.data?.image && (
    <Modal category={product.data?.category}>
      <Image 
        src={product.data?.image}
        className='w-full object-contain aspect-square h-auto lg:max-h-[500px]'
        alt={product.data?.name}
        priority
        quality={70}
        width={500}
        height={500}>
      </Image>
      <div className="mt-6 -mb-3 md:mb-0">
        <h3>{product.data?.name}</h3>
      </div>
    </Modal>  
    )
  )
  
}