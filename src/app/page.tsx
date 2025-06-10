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
        <span className="ml-10 text-[#5E50D2]">Our Products</span>
      </div>

      <p className="ml-4 mt-10 text-3xl">Indulge yourself with our premium bread and pastries.</p>
      
      <Link href='/product'><PostCardCategory src='/product/Burnt Cheese Cake/Burnt Cheese Cake Brownie.jpeg' alt='BURNT CHEESE CAKE'/></Link>
      <PostCardCategory src='/product/Custom Cake/Money Cake.jpeg' alt='CUSTOM CAKE'/>
      <PostCardCategory src='/product/Fudgy Brownie/Fudgy Brown Mix 6 Toppings.jpeg' alt='FUDGY BROWNIE'/>
      <PostCardCategory src='/product/Soft Cookies/Custom Giant Cookie.jpeg' alt='SOFT COOKIES'/>
      <PostCardCategory src='/product/Tiramisu Cake/Tiramisu Cake.jpeg' alt='TIRAMISU CAKE'/>
      
      

    </div>
  );
}
