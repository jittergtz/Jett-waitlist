'use client';

import { Send } from 'lucide-react';
import React, { useRef, useEffect, useState } from 'react';

interface VideoPlayerProps {
  videoSrc: string;
  posterSrc?: string;
  className?: string;
  loop?: boolean;
  muted?: boolean;
  playbackRate?: number;
  size?: 'full' | 'small';
}

const VideoPlayer: React.FC<VideoPlayerProps> = ({
  videoSrc,
  posterSrc,
  className = '',
  loop = true,
  muted = true,
  playbackRate = 1,
  size = 'full',
}) => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    // Set playback rate
    video.playbackRate = playbackRate;

    // IntersectionObserver to load video only when in viewport
    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;
        if (entry.isIntersecting && !isLoaded) {
          // Load the video when it comes into view
          video.load();
          setIsLoaded(true);
          
          // Attempt to play
          const playPromise = video.play();
          
          if (playPromise !== undefined) {
            playPromise
              .then(() => {
                setIsPlaying(true);
              })
              .catch((error) => {
                // Auto-play was prevented
                console.log("Autoplay prevented:", error);
                // We'll handle this with a play button
              });
          }
        } else if (!entry.isIntersecting && isPlaying) {
          // Pause when out of viewport to save resources
          video.pause();
          setIsPlaying(false);
        } else if (entry.isIntersecting && isLoaded && !isPlaying) {
          // Resume play when back in viewport
          const playPromise = video.play();
          
          if (playPromise !== undefined) {
            playPromise
              .then(() => {
                setIsPlaying(true);
              })
              .catch((error) => {
                console.log("Resume play prevented:", error);
              });
          }
        }
      },
      { threshold: 0.1 } // Trigger when at least 10% of the video is visible
    );

    observer.observe(video);

    return () => {
      observer.disconnect();
    };
  }, [isLoaded, isPlaying, playbackRate]);

  // Function to handle manual play
  const handlePlayClick = () => {
    if (videoRef.current) {
      videoRef.current.play()
        .then(() => setIsPlaying(true))
        .catch(err => console.log("Play failed:", err));
    }
  };

  return (
    <div className={`relative overflow-hidden bg-neutral-800/10 rounded-md  border p-1 md:p-1.5 border-[#343434]  shadow-lg shadow-[#0b0b0bc6]  ${className} `}>
      <video
        ref={videoRef}
        className={`w-full h-full object-cover  ${size === 'small' ? 'max-w-2xl' : ' max-w-[1100px] '} rounded-sm`}
        poster={posterSrc}
        playsInline
        muted={muted}
        loop={loop}
        preload="metadata"
        aria-label="Background video"
      >
        <source src={videoSrc} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      
      { !isPlaying && isLoaded && (
        <button
          className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-30 text-neutral-400"
          onClick={handlePlayClick}
          aria-label="Play video"
        >
       <Send />
        </button>
      )}
      
      {/* Loading state indicator */}
      {!isLoaded && (
        <div className="absolute inset-0 flex items-center justify-center bg-neutral-950">
          <div className="w-12 h-12 border-4 border-gray-300 border-t-blue-600 rounded-full animate-spin"></div>
        </div>
      )}
    </div>
  );
};

export default VideoPlayer; 