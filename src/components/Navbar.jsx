'use client'
import React, { useState } from 'react'
import logo from '@/assets/nav/logo.png'
import call from '@/assets/nav/call.png'
import {buyList, RefinanceList, HELOCList, rateList, betterList, callList} from '@/assets/navList.js'
import Dropdown from './Dropdown'

function Navbar() {
  const [list, setList] = useState(null)


  return (
    <div className='flex justify-between items-center p-5 sticky left-0 top-0 bg-[#004733] text-white px-14'>
      <div className='flex justify-center items-center gap-x-10 '>
        <img className='w-20 cursor-pointer' src={logo.src} alt="logo" />
        <span onMouseEnter={()=>setList('buy')} onMouseLeave={()=>setList(null)} className='cursor-pointer hover:bg-white hover:text-black rounded-3xl p-4 py-3'>Buy</span>
        {list == 'buy' && <Dropdown items={buyList}/>}
        <span onMouseEnter={()=>setList('refinance')} onMouseLeave={()=>setList(null)} className='cursor-pointer hover:bg-white hover:text-black rounded-3xl p-4 py-3'>Refinance</span>
        {list == 'refinance' && <Dropdown items={RefinanceList}/>}
        <span onMouseEnter={()=>setList('HELOC')} onMouseLeave={()=>setList(null)} className='cursor-pointer hover:bg-white hover:text-black rounded-3xl p-4 py-3'>HELOC</span>
        {list == 'HELOC' && <Dropdown items={HELOCList}/>}
        <span onMouseEnter={()=>setList('rates')} onMouseLeave={()=>setList(null)} className='cursor-pointer hover:bg-white hover:text-black rounded-3xl p-4 py-3'>Rates</span>
        {list == 'rates' && <Dropdown items={rateList}/>}
        <span onMouseEnter={()=>setList('better')} onMouseLeave={()=>setList(null)} className='cursor-pointer hover:bg-white hover:text-black rounded-3xl p-4 py-3'>Better+</span>
        {list == 'better' && <Dropdown items={betterList}/>}
      </div>
      <div className='flex justify-center items-center gap-x-5 pr-8'>
        <img onMouseEnter={()=>setList('call')} onMouseLeave={()=>setList(null)} className='w-11 invert p-3 border border-black rounded-full hover:bg-white hover:invert-0' src={call.src} alt="call" />
        {list == 'call' && <Dropdown items={callList}/>}

        <span className='cursor-pointer duration-150 hover:bg-white hover:text-black rounded-3xl p-4 py-3'>Sign in</span>
      </div>
    </div>
  )
}

export default Navbar