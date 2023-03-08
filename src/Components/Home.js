import React from 'react'
import Footer from './Footer';
import Navbar from './Navbar';


const Hero = () => {
  return <>
      <div className='flex flex-col text-white text-center'>
        <div className="text-5xl mx-20 md:mx-[10%] my-72">
          All things astronomy
        </div>
        <div className='flex flex-col mx-20 md:mx-[20%] px-3 my-10 bg-white text-black rounded-lg'>
          <div className='text-3xl font-medium my-2'>About this site</div>
          <div className='text-xl my-2'>This is an website made with NASA APIs. Currently, it only uses
          one API that being Astronomy picture of the day. It fetches different picture related
          to astronomy along with its title and description. You can also choose to pick date of 
          a particular day before the current day with date picker.</div>
        </div>
          
      </div>
    </>
}

const Home = () => {
  return (
    <>
      <div className='background-image max-w-[100vw] bg-fixed'>
        <Navbar/>
        <Hero/>
        <Footer/>
      </div>
      
    </>
  )
}

export default Home