'use client'
import Link from "next/link"
import Image from "next/image"
import useSWR from "swr"
import { useState } from "react"
import { useParams, useRouter } from "next/navigation"

const fetcher = (url: string) => fetch(url).then(res => res.json())

function ProductPage(props: any) {
  const {data, error, isLoading} = useSWR(`${process.env.NEXT_PUBLIC_API_URL}/api/product`, fetcher)
  const {category} = useParams()
  const decoded = category ? decodeURIComponent(category as string) : '' 
  const router = useRouter()
  // const [category,setCategory] = useState('Burnt Cheese Cake')
  
  const products = {
    data: data?.data
  }

  const filteredProduct = products.data?.filter((product: any) => 
    product.category.toLowerCase() === decoded.toLowerCase()
  ).sort((a:any,b:any) => 
    a.name.localeCompare(b.name, 'en', {sensitivity: 'base'})
  );

  return (
    <>
      <div className="ml-4 mt-36 flex items-center">
        <span className='w-[50px] h-[3px] rounded block bg-[#5E50D2]/70'></span>
        <span className="ml-10 text-[#5E50D2] text-lg">Our Products</span>
      </div>

      <div className="ml-4 mt-6 mb-11 flex justify-center items-center flex-wrap">
        <button onClick={() => router.replace(`/product/${encodeURIComponent('Burnt Cheese Cake')}`)} 
                className={` text-md hover:bg-[#f84d78] hover:text-white p-4 mr-4 my-2 border border-gray-200 shadow-lg transition-all duration-700 font-bold cursor-pointer ${decoded === 'Burnt Cheese Cake' ? 'bg-[#f84d78] text-white' : 'text-black bg-white'}`}>
          Burnt Cheese Cake
        </button>
        <button onClick={() => router.replace(`/product/${encodeURIComponent('Custom Cake')}`)}
                className={` text-md hover:bg-[#f84d78] hover:text-white p-4 mr-4 my-2 border border-gray-200 shadow-lg transition-all duration-700 font-bold cursor-pointer ${decoded === 'Custom Cake' ? 'bg-[#f84d78] text-white' : 'text-black bg-white'}`}>
          Custom Cake
        </button>
        <button onClick={() => router.replace(`/product/${encodeURIComponent('Fudgy Brownies')}`)} 
                className={` text-md hover:bg-[#f84d78] hover:text-white p-4 mr-4 my-2 border border-gray-200 shadow-lg transition-all duration-700 font-bold cursor-pointer ${decoded === 'Fudgy Brownies' ? 'bg-[#f84d78] text-white' : 'text-black bg-white'}`}>
          Fudgy Brownies</button>
        <button onClick={() => router.replace(`/product/${encodeURIComponent('Soft Cookies')}`)}  
                className={` text-md hover:bg-[#f84d78] hover:text-white p-4 mr-4 my-2 border border-gray-200 shadow-lg transition-all duration-700 font-bold cursor-pointer ${decoded === 'Soft Cookies' ? 'bg-[#f84d78] text-white' : 'text-black bg-white'}`}>
          Soft Cookies</button>
        <button onClick={() => router.replace(`/product/${encodeURIComponent('Tiramisu Cake')}`)}  
                className={` text-md hover:bg-[#f84d78] hover:text-white p-4 mr-4 my-2 border border-gray-200 shadow-lg transition-all duration-700 font-bold cursor-pointer ${decoded === 'Tiramisu Cake' ? 'bg-[#f84d78] text-white' : 'text-black bg-white'}`}>
          Tiramisu Cake</button>
      </div>
      
      <div className="ml-2 text-[#5E50D2] text-2xl font-bold">{decoded}</div>

      <div className="mt-10 mx-auto max-w-sm 4xl:grid 4xl:grid-cols-4 4xl:mt-5 4xl:my-5 place-items-center"> 
        {filteredProduct?.length > 0 && (
          filteredProduct?.map((product: any) => (
            <div key ={product.id} 
                 className='4xl:w-11/12 max-w-sm bg-white mb-6 shadow-lg'>
              <div className="overflow-hidden group">
                <Link href={`product/detail/${product.id}`}>
                  <Image src={product.image}
                        className="object-cover h-96 w-full group-hover:scale-110 transition-all duration-700"  
                        alt="product image" 
                        width={500} 
                        height={500} 
                        loading='lazy'/>
                </Link>
              </div>
              <div className="pb-10 pt-2 text-md ont-bold tracking-tight text-bold text-center border border-[#f84d78] text-[#f84d78] hover:text-white hover:bg-[#f84d78] transition-all duration-600">
                <span>{product.name}</span>
              </div>         
            </div>
          ))
        )}
      </div>
    </>
  ) 
}

 {/*
  <h1>{params.slug ? 'detail product page' : 'product page'}</h1>  
    {params.slug && ( 
      <div>
        Tipe : {params.slug[0]} |
        Gender : {params.slug[1]} | 
        Merk : {params.slug[2]}
      </div>     
)} */}

export default ProductPage