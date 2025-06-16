import Image from "next/image"

function About() {
  return (
    <>
      <div className="ml-4 mt-36 flex items-center">
        <span className='w-[50px] h-[3px] rounded block bg-[#5E50D2]/70'></span>
        <span className="ml-10 text-[#5E50D2] text-lg">Our Products</span>
      </div>

      <div className="ml-4 text-4xl mt-10 max-w-lg">
          Dlooti is a new Japanese-inspired boutique bakery and pastry shop
      </div>

      <div className="ml-4 text-lg mt-10 max-w-lg">
        Our products have been created to have high quality and taste. Using premium natural ingredients with traditional recipes and strict quality control, our products are wholesomely nutritious and have consistent quality. 
      </div>

      <div className="ml-4 mt-14 flex items-center">
        <span className='w-[50px] h-[3px] rounded block bg-[#5E50D2]/70'></span>
        <span className="ml-10 text-[#5E50D2] text-lg">Our Philosophy</span>
      </div>

      <div className="ml-4 text-4xl mt-10 max-w-lg">
        High-quality, refined, and delicious bread and pastries
      </div>

      <div className="ml-4 text-lg mt-10 max-w-lg">
        We have taken into account all of these key factors as we have developed our products with high quality, taste, and presentation in mind. As we strive to build a reputation as a leader in quality, we have invested in skilled human resources, synergistically moving together with highly automated manufacturing equipment.  
      </div>

      <div className="w-full max-w-xs mx-auto mt-10">
        <Image
          src="/cover/cover.jpg"
          alt="cover"
          width={382}
          height={510}
          className="w-full h-auto object-cover"
        />
    </div>
    </>
  )
}

export default About