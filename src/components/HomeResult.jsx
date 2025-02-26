import React from 'react'
import right from '@/assets/home/right.png'
import home from '@/assets/home/home.png'
import one from '@/assets/home/one.png'
import couple1 from '@/assets/home/couple1.png'
import couple2 from '@/assets/home/couple2.png'
import calc1 from '@/assets/home/calc1.png'
import calc2 from '@/assets/home/calc2.png'
import calc3 from '@/assets/home/calc3.png'
import calc4 from '@/assets/home/calc4.png'
import faq1 from '@/assets/home/faq1.png'
import faq2 from '@/assets/home/faq2.png'
import faq3 from '@/assets/home/faq3.png'
import faq4 from '@/assets/home/faq4.png'


function HomeResult() {
  const proData = [
    {
      title:'Buying your first home with Better',
      data:null,
      img:home
    },
    {
      title:'One Day Mortgage',
      data:'Kick your home loan into hyperdrive. Going from locked rate to Commitment Letter takes weeks for traditional lenders. We do it in a single day. Traditional lenders deliver a Commitment Letter in a few weeks.',
      img:one
    },
    {
      title:'Better HELOC',
      data:'Introducing One Day HELOC™—your express lane to getting cash from your home with our Home Equity Line of Credit2. Access up to 90% of your home equity as cash in as little as 7 days.',
      img:couple1
    },
    {
      title:'Insurance',
      data:null,
      img:couple2
    },
  ]
  const calcData = [
    {
      title:'Mortgage calculator',
      data:null,
      img:calc1
    },
    {
      title:'Affordability calculator',
      data:"Got homeownership dreams? Let's put some numbers behind them. Our affordability calculator estimates the maximum home you can afford.",
      img:calc2
    },
    {
      title:'HELOC calculator',
      data:'Need cash? Quickly see how much equity you can borrow from your home and what your monthly payments might be.',
      img:calc3
    },
    {
      title:'Fixed-rate loan comparison calculator',
      data:null,
      img:calc4
    },
  ]
  const faqData = [
    {
      title:'What is a good debt-to-income ratio for a home loan?',
      data:null,
      img:faq1
    },
    {
      title:'Buying a house without realtor',
      data:'Thinking about buying a house without a real estate agent? Read this first.',
      img:faq2
    },
    {
      title:'Timeline for homebuying process',
      data:"Does the process of buying a home seem daunting? Don't stress, we broke it down into 8 easy steps.",
      img:faq3
    },
    {
      title:'Conventional loan requirements',
      data:null,
      img:faq4
    },
  ]
  
  return (
    <div className='px-16 mb-20'>
      <div className='flex justify-center items-center gap-5'>
        <div className='bg-[#F0F7F1] rounded-lg cursor-pointer p-5 px-8 w-[35%] flex flex-col gap-y-5'>
          <span className='font-semibold text-xl block'>Buying your first home with Better</span>
          <img className='w-9 border-black border opacity-70 rounded-full hover:bg-red-300 p-2 hover:invert' src={right.src} alt=''/>
          <img className='rounded-md w-4/5' src={home.src} alt=''/>
        </div>
        <div className='bg-[#F0F7F1] rounded-lg cursor-pointer p-5 px-8 w-[65%] flex'>
          <div className='flex flex-col gap-y-5'>
            <span className='font-semibold text-xl block'>One Day Mortgage<sup>1</sup></span>
            <span>Kick your home loan into hyperdrive. Going from locked rate to Commitment Letter takes weeks for traditional lenders. We do it in a single day. Traditional lenders deliver a Commitment Letter in a few weeks.<sup>1</sup></span>
            <img className='w-9 border border-black opacity-70 rounded-full hover:bg-red-300 p-2 hover:invert' src={right.src} alt=''/>
          </div>
          <img className='rounded-md w-1/3' src={one.src} alt=''/>
        </div>
      </div>
      <div className='flex justify-center items-center gap-5 py-5'>
        <div className='bg-[#F0F7F1] rounded-lg cursor-pointer p-5 px-8 w-[65%] flex gap-5'>
          <img className='rounded-md w-1/3' src={couple1.src} alt=''/>
          <div className='flex flex-col gap-y-5'>
            <span className='font-semibold text-xl block'>Better HELOC<sup>1</sup></span>
            <span>Introducing One Day HELOC™—your express lane to getting cash from your home with our Home Equity Line of Credit2. Access up to 90% of your home equity as cash in as little as 7 days.<sup>3</sup></span>
            <img className='w-9 border border-black opacity-70 rounded-full hover:bg-red-300 p-2 hover:invert' src={right.src} alt=''/>
          </div>
        </div>
        <div className='bg-[#F0F7F1] rounded-lg cursor-pointer p-5 px-8 w-[35%] flex'>
          <div className='flex flex-col gap-y-5'>
            <span className='font-semibold text-xl block'>Insurance</span>
            <img className='w-9 border border-black opacity-70 rounded-full hover:bg-red-300 p-2 hover:invert' src={right.src} alt=''/>
            <img className='rounded-md w-4/5' src={couple2.src} alt=''/>
          </div>
        </div>
      </div>
    </div>
  )
}

export default HomeResult