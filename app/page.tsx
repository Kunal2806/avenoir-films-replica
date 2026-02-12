import About from "@/components/About";
import Collaborators from "@/components/Collaborators";
import Hero from "@/components/Hero";

export default function HomePage() {
  return (
    <main className="flex flex-col justify-center items-center overflow-x-hidden overflow-y-auto h-full w-full">
      <Hero/>
      <About/>
      <Collaborators/>
    </main>
  );
}
