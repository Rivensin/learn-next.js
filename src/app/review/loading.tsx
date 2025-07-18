import React from 'react'

function loading() {
  return (
    <div className="overflow-hidden ml-4 lg:ml-28">
      <div className="mt-36 flex items-center">
        <span className='page-title-line-loading'></span>
        <span className="page-title-loading"></span>
      </div>

      <div className="mt-10 flex items-center">
          <div className="w-[167px] h-[36px] mr-2 bg-slate-300 animate-pulse duration-700 ease-out transition-all">
          </div>
          <div className="mt-1 w-7 h-5 rounded-full bg-slate-300 animate-pulse ease-out duration-700 transition-all">
          </div>
      </div>

      <div className="mt-10 gap-4 grid max-w-xl sm:max-w-3xl md:max-w-5xl lg:max-w-7xl xl:max-w-full grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 pb-2 pr-2">
        {Array.from({length : 2}).map((_,index) => (
          <div key={index} className="w-[177px] h-[124px] bg-slate-300 rounded-lg duration-700 animate-pulse transition-all"></div>
        ))}
        
      </div>
      <div className="mt-6 w-36 h-12 rounded bg-slate-300 animate-pulse ease-out duration-500 transition-all "></div>
    </div>
  )
}

export default loading