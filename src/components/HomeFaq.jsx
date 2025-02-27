'use client'
import React, { useState } from 'react'

// state lift up
function HomeFaq(props) {
  const [name,setName] = useState('product')

  function handleClick(e){
    let newName = 'product';
    if(e.target.innerText == 'Our products') newName = ('product')
    if(e.target.innerText == 'Calculators') newName = ('calculator')
    if(e.target.innerText == 'Guides & FAQs') newName = ('faq')

    setName(newName)
    props.getData(newName)
  }

  return (
    <div className='flex justify-center items-center gap-x-5'>
      <span onClick={handleClick} className={`border border-black text-nowrap cursor-pointer shadow-[inset_0_0_0_0_black] transition-all duration-300 hover:shadow-[inset_0_0_0_3px_#017848] hover:text-green-800 font-semibold px-5 py-2 rounded-full ${name=='product'?'border-green-800 text-green-800':''}`}>Our products</span>
      <span onClick={handleClick} className={`border border-black text-nowrap cursor-pointer shadow-[inset_0_0_0_0_black] transition-all duration-300 hover:shadow-[inset_0_0_0_3px_#017848] hover:text-green-800 font-semibold px-5 py-2 rounded-full ${name=='calculator'?'border-green-800 text-green-800':''}`}>Calculators</span>
      <span onClick={handleClick} className={`border border-black text-nowrap cursor-pointer shadow-[inset_0_0_0_0_black] transition-all duration-300 hover:shadow-[inset_0_0_0_3px_#017848] hover:text-green-800 font-semibold px-5 py-2 rounded-full ${name=='faq'?'border-green-800 text-green-800':''}`}>Guides & FAQs</span>
    </div>
  )
}

export default HomeFaq