import React, { useRef } from "react";
import { useGsapTitleUnveil } from "../../hooks/gsap";

const About = () => {
  const sectionTitleRef = useRef(null);
  const AboutRef = useRef(null);
  useGsapTitleUnveil(sectionTitleRef, AboutRef);

  return (
    <section className="about wrapper" ref={AboutRef}>
      <h2 className=" text-[56px] font-[700] mb-12" ref={sectionTitleRef}>
        What we Provide
      </h2>
      <p>
        At HealthPlus, we are dedicated to providing exceptional medical care with compassion and excellence. Our mission is to promote healthier communities through advanced healthcare services and patient-centered care.
      </p>
      <p>
        From preventive checkups to specialized treatments, our experienced team of professionals is committed to ensuring your well-being. Discover how HealthPlus can partner with you on your journey to better health.
      </p>
    </section>
  );
};

export default About;
