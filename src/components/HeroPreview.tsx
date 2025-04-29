import Image from 'next/image'
import React from 'react'

function HeroPreview() {
  return (
    <div className={`relative overflow-hidden bg-neutral-800/10 rounded-lg border p-1 md:p-1.5 border-[#b1b0b0]  shadow-lg shadow-[#0b0b0bc6]`}>
      <Image
      src={"/JettPreview.webp"}
      alt='previwew of jett'
      width={1000}
      height={1000}
      priority
      className='object-cover w-full h-full rounded-lg pointer-events-none'
      />
    </div>
  )
}

export default HeroPreview