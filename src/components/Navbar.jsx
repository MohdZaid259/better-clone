import React from 'react'
import logo from '@/assets/nav/logo.png'
import call from '@/assets/nav/call.png'

function Navbar() {
  return (
    <div className='flex justify-between items-center p-5 sticky left-0 top-0 bg-[#004733] text-white px-14'>
      <div className='flex justify-center items-center gap-x-10 '>
        <img className='w-20 cursor-pointer' src={logo.src} alt="logo" />
        <span className='cursor-pointer hover:bg-white hover:text-black rounded-3xl p-4 py-3'>Buy</span>
        <span className='cursor-pointer hover:bg-white hover:text-black rounded-3xl p-4 py-3'>Refinance</span>
        <span className='cursor-pointer hover:bg-white hover:text-black rounded-3xl p-4 py-3'>HELOC</span>
        <span className='cursor-pointer hover:bg-white hover:text-black rounded-3xl p-4 py-3'>Rates</span>
        <span className='cursor-pointer hover:bg-white hover:text-black rounded-3xl p-4 py-3'>Better+</span>
      </div>
      <div className='flex justify-center items-center gap-x-5 pr-8'>
        <img className='w-11 invert p-3 border border-black rounded-full hover:bg-white hover:invert-0' src={call.src} alt="call" />
        <span className='cursor-pointer hover:bg-white hover:text-black rounded-3xl p-4 py-3'>Sign in</span>
      </div>
    </div>
  )
}

export default Navbar