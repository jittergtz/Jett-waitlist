
import Image from "next/image"
import Link from "next/link"
import React from "react"

function page() {
  return (
    <main className="flex flex-col  items-center justify-center h-screen ">
       <Image
        src="/Jett-logo2.jpeg"
        alt="One logo"
      
        width={70}
        height={70}
       className='rounded-xl pointer-events-none'
       priority/>
      <h1 className=" text-3xl sm:text-5xl text-center text-transparent bg-clip-text bg-gradient-to-br from-[#3d4743] to-[#6d6d6d] py-3 tracking-tight leading-[90%] ">
        Thanks for signing up
      </h1>
      <Link
        href={"/"}
        className="  hover:bg-neutral-300 z-50 top-5 left-4  bg-[#2d2d2d] p-1.5 rounded-lg px-4 border border-black/10 text-neutral-600"
      >
      Back  Home
      </Link>
    </main>
  )
}

export default page
