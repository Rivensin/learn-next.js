'use client'
import Link from "next/link"
import Image from "next/image"
import useSWR from "swr"
import { useParams, useRouter } from "next/navigation"
import { Suspense, useRef } from "react"
import ProductLoading from "@/components/fragments/ProductLoading"
import { cardVariant, useScrollAnimation } from "@/components/fragments/motion"
import { motion, useInView } from "framer-motion"

const fetcher = (url: string) => fetch(url).then(res => res.json())

function ProductPage(props: any) {

  const {category} = useParams()
  const router = useRouter()

  const formatedCategory = typeof category === 'string' ? 
    category
      .split('-')
      .map(word => word.charAt(0).toUpperCase() + word.slice(1))
      .join(' ')
  : ''
  
  const {data, error, isLoading} = useSWR(`${process.env.NEXT_PUBLIC_API_URL}/api/product`, fetcher)

    const products = {
      data: data?.data
    }

    const filteredProduct = products.data?.filter((product: any) => 
      product.category.toLowerCase() === (typeof category === 'string' ? category.toLowerCase() : ''))
       .sort((a:any,b:any) => a.name.localeCompare(b.name, 'en', {sensitivity: 'base'}))

  return (
    <Suspense fallback={<ProductLoading />}>
      <>
        <title>Products | Dlooti</title>
        <motion.div
          variants={cardVariant}
          initial='hiddenRight'
          animate='visibleX'
          className="ml-4 mt-36 flex items-center">
          <span className='w-[50px] h-[3px] rounded block bg-[#5E50D2]/70'></span>
          <span className="ml-10 text-[#5E50D2] text-lg font-semibold">Our Products</span>
        </motion.div>

        <motion.div
          variants={cardVariant}
          initial='hiddenBot'
          animate='visibleY'
          className="ml-4 mt-6 mb-11 flex justify-center items-center flex-wrap">
          <button onClick={() => router.replace(`/product/burnt-cheese-cake`)} 
                  className={`text-md hover:bg-[#f84d78] hover:text-white p-4 mr-4 my-2 border border-gray-200 shadow-lg transition-all duration-700 font-semibold cursor-pointer ${category === 'burnt-cheese-cake' ? 'bg-[#f84d78] text-white' : 'text-black bg-white'}`}>
            Burnt Cheese Cake
          </button>
          <button onClick={() => router.replace(`/product/custom-cake`)}
                  className={`text-md hover:bg-[#f84d78] hover:text-white p-4 mr-4 my-2 border border-gray-200 shadow-lg transition-all duration-700 font-semibold cursor-pointer ${category === 'custom-cake' ? 'bg-[#f84d78] text-white' : 'text-black bg-white'}`}>
            Custom Cake
          </button>
          <button onClick={() => router.replace(`/product/fudgy-brownie`)} 
                  className={`text-md hover:bg-[#f84d78] hover:text-white p-4 mr-4 my-2 border border-gray-200 shadow-lg transition-all duration-700 font-semibold cursor-pointer ${category === 'fudgy-brownie' ? 'bg-[#f84d78] text-white' : 'text-black bg-white'}`}>
            Fudgy Brownies</button>
          <button onClick={() => router.replace(`/product/soft-cookies`)}  
                  className={`text-md hover:bg-[#f84d78] hover:text-white p-4 mr-4 my-2 border border-gray-200 shadow-lg transition-all duration-700 font-semibold cursor-pointer ${category === 'soft-cookies' ? 'bg-[#f84d78] text-white' : 'text-black bg-white'}`}>
            Soft Cookies</button>
          <button onClick={() => router.replace(`/product/tiramisu-cake`)}  
                  className={`text-md hover:bg-[#f84d78] hover:text-white p-4 mr-4 my-2 border border-gray-200 shadow-lg transition-all duration-700 font-semibold cursor-pointer ${category === 'tiramisu-cake' ? 'bg-[#f84d78] text-white' : 'text-black bg-white'}`}>
            Tiramisu Cake</button>
        </motion.div>
        
        <motion.div
          variants={cardVariant}
          initial='hiddenRight'
          animate='visibleX'
          className="ml-5 text-[#5E50D2] text-2xl font-semibold">
            {formatedCategory}
        </motion.div>

        <motion.div
          variants={cardVariant}
          initial='hiddenBot'
          animate='visibleY' 
          className="mt-10 gap-6 grid mx-5 max-w-xl sm:max-w-3xl md:max-w-5xl lg:max-w-7xl xl:max-w-full grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">   
          {filteredProduct?.length > 0 && (
            filteredProduct?.map((product: any) => (
              <div key ={product.id} 
                  className='mb-6 shadow-lg'>
                <div className="overflow-hidden group">
                  <Link href={`/product/detail/${product.id}`}>
                    <Image src={product.image}
                          className="object-cover h-60 sm:h-72 md:h-80 lg:h-96 w-full group-hover:scale-110 transition-all duration-700"  
                          alt={product.name}
                          quality={70}
                          width={209} 
                          height={240}
                    />
                  </Link>
                </div>   
                <div className="pb-10 pt-2 h-20 text-md tracking-tight text-bold text-center border border-[#f84d78] text-[#f84d78] hover:text-white hover:bg-[#f84d78] transition-all duration-700">
                  <span>{product.name}</span>
                </div>         
              </div>
            ))
          )}
        </motion.div>
      </>
    </Suspense>
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