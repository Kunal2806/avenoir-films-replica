'use client';

import React, { useState, useEffect } from 'react';

interface LetsShootHeroProps {
  images?: string[];
  interval?: number;
  text?: string;
  showArrow?: boolean;
}

export default function LetsShootHero({
  images = [
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRk15sbE1rqNCang1N3C0PYlUdVaTyslnST3w&s',
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRu0ERNtyUtnWw4D4cq6mVFVhWk8v3ZO2RPKQ&s',
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRRxYIQbvBYl-dCK1pK3OmKulexdqRgvpJ5_w&s',
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQp6iGzRDZWTBybPA2NNAjMQ2jkpYAPZUjblQ&s',
  ],
  interval = 500,
  text = "Let's Shoot!",
  showArrow = false
}: LetsShootHeroProps) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % images.length);
    }, interval);

    return () => clearInterval(timer);
  }, [images.length, interval]);

  return (
    <div className="relative w-full h-100 bg-black flex items-center justify-center overflow-hidden">
  {/* Main text with image clipping - ONLY place images are visible */}
  <div className="relative z-10 px-4 sm:px-6 md:px-8">
    <h1 
      className="text-5xl sm:text-7xl md:text-8xl lg:text-9xl xl:text-[10rem] font-serif font-bold leading-none text-center"
      style={{
        backgroundImage: `url(${images[currentImageIndex]})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        WebkitBackgroundClip: 'text',
        backgroundClip: 'text',
        WebkitTextFillColor: 'transparent',
        color: 'transparent',
      }}
    >
      {text}
    </h1>
  </div>

  {/* Arrow indicator */}
  {showArrow && (
    <div className="absolute bottom-6 sm:bottom-8 md:bottom-12 right-6 sm:right-8 md:right-12 z-20">
      <p className='-rotate-90 text-4xl sm:text-5xl md:text-6xl font-light'>{">"}</p>
    </div>
  )}
</div>
  );
}