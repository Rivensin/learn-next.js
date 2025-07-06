'use client'
import Image from "next/image";
import PostCardCategory from "@/components/fragments/PostCardCategory";
import Link from "next/link";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { cardVariant, useScrollAnimation } from "@/components/fragments/motion";

export default function Home() {
  const bccView = useScrollAnimation();
  const ccView = useScrollAnimation();
  const fbView = useScrollAnimation();
  const scView = useScrollAnimation();
  const tcView = useScrollAnimation(); 

  const ref= useRef(null)
  const isInView = useInView(ref,{margin:'-100px', once:true})
  
  return (
    <div className="overflow-hidden">
      <motion.div
        ref={ref}
        variants={cardVariant}
        initial='hiddenTop'
        animate={isInView ? 'visibleY' : ''
        }
        className="relative">
        <Image 
          src='/product/cover.jpeg'
          className="h-96 w-full md:h-[400px] lg:h-[560px] object-cover brightness-90"
          alt='cover'
          priority
          quality={60}
          width={4160}
          height={2340}>
        </Image>
      </motion.div>

      <motion.div
        ref={ref}
        variants={cardVariant}
        initial='hiddenRight'
        animate={isInView ? 'visibleX' : ''}
        className="ml-4 mt-10 flex items-center">
        <span className='w-[50px] h-[3px] rounded my-2 block bg-[#5E50D2]/70'></span>
        <span className="ml-10 text-[#5E50D2] text-lg font-semibold">Our Products</span>
      </motion.div>

      <motion.p 
        ref={ref}
        variants={cardVariant}
        initial='hiddenBot'
        animate={isInView ? 'visibleY' : ''}
        className="ml-4 mt-10 text-3xl">
        Indulge yourself with our premium bread and pastries.
      </motion.p>
      
      <motion.div
        ref={bccView.ref}
        variants={cardVariant}
        initial='hiddenRight'
        animate={bccView.isInView ? 'visibleX' : ''}>   
        <Link href={`/product/burnt-cheese-cake`}>
          <PostCardCategory src='/product/burnt-cheese-cake/burnt-cheese-cake-with-topping.jpeg' 
                            alt='BURNT CHEESE CAKE'/>
        </Link>
      </motion.div>

      <motion.div
        ref={ccView.ref}
        variants={cardVariant}
        initial='hiddenLeft'
        animate={ccView.isInView ? 'visibleX' : ''}>
      <Link href={`/product/custom-cake`}>
        <PostCardCategory src='/product/custom-cake/money-cake.jpeg' 
                          alt='CUSTOM CAKE'/>
      </Link>
      </motion.div>

      <motion.div
        ref={fbView.ref}
        variants={cardVariant}
        initial='hiddenRight'
        animate={fbView.isInView ? 'visibleX' : ''}>
      <Link href={`/product/fudgy-brownie`}>
        <PostCardCategory src='/product/fudgy-brownie/bromix-6.jpeg' 
                          alt='FUDGY BROWNIE'/>
      </Link>
      </motion.div>
      
      <motion.div
        ref={scView.ref}
        variants={cardVariant}
        initial='hiddenLeft'
        animate={scView.isInView ? 'visibleX' : ''}>
      <Link href={`/product/soft-cookies`}>
        <PostCardCategory src='/product/soft-cookies/giant-cookie-character.jpeg' 
                          alt='SOFT COOKIES'/>
      </Link>
      </motion.div>

      <motion.div
        ref={tcView.ref}
        variants={cardVariant}
        initial='hiddenRight'
        animate={tcView.isInView ? 'visibleX' : ''}>
      <Link href={`/product/tiramisu-cake`}>
        <PostCardCategory src='/product/tiramisu-cake/tiramisu-cake.jpeg' 
                          alt='TIRAMISU CAKE'/>
      </Link>
      </motion.div>
    
    </div>
  );
}
