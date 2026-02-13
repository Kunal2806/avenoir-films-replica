"use client"
import gsap from "gsap"
import { useEffect, useRef } from "react"

export default function About() {
    const containerRef = useRef<HTMLDivElement | null>(null)

    useEffect(() => {

        const container = containerRef.current
        if (!container) return

        const moveHandler = (e: MouseEvent) => {
        const { innerWidth, innerHeight } = window

        const x = (e.clientX / innerWidth - 0.5) * 30
        const y = (e.clientY / innerHeight - 0.5) * 30

        gsap.to(".parallax", {
            x: -x,
            y,
            duration: 1.2,
            ease: "power1.out"
        })
        gsap.to(".parallax-rev", {
            x: x,
            y: -y,
            duration: 1.2,
            ease: "power1.out"
        })
        }

        window.addEventListener("mousemove", moveHandler)

        return () => {
        window.removeEventListener("mousemove", moveHandler)
        }

    }, [])

    return<>
    <div ref={containerRef} className="w-full relative m-40">
        <div className="w-full flex flex-col justify-center items-center">
            <div className="parallax-rev -z-99 md:h-450 h-200 md:w-430 w-200 top-30 rounded-full bg-foreground"></div>
        </div>
        <div className="w-full h-150 hidden md:flex flex-col">
            <div className="parallax -z-99 h-full w-150 top-30 rounded-full bg-foreground"></div>
        </div>
        <div className="w-full h-120 hidden md:flex flex-col items-end">
            <div className="parallax-rev -z-99 h-full w-120 top-30 rounded-full bg-foreground"></div>
        </div>
        <div className="w-full h-100 hidden md:flex flex-col items-start">
            <div className="parallax -z-99 h-full w-100 top-30 rounded-full bg-foreground"></div>
        </div>
        <div className="w-full h-80 hidden md:flex flex-col items-center">
            <div className="parallax-rev -z-99 h-full w-80 top-30 rounded-full bg-foreground"></div>
        </div>
        <div className="fixed -z-[11] top-0 left-0 w-full h-full text-background flex flex-col justify-center items-center gap-6 sm:gap-8 md:gap-10 px-4 sm:px-6 md:px-8 lg:px-12">
    <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-semibold font-serif tracking-tighter text-center max-w-5xl">
        Creative-first. Production-smart. No fluff.
    </h1>
    <p className="text-sm sm:text-base md:text-lg lg:text-xl tracking-wide sm:tracking-wider text-center max-w-xs sm:max-w-md md:max-w-2xl lg:max-w-4xl leading-relaxed">
        Before anything is filmed, it exists in fragments—an insight, a sentence, a feeling. Our work is to bring those fragments together and make them real.<br/><br/>
        At Avenoir Films, we engage deeply with the "why" behind the brief. We generate original ideas, collaborate on creative development, and execute with precision—across commercials, branded content, and digital stories.<br/><br/>
        We aren't just your production team—we're your thinking partner in every stage of the process.
    </p>
</div>
    </div>
         
    </>
}
