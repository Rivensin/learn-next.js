'use client'
import dynamic from "next/dynamic"
import { motion } from "framer-motion"
import { cardVariant, useScrollAnimation } from "@/components/fragments/motion"
import Image from "next/image"

const StoreMap = dynamic(() => import("@/components/fragments/StoreMap"), {
  ssr: false,
  loading: () => (
    <div className="[width:clamp(320px,80vw,590px)] sm:[width:clamp(576px,80vw,718px)] md:[width:clamp(691px,80vw,974px)] lg:w-[95%] lg:min-w-[850px] lg:w-max-[1100px] xl:w-[95%] xl:min-w-[1100px] xl:max-w-[1500px] h-[400px] xl:h-[450px] 2xl:h-[550px] shadow-lg overflow-hidden ml-4 lg:ml-24 bg-slate-300 animate-pulse"></div>
  )
})

function Outlet() {

  const outletTitle = useScrollAnimation('-100px',false)
  const outletMap = useScrollAnimation('-100px',false)
  const location = useScrollAnimation('-100px',false)

  return (  
    <div className="overflow-hidden lg:ml-28">
      <title>Outlet | Dlooti</title>
      <motion.div
        ref={outletTitle.ref}
        variants={cardVariant}
        initial='hiddenRight'
        animate={outletTitle.isInView ? 'visibleX' : ''} 
        className="ml-4 mt-36 flex items-center">
        <span className='w-[50px] h-[3px] rounded block bg-[#5E50D2]/70'></span>
        <span className="ml-10 text-[#5E50D2] text-lg font-semibold">Our Outlet</span>
      </motion.div>
      
      <motion.div
        ref={outletTitle.ref}
        variants={cardVariant}
        initial='hiddenRight'
        animate={outletTitle.isInView ? 'visibleX' : ''} 
        className="text-3xl ml-4 mt-10">
        Our Location.
      </motion.div>
      
      <motion.div
        ref={outletMap.ref}
        variants={cardVariant}
        initial='hiddenBot'
        animate={outletMap.isInView ? 'visibleY' : ''} 
        className="mt-10 ml-4 mb-16 transition-all duration-700">
        <StoreMap />
      </motion.div>

      <motion.div
        ref={location.ref}
        variants={cardVariant}
        initial='hiddenBot'
        animate={location.isInView ? 'visibleY' : ''}  
        className="ml-4 lg:flex justify-center items-center border-2 border-[#f84d78] lg:p-2 [width:clamp(320px,80vw,590px)] sm:[width:clamp(576px,80vw,718px)] md:[width:clamp(691px,80vw,850px)] lg:w-[95%] lg:min-w-[850px] lg:max-w-[1100px] xl:w-[95%] xl:min-w-[1100px] xl:max-w-[1500px] shadow-lg overflow-hidden duration-700 transition-all">
        <div className="lg:mr-4 lg:w-1/2">
        <Image
          src='/cover/cover.jpg'
          alt='cover'
          className="w-full h-[265px] object-cover"
          unoptimized
          width={397}
          height={265}
          />  
        </div>
        <div className="mt-4 ml-2 lg:w-1/2">
          <div className="mb-3 font-semibold">Pekanbaru</div>
          <div className="mb-3">Jl Lily 2 No 49N</div>
          <div className="mb-3">08:00 - 20:00</div>
          <div className="mb-3">Contact : 0813-7495-6263</div>
          <div className="mb-3">Takeaway ⋅ Delivery</div>
        </div>
      </motion.div>
      
    </div>
  )
}

export default Outlet