export default function Loading(){
  return (
    <>
      <div className="ml-4 mt-36 flex items-center">
        <span className='w-[50px] h-[3px] rounded block bg-slate-400'></span>
        <span className="ml-10 bg-slate-400 w-[117px] h-[28px]"></span>
      </div>

      <div className="ml-4 mt-6 mb-11 flex justify-center items-center flex-wrap">
        <div className={`p-4 mr-4 my-2 bg-slate-400`}></div>
        <div className={`p-4 mr-4 my-2 bg-slate-400`}></div>
        <div className={`p-4 mr-4 my-2 bg-slate-400`}></div>
        <div className={`p-4 mr-4 my-2 bg-slate-400`}></div>
        <div className={`p-4 mr-4 my-2 bg-slate-400`}></div>
      </div>
      
      <div className="ml-3 bg-slate-400 w-[235px] h-[34px]"></div>

      <div className="mt-10 gap-6 grid mx-5 max-w-xl sm:max-w-3xl md:max-w-5xl lg:max-w-7xl xl:max-w-full grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5"> 
        <div className='mb-6 bg-slate-400 w-[700px] h-[500px]'></div>
        <div className='mb-6 bg-slate-400 w-[700px] h-[500px]'></div>
        <div className='mb-6 bg-slate-400 w-[700px] h-[500px]'></div>
        <div className='mb-6 bg-slate-400 w-[700px] h-[500px]'></div>
        <div className='mb-6 bg-slate-400 w-[700px] h-[500px]'></div>
        <div className='mb-6 bg-slate-400 w-[700px] h-[500px]'></div>
      </div>
    </>
  )
}