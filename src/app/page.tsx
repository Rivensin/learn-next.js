import Image from "next/image";
import PostCardCategory from "@/components/fragments/PostCardCategory";
import Link from "next/link";

export default function Home() {
  return (
    <div>
      <div className="relative">
        <Image 
          src='/product/cover.jpeg'
          className="h-96 w-full md:h-[400px] lg:h-[560px] object-cover brightness-90"
          alt='cover'
          loading='lazy'
          quality={80}
          width={4160}
          height={2340}>
        </Image>
      </div>

      <div className="ml-4 mt-10 flex items-center">
        <span className='w-[50px] h-[3px] rounded my-2 block bg-[#5E50D2]/70'></span>
        <span className="ml-10 text-[#5E50D2] text-lg">Our Products</span>
      </div>

      <p className="ml-4 mt-10 text-3xl">Indulge yourself with our premium bread and pastries.</p>
      
      <Link href={`/product/burnt-cheese-cake`}>
        <PostCardCategory src='/product/burnt-cheese-cake/burnt-cheese-cake-with-topping.jpeg' 
                          alt='BURNT CHEESE CAKE'/>
      </Link>

      <Link href={`/product/custom-cake`}>
        <PostCardCategory src='/product/custom-cake/money-cake.jpeg' 
                          alt='CUSTOM CAKE'/>
      </Link>

      <Link href={`/product/fudgy-brownie`}>
        <PostCardCategory src='/product/fudgy-brownie/bromix-6.jpeg' 
                          alt='FUDGY BROWNIE'/>
      </Link>
      
      <Link href={`/product/soft-cookies`}>
        <PostCardCategory src='/product/soft-cookies/giant-cookie-character.jpeg' 
                          alt='SOFT COOKIES'/>
      </Link>

      <Link href={`/product/tiramisu-cake`}>
        <PostCardCategory src='/product/tiramisu-cake/tiramisu-cake.jpeg' 
                          alt='TIRAMISU CAKE'/>
      </Link>
    
    </div>
  );
}
