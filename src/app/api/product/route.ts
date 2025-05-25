import { retriveData, retriveDataById } from "@/lib/firebase/services";
import { NextRequest, NextResponse } from "next/server";

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