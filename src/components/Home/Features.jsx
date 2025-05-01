/* eslint-disable react/prop-types */
import { TiLocationArrow } from "react-icons/ti";
import BentoCard from "../BentoCard";
import { useRef, useState } from "react";

const BentoTilt = ({ children, className = '' }) => {
  const [transformStyle, setTransformStyle] = useState('');
  const itemRef = useRef();

  const handleMouseMove = (e) => {
    if (!itemRef.current) return;

    const { left, top, width, height } = itemRef.current.getBoundingClientRect();
    const relativeX = (e.clientX - left) / width;
    const relativeY = (e.clientY - top) / height;

    const tiltX = (relativeY - 0.5) * 5.5;
    const tiltY = (relativeX - 0.5) * -5.5;

    const newTransform = `perspective(700px) rotateX(${tiltX}deg) rotateY(${tiltY}deg) scale3d(0.97, 0.97, 0.97)`;
    setTransformStyle(newTransform);
  };

  const handleMouseLeave = () => {
    setTransformStyle('');
  };

  return (
    <div
      className={className}
      ref={itemRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ transform: transformStyle }}
    >
      {children}
    </div>
  );
};

const Features = () => {
  return (
    <section id="features" className="bg-[#2E3D32] pb-52">
      <div className="container mx-auto px-3 md:px-10">
        <div className="px-5 py-32">
          <p className="font-circular-web text-lg text-blue-50">
            Transforming Healthcare, Together
          </p>
          <p className="max-w-md font-circular-web text-lg text-blue-50 opacity-50">
            Explore a connected world of innovative care solutions designed to support your well-being at every stage of life.
          </p>
        </div>

        <BentoTilt className="border-hsla relative mb-7 h-96 w-full overflow-hidden rounded-md md:h-[65vh]">
          <BentoCard
            src="videos/hero-5.mp4"
            title={<>Personal Care Assistance</>}
          />
        </BentoTilt>

        <div className="grid h-[135vh] w-full grid-cols-2 grid-rows-3 gap-7">
          <BentoTilt className="bento-tilt_1 row-span-1 md:col-span-1 md:row-span-2">
            <BentoCard
              src="videos/hero-6.mp4"
              title={<>Dementia & Alzheimer’s Care</>}
            />
          </BentoTilt>

          <BentoTilt className="bento-tilt_1 row-span-1 ms-32 md:col-span-1 md:ms-0">
            <BentoCard
              src="videos/hero-1.mp4"
              title={<>24/7 Live-in Care</>}
            />
          </BentoTilt>

          <BentoTilt className="bento-tilt_1 me-14 md:col-span-1 md:me-0">
            <BentoCard
              src="videos/hero-2.mp4"
              title={<>Respite Care</>}
            />
          </BentoTilt>

          <BentoTilt className="bento-tilt_1 me-14 md:col-span-1 md:me-0">
            <BentoCard
              src="videos/hero-4.mp4"
              title={<>Post-Surgical Care</>}
            />
          </BentoTilt>

          <BentoTilt className="bento-tilt_1 me-14 md:col-span-1 md:me-0">
            <BentoCard
              src="videos/hero-3.mp4"
              title={<>Companion Care</>}
            />
          </BentoTilt>
        </div>
      </div>
    </section>
  );
};

export default Features;
