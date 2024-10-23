
import Link from "next/link";
import Footer from "./components/Footer";
export default function Home() {
  return (
   <div>
    <h1></h1>
    <ul className="flex gap-10 bg-blue-600">
      <li> <Link href="/">Home</Link></li>
      <li> <Link href="/about">About</Link></li>
      <li> <Link href="contact-us">contact us</Link></li>
      <li><Link href="/jobs">jobs</Link></li>
    </ul>
   <img src="https://wallpapercave.com/wp/wp11847020.png" alt="loading" width={700} height={350}  />
   <Footer/>
   </div>
  );
} 
