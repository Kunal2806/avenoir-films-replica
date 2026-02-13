"use client"
import gsap from "gsap";
import { useEffect } from "react";
import {ScrollTrigger} from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);
        
export default function WhatMakeUs() {
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

  useEffect(() => {
    const ctx = gsap.context(()=>{
      gsap.to(".movebar", {
        right: "0%",
        ease: "power2.out",
        scrollTrigger:{
          trigger: ".movebar",
          start: "top bottom",
          end: "bottom top",
          scrub: 2,
          toggleActions: "play none restart reverse",
        },
      })

      gsap.fromTo(".textScale",{scale: 1}, {
        scale: 0.8,
        ease: "power2.out",
        scrollTrigger:{
          trigger: ".textScale",
          start: "top center",
          end: "bottom top",
          scrub: 2,
          toggleActions: "play none restart reverse",
        },
        markers: {
          startColor: "red",
          endColor: "blue",
          fontSize: "12px",
        }
      })

      gsap.to(".pin-card-what-make-us", {
        scale: 5,
        ease: "power2.out",
        scrollTrigger:{
          trigger: ".trigger-card-what-make-us",
          start: "top bottom",
          end: "bottom center",
          scrub: true,
          toggleActions: "play none restart reverse",
          pin: ".pin-card-what-make-us",
          pinSpacing: false,
          // markers: {
          //     startColor: "red",
          //     endColor: "blue",
          //     fontSize: "12px",
          // }
        }   
        });

        const cards = gsap.utils.toArray<HTMLElement>(".creative-card-what-make-us");

        cards.forEach((card) => {
          gsap.fromTo(
            card,
            { 
              scale: 0.5 
            },
            {
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
      return()=> ctx.revert();
    })
  },[]);
  return (
    <div className="w-full flex flex-col items-center justify-center overflow-hidden">
      <div className="relative w-full pb-18 border-b-2">
        <div className="">
          <h2 className="uppercase text-2xl font-serif font-light text-center">What Makes Us</h2>
          <h1 className="uppercase text-6xl font-serif font-light text-center">Avenoir</h1>
        </div>
        <p className="movebar absolute -bottom-2.5 transform -translate-x-1/2 text-white">|</p>
      </div>
      <div className="w-full flex flex-col items-center justify-center">
        <div className="pin-card-what-make-us h-100 w-100 bg-foreground rounded-full my-40"></div>
        <div className=" trigger-card-what-make-us z-1 w-full max-w-5xl flex flex-col items-center justify-center gap-20">
        {services.map((service, index) => (
          <CreativeCard
            key={index}
            title={service.title}
            description={service.description}
            accentColor={service.accentColor}
          />
        ))}
      </div>
      </div>
    </div>
  );
}


interface CreativeCardProps {
  title?: string;
  description?: string;
  accentColor?: string;
}

const CreativeCard: React.FC<CreativeCardProps> = ({
  title,
  description,
  accentColor,
}: CreativeCardProps) => {
  // Responsive positioning classes
  const positionClasses = {
    left: 'md:mr-auto md:ml-0',
    right: 'md:ml-auto md:mr-0',
    center: 'mx-auto'
  };

  return (
    <div className="w-full flex justify-center px-4 md:px-0">
  <div 
    className="creative-card-what-make-us w-full md:min-w-[150px] max-w-2xl rounded-2xl bg-background/50 backdrop-blur p-5 md:p-6"
  >
    <div className="flex flex-row items-center mb-4 md:mb-[80px] gap-2">
      {/* Accent Circle */}
      <div 
        className="h-3 w-3 md:h-4 md:w-4 rounded-full flex-shrink-0"
        style={{ backgroundColor: accentColor }}
      />
      {/* Title */}
      <h2 className="font-serif text-lg md:text-xl lg:text-2xl font-bold leading-tight md:leading-6 text-white">
        {title}
      </h2>
    </div>
    
    {/* Description */}
    <p className="text-sm md:text-base leading-relaxed text-white">
      {description}
    </p>
  </div>
</div>
  );
};