import Hero from "@/component/Hero/Hero";
import Navbar from "@/component/Navbar/Navbar";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <div className="w-full h-screen bg-white">
        <Navbar />
        <Hero />
        
      </div>
    </>
  );
}
