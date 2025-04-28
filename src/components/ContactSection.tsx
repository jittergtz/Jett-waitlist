"use client"
import React from 'react';
import { Users } from 'lucide-react';
import Image from 'next/image';
import { motion } from 'motion/react';



const ContactsSection: React.FC = () => {
  return (
    <section className="w-full items-center sm:py-24 mt-[10vh] flex flex-col py-10 px-0">
      <div className='max-w-5xl w-full'>
        <div className="flex flex-col mb-8 md:mb-16 text-center items-center justify-center">
          <span className="text-zinc-300 flex items-center justify-center gap-2 bg-gradient-to-r bg-clip-text  mb-6">
            <Users className="text-zinc-300 w-[18px] stroke-[1.5]" />
            Contacts
          </span>
          
          <h2 className="font-display text-transparent bg-clip-text bg-gradient-to-br from-[#fff] to-[hsla(0,0%,100%,.5)] text-[3rem] md:text-[3.5rem] tracking-tight leading-[120%] mb-2 relative">
            Bring your list <br className="hidden sm:block" /> and grow further
          </h2>
          
          <p className="text-base md:text-[1.125rem] md:leading-[1.5] text-zinc-300 font-normal">
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
          <Image
            alt="Audiences Screenshot"
            src="/desert.jpg"
            width={1232}
            height={657}
            priority
            className="border p-1 pointer-events-none   border-slate-500/5 mb-20 block w-full rounded-2xl"
            style={{
              WebkitMaskImage: 'radial-gradient(circle, rgba(0, 0, 0, 1) 80%, rgba(0, 0, 0, 0) 100%)',
              maskImage: 'radial-gradient(circle, rgba(0, 0, 0, 1) 70%, rgba(0, 0, 0, 0) 100%)',
              WebkitMaskRepeat: 'no-repeat',
              maskRepeat: 'no-repeat',
              WebkitMaskSize: 'cover',
              maskSize: 'cover',
              color: 'transparent',
            }}
          />
        </motion.div>
      </div>
    </section>
  );
};

export default ContactsSection;