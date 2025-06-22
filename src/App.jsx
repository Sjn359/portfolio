import React from "react";
// import Hero from "./sections/Hero";
import About from "./sections/About";
import Skills from "./sections/Skills";
import Projects from "./sections/Projects";
import Contact from "./sections/Contact";
// import Footer from "./sections/Footer";
// import Navbar from "./sections/Navbar";

export default function App() {
  return (
    <div className="min-h-screen bg-white">
      {/* <Navbar /> */}
      <main>
        {/* <Hero /> */}
        <About />
        <Skills />
        <Projects />
        <Contact />
      </main>
      {/* <Footer /> */}
    </div>
  );
}
