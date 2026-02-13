import About from "@/components/About";
import Collaborators from "@/components/Collaborators";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import LetsShoot from "@/components/LetsShoot";
import WhatMakeUs from "@/components/WhatMakeUs";
import WhatWeDo from "@/components/WhatWeDo";

export default function HomePage() {
  return (
    <main className="flex flex-col justify-center items-center overflow-x-hidden overflow-y-auto h-full w-full">
      <Hero/>
      <About/>
      <Collaborators/>
      <WhatWeDo />
      <WhatMakeUs/>
      <LetsShoot />
      <Footer/>
    </main>
  );
}
