'use client'
import { motion } from "framer-motion"
import { cardVariant, useScrollAnimation } from "@/components/fragments/motion"
import useSWR from "swr"
import Image from "next/image"
import { signIn, useSession, signOut } from "next-auth/react"

export default function Review(){
  
  const fetcher = (url: string) => fetch(url).then(res => res.json())
  const {data: session, status} : {data: any, status: string} = useSession()
  console.log(status)
  
  const reviewTitle = useScrollAnimation('-100px',true) 
  const reviewList = useScrollAnimation('-100px',true)  
  const loginButton = useScrollAnimation('-100px',true)    

  const {data, error, isLoading} = useSWR(`${process.env.NEXT_PUBLIC_API_URL}/api/review`,fetcher)

  const review = {
    data : data?.data
  }

  return (
    <div className="overflow-hidden ml-4 lg:ml-28">
      <title>Review | Dlooti</title>
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
            <div className="mt-1 w-7 h-5 bg-purpleBg text-white rounded-full text-sm text-center hover:opacity-80 hover:text-red-500 duration-700 transition-all">
              {review.data?.length}
            </div>
            : ''}
      </motion.div>

      <motion.div
        ref={reviewList.ref}
        variants={cardVariant}
        initial='hiddenBot'
        animate={reviewList.isInView ? 'visibleY' : ''} 
        className="mt-10 gap-4 grid max-w-xl sm:max-w-3xl md:max-w-5xl lg:max-w-7xl xl:max-w-full grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 pb-2 pr-2">
        
      {review?.data 
        ?   
          review.data?.map((review: any) => (
          <div key={review.id} className="bg-white rounded-lg border-2 border-slate-100 shadow-md px-2 py-4 hover:-translate-y-2 hover:duration-700 hover:ease-out hover:border-pinkBg transition-all">
            <div className="flex justify-start">
              <div>
                <Image
                  src='/profile/profile.png'
                  alt='profile'
                  className="object-contain"
                  width={50}
                  height={70}>

                </Image>
              </div>
              <div className="ml-4">
                <div>{review.name}</div>
                <div>{review.tanggal}</div>
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
          Array.from({length : review.data?.length}).map((_,index) => (
            <div key={index} className="w-[196px] h-[160px] bg-slate-300 rounded-lg shadow-md px-2 py-4 animate-pulse duration-700 ease-out transition-all">
            </div>
          ))
      } 
      </motion.div>
      

      {!review && (
        <motion.div
        ref={reviewList.ref}
        variants={cardVariant}
        initial='hiddenBot'
        animate={reviewList.isInView ? 'visibleY' : ''} 
        className="mt-10 gap-4 grid max-w-xl sm:max-w-3xl md:max-w-5xl lg:max-w-7xl xl:max-w-full grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 pb-2 pr-2">
        
        </motion.div>
      )}
      
      {status && (
        <motion.div 
        ref={loginButton.ref}
        variants={cardVariant}
        initial='hiddenRight'
        animate={loginButton.isInView ? 'visibleX' : ''} 
        className="mt-6 mb-20 bg-black text-white w-36 h-12 hover:shadow-2xl hover:bg-black/80 duration-300 ease-out transition-all rounded cursor-pointer">
          
        {status === 'unauthenticated' || status === 'loading' ? 
          (
            <button
              onClick={() => signIn()} 
              className="ml-2 mt-3 text-md text-center">
                Login to Review
            </button>
          ) : 
          (
            <button
              onClick={() => signOut()} 
              className="ml-2 mt-3 text-md text-center">
                Logout
            </button>
          )
        }
        </motion.div>
      )}
    </div>
  )
}