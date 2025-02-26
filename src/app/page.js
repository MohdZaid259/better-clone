import mobile from '@/assets/home/mobile.png'
import stopwatch from '@/assets/home/stopwatch.png'
import google from '@/assets/home/google.png'
import star from '@/assets/home/star.png'
import hstar from '@/assets/home/hstar.png'
import Bot from "@/components/Bot";
import trust from "@/assets/home/trust.png"
import Testimony from '@/components/Testimony'

export default function Home() {
  return (
    <>
    <section className="hero">
    <div className="bg-[#004733] h-screen">
      <div className="absolute z-20 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-2/3 text-9xl font-semibold">
        <span className="text-[#1EE07F] text-center block">Mortgages</span>
        <span className="text-[#1EE07F] text-center block">made simple</span>
      </div>
      <div className="flex justify-around items-center ">
        <div className="flex flex-col">
          <div className="bg-[#1EE07F] inline-block px-10 py-4 rounded-3xl hover:text-white  hover:bg-transparent duration-100">Start my approval</div>
          <div className="flex justify-center items-center mt-2">
            <img className='w-4 h-4 invert' src={stopwatch.src} alt="" />
            <div className="mx-1 text-white text-sm">3 min | No credit impact</div>
          </div>
        </div>
        {/* <img className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1 scale-125' src={mobile.src} alt="" /> */}
        <div>
          <div className="flex justify-center items-center gap-1">
            <img className='w-7 h-7' src={google.src} alt="" />
            <img className='w-5 h-5' src={star.src} alt="" />
            <img className='w-5 h-5' src={star.src} alt="" />
            <img className='w-5 h-5' src={star.src} alt="" />
            <img className='w-5 h-5' src={star.src} alt="" />
            <img className='w-5 h-5' src={hstar.src} alt="" />
          </div>
          <span className="mx-1 text-white text-xs">4.6 Stars | 3177 Google reviews</span>
        </div>
      </div>
      <Bot/>
    </div>
    </section>
    <section className="testimony">
    <div className='flex justify-center items-center p-28'>
      <Testimony/>
      <div className=''>
        <h1 className="text-8xl text-gray-800 font-semibold">Find out why we’re better.</h1>
        <div className="bg-[#004733] inline-block px-12 py-5 mt-6 mb-3 rounded-full font-semibold hover:bg-[#137b5e] text-white  hover:bg-transparent duration-100">See all our stories</div>
        <div className="flex justify-start items-center gap-x-2">
          <img className="w-24" src={trust.src} alt="trust"/>
          <p className='text-gray-600 font-semibold'>Excellent 4.4 <span>out of 5</span></p>
        </div>
      </div>
    </div>
    </section>
    </>
  );
}
