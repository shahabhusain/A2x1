import React from "react";
import { useRef } from "react";
import {
  useGsapShutterUnveil,
  useGsapPhotoDropping,
  useGsapPhotoLavitate,
} from "../../hooks/gsap";

const Hero = () => {
  const heroRef = useRef(null);
  const shutter1 = useRef(null);
  const shutter2 = useRef(null);

  const photo1Ref = useRef(null);
  const photo2Ref = useRef(null);
  const photo3Ref = useRef(null);
  const photo4Ref = useRef(null);
  const photo5Ref = useRef(null);

  const photosArr = [photo1Ref, photo2Ref, photo3Ref, photo4Ref, photo5Ref];

  useGsapShutterUnveil(shutter1, 0, heroRef);
  useGsapShutterUnveil(shutter2, 0.2, heroRef);
  useGsapPhotoDropping(photosArr, 2.5);
  useGsapPhotoLavitate(photosArr, heroRef);
  return (
    <section className="hero wrapper mt-32" ref={heroRef}>
      <h1 className="ethereal text-[#2E3D32]">
        A2Z <span ref={shutter1}></span>
      </h1>
      <h1 className="canvas text-[#2E3D32]">
        HeathCare <span ref={shutter2}></span>
      </h1>
      <div className="photos">
        <div
          className="photo one"
          ref={photo1Ref}
          style={{
            backgroundImage:
              'url("https://img.freepik.com/free-photo/beautiful-young-female-doctor-looking-camera-office_1301-7807.jpg?t=st=1745852936~exp=1745856536~hmac=1522374eed1bad8c0b9c6b8e4c9f4b9819869a49f29a2e96c1a31741c543ca05&w=740")',
          }}
        ></div>
        <div
          className="photo two"
          ref={photo2Ref}
          style={{
            backgroundImage:
              "url('https://img.freepik.com/free-photo/medium-shot-doctor-checking-blood-pressure-female-patient_1098-19334.jpg?t=st=1745852978~exp=1745856578~hmac=7514eb1738812459eacecbe46a90695d4c6ff6d60ddeb5020a597b5aa5375d87&w=1380')",
          }}
        ></div>
        <div
          className="photo three"
          ref={photo3Ref}
          style={{
            backgroundImage:
              "url('https://img.freepik.com/free-photo/doctor-nurses-special-equipment_23-2148980721.jpg?t=st=1745853123~exp=1745856723~hmac=0c02fbd35e48019d289456de180c534b27f778228d7c1101675200e35a2d64ce&w=996')",
          }}
        ></div>
        <div
          className="photo four"
          ref={photo4Ref}
          style={{
            backgroundImage:
              "url('https://img.freepik.com/free-photo/portrait-young-male-doctor_171337-1492.jpg?t=st=1745853136~exp=1745856736~hmac=041dcb5725155e099f71f76ab33d82ce47aeae2300a31140d943a12bcd2f699b&w=1380')",
          }}
        ></div>
        <div
          className="photo five"
          ref={photo5Ref}
          style={{
            backgroundImage:
              "url('https://img.freepik.com/free-photo/young-handsome-physician-medical-robe-with-stethoscope_1303-17820.jpg?t=st=1745853160~exp=1745856760~hmac=2d3be4a185ff2d004924b16f7d6d8ff8de80cccbd7ef516f902fd9b3cf85d076&w=1380')",
          }}
        ></div>
      </div>
    </section>
  );
};

export default Hero;
