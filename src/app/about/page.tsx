'use client'
import Image from "next/image"
import { motion } from "framer-motion"
import { cardVariant, useScrollAnimation } from "@/components/fragments/motion"

function About() {
  const aboutTitle = useScrollAnimation('-100px',true)
  const aboutContent = useScrollAnimation('-100px',true)
  const filosofiTitle = useScrollAnimation('-100px',true)
  const filosofiContent = useScrollAnimation('-100px',true)
  const aboutPicture = useScrollAnimation('-100px',true)

  return (
    <>
      <title>About | Dlooti</title>
      <div className="ml-4 sm:ml-16 md:ml-16 lg:ml-28">
        <motion.div
          ref={aboutTitle.ref}
          variants={cardVariant}
          initial='hiddenRight'
          animate={aboutTitle.isInView ? 'visibleX' : ''} 
          className="mt-36 flex items-center">
          <span className='w-[50px] h-[3px] rounded block bg-[#5E50D2]/70'></span>
          <span className="ml-10 text-[#5E50D2] text-lg font-semibold">About</span>
        </motion.div>

        <motion.div
          ref={aboutContent.ref}
          variants={cardVariant}
          initial='hiddenBot'
          animate={aboutContent.isInView ? 'visibleY' : ''} 
          className="text-3xl sm:text-4xl mt-10 max-w-lg sm:max-w-2xl md:max-w-4xl lg:max-w-5xl 2xl:max-w-7xl">
            Dlooti is a new Japanese-inspired boutique bakery and pastry shop
        </motion.div>

        <motion.div
          ref={aboutContent.ref}
          variants={cardVariant}
          initial='hiddenBot'
          animate={aboutContent.isInView ? 'visibleY' : ''}  
          className="text-md md:text-lg mt-10 max-w-lg sm:max-w-xl md:max-w-3xl lg:max-w-5xl">
          Our products have been created to have high quality and taste. Using premium natural ingredients with traditional recipes and strict quality control, our products are wholesomely nutritious and have consistent quality. 
        </motion.div>

        <motion.div
          ref={filosofiTitle.ref}
          variants={cardVariant}
          initial='hiddenRight'
          animate={filosofiTitle.isInView ? 'visibleX' : ''} 
          className="mt-14 flex items-center">
          <span className='w-[50px] h-[3px] rounded block bg-[#5E50D2]/70'></span>
          <span className="ml-10 text-[#5E50D2] text-lg font-semibold">Our Philosophy</span>
        </motion.div>

        <motion.div
          ref={filosofiContent.ref}
          variants={cardVariant}
          initial='hiddenBot'
          animate={filosofiContent.isInView ? 'visibleY' : ''} 
          className="text-3xl sm:text-4xl mt-10 max-w-lg sm:max-w-2xl md:max-w-4xl lg:max-w-5xl 2xl:max-w-7xl">
          High-quality, refined, and delicious bread and pastries
        </motion.div>

        <motion.div
          ref={filosofiContent.ref}
          variants={cardVariant}
          initial='hiddenBot'
          animate={filosofiContent.isInView ? 'visibleY' : ''}
          className="text-md md:text-lg mt-10 max-w-lg sm:max-w-xl md:max-w-3xl lg:max-w-5xl">
          We have taken into account all of these key factors as we have developed our products with high quality, taste, and presentation in mind. As we strive to build a reputation as a leader in quality, we have invested in skilled human resources, synergistically moving together with highly automated manufacturing equipment.  
        </motion.div>

        <motion.div
          ref={aboutPicture.ref}
          variants={cardVariant}
          initial='hiddenRight'
          animate={aboutPicture.isInView ? 'visibleX' : ''} 
          className="flex mt-10 justify-evenly">
          <div className="mb-2 mr-2">
            <Image
              src="/cover/cover.jpg"
              alt="cover"
              width={682}
              height={510}
              unoptimized
              loading="lazy"
              className="w-[180px] h-[300px] sm:w-[382px] md:w-[500px] md:h-[400px] lg:w-[682px] lg:h-[500px] xl:w-[800px] xl:h-[600px] 2xl:w-[900px] 2xl:h-[700px] object-cover"
            />
         </div>
         <div className="mb-2 mr-2">
            <Image
              src="/product/custom-cake/half-cake.jpeg"
              alt="cover"
              width={682}
              height={510}
              unoptimized
              loading="lazy"
              className="w-[180px] h-[300px] sm:w-[382px] md:w-[500px] md:h-[400px] lg:w-[682px] lg:h-[500px] xl:w-[800px] xl:h-[600px] 2xl:w-[900px] 2xl:h-[700px] object-cover"
            />
         </div>
         <div className="mb-2 mr-2">
            <Image
              src="/product/soft-cookies/giant-cookie-character.jpeg"
              alt="cover"
              width={682}
              height={510}
              unoptimized
              loading="lazy"
              className="w-[180px] h-[300px] sm:w-[382px] md:w-[500px] md:h-[400px] lg:w-[682px] lg:h-[500px] xl:w-[800px] xl:h-[600px] 2xl:w-[900px] 2xl:h-[700px] object-cover"
            />
         </div>
        </motion.div>
        
      </div>
    </>
  )
}

export default About