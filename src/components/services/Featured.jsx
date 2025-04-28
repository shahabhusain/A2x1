import React from "react";
import { useRef } from "react";
import {
  useGsapFeatureLeftShutterUnveil,
  useGsapFeatureRightShutterUnveil,
  useGsapTitleUnveil,
} from "../../hooks/gsap";

const Featured = () => {
  const featureRef = useRef(null);
  const sectionTitleRef = useRef(null);
  const featureLeftShutterRef = useRef(null);
  const featureRightShutterRef = useRef(null);

  useGsapTitleUnveil(sectionTitleRef, featureRef);
  useGsapFeatureLeftShutterUnveil(featureLeftShutterRef, featureRef);
  useGsapFeatureRightShutterUnveil(featureRightShutterRef, featureRef);

  return (
    <section className="featured wrapper" ref={featureRef}>
      <div className="features">
        <div className="features-left">
          <span className="features-title">Healthcare at Your Fingertips</span>
          <img
            src="https://img.freepik.com/premium-photo/doctor-with-clipboard-consulting-patient-appointment-clinic_495423-79809.jpg?w=1380"
            alt="Doctor consulting patient in clinic"
          />
          <span
            className="feature-shutter-left"
            ref={featureLeftShutterRef}
          ></span>
        </div>
        <div className="features-right">
          <span className="features-title">Compassionate Care for All</span>
          <img
            src="https://img.freepik.com/premium-photo/arabian-doctor-standing-front-her-team-hospital_155404-23.jpg?w=1380"
            alt="Doctor with healthcare team in hospital"
          />
          <span
            className="feature-shutter-right"
            ref={featureRightShutterRef}
          ></span>
        </div>
      </div>
    </section>
  );
};

export default Featured;
