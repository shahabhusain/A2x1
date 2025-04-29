import { useRef } from "react";
import AnimatedTitle from "../AnimatedTitle";
import gsap from "gsap";
import RoundedCorners from "../RoundedCorners";
import Button from "../Button";

const Story = () => {
  const frameRef = useRef(null);

  const handleMouseLeave = () => {
    const element = frameRef.current;

    gsap.to(element, {
      duration: 0.3,
      rotateX: 0,
      rotateY: 0,
      ease: "power1.inOut",
    });
  };

  const handleMouseMove = (e) => {
    const { clientX, clientY } = e;
    const element = frameRef.current;

    if (!element) return;

    const rect = element.getBoundingClientRect();
    const x = clientX - rect.left;
    const y = clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const rotateX = ((y - centerY) / centerY) * -10;
    const rotateY = ((x - centerX) / centerX) * 10;

    gsap.to(element, {
      duration: 0.3,
      rotateX,
      rotateY,
      transformPerspective: 500,
      ease: "power1.inOut",
    });
  };

  return (
    <div id="story" className="min-h-dvh w-screen bg-[#2E3D32] text-blue-50">
      <div className="flex size-full flex-col items-center py-10 pb-24">
        <p className="font-general text-sm uppercase md:text-[10px]">
          advancing healthcare innovation
        </p>

        <div className="relative size-full">
          <AnimatedTitle
            title="the j<b>o</b>urney to <br /> <b>b</b>etter h<b>e</b>althc<b>a</b>re"
            containerClass="mt-5 pointer-events-none mix-blend-difference relative z-10"
          />

          <div className="story-img-container">
            <div className="story-img-mask">
              <div className="story-img-content">
                <img
                  ref={frameRef}
                  onMouseMove={handleMouseMove}
                  onMouseLeave={handleMouseLeave}
                  onMouseUp={handleMouseLeave}
                  onMouseEnter={handleMouseLeave}
                  src="/img/intro.png"
                  alt="healthcare-intro.webp"
                  className="object-contain"
                />
              </div>
            </div>

            {/* for the rounded corner */}
            <RoundedCorners />
          </div>
        </div>

        <div className="-mt-80 flex w-full justify-center md:-mt-64 md:me-44 md:justify-end">
          <div className="flex h-full w-fit flex-col items-center md:items-start">
            <p className="mt-3 max-w-sm text-center font-circular-web text-violet-50 md:text-start">
              Step into a future where personalized care, advanced technologies, and compassionate services come together to transform lives.
            </p>

            <Button
              id="realm-btn"
              title="explore our vision"
              containerClass="mt-5"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Story;
