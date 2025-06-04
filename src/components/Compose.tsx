import React from 'react'
import VideoPlayer from './VideoPlayer'

function Compose() {
  return (
    <div>
        <div className="flex flex-col items-center md:flex-row justify-center gap-5 py-64 p-2">
    <div className="flex flex-col mb-8 md:mb-16 text-center  md:text-start md:items-start gap-3 justify-center">
          <span className="text-zinc-300 flex items-center justify-center gap-2 bg-gradient-to-r bg-clip-text mb-6">
          </span>
          
          <h2 className="font-display text-center  md:text-start text-transparent bg-clip-text bg-gradient-to-br from-[#fff] to-[hsla(0,0%,100%,.5)] text-[3rem] md:text-[3.5rem] tracking-tight leading-[120%] mb-2 relative">
            Compose was <br/>never this easy
          </h2>
          
          <p className="text-md text-center md:text-start md:text-[1.125rem] md:leading-[1.5] text-zinc-400 font-normal">
            <span data-br=":rbh:" data-brr="1">
              Compose faster and more efficiently with our intuitive interface.
              <br className="hidden sm:block" /> 
                Compose is a powerful tool that makes it easy to write, compose beautiful emails, and stay organized.
            </span>
          </p>
        </div>
    
      <VideoPlayer size="small" className="border" videoSrc={"/video/ComposePreview.mov"}/>
      </div>
  
    </div>
  )
}

export default Compose