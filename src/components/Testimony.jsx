'use client'
import React, { useState } from 'react'
import amanda from "@/assets/home/amanda.png"
import arian from "@/assets/home/arian.png"
import paul from "@/assets/home/paul.png"

function Testimony() {
  const [pic, setPic] = useState(arian)
  const [name, setName] = useState('Arian')

  const handlePerson = (person) => {
    if (person === 'Arian') {
      setPic(arian);
      setName('Arian');
    } else if (person === 'Amanda') {
      setPic(amanda);
      setName('Amanda');
    } else if (person === 'Paul') {
      setPic(paul);
      setName('Paul');
    }
  };

  return (
    <div className='flex justify-start items-center flex-col'>
      <img className='w-full sm:w-1/2 -ml-40 rounded-2xl mb-5' src={pic.src} alt="" />
      <div className='flex justify-between items-center gap-4 -ml-40'>
        <div onClick={()=>handlePerson('Arian')} className={`border border-black cursor-pointer shadow-[inset_0_0_0_0_black] transition-all duration-300 hover:shadow-[inset_0_0_0_3px_#017848] hover:text-green-800 font-semibold px-5 py-2 rounded-full ${name=='Arian'?'border-green-800 text-green-800':''}`}>Arian</div>
        <div onClick={()=>handlePerson('Amanda')} className={`border border-black cursor-pointer shadow-[inset_0_0_0_0_black] transition-all duration-300 hover:shadow-[inset_0_0_0_3px_#017848] hover:text-green-800 font-semibold px-5 py-2 rounded-full ${name=='Amanda'?'border-green-800 text-green-800':''}`}>Amanda</div>
        <div onClick={()=>handlePerson('Paul')} className={`border border-black cursor-pointer shadow-[inset_0_0_0_0_black] transition-all duration-300 hover:shadow-[inset_0_0_0_3px_#017848] hover:text-green-800 font-semibold px-5 py-2 rounded-full ${name=='Paul'?'border-green-800 text-green-800':''}`}>Paul</div>
      </div>
    </div>
  )
}

export default Testimony