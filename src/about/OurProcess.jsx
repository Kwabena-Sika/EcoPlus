import React, { useState } from 'react'
import partner1 from './../assets/zkteco.png'
import partner2 from './../assets/hikvision.png'
import partner3 from './../assets/tripplesea.png'
import consult from './../assets/consultation.png'
import system from './../assets/customize.png'
import installer from './../assets/installer.png'
import support from './../assets/maintenence.png'

const OurProcess = () => {
  const [activeStep, setActiveStep] = useState(1)
  return (
  <div>
    
    <h1 className='font-bold mt-10 text-2xl ml-8'>Our Process</h1>
    <div className='pb-10 pt-5'>
      <div className='md:flex items-center space-y-5 md:space-x-10 p-4'>
        <p onClick={() => setActiveStep(1)} className={`p-10 cursor-pointer border border-zinc-200 ${activeStep===1 ? "text-white bg-[#82b440]  font-semibold": ""}`}>Consultation and Site Assessment</p>
        <p onClick={() => setActiveStep(2)}  className={`p-10 cursor-pointer border border-zinc-200 ${activeStep===2 ? "text-white bg-[#82b440]  font-semibold": ""}`}>Custom System and Design</p>
        <p onClick={() => setActiveStep(3)}  className={`p-10 cursor-pointer border border-zinc-200 ${activeStep===3 ? "text-white bg-[#82b440]  font-semibold": ""}`}>Professional Installation</p>
        <p onClick={() => setActiveStep(4)}  className={`p-10 cursor-pointer border border-zinc-200 ${activeStep===4 ? "text-white bg-[#82b440]  font-semibold": ""}`}>Ongoing Support and Maintenence</p>
      </div>
    </div>

      {activeStep === 1 && (
        <div className='md:flex md:justify-between'>
       <div className='flex flex-col justify-center space-y-4 '>
         <h1 className='p-5 text-3xl md:text-4xl leading-tight'>We will walk You Through Exactly What Your Home Security Needs</h1>

        <p className='p-5 leading-loose tracking-wide'>We can partner with you to design and implement a scalable integrated security solution that addresses your toughest security challenges, while gaining efficiencies across your systems and teams by standardizing platforms and implementing event-driving system automation and powerful solutions help</p>
       </div>

        <img src={consult} alt="" />
      </div>
      )}
      
      {activeStep === 2 && (
         <div className='md:flex p-10 md:space-x-10'>
         <img src={system} alt="" />

       <div className='flex flex-col justify-center space-y-4 '>
         <h1 className='text-4xl leading-tight'>Custom System That Fit Your Space & Budget</h1>

        <p className='leading-loose tracking-wide'>We work closely with you to design security and technology systems that fit your exact needs.
        Our team creates customized solutions that align with your environment, goals, and budget.
        From planning to implementation, every system is built for efficiency, reliability, and growth.
        With Eco+, you get smart, scalable solutions designed specifically for your business.</p>
       </div>

       
      </div>
      )}
     
      {activeStep === 3 && (
        <div className='md:flex md:justify-between p-5'>
       <div className='flex flex-col justify-center space-y-4 '>
         <h1 className='text-4xl leading-tight'>Expert Installation SetUp, Zero Stress</h1>

        <p className='leading-loose tracking-wide '>Our professional installation ensures every system is set up for maximum performance and reliability.
          From security cameras to time attendance systems, we handle every detail with precision.
          Our team follows industry best practices to guarantee safety, efficiency, and long-term functionality.
          With EcoPlus Technologies, you get a seamless installation experience and technology that works perfectly from day one.</p>
       </div>

        <img src={installer} alt="" className='mt-10' />
      </div>
      )}
      
      {activeStep === 4 && (
         <div className='md:flex md:space-x-10 md:p-10'>

        <img src={support} alt="" className='h-auto md:w-[50%] p-3' />

       <div className='flex flex-col justify-center space-y-4 '>
         <h1 className='text-3xl leading-tight font-bold p-5'>Real Support, Even After the Job is Done</h1>

        <p className='leading-loose tracking-wide p-5'>Our commitment doesn’t end after installation — we’re here to keep your systems running smoothly.
          We provide regular maintenance, troubleshooting, and timely updates to ensure optimal performance.
          Our support team is always ready to resolve issues quickly and minimize downtime.
          With EcoPlus Technologies, you get dependable service that keeps your technology working when you need it most</p>
       </div>
       
      </div>
      )}
     
      
       <div className='bg-[#f4f4f4] p-5'>
        
        <div className='flex gap-6 items-center'>
          <img src={partner1} alt="" className='max-w-[120px] h-auto'/>
          <img src={partner2} alt="" className='max-w-[120px] h-auto' />
          <img src={partner3} alt="" className='max-w-[50px] h-auto' />
        </div>
       </div>
       
    </div>
  )
}

export default OurProcess