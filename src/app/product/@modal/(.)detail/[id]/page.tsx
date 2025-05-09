import { getData } from "@/services/products"
import Modal from "@/components/core/Modal"

export default async function DetailProductPage(props : any){
  const {params} = props
  const product = await getData('http://localhost:3000/api/product?id=' + params.id)
  
  return (
    <Modal>
      <img src={product.data.image} 
            alt=""
            className="w-full object-cover aspect-square col-span-2 h-[592px]"></img>
      <div className="bg-white p-6 px-6">
        <h3>{product.data.name}</h3>
        <p>Price : ${product.data.price}</p>
      </div>
    </Modal>
      
  )
}