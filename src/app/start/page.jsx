import React from 'react'
import lLogo from '@/assets/start/lLogo.png'
import lcall from '@/assets/start/lcall.png'
import last from '@/assets/start/last.jpg'
import l1 from '@/assets/start/l1.png'
import l2 from '@/assets/start/l2.png'
import l3 from '@/assets/start/l3.png'
import ll1 from '@/assets/start/ll1.png'
import ll2 from '@/assets/start/ll2.png'
import ll3 from '@/assets/start/ll3.png'

function page() {
  return (
    <div className='px-40'>
      <nav className='flex justify-between items-center my-8'>
        <img className='w-20' src={lLogo.src} alt="" />
        <div className='flex justify-center gap-3 items-center'>
          <img src={lcall.src} alt="" />
          <span>Need help? Call (415) 523 8837</span>
        </div>
      </nav>
      <div className='relative'>
        <div className='border-2'></div>
        <img className='w-12 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 rounded-full' src={last.src} alt="" />
      </div>
      <div className='flex flex-col justify-center items-center mt-16 gap-5'>
        <div className='text-5xl font-semibold text-gray-800'>Hi, I'm Betsy!</div>
        <div className='text-5xl font-semibold text-gray-800'>What can I help you with?</div>
        <div className='flex justify-start items-center border border-black shadow-[inset_0_0_0_0_black] transition-all duration-300 hover:shadow-[inset_0_0_0_3px_#017848] rounded-md px-8 py-2 gap-5 w-1/2'>
          <img className='w-10' src={ll1.src} alt="" />
          <span className='font-semibold text-lg'>Buying a home</span>
        </div>
        <div className='flex justify-start items-center border border-black shadow-[inset_0_0_0_0_black] transition-all duration-300 hover:shadow-[inset_0_0_0_3px_#017848] rounded-md px-8 py-2 gap-5 w-1/2'>
          <img className='w-10' src={ll2.src} alt="" />
          <span className='font-semibold text-lg'>Refinance my mortgage</span>
        </div>
        <div className='flex justify-start items-center border border-black shadow-[inset_0_0_0_0_black] transition-all duration-300 hover:shadow-[inset_0_0_0_3px_#017848] rounded-md px-8 py-2 gap-5 w-1/2'>
          <img className='w-10' src={ll3.src} alt="" />
          <span className='font-semibold text-lg'>Get cash from my home</span>
        </div>
      </div>
      <div className='flex justify-center items-center my-16 gap-8'>
        <div className='flex flex-col gap-3'>
        <span className='block text-3xl font-semibold text-center'>$100B</span>
        <span className='block text-sm text-gray-500 text-center'>home loans funded entirely online</span>
        </div>
        <div className='flex flex-col gap-3'>
        <span className='block text-3xl font-semibold text-center'>400K</span>
        <span className='block text-sm text-gray-500 text-center'>Customers who chose a Better Mortgage</span>
        </div>
      </div>
      <div className='flex justify-center items-center mb-20'>
      <div className='bg-[#F0F7F1] w-1/2 flex justify-center items-center flex-col gap-4 p-5'>
        <span className=' text-gray-500 text-center'>After a few questions, you'll unlock:</span>
        <div className='flex flex-col gap-4'>
        <div className='flex text-start items-center gap-3'>
          <img className='w-5' src={l1.src} alt="" />
          <span className='te text-gray-500'>Custom mortgage rates</span>
        </div>
        <div className='flex justify-start items-center gap-3'>
          <img className='w-5' src={l2.src} alt="" />
          <span className=' text-gray-500'>Exclusive offers</span>
        </div>
        <div className='flex justify-start items-center gap-3'>
          <img className='w-5' src={l3.src} alt="" />
          <span className=' text-gray-500'>A personalized dashboard</span>
        </div>
        </div>
      </div>
      </div>
    </div>
  )
}

export default page