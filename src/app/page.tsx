import Bento from "@/components/Bento";
import ContactsSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import VideoPlayer from "@/components/VideoPlayer";



export default function Home() {
  return (
    <div>
    <main className="flex flex-col justify-between bg-black">
   

    <Hero/>
    
    <div className="relative ">
      <div className="absolute inset-0 -z-10 h-full w-full items-center px-5 py-24 [background:radial-gradient(125%_125%_at_50%_120%,#000_80%,#171717_120%)]"></div>
    <ContactsSection/>
      </div>
    
    <div className="flex flex-col items-center md:flex-row justify-center gap-5 py-40 p-2">
    <div className="flex flex-col mb-8 md:mb-16 text-center  md:text-start md:items-start gap-3 justify-center">
          <span className="text-zinc-300 flex items-center justify-center gap-2 bg-gradient-to-r bg-clip-text mb-6">
          </span>
          
          <h2 className="font-display text-center  md:text-start text-transparent bg-clip-text bg-gradient-to-br from-[#fff] to-[hsla(0,0%,100%,.5)] text-[3rem] md:text-[3.5rem] tracking-tight leading-[120%] mb-2 relative">
            Compose was <br/>never this easy
          </h2>
          
          <p className="text-md text-center md:text-start md:text-[1.125rem] md:leading-[1.5] text-zinc-400 font-normal">
            <span data-br=":rbh:" data-brr="1">
              Add contacts in minutes, regardless the size of your list. 
              <br className="hidden sm:block" /> 
              Get full visibility of each contact and their personal attributes.
            </span>
          </p>
        </div>
      <VideoPlayer size="small" videoSrc={"/video/ComposePreview.webm"}/>
      </div>
  
    <Bento/>
 
 
     


    <Footer/>
    </main>
    </div>
  );
}
