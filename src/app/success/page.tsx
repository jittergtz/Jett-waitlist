
import { Demo } from '@/components/Badge'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

function page() {
  return (
    <main className='flex flex-col relative items-center justify-center h-screen '>
      <Link href={"/"} className=' absolute hover:bg-neutral-300 z-50 top-5 left-4  bg-[#c1c3c5] p-1.5 rounded-lg px-4 border border-black/10 text-neutral-600'>Home</Link>
      <Image
      src="/toscana.jpg"
      alt='success'
      priority
      width={1000}
      height={1000}
      className='object-cover w-full z-0 h-full pointer-events-none'/>

      <h1 className='absolute top-20 left-6 text-5xl text-transparent bg-clip-text bg-gradient-to-br from-[#3d4743] to-[#6d6d6d] py-3 tracking-tight leading-[90%] '>
        Thanks for signing up
      </h1>


  
    </main>
  )
}

export default page