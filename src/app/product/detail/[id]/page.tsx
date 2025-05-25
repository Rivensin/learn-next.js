'use client'
import useSWR from "swr"
import Image from "next/image"
import { useParams } from "next/navigation"

const fetcher = (url: string) => fetch(url).then(res => res.json())

export default function DetailProductPage(props : any){
  const params = useParams()
  const id = params.id

  const {data, error, isLoading} = useSWR(`${process.env.NEXT_PUBLIC_API_URL}/api/product?id=${id}`, fetcher)
  
  const product = {
    data: data?.data
  }
  
  console.log(product)
  return (
    <div className="container mx-auto my-10">
      <div className="w-1/2 mx-auto border border-gray-700">
        <img src={product.data?.image} 
             alt=""
             className="w-full object-cover aspect-square col-span-2"
             ></img>
        <div className="bg-white p-6 px-6">
          <h3>{product.data?.name}</h3>
          <p>Price : ${product.data?.price}</p>
        </div>
      </div>
    </div>
  )
}