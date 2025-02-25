import Image from "next/image";
import mobile from '@/assets/home/mobile.png'

export default function Home() {
  return (
    <div className="bg-[#004733] h-screen">
      <div>
        <span className="text-[#1EE07F] text-8xl font-semibold text-center block">Mortgages</span>
        <span className="text-[#1EE07F] text-8xl font-semibold text-center block">made simple</span>
      </div>
      <img className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2' src={mobile.src} alt="" />
    </div>
  );
}
