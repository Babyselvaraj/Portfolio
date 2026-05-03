import Navbar from "./components/Navbar";
import About from "./components/About";
import Contact from "./components/Contact";
import Hero from "./components/Hero";
import Projects from "./components/Projects";
import Skils from "./components/Skills";
import Footer from "./components/Footer";
import Experience from "./components/Experience";

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#1e3a8a] via-[#6d28d9] to-[#9333ea] text-white">
      <Navbar />
      <Hero />
      <About />
      <Experience />
      <Projects />
      <Skils />
      <Contact />
      <Footer />
    </div>
  );
}
export default App;