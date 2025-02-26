import React from 'react'
import fb from '@/assets/footer/fb.png'
import linkedin from '@/assets/footer/linkedin.png'
import insta from '@/assets/footer/insta.png'

function Footer() {
  return (
    <div className='text-xs px-40 flex flex-col gap-5 my-10'>
      <div className='flex gap-3'>
        <a href=""><img className='w-5' src={fb.src} alt="" /></a>
        <a href=""><img className='w-5' src={insta.src} alt="" /></a>
        <a href=""><img className='w-5' src={linkedin.src} alt="" /></a>
      </div>
      <div>
      <sup>1</sup> Better Mortgage’s One Day Mortgage™ promotion offers qualified customers who provide certain required financial information/documentation to Better Mortgage within 4 hours of locking a rate on a mortgage loan the opportunity to receive an underwriting determination from Better Mortgage within 24 hours of their rate lock. The underwriting determination is subject to customary terms, including fraud and anti-money laundering checks, that take place pre-closing and which may trigger additional required documentation from the customer. Better Mortgage does not guarantee that initial underwriting approval will result in a final underwriting approval. See <a className='hover:text-green-500 underline' href="One Day Mortgage™ Terms and Conditions." target='_blank'>One Day Mortgage™ Terms and Conditions.</a>
      </div>
      <div>
      <sup>2</sup> Better Mortgage’s One Day HELOC™ promotion offers qualified customers who provide certain required financial information/documentation to Better Mortgage within 4 hours of locking a rate on a HELOC loan the opportunity to receive an underwriting determination from Better Mortgage within 24 hours of their rate lock. The underwriting determination is subject to customary terms, including fraud and anti-money laundering checks, that take place pre-closing and which may trigger additional required documentation from the customer. Better Mortgage does not guarantee that initial underwriting approval will result in final underwriting approval. See <a className='hover:text-green-500 underline' href="One Day Mortgage™ Terms and Conditions." target='_blank'>One Day Heloc™ Terms and Conditions.</a>
      </div>
      <div>
      <sup>3</sup> Assumes borrowers are eligible for the Automated Valuation Model (AVM) to calculate their home value, their loan amount is less than $400,000, all required documents are uploaded to their Better Mortgage online account within 24 hours of application, closing is scheduled for the earliest available date and time, and a notary is readily available. Funding timelines may vary and may be longer if an appraisal is required to calculate a borrower’s home value.
      </div>
<hr className='border my-2' />
      <div>
      © 2025 Better Home & Finance Holding Company and/or its affiliates. Better is a family of companies. Better Mortgage Corporation provides home loans; Better Real Estate, LLC and Better Real Estate California Inc License # 02164055 provides real estate services; Better Cover, LLC sells insurance products; and Better Settlement Services provides title insurance services; and Better Inspect, LLC provides home inspection services. All rights reserved.
      </div>
      <div>
      Home lending products offered by Better Mortgage Corporation. Better Mortgage Corporation is a direct lender. NMLS #330511. 1 World Trade Center, 80th Floor, New York, NY 10007. Loans made or arranged pursuant to a California Finance Lenders Law License. Not available in all states. Equal Housing Lender. <a className='hover:text-green-500 underline' href="One Day Mortgage™ Terms and Conditions." target='_blank'>NMLS Consumer Access</a>
      </div>
      <div>
      Better Real Estate, LLC dba BRE, Better Home Services, BRE Services, LLC and Better Real Estate, and operating in the State of California through its wholly owned subsidiary Better Real Estate California Inc., is a licensed real estate brokerage and maintains its corporate headquarters at 325-41 Chestnut Street, Suite 826, Philadelphia, PA 19106. Here is a full listing of Better Real Estate, LLC’s license numbers. Better Real Estate, LLC provides access to real estate brokerage services via its nationwide network of partner brokerages and real estate agents (“Better Real Estate Partner Agents”). Equal Housing Opportunity. All rights reserved.
      </div>
      <div>
      <a className='hover:text-green-500 underline' href="One Day Mortgage™ Terms and Conditions." target='_blank'>New York State Housing and Anti-Discrimination Notice</a>
      </div>
      <div>
      <a className='hover:text-green-500 underline' href="One Day Mortgage™ Terms and Conditions." target='_blank'>New York Standard Operating Procedures</a>
      </div>
      <div>
      Texas Real Estate Commission: <a className='hover:text-green-500 underline' href="One Day Mortgage™ Terms and Conditions." target='_blank'>Information About Brokerage Services</a> | <a className='hover:text-green-500 underline' href="One Day Mortgage™ Terms and Conditions." target='_blank'>Consumer Protection Notice</a>
      </div>
      <div>
      Better Settlement Services, LLC. 325-41 Chestnut Street, Suite 803, Philadelphia, PA 19106.
      </div>
      <div>
      Homeowners insurance policies are offered through Better Cover, LLC, a Pennsylvania Resident Producer Agency. License #881593. 325-41 Chestnut Street, Suite 807, Philadelphia, PA 19106.
      </div>
      <div>
      Insurance quotes and policies are offered through Better Cover, LLC. A Pennsylvania Resident Producer Agency. License #881593. Here is a full listing of Better Cover, LLC’s license numbers.
      </div>
      <div>
      Better Inspect, LLC maintains its corporate headquarters at 325-41 Chestnut Street, Suite 846, Philadelphia, PA 19106.
      </div>
      <div>
      Better Mortgage Corporation, Better Real Estate, LLC, Better Settlement Services, LLC, Better Cover, LLC, Better Connect, and Better Inspect, LLC are separate operating subsidiaries of Better Home & Finance Holding Company. Each company is a separate legal entity operated and managed through its own management and governance structure as required by its state of incorporation, and applicable and legal and regulatory requirements. Products not available in all states.
      </div>
      <div>
      Any unauthorized use of any proprietary or intellectual property is strictly prohibited. All trademarks, service marks, trade names, logos, icons, and domain names are proprietary to Better Home & Finance Holding Company. Better Home & Finance Holding Company trademarks are federally registered with the U. S. Patent and Trademark Office. Better Cover is a registered trademark with the U.S. Patent and Trademark Office and is owned by Better Cover, LLC.
      </div>
    </div>
  )
}

export default Footer