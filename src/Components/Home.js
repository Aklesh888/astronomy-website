import React from 'react'
import Navbar from './Navbar';


const Hero = () => {
  return <>
      <div className='flex'>
        <div className="text-8xl h-60 w-60 text-white m-20">
          Your Personal Astronomy website!
        </div>
          
      </div>
    </>
}

const Home = () => {
  return (
    <>
      <div className='background-image h-screen'>
        <Navbar/>
        <Hero/>
      </div>
      
    </>
  )
}

export default Home