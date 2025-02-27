'use client'
import React, { useState } from 'react'
import customer from '@/assets/home/customer.webp'
import check from '@/assets/home/check.png'

function Bot() {
  const [pop,setPop] = useState(true)

  return (
    <div className=''>
    {pop ? (
      <div onMouseEnter={()=>setPop(false)} className=' fixed right-5 bottom-5 flex justify-center items-center w-1/5'>
      <div className='relative'>
        <img className='w-32 h-20 rounded-tl-md rounded-bl-md' src={customer.src} alt="" />
        <span className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 font-semibold text-white'>Better Forever</span>
      </div>
      <div className='bg-[#F0F7F1] p-3 flex flex-col rounded-tr-md rounded-br-md'>
        <span className='text-gray-800 text-sm'>Save on future home loans with $0 origination fees.</span>
        <span className='text-sm font-semibold'>See details -</span>
      </div>
    </div>
    ):(
      <div onMouseLeave={()=>setPop(true)} className='fixed right-5 bottom-5 flex justify-center items-center w-1/2 bg-[#F0F7F1] p-5 rounded-lg flex-col'>
        <div className='flex justify-between items-center p-5 w-full'>
          <div className='text-xl font-semibold'>The Better Forever Program</div>
          <div className="bg-[#017848] inline-block px-10 py-4 mt-6 mb-3 rounded-full font-semibold cursor-pointer hover:bg-[#178c6b] text-white duration-100">Start preapproval</div>
        </div>
        <div className='w-full border'></div>
        <div className='p-5 space-y-5'>
          <span className='block'>Introducing a loyalty program designed to reward your homeownership journey – again and again.</span>
          <div className='flex justify-start gap-3 items-center'>
            <img className='w-5' src={check.src} alt="" />
            <span>Refinance whenever rates drop: Enjoy unlimited refinances with no origination fees.</span>
          </div>
          <div className='flex justify-start gap-3 items-center'>
            <img className='w-5' src={check.src} alt="" />
            <span>Buy your next home, for less. No fees on future home purchases.</span>
          </div>
          <div className='flex justify-start gap-3 items-center'>
            <img className='w-5' src={check.src} alt="" />
            <span>You’re already in. Funded a loan with Better since 2019? You’re automatically enrolled.</span>
          </div>
          <span className=' font-semibold'>Read more</span>
        </div>
      </div>
    )}
    </div>
  )
}

export default Bot