import { getData } from "@/services/products"
import Image from "next/image"
import dynamic from "next/dynamic"

export default async function DetailProductPage(props: any){
  const {id} = props.params
  const product = await getData(`http://localhost:3000/api/product?id=${id}`)

  const Modal = dynamic(() => import("@/components/core/Modal"),{
    loading: () => <p>Loading...</p>
  })

  return (
    <Modal>
      <Image src={product.data.image}
             className="w-full object-cover aspect-square col-span-2 h-[600px]"
             alt="product"
             width={500}
             height={500}>
      </Image>
      <div className="bg-white mt-6">
        <h3>{product.data.name}</h3>
        <p>Price : ${product.data.price}</p>
      </div>
    </Modal>
      
  )
}