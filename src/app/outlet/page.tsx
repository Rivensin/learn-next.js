'use client'
import dynamic from "next/dynamic"

const StoreMap = dynamic(() => import("@/components/fragments/StoreMap"), {
  loading: () => (
    <div className="w-[400px] h-[400px] xl:h-[450px] sm:w-[550px] md:w-[670px] lg:w-[900px] xl:w-[1100px] 2xl:w-[1400px] shadow-lg overflow-hidden mx-auto lg:ml-24 lg:mx-0 bg-slate-400 animate-pulse duration-1000 ease-in"></div>
  )
})


function Outlet() {
  return (
    <>
      <div className="ml-4 lg:ml-28 mt-36 flex items-center">
        <span className='w-[50px] h-[3px] rounded block bg-[#5E50D2]/70'></span>
        <span className="ml-10 text-[#5E50D2] text-lg">Our Outlet</span>
      </div>
      
      <div className="text-3xl ml-4 lg:ml-28 mt-10">
        Our Location.
      </div>
      
      <div className="mt-10 ml-4 mb-16">
        <StoreMap />
      </div>
      
    </>
  )
}

export default Outlet