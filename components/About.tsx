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

        const x = (e.clientX / innerWidth - 0.5) * 40
        const y = (e.clientY / innerHeight - 0.5) * 40

        gsap.to(".parallax", {
            x,
            y,
            duration: 4,
            ease: "power2.out"
        })
        gsap.to(".parallax-rev", {
            x: -x,
            y: -y,
            duration: 4,
            ease: "power2.out"
        })
        }

        window.addEventListener("mousemove", moveHandler)

        return () => {
        window.removeEventListener("mousemove", moveHandler)
        }

    }, [])

    return<>
    <div ref={containerRef} className="w-full relative m-40">
        <div className="w-full h-400 flex flex-col justify-center items-center">
            <div className="parallax-rev -z-99 h-450 w-430 top-30 rounded-full bg-foreground"></div>
        </div>
        <div className="w-full h-150 flex flex-col">
            <div className="parallax -z-99 h-full w-150 top-30 rounded-full bg-foreground"></div>
        </div>
        <div className="w-full h-120 flex flex-col items-end">
            <div className="parallax-rev -z-99 h-full w-120 top-30 rounded-full bg-foreground"></div>
        </div>
        <div className="w-full h-100 flex flex-col items-start">
            <div className="parallax -z-99 h-full w-100 top-30 rounded-full bg-foreground"></div>
        </div>
        <div className="w-full h-80 flex flex-col items-center">
            <div className="parallax-rev -z-99 h-full w-80 top-30 rounded-full bg-foreground"></div>
        </div>
        <div className="fixed -z-11 top-50 w-full text-background flex flex-col justify-center items-center gap-10">
            <h1 className="text-6xl font-semibold tracking-tighter">Creative-first. Production-smart. No fluff.</h1>
            <p className="text-md w-4xl tracking-wider">
                Before anything is filmed, it exists in fragments—an insight, a sentence, a feeling. Our work is to bring those fragments together and make them real.<br/><br/>
                At Avenoir Films, we engage deeply with the "why" behind the brief. We generate original ideas, collaborate on creative development, and execute with precision—across commercials, branded content, and digital stories.<br/><br/>
                We aren’t just your production team—we’re your thinking partner in every stage of the process.
            </p>
        </div>
    </div>
         
    </>
}