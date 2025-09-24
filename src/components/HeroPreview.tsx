import { PulsingBorder } from '@paper-design/shaders-react'
import Image from 'next/image'
import React from 'react'

function HeroPreview() {
  return (
    <div className={`relative w-screen overflow-hidden bg-neutral-800/10 rounded-lg border p-1 md:p-1.5 border-[#38383865]  shadow-lg shadow-[#0b0b0bc6]`}>


<Image
      src={"/jettokt.png"}
      alt='previwew of jett'
      width={2956}
      height={1862}
      priority
      className='object-cover z-50 w-96 h-96  border pointer-events-none'
      />

    </div>
  )
}

export default HeroPreview