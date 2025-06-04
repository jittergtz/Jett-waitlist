
import { AuroraBackground } from "@/components/HeroBackground"
import Image from "next/image"
import Link from "next/link"
import React from "react"

function page() {
  return (

      <AuroraBackground className='min-h-screen   h-full pb-20'>
       <Image
        src="/Jett-logo2.jpeg"
        alt="One logo"
      
        width={70}
        height={70}
       className='rounded-xl pointer-events-none'
       priority/>
      <h1 className=" text-3xl sm:text-5xl text-center text-zinc-700 z-50 font-semibold tracking-tighter  py-3 leading-[90%] ">
        Thanks for signing up
      </h1>
      <p className="text-lg text-zinc-600 text-center">We sent you an Email with access details when were ready</p>
      <Link
        href={"/"}
        className=" mt-5 hover:bg-neutral-300 z-50 top-5 left-4  bg-[#2d2d2d] p-1.5 rounded-lg px-4 border border-black/10 text-neutral-400"
      >
      Back  Home
      </Link>
      </AuroraBackground>

  )
}

export default page
