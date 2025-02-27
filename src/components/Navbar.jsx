'use client'
import React, { useState } from 'react'
import logo from '@/assets/nav/logo.png'
import call from '@/assets/nav/call.png'
import {buyList, RefinanceList, HELOCList, rateList, betterList, callList} from '@/assets/navList.js'
import Dropdown from './Dropdown'
import logoBnw from '@/assets/nav/logoBnw.png'
import { usePathname } from "next/navigation";

function Navbar() {
  const path = usePathname(); 
  const [list, setList] = useState(null)

  if(path == "/start") return null
  return (
    <div className={`flex justify-between items-center py-5 sticky z-50 left-0 top-0 ${path=='/'?'bg-[#004733] text-white':'bg-white text-black'} px-12`}>
      <div className='flex justify-center  items-center gap-x-8 '>
        <img className='w-20 cursor-pointer' src={path === "/" ? logo.src : logoBnw.src} alt="logo" />
        <span onMouseEnter={()=>setList('buy')} onMouseLeave={()=>setList(null)} className='cursor-pointer hover:bg-white hover:text-black rounded-3xl p-4 py-3'>Buy</span>
        {list == 'buy' && <Dropdown items={buyList} name={'buy'}/>}
        <span onMouseEnter={()=>setList('refinance')} onMouseLeave={()=>setList(null)} className='cursor-pointer hover:bg-white hover:text-black rounded-3xl p-4 py-3'>Refinance</span>
        {list == 'refinance' && <Dropdown items={RefinanceList} name={'refinance'}/>}
        <span onMouseEnter={()=>setList('HELOC')} onMouseLeave={()=>setList(null)} className='cursor-pointer hover:bg-white hover:text-black rounded-3xl p-4 py-3'>HELOC</span>
        {list == 'HELOC' && <Dropdown items={HELOCList} name={'HELOC'}/>}
        <span onMouseEnter={()=>setList('rates')} onMouseLeave={()=>setList(null)} className='cursor-pointer hover:bg-white hover:text-black rounded-3xl p-4 py-3'>Rates</span>
        {list == 'rates' && <Dropdown items={rateList} name={'rates'}/>}
        <span onMouseEnter={()=>setList('better')} onMouseLeave={()=>setList(null)} className='cursor-pointer hover:bg-white hover:text-black rounded-3xl p-4 py-3'>Better+</span>
        {list == 'better' && <Dropdown items={betterList} name={'better'}/>}
      </div>
      <div className='flex justify-center items-center gap-x-5 pr-8'>
        <img onMouseEnter={()=>setList('call')} onMouseLeave={()=>setList(null)} className='w-10 invert p-3 border border-black rounded-full hover:bg-white hover:invert-0' src={call.src} alt="call" />
        {list == 'call' && <Dropdown items={callList}/>}
        <span className='text-sm cursor-pointer duration-150 hover:bg-white hover:text-black rounded-3xl p-4 py-3'>Sign in</span>
      </div>
    </div>
  )
}

export default Navbar

// export default function Navbar() {
//   const [isDropdownOpen, setIsDropdownOpen] = useState(false)

//   const toggleDropdown = () => {
//     setIsDropdownOpen(!isDropdownOpen)
//   }

//   const closeDropdown = () => {
//     setIsDropdownOpen(false)
//   }

//   return (
//     <nav className="bg-emerald-900 text-white p-4 relative">
//       <div className="container mx-auto flex items-center">
//         {/* Logo */}
//         <Link href="/" className="text-2xl font-bold mr-10">
//           Better
//         </Link>

//         {/* Navigation Items */}
//         <div className="flex space-x-6">
//           {/* Buy - with dropdown */}
//           <div className="relative">
//             <button
//               onClick={toggleDropdown}
//               className="flex items-center px-4 py-2 rounded-full bg-white text-emerald-900 font-medium"
//             >
//               Buy
//             </button>

//             {/* Dropdown Menu */}
//             {isDropdownOpen && (
//               <div className="absolute top-full left-0 mt-2 w-72 bg-white rounded-md shadow-lg z-50 p-4">
//                 <div className="flex flex-col space-y-4">
//                   <Link href="/apply" className="text-black font-medium text-lg" onClick={closeDropdown}>
//                     Apply now
//                   </Link>

//                   <Link
//                     href="/purchase-rates"
//                     className="flex items-center justify-between text-black bg-gray-100 p-3 rounded-md"
//                     onClick={closeDropdown}
//                   >
//                     <span>Purchase rates</span>
//                     <ChevronRight className="h-5 w-5 text-emerald-900" />
//                   </Link>

//                   <Link href="/affordability-calculator" className="text-black" onClick={closeDropdown}>
//                     Affordability calculator
//                   </Link>

//                   <Link href="/mortgage-calculator" className="text-black" onClick={closeDropdown}>
//                     Mortgage calculator
//                   </Link>

//                   <Link href="/rent-vs-buy-calculator" className="text-black" onClick={closeDropdown}>
//                     Rent vs buy calculator
//                   </Link>

//                   <Link href="/find-agent" className="text-black" onClick={closeDropdown}>
//                     Find an agent
//                   </Link>

//                   <Link href="/va-loans" className="text-black" onClick={closeDropdown}>
//                     VA loans
//                   </Link>

//                   <Link href="/learning-center" className="text-black" onClick={closeDropdown}>
//                     Learning center
//                   </Link>
//                 </div>
//               </div>
//             )}
//           </div>

//           {/* Other Navigation Items */}
//           <Link href="/refinance" className="px-4 py-2">
//             Refinance
//           </Link>

//           <Link href="/heloc" className="px-4 py-2">
//             HELOC
//           </Link>

//           <Link href="/rates" className="px-4 py-2">
//             Rates
//           </Link>

//           <Link href="/better-plus" className="px-4 py-2">
//             Better+
//           </Link>
//         </div>
//       </div>

//       {/* Overlay to close dropdown when clicking outside */}
//       {isDropdownOpen && <div className="fixed inset-0 z-40 bg-transparent" onClick={closeDropdown} />}
//     </nav>
//   )
// }

