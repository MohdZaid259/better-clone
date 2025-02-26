'use client'
import React, { useState } from 'react'
import amanda from "@/assets/home/amanda.png"
import arian from "@/assets/home/arian.png"
import paul from "@/assets/home/paul.png"

function Testimony() {
  const [pic, setPic] = useState()
  const [name, setName] = useState()

  return (
    <div className='flex justify-start items-center flex-col'>
      <img className='w-1/2 -ml-40 rounded-2xl mb-5' src={arian.src} alt="" />
      <div className='flex justify-between items-center gap-4 -ml-40'>
        <div className='border-4 border-green-800 px-4 py-2 rounded-full'>Arian</div>
        <div className='border-4 border-green-800 px-4 py-2 rounded-full'>Amanda</div>
        <div className='border-4 border-green-800 px-4 py-2 rounded-full'>Paul</div>
      </div>
    </div>
  )
}

export default Testimony