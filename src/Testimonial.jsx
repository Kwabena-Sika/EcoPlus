import { Quote, Star } from 'lucide-react'
import React from 'react'
import ratings from './assets/star.png'
const Testimonial = () => {
  return (
    <div className='p-10'>
      <h1 className='text-center text-2xl'>What Customers Say About Us</h1>
      <div className='md:flex gap-5 mt-10 space-y-3'>
      <div className='bg-white shadow-lg p-5'>
        <div className='mb-5'>
          <Quote size={40} className='text-gray-200' />
        </div>
       
        <div>
           <p className='mb-5 text-zinc-500'>That's a defense you can trust! I love that I can access my video feed, arm and disarm my system from my phone anytime, anywhere!</p>
           <div className='flex'>
           <img src={ratings} alt=""className='h-20 w-auto' />
           </div>
           <p className='font-bold text-lg'>Mr. Kofi Boakye, <span className='text-sm text-gray-700'>Lesson Pharmacy</span></p>
        </div>
      </div>

       <div className='bg-white shadow-lg p-5'>
        <div className='mb-5'>
          <Quote size={40} className='text-gray-200' />
        </div>
       
        <div>
           <p className='mb-5 text-zinc-500'>That's a defense you can trust! I love that I can access my video feed, arm and disarm my system from my phone anytime, anywhere!</p>
           <div className='flex'>
            <img src={ratings} alt=""className='h-20 w-auto' />
           </div>
           <p className='font-bold text-lg'>Mr. Kofi Boakye, <span className='text-sm text-gray-700'>Lesson Pharmacy</span></p>
        </div>
      </div>

      <div className='bg-white shadow-lg p-5'>
        <div className='mb-5'>
          <Quote size={40} className='text-gray-200'/>
        </div>
       
        <div>
           <p className='mb-5 text-zinc-500'>That's a defense you can trust! I love that I can access my video feed, arm and disarm my system from my phone anytime, anywhere!</p>
           <div className='flex'>
           <img src={ratings} alt=""className='h-20 w-auto' />
           </div>
           <p className='font-bold text-lg'>Mr. Kofi Boakye, <span className='text-sm text-gray-700'>Lesson Pharmacy</span></p>
        </div>
      </div>

      <div className='bg-white shadow-lg p-5'>
        <div className='mb-5'>
          <Quote size={40} className='text-gray-200'/>
        </div>
       
        <div>
           <p className='mb-5 text-zinc-500'>That's a defense you can trust! I love that I can access my video feed, arm and disarm my system from my phone anytime, anywhere!</p>
           <div className='flex'>
            <img src={ratings} alt=""className='h-20 w-auto' />
           </div>
           <p className='font-semibold text-lg'>Mr. Kofi Boakye, <span className='text-sm text-gray-700'>Lesson Pharmacy</span></p>
        </div>
      </div>
      </div>
    </div>
  )
}

export default Testimonial