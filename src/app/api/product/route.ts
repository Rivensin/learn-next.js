import { retriveData, retriveDataByCategory, retriveDataById } from "@/lib/firebase/services";
import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest){
  
  const id = request.nextUrl.searchParams.get('id')
  const category = request.nextUrl.searchParams.get('category')
  
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

  if(category){
    const categoryProduct = await retriveDataByCategory('products',category)
    if(categoryProduct){
      return NextResponse.json({
        status: 200, 
        message:'success',
        data: categoryProduct
      })
    } else {
      return NextResponse.json({
        status: 200, 
        message:'data not found',
        data: {}
      })
    }
  }
  
  const product = await retriveData('products')
  
  return NextResponse.json(
    {
      status: 200, 
      message:'success',
      data: product
    }
  )

    
    
}