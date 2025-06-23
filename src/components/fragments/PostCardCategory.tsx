import Image from "next/image"

export default function PostCardCategory({src,alt} : {src: string,alt: string}){
  return (
    <div className="w-full h-72 sm:h-80 lg:h-96 xl:h-[450px] max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg xl:max-w-xl aspect-[4/5] overflow-hidden rounded shadow-lg mx-auto relative group transition-all my-8">
    {/* <div className="h-72 sm:h-80 lg:h-96 xl:h-[450px] max-w-lg sm:max-w-2xl md:max-w-4xl lg:max-w-6xl xl:max-w-7xl my-8 mx-14 xl:mx-auto relative overflow-hidden group transition-all rounded"></div> */}
      <Image src={src}
        alt={alt}
        className="w-full h-full object-cover duration-300 group-hover:scale-110"
        width={500}
        height={500}
        loading='lazy'
      />
      <div className="absolute inset-0 bg-black/30 hover:bg-black/10"></div>
      <div className="absolute left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2">
        <div className="font-roboto text-xl text-center text-white group-hover:opacity-0 duration-300">{alt}</div>
      </div>
    </div>
  )
}

