import { retriveData, retriveDataById } from "@/lib/firebase/services";
import { NextRequest, NextResponse } from "next/server";

const data = [
  {
    id: 1,
    title: 'Nike Court Vision Lows',
    price: 1069000,
    image: 'https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/eaf524f7-a9f7-4f70-a438-1b0480eb2540/NIKE+COURT+VISION+LO.png'
  },
  {
    id: 2,
    title: 'Nike Air Force 1 07',
    price: 1549000,
    image: 'https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/b7d9211c-26e7-431a-ac24-b0540fb3c00f/AIR+FORCE+1+%2707.png'
  },
  {
    id: 3,
    title: 'Nike Air Max Dn8 - White',
    price: 3049000,
    image: 'https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/70a51c55-ae56-49eb-a074-c530971540ea/AIR+MAX+DN8.png'
  }
]

export async function GET(request: NextRequest){
  
  // const {searchParams} = new URL(request.url)
  // const id = searchParams.get('id')

  const id = request.nextUrl.searchParams.get('id')

  if(id){
    const detailProduct = await retriveDataById('products',id)
    if(detailProduct){
      return NextResponse.json(
        {
          status: 200, 
          message:'success',
          data: detailProduct
        }
      )
    } else {
      return NextResponse.json(
        {
          status: 404, 
          message:'data not found',
          data: {}
        }
      )
    }
  }
  
  const product = await retriveData('products')

  return NextResponse.json(
    {
      status: 200, 
      message:'sucess',
      data: product
    }
  )

    
    
}