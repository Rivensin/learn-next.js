import Image from "next/image"

export default function PostCardCategory({src,alt} : {src: string,alt: string}){
  return (
    <div className="w-full h-72 sm:h-80 lg:h-96 xl:h-[450px] max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg xl:max-w-xl aspect-[4/5] overflow-hidden rounded shadow-lg mx-auto relative group transition-all my-8">
      <Image src={src}
        alt={alt}
        className="w-full h-full object-cover duration-300 group-hover:scale-110 2xl:bg-white"
        width={500}
        height={500}
        unoptimized
        loading="lazy"
      />
      <div className="absolute inset-0 bg-black/30 hover:bg-black/10"></div>
      <div className="absolute left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2">
        <div className="font-roboto text-xl text-center text-white group-hover:opacity-0 duration-300">{alt}</div>
      </div>
    </div>
  )
}

