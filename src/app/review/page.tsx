'use client'
import { easeOut, motion } from "framer-motion"
import { cardVariant, useScrollAnimation } from "@/components/fragments/motion"
import useSWR from "swr"
import Image from "next/image"
import { signIn, useSession, signOut } from "next-auth/react"
import Button from "@/components/fragments/Button"
import {useEffect, useMemo, useState } from "react"
import Link from "next/link"

export default function Review(){
  const reviewTitle = useScrollAnimation('-100px',true) 
  const reviewList = useScrollAnimation('-100px',true)  

  const fetcher = (url: string) => fetch(url).then(res => res.json())
  const {data, error, isLoading} = useSWR(`${process.env.NEXT_PUBLIC_API_URL}/api/review`,fetcher)
  const {data: session, status} : {data: any, status: string} = useSession()

  const review = {
    data : data?.data
  }
  
  const hasReview = useMemo(() => {
    if(!review?.data || !session?.user?.name) return null
    return review.data.filter((data: any) => data.name.includes(session.user.name)
  )},[session?.user.name,review.data])
  
  return (
    <div className="overflow-hidden px-4 lg:ml-28">
      <motion.div
        ref={reviewTitle.ref}
        variants={cardVariant}
        initial='hiddenRight'
        animate={reviewTitle.isInView ? 'visibleX' : ''} 
        className="mt-36 flex items-center">
        <span className='page-title-line'></span>
        <span className="page-title">Review</span>
      </motion.div>

      <motion.div
        ref={reviewTitle.ref}
        variants={cardVariant}
        initial='hiddenRight'
        animate={reviewTitle.isInView ? 'visibleX' : ''} 
        className="mt-10 flex items-center">
          <div className="text-3xl mr-2">
            All Reviews 
          </div>
          {review.data?.length ? 
            <div className="mt-1 w-7 h-5 bg-purpleBg text-white rounded-full text-sm text-center hover:opacity-80 hover:text-red-500 ">
              {review.data?.length}
            </div>
            : ''}
      </motion.div>

      <motion.div
        ref={reviewList.ref}
        variants={cardVariant}
        initial='hiddenBot'
        animate={reviewList.isInView ? 'visibleY' : ''} 
        className="mt-10 gap-4 grid max-w-xl sm:max-w-3xl md:max-w-5xl lg:max-w-7xl xl:max-w-full grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 pb-2 pr-2">
        
      {!isLoading 
        ?   
          review.data?.map((review: any) => (
          <div key={review.id} className="bg-white rounded-lg border-2 border-gray-300 shadow-lg px-2 py-4 hover:duration-700 hover:ease-in-out hover:border-pinkBg hover:-translate-y-2 transition-all mb-1">
            <div className="flex justify-start">
              <div>
                <Image
                  src={review.image}
                  alt='profile'
                  className="object-contain rounded-full"
                  width={50}
                  height={70}>

                </Image>
              </div>
              <div className="ml-4">
                <div>{review.name}</div>
                <div>
                  {new Date(review.tanggal).toLocaleDateString('en-GB')}
                </div>
              </div>
            </div>
            <div>
              <Image
                className="w-28 h-10 object-contain"
                src={`/icons/${review.rating}.png`}
                alt={review.rating}
                width={192}
                height={38}>
              </Image>
            </div>
            <div className="text-[#949494] italic mt-2">"{review.desc}"</div>
          </div>
          ))
        : 
          Array.from({length : review.data?.length || 2}).map((_,index) => (
            <div key={index} className="px-4 min-w-[400px] max-w-[568px] h-[230px] sm:min-w-[583px] sm:max-w-[710px] sm:h-[206px] md:min-w-[711px] md:max-w-[966px] md:h-[182px] lg:min-w-[419px] lg:max-w-[546px] lg:h-[254px] xl:min-w-[359px] xl:max-w-[444px] xl:h-[230px] 2xl:min-w-[445px] 2xl:max-w-[569px] 2xl:h-[230px] bg-slate-300 rounded-lg shadow-md animate-pulse duration-700 ease-out transition-all">
            </div>
          ))
      } 
      </motion.div>
     
     {status  === 'authenticated' && hasReview !== null && hasReview.length === 0 &&
      (
        <Link href='review/form'>
          <motion.div 
            initial={{ x:50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ ease: easeOut, duration: 0.8 }}
            >
            <div className="w-36 h-12 mt-10 text-md text-center text-white rounded flex hover:shadow-2xl hover:bg-purpleLn/80 bg-purpleLn justify-center items-center cursor-pointer duration-700 ease-out transition-all">
              Make a review
            </div> 
          </motion.div>
        </Link>  
      )
     }

     {status  === 'authenticated' && hasReview !== null && hasReview.length > 0 &&
      (
        <motion.div
          initial={{ x:50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ ease: easeOut, duration: 0.8 }}>
          <div className="w-36 h-12 mt-10 text-md text-center text-white rounded flex hover:shadow-2xl hover:bg-slate-500/60 bg-slate-500/80 justify-center items-center cursor-default duration-700 ease-out transition-all">
            Already review!
          </div> 
        </motion.div>
      )
     }
       

      <motion.div 
        initial={{ x:50, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ ease: easeOut, duration: 0.8 }}
        className="mt-2 mb-3">
        {status !== 'loading' && (
          status === 'authenticated' 
          ? 
            (
              <Button
                className="mb-20 bg-black hover:bg-black/80" 
                onClick={() => signOut()}>
                Logout
              </Button>
            )
           : 
            (
              <Button 
                className="mb-20 bg-black hover:bg-black/80"
                onClick={() => signIn()}>
                Login to Review
              </Button>
            )
        )
        }
        </motion.div>
    </div>
  )
}