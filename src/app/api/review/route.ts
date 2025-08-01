import { retriveData } from "@/lib/firebase/services";
import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest){
  const review = await retriveData('review')

  return NextResponse.json(
      {
        status: 200, 
        message:'success',
        data: review
      }
    )
}