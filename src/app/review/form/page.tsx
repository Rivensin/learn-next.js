'use client'
import { motion } from "framer-motion"
import { cardVariant, useScrollAnimation } from "@/components/fragments/motion"
import { useForm } from "react-hook-form"
import { useSession } from "next-auth/react"
import Button from "@/components/fragments/Button"
import Image from "next/image"
import { useState } from "react"


export function page() {
  const reviewTitle = useScrollAnimation('-100px',true) 
  const {register, handleSubmit} = useForm()
  const {data : session,status} : {data: any, status: any} = useSession()
  const [value,setValue] = useState(3)
  const [visible,setVisible] = useState(false)

  const handleValue = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setVisible(false)
    setValue(Number(e.target.value))
    setTimeout(() => setVisible(true),100)
  }
  
  return (
    <div className="overflow-hidden ml-4 lg:ml-28">
      <title>Review Form | Dlooti</title>
      <motion.div
        ref={reviewTitle.ref}
        variants={cardVariant}
        initial='hiddenRight'
        animate={reviewTitle.isInView ? 'visibleX' : ''} 
        className="mt-36 flex items-center">
        <span className='page-title-line'></span>
        <span className="page-title">Review</span>
      </motion.div>

      <motion.div
        ref={reviewTitle.ref}
        variants={cardVariant}
        initial='hiddenRight'
        animate={reviewTitle.isInView ? 'visibleX' : ''} 
        className="mt-10 flex items-center">
          <div className="text-3xl mb-10 mr-2">
            Reviews Form 
          </div>
      </motion.div>

      <div>
        <form className="w-full max-w-sm">
  <div className="flex flex-wrap -mx-3 mb-4">
    <div className="w-full md:w-1/2 px-3 md:mb-0">
      <label 
        className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" 
        htmlFor="name">
        Name
      </label>
      <input 
        id='name' 
        className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-300 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white pointer-events-none" 
        type="text" 
        value={session?.user.name || ''}  
        readOnly />
    </div>
  </div>

  <div className="flex flex-wrap -mx-3 mb-4">
    <div className="w-full px-3">
      <label 
        className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" 
        htmlFor="review">
        Review
      </label>
      <textarea 
        className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded pb-10 pr-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500 align-top text-left resize-none" 
        id="review" 
        placeholder="Write your review about our products in here"
        rows={10}>
      </textarea>
    </div>
  </div>

  <div className="flex flex-wrap -mx-3">
    <div className="w-full md:w-1/3 px-3 mb-3 md:mb-0">
      <label 
        className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" 
        htmlFor="rating">
        Rating
      </label>
      <div className="relative">
        <select 
          className="w-full lg:w-44 block appearance-none bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500" 
          id="rating"
          value={value}
          onChange={handleValue}>
          <option value={5}>Sangat Enak</option>
          <option value={4}>Enak</option>
          <option value={3}>Biasa</option>
          <option value={2}>Kurang Enak</option>
          <option value={1}>Tidak Enak</option>
        </select>
        <div className="pointer-events-none absolute inset-y-0 right-2 lg:-right-14 flex items-center text-gray-700">
          <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg>
        </div>
      </div>
    </div>
  </div>
  
  {visible && (
    <motion.div 
      variants={cardVariant}
      initial='hiddenRight'
      animate='visibleX'
      exit='hiddenRight'
      className="-mx-3 mb-2">
      <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
        <Image 
          src={`/icons/${value}.png`}
          width={200}
          height={50}
          alt={String({value})}
          unoptimized>
        </Image>
      </div>
  </motion.div>
  )}

  <div className="-mx-3 mb-2">
    <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
      <Button>
        Submit
      </Button>
    </div>
      
  </div>

</form>
      </div>
    </div>
  )
}

export default page