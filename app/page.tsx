import Hero from "./components/Hero";
import Navigation from "./components/Navigation";
import About from "./components/About";
import Experience from "./components/Experience";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Publications from "./components/Publications";
import Education from "./components/Education";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navigation />
      <Hero />
      <About />
      <Experience />
      <Skills />
      <Projects />
      <Publications />
      <Education />
      <Contact />
      <Footer />
    </main>
  );
}
