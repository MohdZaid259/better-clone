import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FooterLInk from "@/components/FooterLInk";

export default function RootLayout({ children }) {

  return (
    <html lang="en">
      <body className={``} >
        <Navbar/>
        {children}
        <FooterLInk/>
        <Footer/>
      </body>
    </html>
  );
}
