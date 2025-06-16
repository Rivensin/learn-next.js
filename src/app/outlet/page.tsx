import StoreMap from "@/components/fragments/StoreMap"

function Outlet() {
  return (
    <>
      <div className="ml-4 mt-36 flex items-center">
        <span className='w-[50px] h-[3px] rounded block bg-[#5E50D2]/70'></span>
        <span className="ml-10 text-[#5E50D2] text-lg">Our Outlet</span>
      </div>
      
      <div className="text-3xl ml-4 mt-10">
        Our Location
      </div>
      
      <div className="mt-10 ml-4">
        <StoreMap />  
      </div>
      
    </>
  )
}

export default Outlet