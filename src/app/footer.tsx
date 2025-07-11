'use client'
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { cardVariant, useScrollAnimation } from '@/components/fragments/motion'

export default function Footer() {
  const pinkBg = useScrollAnimation('-80px',false)
  const pinkBgContent = useScrollAnimation('-100px',false)
  const pinkBgContent2 = useScrollAnimation('-80px',false)
  const purpleBg = useScrollAnimation('-60px',false)
  const purpleBgContent = useScrollAnimation('-100px',false)
  const purpleBgContent2 = useScrollAnimation('-100px',false)

  return (
    <div className="overflow-hidden">
      <motion.div
        ref={pinkBg.ref}
        variants={cardVariant} 
        initial='hiddenBot'
        animate={pinkBg.isInView ? 'visibleY' : ''}
        className="flex flex-col items-center bg-pinkBg/70 p-10 mt-10 text-center font-bold ">
          <motion.span
            ref={pinkBgContent.ref} 
            variants={cardVariant}
            initial='hiddenBot'
            animate={pinkBgContent.isInView ? 'visibleY' : ''} 
            className="text-white text-lg">
            Order Dlooti by Instagram DM or WhatsApp!
          </motion.span>

        <Link href='https://wa.me/+6281374956263' target="_blank">
          <motion.div
            ref={pinkBgContent2.ref}
            variants={cardVariant} 
            initial='hiddenRight'
            animate={pinkBgContent2.isInView ? 'visibleX' : ''}
            className="footer-icon">
            <Image 
                src='/icons/whatsapp.png' 
                alt='instagram'
                className='w-8 h-8'
                width={500}
                height={500}
          />
            <span className="ml-2 text-sm">Order by WhatsApp!</span>
          </motion.div>
        </Link>

        <Link href='https://instagram.com/dlooti_' target="_blank">
          <motion.div 
            ref={pinkBgContent2.ref}
            variants={cardVariant} 
            initial='hiddenLeft'
            animate={pinkBgContent2.isInView ? 'visibleX' : ''}
            className="footer-icon">
            <Image 
                src='/icons/instagram.png' 
                alt='instagram'
                className='w-8 h-8'
                width={500}
                height={500}
            />
            <span className="ml-2 text-sm">Order by Instagram!</span>
          </motion.div>
        </Link>
      </motion.div>

      <motion.div
        ref={purpleBg.ref}
        variants={cardVariant} 
        initial='hiddenBot'
        animate={purpleBg.isInView ? 'visibleY' : ''} 
        className="bg-purpleBg pb-10 lg:flex lg:items-center lg:justify-evenly">
        <motion.div
          ref={purpleBgContent.ref}
          variants={cardVariant} 
          initial='hiddenBot'
          animate={purpleBgContent.isInView ? 'visibleY' : ''} 
          className="flex flex-col flex-wrap justify-center pl-4">
          <Image 
            src='/icons/icon-removebg-preview.png' 
            alt='dlooti-logo'
            quality={75}
            priority
            className='-ml-4 w-40 h-36'
            width={150}
            height={100}
          />
          <div className="text-white text-md lg:max-w-md">
            DLOOTI is a boutique bakery — all handcrafted with care and attention to detail. Every treat is made to deliver comfort and unforgettable flavor in every bite.
          </div>
        </motion.div>
        
        <motion.div
          ref={purpleBgContent2.ref}
          variants={cardVariant} 
          initial='hiddenBot'
          animate={purpleBgContent2.isInView ? 'visibleY' : ''}
          className="mt-4 pb-4 pl-4 flex">
          <div className="mr-24">
            <div className="text-pinkBg text-xl font-semibold mt-4">About</div>
            <div className="flex flex-col mt-2 text-white">
              <div className="hover:text-pinkTxt text-md footer-navbar">
                <Link href='/about'>About Us</Link>
              </div>
              <div className="hover:text-pinkTxt text-md footer-navbar">
                <Link href='/outlet'>Location</Link>
              </div>
              <div className="hover:text-pinkTxt text-md footer-navbar">
                <Link href='/review'>Review</Link>
              </div>
            </div>
          </div>

          <motion.div
            ref={purpleBgContent2.ref}
            variants={cardVariant} 
            initial='hiddenBot'
            animate={purpleBgContent2.isInView ? 'visibleY' : ''}>
            <div className="text-pinkBg text-xl font-semibold mt-4">Support</div>
            <div className="flex flex-col mt-2 text-white">
              <div className="hover:text-pinkTxt text-md footer-navbar">
                <Link href='#' className="pointer-events-none">Privacy Policy</Link>
              </div>
              <div className="hover:text-pinkTxt text-md footer-navbar">
                <Link href='#' className="pointer-events-none">Terms</Link>
              </div>
            </div>
            </motion.div>
        </motion.div>
      </motion.div>
    </div>
  );
}
