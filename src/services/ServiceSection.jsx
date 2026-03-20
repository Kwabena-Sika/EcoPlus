import React from 'react'
import Navbar from '../Navbar'
import Footer from '../Footer'
import ServiceBg from './ServiceBg'
import ServiceContent from './ServiceContent'

const ServiceSection = () => {
  return (
    <div>
      <Navbar />
      <ServiceBg />
      <ServiceContent />
      <Footer />
    </div>
  )
}

export default ServiceSection