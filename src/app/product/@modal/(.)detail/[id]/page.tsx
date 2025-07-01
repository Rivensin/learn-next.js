'use client'
import dynamic from "next/dynamic"
import useSWR from "swr"
import { useParams } from "next/navigation"
import Image from "next/image"

const fetcher = (url: string) => fetch(url).then(res => res.json())

export default function DetailProductPage(props: any){
  const {id} = useParams()
  const {data, error, isLoading} = useSWR(`${process.env.NEXT_PUBLIC_API_URL}/api/product?id=${id}`, fetcher)
  
  const product = {
    data: data?.data
  }

  const Modal = dynamic(() => import("@/components/core/Modal")
  ,{
    loading: () => 
      // <div className="absolute left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 flex items-center justify-center max-w-5xl">
      //    <div className="h-6 w-6 border-4 border-t-transparent border-white rounded-full animate-spin"></div>
      //   <span className="text-3xl text-black">Loading...</span>
      // </div>
      
      <div className="fixed z-10 left-0 right-0 top-0 bottom-0 mx-auto bg-black/60">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 p-6 bg-white w-full h-auto max-w-xs sm:max-w-lg md:max-w-xl lg:max-w-2xl xl:max-w-3xl 2xl:max-w-4xl">
          <div className="absolute -top-3 -right-4 rounded-full bg-slate-300 p-5 w-1 h-1 flex justify-center items-center duration-300 animate-pulse">
          </div>
          <div className="border-4 border-[#f84d78] p-6">
            <div className="w-full h-[500px] bg-slate-300 animate-pulse duration-700"></div>
            <div className="mt-6">
              <h3 className="bg-slate-300 animate-pulse w-[281px] h-[24px]"></h3>
              <p className="bg-slate-300 animate-pulse"></p>
            </div>
          </div>
        </div>
      </div>
    }
)

  return (
    <Modal>
      <Image src={product.data?.image}
           className="w-full object-contain aspect-square h-auto lg:max-h-[500px]"
           alt={product.data?.name}
           priority
           quality={70}
           width={500}
           height={500}
      >
      </Image>
      <div className="mt-6">
        <h3>{product.data?.name}</h3>
        <p>{product.data?.desc}</p>
      </div>
    </Modal>
  )
}