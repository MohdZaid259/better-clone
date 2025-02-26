'use client'
import React, { useState } from 'react'

function HomeFaq() {
  const [name,setName] = useState('product')

  return (
    <div className='flex justify-center items-center gap-x-5'>
      <span className={`border-4 cursor-pointer hover:border-green-800 hover:text-green-800 font-semibold px-3 py-1 rounded-full ${name=='product'?'border-green-800 text-green-800':''}`}>Our products</span>
      <span className={`border-4 cursor-pointer hover:border-green-800 hover:text-green-800 font-semibold px-3 py-1 rounded-full ${name=='calculator'?'border-green-800 text-green-800':''}`}>Calculators</span>
      <span className={`border-4 cursor-pointer hover:border-green-800 hover:text-green-800 font-semibold px-3 py-1 rounded-full ${name=='faq'?'border-green-800 text-green-800':''}`}>Guides & FAQs</span>
    </div>
  )
}

export default HomeFaq