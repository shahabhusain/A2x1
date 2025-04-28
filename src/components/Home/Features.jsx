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
    <section id="features" className="bg-black pb-52">
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
            src="videos/hero-1.mp4"
            title={<>Pers<b>o</b>nalized Car<b>e</b></>}
            description="Tailored treatment plans built around your unique health needs and lifestyle."
          />
        </BentoTilt>

        <div className="grid h-[135vh] w-full grid-cols-2 grid-rows-3 gap-7">
          <BentoTilt className="bento-tilt_1 row-span-1 md:col-span-1 md:row-span-2">
            <BentoCard
              src="videos/hero-2.mp4"
              title={<>Wellness <b>N</b>avigator</>}
              description="Your digital companion for preventive care, chronic condition support, and wellness tips."
            />
          </BentoTilt>

          <BentoTilt className="bento-tilt_1 row-span-1 ms-32 md:col-span-1 md:ms-0">
            <BentoCard
              src="videos/hero-3.mp4"
              title={<>C<b>o</b>nnected Cl<b>i</b>nics</>}
              description="Seamlessly access care across our network of hospitals, clinics, and telemedicine services."
            />
          </BentoTilt>

          <BentoTilt className="bento-tilt_1 me-14 md:col-span-1 md:me-0">
            <BentoCard
              src="videos/hero-4.mp4"
              title={<>Heal<b>t</b>h Insights</>}
              description="AI-powered analytics that help you track and optimize your health goals."
            />
          </BentoTilt>

          <BentoTilt className="bento-tilt_2">
            <div className="flex size-full flex-col justify-between bg-violet-300 p-5">
              <h1 className="bento-title special-font max-w-64 text-black">
                New Se<b>r</b>vices La<b>u</b>nching Soon
              </h1>
              <TiLocationArrow className="m-5 scale-[5] self-end cursor-pointer" />
            </div>
          </BentoTilt>

          <BentoTilt className="bento-tilt_2">
            <video
              src="videos/hero-2.mp4"
              loop
              muted
              autoPlay
              className="size-full object-center object-cover"
            />
          </BentoTilt>
        </div>
      </div>
    </section>
  );
};

export default Features;
