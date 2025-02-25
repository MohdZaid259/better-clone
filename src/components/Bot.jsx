import React from 'react'
import customer from '@/assets/home/customer.webp'

function Bot() {
  return (
    <div className='absolute right-5 bottom-5 flex justify-center items-center w-1/5'>
      <div className='relative'>
        <img className='w-32 h-20 rounded-tl-md rounded-bl-md' src={customer.src} alt="" />
        <span className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 font-semibold text-white'>Better Forever</span>
      </div>
      <div className='bg-slate-200 p-3 flex flex-col rounded-tr-md rounded-br-md'>
        <span className='text-gray-800 text-sm'>Save on future home loans with $0 origination fees.</span>
        <span className='text-sm font-semibold'>See details -</span>
      </div>
    </div>
  )
}

export default Bot