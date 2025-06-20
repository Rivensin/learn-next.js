import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <>
      <div className="flex flex-col items-center bg-[#f84d78]/60 p-10 mt-10 text-center font-bold ">
        <span className="text-white text-lg">Order Dlooti by Instagram DM or WhatsApp!</span>
        <Link href='https://wa.me/+6281374956263' target="_blank">
          <div className="flex justify-center items-center mt-4 p-8 bg-black text-white w-36 h-16 hover:shadow-2xl hover:-translate-y-1 rounded cursor-pointer">
            <Image 
                src='/icons/whatsapp.png' 
                alt='instagram'
                className='w-8 h-8'
                width={500}
                height={500}
          />
            <span className="ml-2 text-sm">Order by WhatsApp!</span>
          </div>
        </Link>

        <Link href='https://instagram.com/dlooti_' target="_blank">
          <div className="flex justify-center items-center mt-4 p-8 bg-black text-white w-36 h-16 hover:shadow-2xl hover:-translate-y-1 rounded cursor-pointer">
            <Image 
                src='/icons/instagram.png' 
                alt='instagram'
                className='w-8 h-8'
                width={500}
                height={500}
            />
            <span className="ml-2 text-sm">Order by Instagram!</span>
          </div>
        </Link>
      </div>

      <div className="bg-[#a492fd] pb-10 lg:flex lg:items-center lg:justify-evenly">
        <div className="flex flex-col flex-wrap justify-center pl-4">
          <Image 
            src='/icon-removebg-preview.png' 
            alt='dlooti-logo'
            className='-ml-4 w-36 h-32'
            width={150}
            height={100}
          />
          <div className="text-white text-md lg:max-w-md">
            DLOOTI is a new Japanese–inspired boutique bakery and pastry shop that features exceptionally handcrafted bread, pastries, cakes, and cookies.
          </div>
        </div>
        
        <div className="mt-4 pb-4 pl-4 flex">
          <div className="mr-24">
            <div className="text-[#f84d78] text-xl font-semibold mt-4">About</div>
            <div className="flex flex-col mt-2 text-white">
              <div className="hover:text-[#f66186] text-md mt-2 duration-300 ease-out">
                <Link href='#'>About Us</Link>
              </div>
              <div className="hover:text-[#f66186] text-md mt-2 duration-300 ease-out">
                <Link href='#'>Location</Link>
              </div>
              <div className="hover:text-[#f66186] text-md mt-2 duration-300 ease-out">
                <Link href='#'>Contact Us</Link>
              </div>
            </div>
          </div>

          <div className="">
            <div className="text-[#f84d78] text-xl font-semibold mt-4">Support</div>
            <div className="flex flex-col mt-2 text-white">
              <div className="hover:text-[#f66186] text-md mt-2 duration-300 ease-out">
                <Link href='#'>Privacy Policy</Link>
              </div>
              <div className="hover:text-[#f66186] text-md mt-2 duration-300 ease-out">
                <Link href='#'>Terms</Link>
              </div>
            </div>
            </div>
        </div>
      </div>
    </>
  );
}
