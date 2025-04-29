import React from "react";
import { useRef } from "react";
import GalleryItem from "./GalleryItem";
import { useGsapTitleUnveil } from "../../hooks/gsap";
const images = [
  {
    id: 1,
    src: "https://img.freepik.com/free-photo/covid-recovery-center-female-doctor-holding-older-patient-s-hands_23-2148847832.jpg?t=st=1745853303~exp=1745856903~hmac=b888b9a79439b0f9296bf1af377cfb17f96906a00422f246ee177de4600ce7ed&w=1380",
    title: "Personal Care Assistance",
    category: "24/7 Live-in Care",
  },
  {
    id: 2,
    src: "https://img.freepik.com/free-photo/labor-union-members-working-together_23-2150995038.jpg?t=st=1745853712~exp=1745857312~hmac=1cc9947cdb21d17f366a4161d0fbc3ca01aaacf322f73c4e489b06698bacdeb6&w=1380",
    title: " Respite Care",
    category: "Post-Surgical Care",
  },
  {
    id: 3,
    src: "https://img.freepik.com/free-photo/team-doctors-meeting_107420-84805.jpg?t=st=1745853736~exp=1745857336~hmac=b16650c8c858ee645077bf0c621ae6f8b1f25c54395738228306fa1f00c32479&w=1380",
    title: "Physical Disability Support",
    category: "Dementia & Alzheimer’s Care",
  },
  {
    id: 4,
    src: "https://img.freepik.com/premium-photo/hand-arranging-wood-block-stacking-with-icons_34936-2991.jpg?w=1380",
    title: "Companion Care",
    category: "A2z Health",
  },
];
const Gallery = () => {
  const sectionTitleRef = useRef(null);
  const galleryRef = useRef(null);

  useGsapTitleUnveil(sectionTitleRef, galleryRef);
  return (
    <section className="gallery " ref={galleryRef}>
      <div className="gallery-wrapper bg-white">
        {images.map((image) => (
          <GalleryItem key={image.id} image={image} />
        ))}
      </div>
    </section>
  );
};

export default Gallery;
