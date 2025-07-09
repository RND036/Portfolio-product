import Grid from "@/components/Grid";
import Hero from "@/components/Hero";
import RecentProjects from "@/components/RecentProjects";
import { FloatingNav } from "@/components/ui/FloatingNav";
import Clients from "@/components/Clients";
import { navItems } from "@/data";
import Experience from "@/components/Experience";
import Footer from "@/components/Footer";

import AboutMe from "@/components/AboutMe";



export default function Home() {
  return (
    <main className="relative bg-black flex justify-center items-center flex-col overflow-hidden mx-auto sm:px-10 px-5">
      <div className="max-w-7xl w-full">
        <FloatingNav navItems={navItems}/>
        <Hero/>
       <AboutMe/>
        
        <Grid />
        <RecentProjects />
        <Clients/>
        <Experience/>
        <Footer/>
       
      </div>
      
    </main>
  );
}
