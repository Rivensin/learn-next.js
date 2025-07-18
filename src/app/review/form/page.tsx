'use client'
import { motion } from "framer-motion"
import { cardVariant, useScrollAnimation } from "@/components/fragments/motion"


export function page() {

  const reviewTitle = useScrollAnimation('-100px',true) 
  
  return (
    <div className="overflow-hidden ml-4 lg:ml-28">
      <title>Review Form | Dlooti</title>
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
            Reviews Form 
          </div>
      </motion.div>
    </div>
  )
}

export default page