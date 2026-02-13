"use client"
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useEffect } from 'react';

gsap.registerPlugin(ScrollTrigger);

interface CreativeCardProps {
  title?: string;
  description?: string;
  accentColor?: string;
  direction?: 'left' | 'right' | 'center';
}

const CreativeCard: React.FC<CreativeCardProps> = ({
  title,
  description,
  accentColor,
  direction = 'center'
}: CreativeCardProps) => {
  // Responsive positioning classes
  const positionClasses = {
    left: 'md:mr-auto md:ml-0',
    right: 'md:ml-auto md:mr-0',
    center: 'mx-auto'
  };

  return (
    <div className="creative-card w-full flex justify-center px-4 md:px-0">
      <div 
        className={`w-full md:max-w-[300px] rounded-2xl bg-gradient-to-br from-gray-800 to-gray-900 p-6 md:p-8 ${positionClasses[direction]}`}
      >
        {/* Title */}
        <h2 className="mb-6 md:mb-[30px] font-serif text-xl md:text-2xl font-bold leading-tight md:leading-6 text-white">
          {title}
        </h2>
        
        {/* Accent Circle */}
        <div 
          className="mb-3 md:mb-4 h-5 w-5 md:h-6 md:w-6 rounded-full"
          style={{ backgroundColor: accentColor }}
        />
        
        {/* Description */}
        <p className="text-sm md:text-base leading-relaxed text-white">
          {description}
        </p>
      </div>
    </div>
  );
};

export default function WhatWeDoResponsive() {
  const services = [
    {
      title: "Creative & Concept Development",
      description: "We help shape the idea—scripts, treatments, and everything that gets it rolling.",
      accentColor: "#FF0080",
      direction: 'left' as const
    },
    {
      title: "Branded Films & Commercials",
      description: "Ads, brand films, and campaigns that don't just look good—they work.",
      accentColor: "#00FF80",
      direction: 'right' as const
    },
    {
      title: "Social & Digital Video",
      description: "Sharp, platform-first content built for today's audiences.",
      accentColor: "#0080FF",
      direction: 'left' as const
    },
    {
      title: "Full-Scale Production",
      description: "From pre to post, we handle it all—crew, gear, locations, the works.",
      accentColor: "#FFD700",
      direction: 'right' as const
    },
    {
      title: "Post-Production & Finishing",
      description: "Editing, color grading, sound design, and VFX that polish your vision.",
      accentColor: "#FF6B35",
      direction: 'left' as const
    },
    {
      title: "Strategy & Consultation",
      description: "Creative direction and production consulting to keep your project on track.",
      accentColor: "#9D4EDD",
      direction: 'right' as const
    }
  ];

  useEffect(()=>{
    const ctx = gsap.context(() =>{
        gsap.to(".pin-card", {
            scrollTrigger:{
                trigger: ".trigger-card",
                start: "top bottom",
                end: "bottom top",
                scrub: true,
                toggleActions: "play none restart reverse",
                pin: ".pin-card",
                pinSpacing: false,
                // markers: {
                //     startColor: "red",
                //     endColor: "blue",
                //     fontSize: "12px",
                // }
            }   
        });
        const cards = gsap.utils.toArray<HTMLElement>(".creative-card");

        cards.forEach((card, index) => {
          const rotateValue = index % 2 === 0 ? 20 : -20;
          gsap.fromTo(
            card,
            { 
              rotate: rotateValue, 
              scale: 0.9 
            },
            {
              rotate: 0,
              scale: 1,
              ease: "none",
              scrollTrigger: {
                trigger: card,
                start: "top 85%",
                end: "top 40%",
                scrub: true,
              }
            }
          );
        });
    });
    return() => ctx.revert();
  },[]);
  

  return (
    <div className="flex flex-col justify-center items-center w-full min-h-screen py-12 md:py-20 px-4 md:px-0">
      <h1 className="pin-card w-full text-4xl md:text-6xl lg:text-8xl font-serif font-bold mb-32 md:mb-48 lg:mb-[288px] text-foreground text-center">
        What We Do
      </h1>
      
      <div className="z-1 trigger-card w-full max-w-5xl mb-32 md:mb-40 lg:mb-[150px] space-y-6 md:space-y-0">
        {services.map((service, index) => (
          <CreativeCard
            key={index}
            title={service.title}
            description={service.description}
            accentColor={service.accentColor}
            direction={service.direction}
          />
        ))}
      </div>
      <VideoHeroSection/>
    </div>
  );
}

export function VideoHeroSection() {
  return (
    <div className="relative w-full h-[600px] md:h-[400px] lg:h-[500px] overflow-hidden">
      {/* Video Background */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover"
      >
        <source
          src="https://video.wixstatic.com/video/c837a6_c20df77145244751ae2c4cd82235be8c/1080p/mp4/file.mp4"
          type="video/mp4"
        />
        Your browser does not support the video tag.
      </video>

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/40" />

      {/* Content */}
      <div className="relative z-10 flex items-center justify-center h-full px-4">
        <div className="text-center text-white">
          <h2 className="text-sm md:text-lg lg:text-xl xl:text-2xl font-light tracking-tight mb-3 md:mb-4 uppercase">
            Content Crafted With
          </h2>
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold tracking-tight">
            PURPOSE AND CARE
          </h1>
        </div>
      </div>
    </div>
  );
}