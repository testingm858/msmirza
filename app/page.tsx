import { Hero } from "@/sections/hero";
import { About } from "@/sections/about";
import { Experience } from "@/sections/experience";
import { Education } from "@/sections/education";
import { Certifications } from "@/sections/certifications";
import { Timeline } from "@/sections/timeline";
import { Skills } from "@/sections/skills";
import { Projects } from "@/sections/projects";
import { Services } from "@/sections/services";
import { Achievements } from "@/sections/achievements";
import { Gallery } from "@/sections/gallery";
import { Publications } from "@/sections/publications";
import { Testimonials } from "@/sections/testimonials";
import { Contact } from "@/sections/contact";

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <Experience />
      <Education />
      <Certifications />
      <Timeline />
      <Skills />
      <Projects />
      <Services />
      <Achievements />
      <Gallery />
      <Publications />
      <Testimonials />
      <Contact />
    </>
  );
}
