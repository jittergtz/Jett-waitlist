"use client"
import React from 'react';
import { motion } from 'motion/react';
import VideoPlayer from './VideoPlayer';



const ContactsSection: React.FC = () => {
  return (
    <section className="w-full items-center sm:py-24 mt-[10vh] flex flex-col py-10 px-0">
      <div className='max-w-5xl w-full'>
        <div className="flex flex-col mb-8 md:mb-16  text-center items-center justify-center">
          <span className="text-zinc-300 flex items-center justify-center gap-2 bg-gradient-to-r bg-clip-text mb-6">
          </span>
          
          <h2 className="font-display text-transparent bg-clip-text bg-gradient-to-br from-[#fff] to-[hsla(0,0%,100%,.5)] text-[3rem] md:text-[3.5rem] tracking-tight leading-[120%] mb-2 relative">
            Meet the new <br/> art of emails
          </h2>
          
          <p className="text-md md:text-[1.125rem] md:leading-[1.5] text-zinc-400 font-normal">
            <span data-br=":rbh:" data-brr="1">
              Add contacts in minutes, regardless the size of your list. 
              <br className="hidden sm:block" /> 
              Get full visibility of each contact and their personal attributes.
            </span>
          </p>
        </div>
        
        <motion.div
          initial={{ opacity: 0.1 }}
          whileInView={{ opacity: 0.7 }}
          viewport={{ once: true, amount: 0.1 }}
          transition={{ duration: 5, ease: "easeOut" }}
        >
           <VideoPlayer size="full" videoSrc={"/video/main.webm"}/>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactsSection;