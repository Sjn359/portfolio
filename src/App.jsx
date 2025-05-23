import Hero from "src/sections/Hero";
import About from "src/sections/about";
import Skills from "src/sections/skills";
import Projects from "src/sections/projects";
import Contact from "src/sections/contact";
import Footer from "src/sections/footer";
import Navbar from "src/sections/navbar";

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
