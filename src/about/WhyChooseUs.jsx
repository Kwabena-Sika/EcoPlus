import React from 'react'
import chooseUs from './../assets/jeans.png'
import {Cpu, Expand, Headset, Package, ShieldCheck, Zap } from 'lucide-react'

const WhyChooseUs = () => {
  return (
    <>
    <div className='md:flex md:space-x-20 pb-10'>
      <div className='md:max-w-[50%]'>
        <div>
          <img src={chooseUs} alt="" />
        </div>
        <div className='bg-[#65b530] p-20 h-[40vh]'>
          <p className='text-white text-lg leading-relaxed'>Behind  Every Secure Institution Is a System That Never Sleeps</p>
        </div>
      </div>

      <div className='flex flex-col justify-center mb-20 space-y-10 md:max-w-[40%]'>
        <h1 className='text-3xl md:text-5xl font-semibold leading-10 md:leading-normal'>Keep An Eye On Everything With Our Video Security</h1>
        <p className='text-lg text-zinc-500 space-y-2'>Helping families live intelligently means we’re always working to bring our customers the latest technology. As one of the premier providers of smart home technology, we are recognized throughout the industry for our products, innovation & customer satisfaction</p>

        <p className='text-lg text-zinc-500'>Don't worry about anything, our  security expert will install your new system, activate it, and show you how to use it</p>

        <div className=''>
         <div className='flex p-4 items-center border-b border-zinc-100 space-x-5'>
          <span>&#10004;</span>
           <p >Professional Grade Protection and Alarm Monitoring 24/7</p>
         </div>
         
         <div className='flex  items-center p-4 border-b border-zinc-100 space-x-5'>
          <span>&#10004;</span>
           <p>Professional Grade Protection and Alarm Monitoring 24/7</p>
         </div>

         <div className='flex items-center p-4 border-b border-zinc-100 space-x-5 '>
          <span>&#10004;</span>
           <p>Professional Grade Protection and Alarm Monitoring 24/7</p>
         </div>
         
        </div>
      </div>
    </div>

    <div>
      <h1 className='font-bold mb-5 ml-8'>WHY CHOOSE ECOPLUS TECHNOLOGIES</h1>
    <div className='md:grid grid-cols-3 gap-5 '>
      <div className='bg-white shadow-2xl p-6 hover:bg-[#82b440] hover:shadow-xl transition-shadow duration-300 md:h-[70vh]  hover:text-white w-full'>
        <ShieldCheck size={60} />
        <p className='font-bold text-2xl mt-10'>Certified Technician</p>
        <p className='leading-relaxed mt-4'>Our installations are handled by trained and certified professionals who understand modern security and smart technology systems.
        We ensure every setup is done accurately, safely, and according to industry standards.</p>
        </div>
                    
        <div className='bg-white shadow-xl p-6 hover:bg-[#82b440] hover:shadow-xl transition-shadow duration-300 md:h-[70vh]  hover:text-white w-full'>
                      <Package size={60} />
                      <p className='font-bold text-2xl mt-10'>Affordable Installation Packages</p>
                      <p className='leading-relaxed mt-4'>We offer flexible installation packages designed to suit businesses of all sizes.
                        Whether you need a basic setup or a complete system deployment, we provide solutions tailored to your needs and budget.</p>
          </div>
              
          <div className='bg-white shadow-xl p-6 hover:bg-[#82b440] hover:shadow-xl transition-shadow duration-300 md:h-[70vh] w-full hover:text-white '>
                      <Headset size={60} />
                      <p className='font-bold text-2xl mt-10'>After Sales Support</p>
                      <p className='leading-relaxed mt-4'>Our service doesn’t end after installation.
                        We provide reliable after-sales support to ensure your systems continue running smoothly and efficiently. 
                        </p>
          </div>
              
          <div className='bg-white shadow-xl p-6 hover:bg-[#82b440] hover:shadow-xl transition-shadow duration-300 md:h-[70vh] w-full hover:text-white '>
                      <Expand size={60} />
                      <p className='font-bold text-2xl mt-10'>Scalable Solutions</p>
                      <p className='leading-relaxed mt-4'>Our systems are designed to grow with your business.As your organization expands, you can easily upgrade or add new devices without replacing your existing setup.</p>
          </div>
          <div className='bg-white shadow-xl p-6 hover:bg-[#82b440] hover:shadow-xl transition-shadow duration-300 md:h-[70vh] w-full hover:text-white '>
          <Zap size={60} />
          <p className='font-bold text-2xl mt-10'>Fast Response Time</p>
          <p className='leading-relaxed mt-4'>We understand that technical issues require immediate attention.Our team responds quickly to service requests to minimize downtime and keep your operations running smoothly.</p>
        </div> 
        <div className='bg-white shadow-xl p-6 hover:bg-[#82b440] hover:shadow-xl transition-shadow duration-300 md:h-[70vh] w-full hover:text-white '>
          <Cpu size={60} />
          <p className='font-bold text-2xl mt-10'>Modern Equipment</p>
          <p className='leading-relaxed mt-4'>We use advanced and reliable equipment built with the latest technology.This ensures better performance, durability, and long-term value for your investment.</p>
        </div> 
    </div>
    </div>

  </>
  )
}

export default WhyChooseUs