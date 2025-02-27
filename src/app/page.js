'use client'
import mobile from '@/assets/home/mobile.png'
import stopwatch from '@/assets/home/stopwatch.png'
import google from '@/assets/home/google.png'
import star from '@/assets/home/star.png'
import hstar from '@/assets/home/hstar.png'
import Bot from "@/components/Bot";
import trust from "@/assets/home/trust.png"
import Testimony from '@/components/Testimony'
import HomeFaq from '@/components/HomeFaq'
import HomeResult from '@/components/HomeResult'
import { useState } from 'react'

export default function Home() {
  const [prop,setProp] = useState('product')

  function getData(data){
    setProp(data)
  }

  return (
    <>
    <section className="hero">
    <div className="bg-[#004733] min-h-screen">
      <div className="absolute z-10 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-2/3 text-5xl lg:text-6xl xl:text-8xl font-semibold">
        <span className="text-[#1EE07F] text-center block">Mortgages</span>
        <span className="text-[#1EE07F] text-nowrap text-center block">made simple</span>
      </div>
      <div className="block overflow-hidden mt-16 sm:mt-0 w-1/2 sm:flex justify-around items-center sm:w-full px-4 sm:px-20 md:px-40 lg:px-60 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-6">
        <div className="flex flex-col">
          <div className="bg-[#1EE07F] cursor-pointer text-nowrap inline-block px-10 py-4 rounded-full hover:text-white hover:bg-transparent duration-100">Start my approval</div>
          <div className="flex justify-center items-center mt-2">
            <img className='w-4 h-4 invert' src={stopwatch.src} alt="" />
            <div className="mx-1 text-white text-sm">3 min | No credit impact</div>
          </div>
        </div>
        <img className='scale-110 -mt-20' src={mobile.src} alt="" />
        <div className='sm:block hidden'>
          <div className="flex justify-center items-center gap-1">
            <img className='w-7 h-7' src={google.src} alt="" />
            <img className='w-5 h-5' src={star.src} alt="" />
            <img className='w-5 h-5' src={star.src} alt="" />
            <img className='w-5 h-5' src={star.src} alt="" />
            <img className='w-5 h-5' src={star.src} alt="" />
            <img className='w-5 h-5' src={hstar.src} alt="" />
          </div>
          <span className="mx-1 text-white text-xs">4.6 Stars | 3177 Google reviews</span>
        </div>
      </div>
      <Bot/>
    </div>
    </section>
    <section className="testimony">
    <div className=' flex flex-col-reverse sm:flex-row justify-center items-center p-10 py-28 sm:p-28'>
      <Testimony/>
      <div className=''>
        <h1 className="text-5xl sm:text-7xl text-gray-800 font-semibold">Find out why we’re better.</h1>
        <div className="bg-[#004733] inline-block px-12 py-5 mt-6 mb-3 rounded-full font-semibold cursor-pointer hover:bg-[#178c6b] text-white duration-100">See all our stories</div>
        <div className="flex justify-start items-center mb-5 sm:mb-0 gap-x-2">
          <img className="w-24" src={trust.src} alt="trust"/>
          <p className='text-gray-600 font-semibold '>Excellent 4.4 <span>out of 5</span></p>
        </div>
      </div>
    </div>
    </section>
    <section className='question'>
    <div className='flex flex-col sm:flex-row gap-5 justify-between items-center px-4 sm:px-16 my-10'>
      <div>
        <div className='text-5xl text-gray-800 font-semibold'>Got questions?</div>
        <div className='text-5xl text-gray-800 font-semibold'>We've got answers</div>
      </div>
      <HomeFaq getData={getData}/>
    </div>
    <HomeResult prop={prop}/>
    </section>
    <hr/>
    </>
  );
}
