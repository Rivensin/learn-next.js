'use client'
import Image from "next/image"
import { motion } from "framer-motion"
import { cardVariant, useScrollAnimation } from "@/components/fragments/motion"

function About() {
  const aboutTitle = useScrollAnimation('-100px',true)
  const aboutContent = useScrollAnimation('-100px',true)
  const filosofiTitle = useScrollAnimation('-100px',true)
  const filosofiHeader = useScrollAnimation('-100px',true)
  const filosofiContent = useScrollAnimation('-100px',true)
  const aboutPicture = useScrollAnimation('-100px',true)

  return (
    <div className="duration-700 transition-all overflow-hidden">
      <div className="ml-4 sm:ml-16 md:ml-16 lg:ml-28 ">
      <title>About | Dlooti</title>
        <motion.div
          ref={aboutTitle.ref}
          variants={cardVariant}
          initial='hiddenRight'
          animate={aboutTitle.isInView ? 'visibleX' : ''} 
          className="mt-36 flex items-center">
          <span className='page-title-line'></span>
          <span className="page-title">About</span>
        </motion.div>

        <motion.div
          ref={aboutContent.ref}
          variants={cardVariant}
          initial='hiddenBot'
          animate={aboutContent.isInView ? 'visibleY' : ''} 
          className="about-heading">
            Dlooti is a new fresh boutique bakery and pastry shop
        </motion.div>

        <motion.div
          ref={aboutContent.ref}
          variants={cardVariant}
          initial='hiddenBot'
          animate={aboutContent.isInView ? 'visibleY' : ''}  
          className="text-md about-paragraph">
          Crafted with care and a focus on excellence, our products are made using high-quality natural ingredients and time-honored methods. We maintain strict standards to ensure every item is consistently flavorful, nourishing, and made to perfection. 
        </motion.div>

        <motion.div
          ref={filosofiTitle.ref}
          variants={cardVariant}
          initial='hiddenRight'
          animate={filosofiTitle.isInView ? 'visibleX' : ''} 
          className="mt-14 flex items-center">
          <span className='page-title-line'></span>
          <span className="page-title">Our Philosophy</span>
        </motion.div>

        <motion.div
          ref={filosofiHeader.ref}
          variants={cardVariant}
          initial='hiddenBot'
          animate={filosofiHeader.isInView ? 'visibleY' : ''} 
          className="about-heading">
          Exquisite, flavorful, and thoughtfully crafted baked goods.
        </motion.div>

        <motion.div
          ref={filosofiContent.ref}
          variants={cardVariant}
          initial='hiddenBot'
          animate={filosofiContent.isInView ? 'visibleY' : ''}
          className="text-md about-paragraph">
          Every aspect—from flavor and texture to visual appeal—has been carefully considered in the creation of our products. In our pursuit of excellence, we combine the expertise of dedicated professionals with the precision of advanced baking technology, ensuring consistent results that reflect our commitment to quality.  
        </motion.div>
      </div>
      <motion.div
        ref={aboutPicture.ref}
        variants={cardVariant}
        initial='hiddenRight'
        animate={aboutPicture.isInView ? 'visibleX' : ''} 
        className="ml-4 flex mt-10 justify-evenly">
        <div className="mb-2 mr-2">
          <Image
            src="/cover/cover.jpg"
            alt="cover"
            width={682}
            height={510}
            unoptimized
            className="about-picture"
          />
        </div>
        <div className="mb-2 mr-2">
          <Image
            src="/product/custom-cake/half-cake.jpeg"
            alt="cover"
            width={682}
            height={510}
            unoptimized
            className="about-picture"
          />
        </div>
        <div className="mb-2 mr-2">
          <Image
            src="/product/soft-cookies/giant-cookie-character.jpeg"
            alt="cover"
            width={682}
            height={510}
            unoptimized
            className="about-picture"
          />
        </div>
      </motion.div>
    </div>
  )
}

export default About