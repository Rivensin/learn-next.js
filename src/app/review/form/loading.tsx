export default function loading() {
  return (
    <div className="overflow-hidden ml-4 lg:ml-28">
      <div 
        className="mt-36 flex items-center">
        <span className='page-title-line-loading'></span>
        <span className="page-title-loading"></span>
      </div>

      <div className="mt-10">
        <div className="w-[207px] h-[36px] mb-10 mr-2 bg-slate-300 animate-pulse duration-700 ease-out"></div>
      </div>

      <div>
        <div className="h-[690px] w-full max-w-sm md:max-w-lg lg:max-w-xl xl:max-w-3xl 2xl:max-w-4xl mx-auto mb-2 p-4 border border-slate-100 rounded-lg bg-slate-300 animate-pulse duration-700 ease-out">
        </div>
      </div>
    </div>
  )
}
