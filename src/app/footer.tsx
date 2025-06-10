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

      <div className="p-8 bg-[#a492fd]">
        <div className="flex flex-wrap justify-center items-center">
          <Image 
            src='/icon-removebg-preview.png' 
            alt='dlooti-logo'
            className='h-36 -ml-4 w-1/2'
            width={500}
            height={500}
          />
          <div className="w-1/2 text-white">
            DLOOTI is a new Japanese–inspired boutique bakery and pastry shop that features exceptionally handcrafted bread, pastries, cakes, and cookies.
          </div>
        </div>
        <div className="text-white">
          <div className="text-[#f66186] text-2xl font-bold text-center mt-4">About</div>
          <div className="flex justify-evenly items-center mt-2">
            <div className="hover:text-[#f66186] duration-300 ease-out">
              <Link href='#'>About Us</Link>
            </div>
            <div className="hover:text-[#f66186] duration-300 ease-out">
              <Link href='#'>Location</Link>
            </div>
            <div className="hover:text-[#f66186] duration-300 ease-out">
              <Link href='#'>Contact Us</Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
