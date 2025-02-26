'use client'
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FooterLInk from "@/components/FooterLInk";
import { usePathname } from "next/navigation";

export default function RootLayout({ children }) {
  const pathname = usePathname(); 

  return (
    <html lang="en">
      <body className={``} >
        {pathname !== "/start" && <Navbar />}
        {children}
        <FooterLInk/>
        <Footer/>
      </body>
    </html>
  );
}
