import Image from "next/image"

export default function PostCardCategory({src,alt} : {src: string,alt: string}){
  return (
    <div className="h-72 max-w-sm mt-8 mx-auto relative overflow-hidden group transition-all rounded">
      <Image src={src}
        alt={alt}
        className="h-full object-cover duration-300 group-hover:scale-110"
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

