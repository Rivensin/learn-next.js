import { getData } from "@/services/products"
import Link from "next/link"
import Image from "next/image"
import { retriveData } from "@/lib/firebase/services"

type ProductPage= { 
  params : {
    slug:string[]
  }
}

  async function ProductPage(props : ProductPage) {
  const {params} = props

  const products= await retriveData('products')

  return (
    <div className="grid grid-cols-4 mt-5 my-5 place-items-center">
      {/* <h1>{params.slug ? 'detail product page' : 'product page'}</h1> */}
      {products.length > 0 && (
        products.map((product: any) => (
        <Link href={`product/detail/${product.id}`}
              key ={product.id} 
              className="w-11/12 max-w-sm bg-white border border-gray-200 rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700">
          <Image className="p-8 rounded-t-lg object-cover h-96 w-full" src={product.image} alt="product image" width={500} height={500} loading='lazy'/>
          <div className="px-5 pb-5">
            <h5 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white truncate">{product.name}</h5>
            <div className="flex items-center justify-between mt-3">
              <span className="text-3xl font-bold text-gray-900 dark:text-white">${product.price}</span>
              <button type="submit" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Add to cart</button>
            </div>
          </div>
        </Link>
        ))
      ) }

      {/* {params.slug && ( 
        <div>
          Tipe : {params.slug[0]} |
          Gender : {params.slug[1]} | 
          Merk : {params.slug[2]}
        </div>     
      )} */}
    </div>
  ) 
}

export default ProductPage