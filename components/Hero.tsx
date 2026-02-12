"use client"
import { Volume2, VolumeX } from "lucide-react";
import { useRef, useState } from "react";

export default function Hero() {
    const [muted, setMuted] = useState(true);
    const videoRef = useRef<HTMLVideoElement>(null);
    
    const toggleMute = () => {
        if (videoRef.current) {
            videoRef.current.muted = !muted;
            setMuted(!muted);
        }
    };

    return (
        <div className="relative w-[95%] h-[600px] mx-auto overflow-hidden rounded-[3rem]">
            
            <video
                ref={videoRef}
                src="https://video.wixstatic.com/video/5084b6_7fb11ae6dbba4aecbbe62aacf07886df/720p/mp4/file.mp4"
                autoPlay
                muted
                loop
                playsInline
                className="absolute inset-0 w-full h-full object-cover"
            />

            <div className="absolute inset-0 bg-black/30" />

            <div className="relative z-10 flex h-full flex-col items-center justify-center text-center text-foreground px-4">
                <h1 className="text-7xl font-display tracking-tight">
                    avenoir.
                </h1>
                <p className="mt-4 text-lg max-w-2xl font-sans">
                    commercials, Films & Digital Content Production Company
                </p>
            </div>
            
            <button
                onClick={toggleMute}
                className="absolute bottom-6 right-6 z-20 text-white bg-black/40 backdrop-blur-md p-3 rounded-full hover:scale-105 transition"
            >
                {muted ? <VolumeX size={20} /> : <Volume2 size={20} />}
            </button>
        </div>
    );
}