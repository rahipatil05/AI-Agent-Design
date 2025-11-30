import React from 'react'
import Card from '../../components/ui/cards/Cards'

const Services = () => {
  return (
    <>
      <div className="container w-full min-h-screen bg-black text-white pt-20 flex flex-col items-center px-10">

        <div className="demo mb-40">
          <h1 className='font-bold text-4xl text-center'>Services</h1>
        </div>
        
        <div className="cards mt-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          <Card name="24/7 Availability" />
          <Card name="Personalized Assistance" />
          <Card name="Task Automation" />
          <Card name="Emotional Support" />
          <Card name="Learning & Growth" />
          <Card name="Seamless Integration" />
        </div>

      </div>
    </>
  )
}

export default Services
