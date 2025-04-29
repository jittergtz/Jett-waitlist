import Bento from "@/components/Bento";
import ContactsSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import VideoPlayer from "@/components/VideoPlayer";



export default function Home() {
  return (
    <div>
    <main className="flex flex-col justify-between ">
   

      <Hero/>
    
    <div className="relative ">
      <div className="absolute inset-0 -z-10 h-full w-full items-center px-5 py-24 [background:radial-gradient(125%_125%_at_50%_120%,#000_80%,#171717_120%)]"></div>
         <ContactsSection/>
      </div>
    
  
      <Bento/>
 
 
  <VideoPlayer videoSrc={"/video/ComposePreview.webm"}/>


    <Footer/>
    </main>
    </div>
  );
}
