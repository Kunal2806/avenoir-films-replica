'use client';

export default function Contact() {
  return (
    <div className="min-h-screen bg-black text-white flex items-center justify-center px-6 py-12">
      <div className="w-full max-w-6xl flex flex-col md:flex-row items-center justify-center gap-12 md:gap-40">
        
        {/* Left side - Circle with "Contact" text */}
        <div className="flex-shrink-0">
          <div className="w-[300px] h-[300px] md:w-[400px] md:h-[400px] bg-[#F5F1E8] rounded-full flex items-center justify-center">
            <h1 className="text-black text-6xl md:text-7xl font-serif italic">
              Contact
            </h1>
          </div>
        </div>

        {/* Right side - Contact information */}
        <div className="flex flex-col gap-12 text-left">
          
          {/* First contact block */}
          <div>
            <p className="text-lg md:text-lg mb-1">Have a project in mind?</p>
            <p className="text-lg md:text-lg mb-4">Want to collab?</p>
            <a 
              href="mailto:contact@avenoirfilms.com"
              className="text-base md:text-md hover:underline"
            >
              contact@avenoirfilms.com
            </a>
          </div>

          {/* Second contact block */}
          <div>
            <p className="text-lg md:text-xl mb-1">Want to discuss something?</p>
            <p className="text-lg md:text-xl mb-4">Want to say hi?</p>
            <a 
              href="mailto:nishant@avenoirfilms.com"
              className="text-base md:text-md hover:underline block mb-1"
            >
              nishant@avenoirfilms.com
            </a>
            <a 
              href="tel:+918750176461"
              className="text-base md:text-md hover:underline"
            >
              +91 8750176461
            </a>
          </div>

        </div>

      </div>
    </div>
  );
}