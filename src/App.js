import Hero from "./components/Hero/Hero";
import About from "./components/About/About";
import Projects from "./components/Projects/Projects";
import Contact from "./components/Contact/Contact";
import Testimonial from "./components/Testimonial/Testimonial";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function App() {
  return (
    <div style={{ overflow: "hidden" }}>
      <Hero />
      <About />
      <Projects />
      <Testimonial />
      <Contact />
    </div>
  );
}

export default App;
