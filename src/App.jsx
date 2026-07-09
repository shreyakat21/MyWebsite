import Nav from "./components/Nav";
import Hero from "./components/Hero";
import About from "./components/About";
import Experience from "./components/Experience";
import Skills from "./components/Skills";
import Work from "./components/Work";
import Contact from "./components/Contact";
import "./App.css";

export default function App() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <About />
        <Experience />
        <Skills />
        <Work />
        <Contact />
      </main>
    </>
  );
}
