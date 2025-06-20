import Image from "next/image"

function About() {
  return (
    <>
      <div className="ml-4 sm:ml-16 md:ml-16 lg:ml-28">
        <div className="mt-36 flex items-center">
          <span className='w-[50px] h-[3px] rounded block bg-[#5E50D2]/70'></span>
          <span className="ml-10 text-[#5E50D2] text-lg">About</span>
        </div>

        <div className="text-4xl mt-10 max-w-lg sm:max-w-2xl md:max-w-4xl lg:max-w-5xl 2xl:max-w-7xl">
            Dlooti is a new Japanese-inspired boutique bakery and pastry shop
        </div>

        <div className="text-md md:text-lg mt-10 max-w-lg sm:max-w-xl md:max-w-3xl lg:max-w-5xl">
          Our products have been created to have high quality and taste. Using premium natural ingredients with traditional recipes and strict quality control, our products are wholesomely nutritious and have consistent quality. 
        </div>

        <div className="mt-14 flex items-center">
          <span className='w-[50px] h-[3px] rounded block bg-[#5E50D2]/70'></span>
          <span className="ml-10 text-[#5E50D2] text-lg">Our Philosophy</span>
        </div>

        <div className="text-4xl mt-10 max-w-lg sm:max-w-2xl md:max-w-4xl lg:max-w-5xl 2xl:max-w-7xl">
          High-quality, refined, and delicious bread and pastries
        </div>

        <div className="text-md md:text-lg mt-10 max-w-lg sm:max-w-xl md:max-w-3xl lg:max-w-5xl">
          We have taken into account all of these key factors as we have developed our products with high quality, taste, and presentation in mind. As we strive to build a reputation as a leader in quality, we have invested in skilled human resources, synergistically moving together with highly automated manufacturing equipment.  
        </div>

        <div className="flex mt-10 justify-evenly">
          <div className="mb-2 mr-2">
            <Image
              src="/cover/cover.jpg"
              alt="cover"
              width={682}
              height={510}
              className="w-[180px] h-[300px] sm:w-[382px] md:w-[500px] md:h-[400px] lg:w-[682px] lg:h-[500px] xl:w-[800px] xl:h-[600px] 2xl:w-[900px] 2xl:h-[700px] object-cover"
            />
         </div>
         <div className="mb-2 mr-2">
            <Image
              src="/product/Custom Cake/Half Cake.jpeg"
              alt="cover"
              width={682}
              height={510}
              className="w-[180px] h-[300px] sm:w-[382px] md:w-[500px] md:h-[400px] lg:w-[682px] lg:h-[500px] xl:w-[800px] xl:h-[600px] 2xl:w-[900px] 2xl:h-[700px] object-cover"
            />
         </div>
         <div className="mb-2 mr-2">
            <Image
              src="/product/Soft Cookies/Giant Cookie - Character.jpeg"
              alt="cover"
              width={682}
              height={510}
              className="w-[180px] h-[300px] sm:w-[382px] md:w-[500px] md:h-[400px] lg:w-[682px] lg:h-[500px] xl:w-[800px] xl:h-[600px] 2xl:w-[900px] 2xl:h-[700px] object-cover"
            />
         </div>
        </div>
        
      </div>
    </>
  )
}

export default About