'use client'
import dynamic from "next/dynamic"
import { motion } from "framer-motion"
import { cardVariant, useScrollAnimation } from "@/components/fragments/motion"
import Image from "next/image"
import Link from "next/link"

const StoreMap = dynamic(() => import("@/components/fragments/StoreMap"), {
  ssr: false,
  loading: () => (
    <div className="[width:clamp(320px,80vw,590px)] sm:[width:clamp(530px,90vw,718px)] md:[width:clamp(691px,90vw,974px)] lg:w-[95%] lg:min-w-[850px] lg:max-w-[1100px] xl:w-[95%] xl:min-w-[1100px] xl:max-w-[1500px] h-[400px] xl:h-[450px] 2xl:h-[550px] shadow-lg overflow-hidden ml-4 lg:ml-24 bg-slate-300 animate-pulse"></div>
  )
})

export default function Outlet() {
  const outletTitle = useScrollAnimation('-100px',true)
  const outletMap = useScrollAnimation('-100px',true)
  const location = useScrollAnimation('-100px',true)
  
  return (  
    <div className="overflow-hidden lg:ml-28">
      <motion.div
        ref={outletTitle.ref}
        variants={cardVariant}
        initial='hiddenRight'
        animate={outletTitle.isInView ? 'visibleX' : ''} 
        className="ml-4 mt-36 flex items-center">
        <span className='page-title-line'></span>
        <span className="page-title">Our Outlet</span>
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
        className="mt-10 ml-8 sm:ml-4 mb-16">
        <StoreMap />
      </motion.div>

      <motion.div
        ref={location.ref}
        variants={cardVariant}
        initial='hiddenBot'
        animate={location.isInView ? 'visibleY' : ''}
        className="border-2 border-pinkBg lg:p-2 ml-8 sm:ml-6 lg:flex justify-center items-center [width:clamp(320px,80vw,590px)] sm:[width:clamp(530px,90vw,718px)] md:[width:clamp(691px,90vw,974px)] lg:w-[95%] lg:min-w-[850px] lg:w-max-[1100px] xl:w-[95%] xl:min-w-[1100px] xl:max-w-[1500px] shadow-lg overflow-hidden">
          <motion.div 
          ref={location.ref}
          variants={cardVariant}
          initial='hiddenBot'
          animate={location.isInView ? 'visibleY' : ''}
          className="lg:mr-4 lg:w-1/2">
            <Image
              src='/cover/cover.jpg'
              alt='cover'
              className="w-full h-[265px] object-cover"
              unoptimized
              width={397}
              height={265}
            />  
          </motion.div>
          <motion.div
            ref={location.ref}
            variants={cardVariant}
            initial='hiddenBot'
            animate={location.isInView ? 'visibleY' : ''} 
            className="mt-4 ml-2 lg:w-1/2 xl:p-8">
            <div className="mb-3 font-semibold">Pekanbaru</div>
            <div className="mb-3">Jl Lily 2 No 49N</div>
            <div className="mb-3">08:00 - 20:00</div>
            <div className="mb-3">Contact : 0813-7495-6263</div>
            <div className="mb-3">Takeaway ⋅ Delivery</div>
            <div className="-ml-2 lg:w-32 hover:opacity-80 duration-500 transition-all">
              <Link href="https://www.google.com/maps/dir//D'looti,+No+49N,+Jl.+Lili+II,+Kedungsari,+Sukajadi,+Pekanbaru+City,+Riau+28123/@0.5264204,101.4288326,18z/data=!4m8!4m7!1m0!1m5!1m1!1s0x31d5ab9b94295e2d:0x7167949350a3fad2!2m2!1d101.4287786!2d0.5265375? entry=ttu&g_ep=EgoyMDI1MDYxMS4wIKXMDSoASAFQAw%3D%3D"
              target='_blank'>
              <div className=' bg-purple-500 font-semibold py-1 mt-6 text-white text-center'>
                &#x2934; Direction
              </div>
              </Link>
            </div>
          </motion.div>
      </motion.div>
      
    </div>
  )
}
