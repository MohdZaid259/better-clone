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
    <div>
      <nav>
        <img src={lLogo.src} alt="" />
        <div>
          <img src={lcall.src} alt="" />
          <span>Need help? Call (415) 523 8837</span>
        </div>
      </nav>
      <div>
        <hr className='border-2'/>
        <img className='w-12 rounded-full' src={last.src} alt="" />
      </div>
      <div>
        <span className='text-4xl font-semibold text-gray-800'>Hi, I'm Betsy! What can I help you with?</span>
        <div>
          <img src={ll1.src} alt="" />
          <span>Buying a home</span>
        </div>
        <div>
          <img src={ll2.src} alt="" />
          <span>Refinance my mortgage</span>
        </div>
        <div>
          <img src={ll3.src} alt="" />
          <span>Get cash from my home</span>
        </div>
      </div>
      <div>
        <div>
        <span>$100B</span>
        <span>home loans funded entirely online</span>
        </div>
        <div>
        <span>400K</span>
        <span>Customers who chose a Better Mortgage</span>
        </div>
      </div>
      <div>
        <span>After a few questions, you'll unlock:</span>
        <div>
          <img src={l1.src} alt="" />
          <span>Custom mortgage rates</span>
        </div>
        <div>
          <img src={l2.src} alt="" />
          <span>Exclusive offers</span>
        </div>
        <div>
          <img src={l3.src} alt="" />
          <span>A personalized dashboard</span>
        </div>
      </div>
    </div>
  )
}

export default page