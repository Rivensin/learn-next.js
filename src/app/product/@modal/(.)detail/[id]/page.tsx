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
    loading: () => <p>Loading...</p>
  })

  return (
    <Modal>
      <img src={product.data?.image}
             className="w-full object-cover aspect-square col-span-2 h-[600px]"
             alt="product">
      </img>
      <div className="bg-white mt-6">
        <h3>{product.data?.name}</h3>
        <p>Price : ${product.data?.price}</p>
      </div>
    </Modal>
      
  )
}