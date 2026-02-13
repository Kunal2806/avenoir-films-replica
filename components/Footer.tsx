import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="relative w-full bg-black overflow-hidden font-serif">
      {/* Background Video */}
      <div className="absolute inset-0 w-full h-full">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover opacity-80"
        >
          <source
            src="https://video.wixstatic.com/video/c837a6_2828dec337374714b0631f4aab1cb4b8/720p/mp4/file.mp4"
            type="video/mp4"
          />
        </video>
        {/* Overlay to ensure text readability */}
        <div className="absolute inset-0 bg-black/30" />
      </div>

      {/* Content */}
      <div className="relative z-10 w-full">
        {/* Top Section */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 py-8 sm:py-10 md:py-12">
          <div className="flex flex-col md:flex-row justify-between items-start gap-6 md:gap-0">
            <div className="w-full md:w-auto">
              <p className="text-white text-xs sm:text-sm font-light mb-1">
                Want to make something stellar? So do we.
              </p>
              <a
                href="mailto:contact@avenoirfilms.com"
                className="text-white text-xs sm:text-sm font-light hover:opacity-70 transition-opacity"
              >
                contact@avenoirfilms.com
              </a>
            </div>
            <div className="text-left md:text-right w-full md:w-auto">
              <p className="text-white text-xs sm:text-sm font-light">
                Creative-led. Production-smart.
              </p>
            </div>
          </div>
        </div>

        {/* Logo Section */}
        <div className="w-full py-12 sm:py-16 md:py-24">
          <h1 className="text-center text-white text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-serif tracking-wide px-4">
            Avenoir Films
          </h1>
        </div>

        {/* Divider Line */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
          <div className="border-t border-white/30" />
        </div>

        {/* Navigation */}
        <nav className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 py-8 sm:py-10 md:py-12">
          <ul className="flex flex-col sm:flex-row flex-wrap justify-center md:justify-between items-center gap-6 sm:gap-8 md:gap-4">
            <li className="flex flex-col items-center sm:items-start">
              <span className="text-white/60 text-xs uppercase tracking-wider mb-2">
                About Us
              </span>
              <a
                href="#company"
                className="text-white text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-serif hover:opacity-70 transition-opacity"
              >
                Company
              </a>
            </li>
            <li className="flex flex-col items-center sm:items-start">
              <span className="text-white/60 text-xs uppercase tracking-wider mb-2">
                What We Do
              </span>
              <a
                href="#work"
                className="text-white text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-serif hover:opacity-70 transition-opacity"
              >
                Work
              </a>
            </li>
            <li className="flex flex-col items-center sm:items-start">
              <span className="text-white/60 text-xs uppercase tracking-wider mb-2">
                Jobs
              </span>
              <a
                href="#careers"
                className="text-white text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-serif hover:opacity-70 transition-opacity"
              >
                Careers
              </a>
            </li>
            <li className="flex flex-col items-center sm:items-start">
              <span className="text-white/60 text-xs uppercase tracking-wider mb-2">
                Reach Out
              </span>
              <a
                href="#contact"
                className="text-white text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-serif hover:opacity-70 transition-opacity"
              >
                Contact
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </footer>
  );
};

export default Footer;