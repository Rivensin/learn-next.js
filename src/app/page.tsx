import Image from "next/image";
import PostCardCategory from "@/components/fragments/PostCardCategory";
import Link from "next/link";

export default function Home() {
  return (
    <div>
      <Image 
        src='/product/cover.jpeg'
        className="h-96 w-full object-cover brightness-90"
        alt='cover'
        loading='lazy'
        width={500}
        height={500}>
      </Image>

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
        <PostCardCategory src='/product/Custom Cake/Money Cake.jpeg' 
                          alt='CUSTOM CAKE'/>
      </Link>

      <Link href={`/product/fudgy-brownie`}>
        <PostCardCategory src='/product/Fudgy Brownie/Bromix 6.jpeg' 
                          alt='FUDGY BROWNIE'/>
      </Link>
      
      <Link href={`/product/soft-cookies`}>
        <PostCardCategory src='/product/Soft Cookies/Half Cake.jpeg' 
                          alt='SOFT COOKIES'/>
      </Link>

      <Link href={`/product/tiramisu-cake`}>
        <PostCardCategory src='/product/Tiramisu Cake/Tiramisu Cake.jpeg' 
                          alt='TIRAMISU CAKE'/>
      </Link>
    
    </div>
  );
}
