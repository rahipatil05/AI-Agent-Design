import React from 'react'
import Robot from './Robot.jpg'
import Button from '../../components/ui/button/Button'

const Home = () => {
  return (
    <>
      <section>
        <div
          className="relative w-full min-h-screen bg-cover bg-center bg-no-repeat flex items-center text-white"
          style={{ backgroundImage: `url(${Robot})` }}
        >
          <div className="absolute inset-0 bg-black/40"></div>

          <div className="relative left-20 z-10 ml-32 max-w-[600px]">
            <h1 className="font-bold text-[80px] leading-tight">
              Multi AI Agents Platform
            </h1>

            <div className="mt-8">
              <Button />
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Home



