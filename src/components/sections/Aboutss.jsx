import React from "react";
import styled from "styled-components";

import img1 from "../../assets/Images/1.webp";
import img2 from "../../assets/Images/2.webp";
import img3 from "../../assets/Images/3.webp";

const Section = styled.section`
  min-height: 100vh;
  width: 80vw;
  margin: 0 auto;

  position: relative;

  display: flex;
  @media (max-width: 48em) {
    width: 90vw;
  }

  @media (max-width: 30em) {
    width: 100vw;
  }
  /* justify-content: center;
  align-items: center; */
`;

const Left = styled.div`
  width: 50%;
  font-size: ${(props) => props.theme.fontlg};
  font-weight: 300;
  position: relative;
  z-index: 5;
  margin-top: 20%;

  @media (max-width: 64em) {
    width: 80%;

    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%) !important;
    margin: 0 auto;

    padding: 2rem;
    font-weight: 600;

    backdrop-filter: blur(2px);
    background-color: ${(props) => `rgba(${props.theme.textRgba},0.4)`};
    border-radius: 20px;
  }
  @media (max-width: 48em) {
    font-size: ${(props) => props.theme.fontmd};
  }
  @media (max-width: 30em) {
    font-size: ${(props) => props.theme.fontsm};
    padding: 2rem;
    width: 70%;
  }
`;

const Right = styled.div`
  width: 50%;
  position: relative;
  /* min-height: 100vh; */

  img {
    width: 100%;
    height: auto;
  }

  .small-img-1 {
    width: 40%;
    position: absolute;
    right: 95%;
    bottom: 10%;
  }
  .small-img-2 {
    width: 40%;
    position: absolute;
    left: 80%;
    top: 30%;
  }
  @media (max-width: 64em) {
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    img {
      width: 100%;
      height: 100vh;
      object-fit: cover;
    }

    .small-img-1 {
      width: 30%;
      height: auto;
      left: 5%;
      bottom: 10%;
    }
    .small-img-2 {
      width: 30%;
      height: auto;

      position: absolute;
      left: 60%;
      bottom: 20%;
    }
  }
`;

const Title = styled.h1`
  font-size: ${(props) => props.theme.fontBig};
  font-family: "Kaushan Script";
  font-weight: 300;
  /* text-transform: capitalize; */

  position: absolute;
  top: 1rem;
  left: 5%;
  z-index: 5;

  span {
    display: inline-block;
  }

  @media (max-width: 64em) {
    font-size: ${(props) => `calc(${props.theme.fontBig} - 5vw)`};
    top: 0;
    left: 0%;
  }
  @media (max-width: 48em) {
    font-size: ${(props) => props.theme.fontxxxl};
  }
`;

const Aboutss = () => {
  return (
    <Section id="fixed-target" className="about">
      <Title
        data-scroll
        data-scroll-speed="-2"
        data-scroll-direction="horizontal"
      >
        About Us
      </Title>
      <Left data-scroll data-scroll-sticky data-scroll-target="#fixed-target">
  At our healthcare center, we believe that every individual deserves compassionate, high-quality care tailored to their specific needs. Our commitment is to ensure that every patient feels heard, valued, and supported throughout their healthcare journey. We combine advanced medical knowledge with a human touch, making a meaningful difference in the lives of those we serve.
  <br />
  <br />
  Our team of experienced caregivers, nurses, and healthcare professionals work collaboratively to create personalized care plans that address the physical
  <br />


</Left>

    <Right>
      <img
        width="400"
        height="600"
        src="https://img.freepik.com/free-photo/beautiful-young-female-doctor-looking-camera-office_1301-7807.jpg?t=st=1745852936~exp=1745856536~hmac=1522374eed1bad8c0b9c6b8e4c9f4b9819869a49f29a2e96c1a31741c543ca05&w=740"
        alt="Doctor 1"
      />
      <img
        width="400"
        height="600"
        className="small-img-1"
        src="https://img.freepik.com/free-photo/young-doctor-wearing-surgical-mask_1150-15703.jpg"
        alt="Doctor 2"
        data-scroll
        data-scroll-speed="5"
      />
      <img
        width="400"
        height="600"
        className="small-img-2"
        src="https://img.freepik.com/free-photo/medium-shot-doctor-checking-blood-pressure-female-patient_1098-19334.jpg?t=st=1745852978~exp=1745856578~hmac=7514eb1738812459eacecbe46a90695d4c6ff6d60ddeb5020a597b5aa5375d87&w=1380"
        alt="Doctor 3"
        data-scroll
        data-scroll-speed="-2"
      />
    </Right>

    </Section>
  );
};

export default Aboutss;
