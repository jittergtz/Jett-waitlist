
import Image from 'next/image'
import React from 'react'

function Bento() {
  return (
    <section className='flex min-h-screen p-6 py-28 justify-center bg-radial-[at_10%_46%] from-[#ffffff] to-[#bfbebe] to-60%'>
    <div className='w-full max-w-5xl   flex flex-col items-center justify-center gap-2'>
    <h2 className="font-display text-transparent bg-clip-text bg-gradient-to-br from-[#000000] to-[#1f1f1f] font-[600] text-[54px] md:text-[3.5rem] tracking-tight leading-[120%] mb-10 relative">
            Bring your <br className="hidden sm:block" /> own style.
          </h2>
        <div className='bg-black relative overflow-hidden  h-96 w-full rounded-xl'>
     
        <Image
        src={"/raylong.jpg"}
        alt='cover'
        fill
        className='object cover z-0 opacity-45 pointer-events-none'/>
        
       
        </div>
      
        <div className='flex flex-col sm:flex-row w-full gap-2 items-center'>
            <div className='h-72 w-full relative overflow-hidden rounded-xl bg-radial-[at_95%_25%] from-[#000000] to-zinc-900 to-75% '>
            <Image
        src={"/raylong.jpg"}
        alt='cover'
        fill
        className='object cover opacity-45 pointer-events-none'/>
          
            </div>
            <div className='h-72 relative w-full rounded-xl bg-black border border-neutral-700/20'>
            <Image
        src={"/ray1.webp"}
        alt='cover'
        fill
        className='object cover opacity-35 pointer-events-none'/>
            </div>
        </div>
    </div>
    </section>
  )
}

export default Bento