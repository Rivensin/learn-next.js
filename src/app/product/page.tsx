'use client'
import Link from "next/link"
import Image from "next/image"
import useSWR from "swr"
import { usePathname } from "next/navigation"

// type ProductPage= { 
//     params : {
//       slug:string[]
//     }
//   }

const fetcher = (url: string) => fetch(url).then(res => res.json())

function ProductPage(props: any) {
  const {data, error, isLoading} = useSWR(`${process.env.NEXT_PUBLIC_API_URL}/api/product`, fetcher)
  
  const products = {
    data: data?.data
  }
  
  return (
    <>
      <h1 className="p-6 text-3xl">
        Product Page
      </h1>
      <div className="grid grid-cols-4 mt-5 my-5 place-items-center"> 
        {products.data?.length > 0 && (
          products.data?.map((product: any) => (
          <Link href={`product/detail/${product.id}`}
                key ={product.id} 
                className="w-11/12 max-w-sm bg-white border border-gray-200 rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700">
            <Image className="rounded-t-lg object-cover h-96 w-full" src={product.image} alt="product image" width={500} height={500} loading='lazy'/>
            <div className="px-5 pb-5">
              <h5 className="text-xl mt-2 font-semibold tracking-tight text-gray-900 dark:text-white truncate">{product.name}</h5>
              <div className="flex items-center justify-between mt-3">
                <span className="text-3xl font-bold text-gray-900 dark:text-white">${product.price}</span>
                <button type="submit" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Add to cart</button>
              </div>
            </div>
          </Link>
          ))
        ) }
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