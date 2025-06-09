'use client'
import Link from "next/link"
import Image from "next/image"
import useSWR from "swr"

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
      <div className="ml-4 mt-36 flex items-center">
        <span className='w-[50px] h-[3px] rounded block bg-[#5E50D2]/70'></span>
        <span className="ml-10 text-[#5E50D2]">Our Products</span>
      </div>

      <div className="ml-4 mt-6 mb-11 flex justify-center items-center flex-wrap">
        <div className="bg-white text-md text-black hover:bg-[#f84d78] p-4 mr-4 my-2 border border-gray-200 shadow-lg transition-all duration-700 font-bold cursor-pointer">Burnt Cheese Cake</div>
        <div className="bg-white text-md text-black hover:bg-[#f84d78] p-4 mr-4 my-2 border border-gray-200 shadow-lg transition-all duration-700 font-bold cursor-pointer">Custom Cake</div>
        <div className="bg-white text-md text-black hover:bg-[#f84d78] p-4 mr-4 my-2 border border-gray-200 shadow-lg transition-all duration-700 font-bold cursor-pointer">Fudgy Brownie</div>
        <div className="bg-white text-md text-black hover:bg-[#f84d78] p-4 mr-4 my-2 border border-gray-200 shadow-lg transition-all duration-700 font-bold cursor-pointer">Soft Cookies</div>
        <div className="bg-white text-md text-black hover:bg-[#f84d78] p-4 mr-4 my-2 border border-gray-200 shadow-lg transition-all duration-700 font-bold cursor-pointer">Tiramisu Cake</div>
      </div>
      
      <div className="ml-2 text-[#5E50D2] text-xl">Burnt Cheese Cake</div>

      <div className="mt-10 mx-auto max-w-sm 4xl:grid 4xl:grid-cols-4 4xl:mt-5 4xl:my-5 place-items-center overflow-hidden"> 
        {products.data?.length > 0 && (
          products.data?.slice().sort((a:any,b:any) =>a.name.localeCompare(b.name, 'en',{sensitivity: 'base'})).map((product: any) => (
            <div key ={product.id} 
                className='4xl:w-11/12 max-w-sm bg-white mb-6 shadow-lg'>
              <Link href={`product/detail/${product.id}`}>
                <Image src={product.image}
                      className="object-cover h-96 w-full"  
                      alt="product image" 
                      width={500} 
                      height={500} 
                      loading='lazy'
                />
              </Link>
              
                <div className="pb-10 pt-2 text-md font-bold tracking-tight text-bold text-center border border-[#f84d78] text-[#f84d78] hover:text-white hover:bg-[#f84d78] transition-all duration-600">
                  <h2>{product.name}</h2>
                </div>
                {/* <div className="flex items-center justify-between mt-3">
                    <span className="text-3xl font-bold text-gray-900 dark:text-white">${product.price}</span>
                    <button type="submit" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Add to cart</button>
                  </div> */}              
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