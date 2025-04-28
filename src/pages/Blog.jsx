// MouthwashLanding.jsx
import { useEffect } from 'react';
import { gsap } from 'gsap';
import img1 from '../../public/img/image-one.jpg'
import img3 from '../../public/img/image-two.jpg'
import img4 from '../../public/img/image-three.jpg'
import img5 from '../../public/img/image-four.jpg'
import img6 from '../../public/img/image-five.jpg'
import img7 from '../../public/img/image-six.jpg'
import img8 from '../../public/img/image-seven.jpg'
import img2 from '../../public/img/image-eight.jpg'
const items = [
  { id: 1, img: img1 },
  { id: 2, img: img2 },
  { id: 3, img: img3 },
  { id: 4, img: img4 },
  { id: 5, img: img5 },
  { id: 6, img: img6 },
  { id: 7, img: img7 },
  { id: 8, img: img8 },
];

const Blog = () => {
  useEffect(() => {
    const allContainer = gsap.utils.toArray('.container-item');
    const venueImageWrap = document.querySelector('.container-img-wrap');
    const venueImage = document.querySelector('.container-img');

    function moveVenueImage(e) {
      const xpos = e.clientX;
      const ypos = e.clientY;
      gsap.to(venueImageWrap, {
        x: xpos,
        y: ypos,
        duration: 0.5,
        ease: 'power2.out',
      });
    }

    function venueHover(e) {
      if (e.type === 'mouseenter') {
        const targetImage = e.target.dataset.img;
        gsap.set(venueImage, {
          backgroundImage: `url(${targetImage})`,
        });
        gsap.to(venueImageWrap, {
          duration: 0.5,
          autoAlpha: 1,
        });
      } else if (e.type === 'mouseleave') {
        gsap.to(venueImageWrap, {
          duration: 0.5,
          autoAlpha: 0,
        });
      }
    }

    allContainer.forEach((link) => {
      link.addEventListener('mouseenter', venueHover);
      link.addEventListener('mouseleave', venueHover);
      link.addEventListener('mousemove', moveVenueImage);
    });

    const tl = gsap.timeline();
    tl.from('.navbar > div', {
      opacity: 0,
      y: 60,
      ease: 'expo.inOut',
      duration: 1.6,
      delay: 0.6,
    })
      .from(
        '.site-logo',
        {
          opacity: 0,
          y: 40,
          ease: 'expo.inOut',
          duration: 1.6,
        },
        '-=1.6'
      )
      .staggerFrom(
        '.site-menu > div',
        1,
        {
          opacity: 0,
          y: 60,
          ease: 'power2.out',
        },
        0.2
      )
      .staggerFrom(
        '.header > div',
        1,
        {
          opacity: 0,
          y: 60,
          ease: 'power2.out',
          delay: -1.4,
        },
        0.2
      );

    return () => {
      allContainer.forEach((link) => {
        link.removeEventListener('mouseenter', venueHover);
        link.removeEventListener('mouseleave', venueHover);
        link.removeEventListener('mousemove', moveVenueImage);
      });
    };
  }, []);

  return (
    <div className="relative w-full h-screen bg-[#000] text-white overflow-hidden">

      {/* Hover Image Wrap */}
    {/* Hover Image Wrap */}
<div className="container-img-wrap absolute top-[-30rem] left-[-10rem] w-[400px] h-[500px] overflow-hidden pointer-events-none opacity-0">
  <div className="container-img absolute top-0 left-0 w-full h-full bg-cover"></div>
</div>


      {/* Container Items */}
      <div className="container-items absolute bottom-0 w-full h-[300px] flex items-center cursor-pointer">
        {items.map((item) => (
          <div key={item.id} className="item relative flex-grow transition-all duration-300 ease-in-out font-bold text-[220px] hover:flex-grow-[2] hover:text-[400px]">
            <a href="#" className="container-item block w-full h-full" data-img={item.img}>
              <h3 className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white">{item.id}</h3>
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Blog;
