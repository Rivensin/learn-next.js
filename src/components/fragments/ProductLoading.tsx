export default function ProductLoading(){
  return (
    <>
      <div className="ml-4 mt-36 flex items-center">
        <span className='w-[50px] h-[3px] rounded block bg-slate-300 animate-pulse duration-1000 ease-in'></span>
        <span className="ml-10 bg-slate-300 w-[117px] h-[28px] animate-pulse duration-1000 ease-in"></span>
      </div>

      <div className="ml-4 mt-6 mb-11 flex justify-center items-center flex-wrap">
        <div className={`w-[190px] h-[58px] mr-4 my-2 bg-slate-300 animate-pulse duration-1000 ease-in`}></div>
        <div className={`w-[145px] h-[58px] p-4 mr-4 my-2 bg-slate-300 animate-pulse duration-1000 ease-in`}></div>
        <div className={`w-[163px] h-[58px] p-4 mr-4 my-2 bg-slate-300 animate-pulse duration-1000 ease-in`}></div>
        <div className={`w-[135px] h-[58px] p-4 mr-4 my-2 bg-slate-300 animate-pulse duration-1000 ease-in`}></div>
        <div className={`w-[152px] h-[58px] p-4 mr-4 my-2 bg-slate-300 animate-pulse duration-1000 ease-in`}></div>
      </div>
      
      <div className="ml-3 bg-slate-300 w-[232px] h-[34px] animate-pulse duration-1000 ease-in"></div>

      <div className="mt-10 mx-5 grid gap-6 grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 max-w-xl sm:max-w-3xl md:max-w-5xl lg:max-w-7xl xl:max-w-full "> 
        {Array.from({ length: 6 }).map((_, index) => (
          <div key={index} className="h-[320px] sm:h-[368px] md:h-[400px] lg:h-[464px] xl:h-[464px] 2xl:h-[464px] bg-slate-300 animate-pulse"/>
        ))}
      </div>
    </>
  )
}