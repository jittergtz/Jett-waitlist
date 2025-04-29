
import Image from 'next/image'
import React from 'react'

function Bento() {
  return (
    <section className='flex min-h-screen p-6 py-28 justify-center bg-radial-[at_10%_46%] from-[#ffffff] to-[#bfbebe] to-60%'>
    <div className='w-full max-w-5xl   flex flex-col items-center justify-center gap-2'>
    <h2 className="font-display text-transparent bg-clip-text bg-gradient-to-br from-[#000000] to-[#1f1f1f] font-[600] text-[54px] md:text-[3.5rem] tracking-tight leading-[120%] mb-2 relative">
            Bring your <br className="hidden sm:block" /> own style.
          </h2>
        <div className='bg-black border border-neutral-700/20 h-96 w-full rounded-xl'></div>
        <div className='flex flex-col sm:flex-row w-full gap-2 items-center'>
            <div className='h-72 w-full relative overflow-hidden rounded-xl bg-black border border-neutral-700/20'>
            <Image
            src={"/betaJett.jpeg"}
            alt='beta jett icon'
            height={1000}
            width={1000}
            className='w-56 absolute sm:w-72 sm:left-5 top-10 left-7 sm:top-8 '/>
            <h1 className='absolute top-4 left-10 text-5xl tracking-tighter font-display text-transparent bg-clip-text bg-gradient-to-br from-[#747474] to-[#ffffff]'>
                Get Access to the Beta
                </h1>
            </div>
            <div className='h-72  w-full rounded-xl bg-black border border-neutral-700/20'>
            <p>sdpjfpodsjfpdosfjdpsofjdposfjpdosjfpodsjf</p>
            </div>
        </div>
    </div>
    </section>
  )
}

export default Bento