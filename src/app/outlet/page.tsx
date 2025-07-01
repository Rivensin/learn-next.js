'use client'
import dynamic from "next/dynamic"

const StoreMap = dynamic(() => import("@/components/fragments/StoreMap"), {
  ssr: false,
  loading: () => (
    <div className="w-full max-w-xs h-[400px] xl:h-[450px] 2xl:h-[550px] sm:max-w-2xl md:max-w-4xl lg:max-w-5xl xl:max-w-7xl shadow-lg overflow-hidden ml-4 lg:ml-24 bg-slate-300 animate-pulse"></div>
  )
})


function Outlet() {
  return (
    <>
      <title>Outlet | Dlooti</title>
      <div className="ml-4 lg:ml-28 mt-36 flex items-center">
        <span className='w-[50px] h-[3px] rounded block bg-[#5E50D2]/70'></span>
        <span className="ml-10 text-[#5E50D2] text-lg font-semibold">Our Outlet</span>
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