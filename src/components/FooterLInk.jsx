import React from 'react'
import logoInvert from '@/assets/footer/logoInvert.png'
import footerHome from '@/assets/footer/footerHome.png'

function FooterLInk() {
  return (
    <div className='py-10'>
      <div className='px-4 md:px-8 lg:px-14 xl:px-20 2xl:px-40 '>
        <img className='block w-24' src={logoInvert.src} alt="logo" />
        
        <div className='flex flex-col md:flex-row justify-center items-start gap-x-8'>
          <div className='flex flex-col gap-y-2'>
            <span className='my-4'>Better is a family of companies serving all your homeownership needs.</span>
            <div className='flex'>
              <img className='w-16' src={logoInvert.src} alt="logo" />
              <p className='text-lg text-gray-400'>Mortage</p>
            </div>
            <span>We can’t wait to say “Welcome home.” Apply 100% online, with expert customer support.</span>
            <div className='flex'>
              <img className='w-16' src={logoInvert.src} alt="logo" />
              <p className='text-lg text-gray-400'>Real Estate</p>
            </div>
            <span>Connect with a local Better Real Estate Partner Agent to find out all the ways you can save.</span>
            <div className='flex'>
              <img className='w-16' src={logoInvert.src} alt="logo" />
              <p className='text-lg text-gray-400'>Cover</p>
            </div>
            <span>Shop, bundle, and save on insurance coverage for home, auto, life, and more.</span>
            <div className='flex'>
              <img className='w-16' src={logoInvert.src} alt="logo" />
              <p className='text-lg text-gray-400'>Inspect</p>
            </div>
            <span>Get free repair estimates, 24-hour turnarounds on reports, and rest easy with our 100-day inspection guarantee.</span>
            <div className='flex'>
              <img className='w-16' src={logoInvert.src} alt="logo" />
              <p className='text-lg text-gray-400'>Settlement Services</p>
            </div>
            <span>Get transparent rates when you shop for title insurance all in one convenient place.</span>
          </div>

          <div className='flex flex-col mt-8 sm:mt-0 gap-y-4'>
            <span className='font-semibold text-lg'>Resources</span>
            <span className=' cursor-pointer'>Home affordability calculator</span>
            <span className=' cursor-pointer'>Mortgage calculator</span>
            <span className=' cursor-pointer'>Free mortgage calculator</span>
            <span className=' cursor-pointer'>Mortgage calculator with taxes</span>
            <span className=' cursor-pointer'>Mortgage calculator with PMI</span>
            <span className=' cursor-pointer'>Rent vs buy calculator</span>
            <span className=' cursor-pointer'>HELOC payment calculator</span>
            <span className=' cursor-pointer'>HELOC vs cash-out refinance calculator</span>
            <span className=' cursor-pointer'>Buy a home</span>
            <span className=' cursor-pointer'>Sell a home</span>
            <span className=' cursor-pointer'>Get home inspection</span>
          </div>

          <div className='flex flex-col mt-8 sm:mt-0 gap-y-4'>
            <span className='font-semibold text-lg'>Company</span>
            <span className='cursor-pointer'>About Us</span>
            <span className='cursor-pointer'>Careers</span>
            <span className='cursor-pointer'>Media</span>
            <span className='cursor-pointer'>Partner With Us</span>
            <span className='cursor-pointer'>Learning center</span>
            <span className='cursor-pointer'>FAQs</span>
            <span className='cursor-pointer'>Investor Relations</span>
          </div>

          <div className='flex flex-col mt-8 sm:mt-0 gap-y-4'>
            <span className='font-semibold text-lg'>Contact Us</span>
            <span className='cursor-pointer'>hello@better.com</span>
            <span className='cursor-pointer'>415-523-8837</span>
            <span className='cursor-pointer'>FAQ</span>
            <span className='cursor-pointer'>Glossary</span>
            <span className='cursor-pointer'>Legal</span>
            <span className='cursor-pointer'>NMLS Consumer Access</span>
            <span className='cursor-pointer'>Privacy Policy</span>
            <span className='cursor-pointer'>Terms of Use</span>
            <span className='cursor-pointer'>Disclosures & Licensing</span>
            <span className='cursor-pointer'>Affiliated Business</span>
            <span className='cursor-pointer'>Browser Disclaimer</span>
            <img className='-mx-4 w-24 sm:w-auto' src={footerHome.src} alt="home" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default FooterLInk