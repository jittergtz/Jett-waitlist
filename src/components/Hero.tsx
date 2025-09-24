"use client"
import React, { ChangeEvent, FormEvent, useState, } from 'react';
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import { AuroraBackground } from './HeroBackground';
import HeroPreview from './HeroPreview';
import { PulsingBorder } from '@paper-design/shaders-react';


function Hero() {
  const [email, setEmail] = useState<string>('');
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  const router = useRouter();
  


  const isValidEmail = (email: string): boolean => {
    return /\S+@\S+\.\S+/.test(email);
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setEmail(value);
    setError(null);
  };

  const submit = async () => {
    setIsLoading(true);
    try {
      // Using the API route approach to handle the database operation securely
      const response = await fetch('/api/waitlist', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ email }),
      });

      if (response.ok) {
        console.log('Email successfully submitted');
        // Simple and reliable navigation
        router.push('/success');
      } else {
        const errorData = await response.json();
        setError(errorData.message || 'Submission failed');
      }
    } catch (error) {
      console.error('Error submitting email:', error);
      setError('An error occurred');
    } finally {
      setIsLoading(false);
    }
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!isValidEmail(email)) {
      setError('Email is invalid');
      return;
    }
    submit();
  };

  return (
   
    <div className="flex flex-col min-h-screen gap-5 pt-16 sm:pt-28 p-2 items-center relative">
        <div className="absolute inset-0 -z-10 h-full w-full items-center px-5 py-24 [background:radial-gradient(125%_125%_at_50%_10%,#000_40%,#171717_110%)]"></div>
        <Image
        src="/Jett-logo2.jpeg"
        alt="One logo"
      
        width={50}
        height={50}
       className='rounded-xl pointer-events-none'
       priority/>
      <h1 className="text-5xl text-center text-transparent bg-clip-text bg-gradient-to-l from-zinc-500 via-zinc-100 to-zinc-500">Better Mail Experience</h1>
      <p className="mx-auto max-w-lg sm:text-lg  text-center text-zinc-400">Lets take your email experience to the next level. Join our waitlist to be the first to know when we launch.

     </p>
      <form onSubmit={handleSubmit} className="flex h-12 pl-3 w-full max-w-xl rounded-full bg-neutral-900 border  border-[#ffffff0a] overflow-hidden">
        <input 
          value={email} 
          onChange={handleChange} 
          type="email" 
          name="email" 
          id="email" 
          required 
          placeholder="Enter your email" 
          className="bg-transparent text-zinc-100 placeholder:text-zinc-500 outline-none w-full"
          disabled={isLoading}
        />
        <button 
          type='submit' 
          className={`px-4 rounded-full transition flex items-center  justify-center min-w-24 ${
            isLoading 
              ? 'bg-neutral-700 text-neutral-300 cursor-not-allowed' 
              : 'text-neutral-900 hover:from-neutral-300 hover:to-white bg-[#ffffffcc]'
          }`}
          disabled={isLoading}
        >
          {isLoading ? (
            <>
              <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
              </svg>
              Submitting...
            </>
          ) : (
            'sign up'
          )}
        </button>
      </form>
      {error && <p className="text-neutral-200 text-light">Youre already on the waitlist!</p>}
      <h3 className='text-transparent bg-clip-text bg-gradient-to-r from-[#888888] via-[#eaeaea] to-[#888888]'>Join the Waitlist</h3>
      <div className=' '>
  

       <div className='flex justify-center p-2 w-screen '>
        <div className='relative  flex justify-center  w-full max-w-5xl overflow-hidden'>
    {/* Desktop version */}
    <div className="hidden md:block">
      <PulsingBorder
        width={1002}
        height={630}
        colors={["#b07145", "#716693", "#ffffffcc"]}
        colorBack="#000"
        roundness={0.05}
        thickness={0.1}
        softness={0.75}
        intensity={0.2}
        bloom={0.45}
        spots={3}
        spotSize={0.4}
        pulse={0.5}
        smoke={0.35}
        smokeSize={0.3}
        speed={0.78}
        scale={0.8}
      />
    </div>
    
    {/* Mobile version */}
    <div className="block md:hidden">
      <PulsingBorder
        width={450} // Mobile width
        height={300} // Mobile height
        colors={["#b07145", "#716693", "#ffffffcc"]}
        colorBack="#000"
        roundness={0.07}
        thickness={0.2}
        softness={0.75}
        intensity={0.2}
        bloom={0.45}
        spots={3}
        spotSize={0.4}
        pulse={0.5}
        smoke={0.15}
        smokeSize={0.3}
        speed={0.78}
        scale={0.8}
      />
    </div>


      <Image
      src={"/jettorange.png"}
      alt='previwew of jett'
      width={2956}
      height={1862}
      priority
      className='object-cover  p-1 md:p-0 absolute rounded-xl top-[28px] md:top-[65px] left-1/2 -translate-x-1/2 z-50  md:w-[800px]  md:h-[500px]   pointer-events-none'
      />
 

      </div>
      </div>
      </div>
    </div>

  );
}

export default Hero;