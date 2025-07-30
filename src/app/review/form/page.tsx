'use client'
import { AnimatePresence, motion } from "framer-motion"
import { cardVariant, useScrollAnimation } from "@/components/fragments/motion"
import { Controller, useForm } from "react-hook-form"
import { useSession } from "next-auth/react"
import Button from "@/components/fragments/Button"
import Image from "next/image"
import { useEffect, useState } from "react"
import { useRouter } from "next/navigation"

export default function FormReview() {
  type FormData = {
    name: string,
    rating: number,
    desc: string
  }
  const reviewTitle = useScrollAnimation('-100px',true) 
  const router = useRouter()
  const {register, handleSubmit, watch, control, formState:{errors}} = useForm<FormData>()
  const {data : session, status} : {data: any, status: any} = useSession()
  const [visible,setVisible] = useState(false)
  const desc =  watch('desc') || ''
  const descWord = 300 - desc.length 
  const rating = watch('rating');

  useEffect(() => {
    if(rating === undefined) return

    if(Number(rating) === 0){
      setVisible(false)  
    } else {
      setVisible(false)
      setTimeout(() => setVisible(true),100)
    }
  },[rating])

  const submit = async(data : any) => {
    try{
      const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/review/addReview`,{
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({
          ...data, 
          image: session?.user?.image || '/profile/profile.png'})
        })
      
      if(res.ok){
        router.push('/review')
      }
    } catch(err){
      console.log('message:',err)
    }
  }

  return (
    <div className="overflow-hidden ">
      <motion.div
        ref={reviewTitle.ref}
        variants={cardVariant}
        initial='hiddenRight'
        animate={reviewTitle.isInView ? 'visibleX' : ''} 
        className="mt-36 flex items-center ml-4 lg:ml-28">
        <span className='page-title-line'></span>
        <span className="page-title">Review</span>
      </motion.div>

      <motion.div
        ref={reviewTitle.ref}
        variants={cardVariant}
        initial='hiddenRight'
        animate={reviewTitle.isInView ? 'visibleX' : ''} 
        className="mt-10 flex items-center ml-4 lg:ml-28">
          <div className="text-3xl mb-10 mr-2">
            Reviews Form 
          </div>
      </motion.div>

      <div>
        <form 
          className="w-full max-w-sm md:max-w-lg lg:max-w-xl xl:max-w-3xl 2xl:max-w-4xl mx-auto mb-2 p-4 border border-slate-100 rounded-lg shadow-md shadow-gray-300" 
          onSubmit={handleSubmit(submit)}>
          <div className="flex flex-wrap -mx-3 mb-4">
            <div className="w-full px-3 md:mb-0">
              <label 
                className="review-question"
                htmlFor="name">
                Name
              </label>
              <input 
                id='name' 
                className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-300 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white pointer-events-none" 
                type="text" 
                defaultValue={session?.user.name || ''}  
                readOnly 
                {...register('name', {required: true})}
                />                
            </div>
          </div>

          <div className="flex flex-wrap -mx-3 mb-4">
            <div className="w-full px-3">
              <label 
                className="review-question" 
                htmlFor="review">
                Review <span className={`${descWord === 0 ? 'text-red-500' : 'text-slate-500'}`}>({descWord})</span>
              </label>
              <textarea 
                className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded pb-10 pr-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:outline-2 focus:-outline-offset-1 focus:outline-purpleBg align-top text-left resize-none" 
                id="review" 
                placeholder="Write your review about our products in here"
                rows={10}
                defaultValue={''}
                minLength={1}
                maxLength={300}
                {...register('desc',{
                  required: true
                })}  
              >
              </textarea>
              <AnimatePresence mode="wait">
                {(descWord === 0 || descWord === 300) && (
                  <motion.p
                    key='review-error'
                    variants={cardVariant}
                    initial='hiddenRight'
                    animate='visibleX' 
                    exit='OutVisibleX'
                    className="text-red-500">
                      {descWord === 0 ? 'Only maximum 300 words allowed' : 'Review cant be blank'}
                    </motion.p>
                )}
              </AnimatePresence>
            </div>
          </div>

          <div className="flex flex-wrap -mx-3 mb-4">
            <div className="w-full px-3 mb-3 md:mb-0">
              <label 
                className="review-question" 
                htmlFor="rating">
                Rating
              </label>
              <div className="relative">
                <Controller 
                  control={control}
                  name='rating'
                  defaultValue={0}
                  rules={{validate: value => Number(value) !== 0}}
                  render={({field, fieldState: {error}}) => (
                    <>
                    <select 
                      {...field}
                      className="w-full block appearance-none bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 rounded leading-tight focus:outline-none focus:bg-white focus:outline-2 focus:-outline-offset-2 focus:outline-purpleBg" 
                      id="rating"
                      >
                        <option value={0}>--Pilih Rating--</option>
                        <option value={5}>Sangat Enak</option>
                        <option value={4}>Enak</option>
                        <option value={3}>Biasa</option>
                        <option value={2}>Kurang Enak</option>
                        <option value={1}>Tidak Enak</option>
                    </select>
                    </>
                  )} 
                />   
                <div className="pointer-events-none absolute inset-y-0 right-2 flex items-center text-gray-700">
                  <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg>
                </div>
              </div>  
              {errors.rating && (<p className="text-red-500 mb-3">**Rating Perlu Di isi</p>)}
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
                  src={`/icons/${rating}.png`}
                  className="object-contain"
                  width={200}
                  height={50}
                  alt={`Rating ${rating}`}
                  unoptimized>
                </Image>
              </div>
          </motion.div>
          )}

          <div className="-mx-3 mb-2">
            <div className="max-w-xs mx-auto px-3">
              <Button 
                className="w-full bg-black hover:bg-black/80"
                type="submit">
                Submit
              </Button>
            </div>
          </div>

          <div className="-mx-3 mb-2">
            <div className="max-w-xs mx-auto px-3">

              <Button 
                className="w-full bg-red-600 hover:bg-red-700/80"
                onClick={() => router.back()}>
                Back
              </Button>
            </div>
          </div>
        </form>
      </div>
    </div>
  )
}
