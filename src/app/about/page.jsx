import React from 'react'
import vishal from '@/assets/about/vishal.png'
import backed from '@/assets/about/backed.png'
import Timeline from '@/components/Timeline'

function AboutPage() {
  return (
    <div>
      <section className='hero'>
      <div className='h-screen flex flex-col justify-center items-center'>
        <div className='flex flex-col w-2/3 gap-8'>
          <span className='text-center text-[#017848] font-semibold block text-4xl'>Our mission</span>
          <span className='block text-5xl text-center font-semibold'>We’re making homeownership simpler, faster — and most importantly, more accessible for all Americans.</span>
        </div>
      </div>
      </section>
      <section className='vishal'>
      <div className='flex justify-center items-center'>
        <div className='flex justify-around items-center gap-20 w-2/3'>
          <div className='flex flex-col gap-5'>
            <span className='font-semibold text-3xl'>The status quo is broken</span>
            <span className='block text-gray-600'>The traditional processes around homeownership are opaque and stressful. Fees aren’t transparent and some are simply outrageous in size. Traditional mortgage lending is rife with unnecessary fees and slow, painful processes. It’s a system set up to benefit insiders — not you. Better.com CEO, Vishal Garg, set out to change that.</span>
            <span className='bg-[#017848] px-12 py-5 max-w-max rounded-lg font-semibold cursor-pointer hover:bg-[#116242] text-white duration-100'>Read Vishal's story</span>
          </div>
          <img className='cursor-pointer w-2/5' src={vishal.src} alt="" />
        </div>
      </div>
      </section>
      <section className='greenPanel'>
      <div className='bg-[#017848] w-full flex justify-center items-center py-20 my-20 text-white'>
        <div className='w-2/3 flex flex-col gap-5'>
          <span className='font-bold text-4xl mb-5'>How we’re changing things</span>
          <span>Homeownership is a huge part of our economy. Housing overall is a $33 trillion business, and mortgages account for $15 trillion. Yet home finance operates in the same way it has for decades — through opaque systems and expensive intermediaries whose interests are misaligned with consumers’.</span>
          <span>That’s why Better.com is redefining the homeownership process from the ground up. We’re using technology to make it faster and more efficient, and humans to help make it friendly and enjoyable.</span>
        </div>
      </div>
      </section>
      <section className='backed flex my-10 justify-center items-center'>
      <div className=' w-10/12'>
        <h2 className='text-3xl font-semibold text-center'>Backed by</h2>
        <img className='mt-10' src={backed.src} alt="backed" />
      </div>
      </section>
      <section className='timeline'>
        <h1 className='text-3xl font-semibold text-center my-8'>Company timeline</h1>
        <Timeline/>
      </section>
    </div>
  )
}

export default AboutPage