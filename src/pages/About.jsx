import "locomotive-scroll/dist/locomotive-scroll.css";

import { AnimatePresence } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import { LocomotiveScrollProvider } from "react-locomotive-scroll";
import { ThemeProvider } from "styled-components";
import ScrollTriggerProxy from "../components/ScrollTriggerProxy";
import Marquee from "../components/sections/Marquee";
import { dark } from "../styles/Themes";
import Aboutss from "../components/sections/Aboutss";


function About() {
  // useLocoScroll();
  const containerRef = useRef(null);
  const [Loaded, setLoaded] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setLoaded(true);
    }, 3000);
  }, []);

  return (
      <div>
         <div className="html">
      <ThemeProvider theme={dark}>
        <LocomotiveScrollProvider
          options={{
            smooth: true,
            // ... all available Locomotive Scroll instance options
            smartphone: {
              smooth: true,
            },
            tablet: {
              smooth: true,
            },
          }}
          containerRef={containerRef}
        >
          <main className="App" data-scroll-container ref={containerRef}>
            <ScrollTriggerProxy />
            <AnimatePresence>
              <Aboutss key="about" />
              <Marquee key="marquee" />
            </AnimatePresence>
          </main>
        </LocomotiveScrollProvider>
      </ThemeProvider>
    </div>
      </div>
  );
}

export default About;
