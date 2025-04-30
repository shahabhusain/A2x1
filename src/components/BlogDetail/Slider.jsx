import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import img1 from '../../assets/imgg1.png';
import img2 from '../../assets/imgg2.png';
import img3 from '../../assets/imgg3.png';
import img4 from '../../assets/imgg4.png';

const blogs = [
  {
    id: 1,
    title: "Personalized Home Care",
    description: "How tailored care plans improve the quality of life for seniors and individuals with special needs.",
    image: img1
  },
  {
    id: 2,
    title: "Top Tips for Caregivers",
    description: "Essential self-care strategies to prevent burnout while providing the best support for your loved ones.",
    image: img2
  },
  {
    id: 3,
    title: "Right Home Care Provider",
    description: "Key factors to consider when selecting a trustworthy home health care service for your loved ones.",
    image: img3
  },
  {
    id: 4,
    title: "Your Loved One Need",
    description: "Recognizing the key indicators that professional home care may be the right solution for your family.",
    image: img4
  },
  {
    id: 1,
    title: "Personalized Home Care",
    description: "How tailored care plans improve the quality of life for seniors and individuals with special needs.",
    image: img1
  },
  {
    id: 2,
    title: "Top Tips for Caregivers",
    description: "Essential self-care strategies to prevent burnout while providing the best support for your loved ones.",
    image: img2
  },
  {
    id: 3,
    title: "Right Home Care Provider",
    description: "Key factors to consider when selecting a trustworthy home health care service for your loved ones.",
    image: img3
  },
  {
    id: 4,
    title: "Your Loved One Need",
    description: "Recognizing the key indicators that professional home care may be the right solution for your family.",
    image: img4
  }
];

const BlogSlider = () => {
  return (
    <div className='w-[95%] mx-auto mt-32'>
      <h2 className='text-2xl font-bold mb-6'>Related blogs you may like</h2>
      
      <Swiper
        modules={[Navigation, Pagination]}
        spaceBetween={30}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        breakpoints={{
          640: {
            slidesPerView: 1,
          },
          768: {
            slidesPerView: 2,
          },
          1024: {
            slidesPerView: 3,
          },
          1280: {
            slidesPerView: 4,
          }
        }}
      >
        {blogs.map((blog) => (
          <SwiperSlide key={blog.id}>
            <div className='bg-[#F5F5F5] hover:bg-[#DCFFAB] transition-all duration-300 ease-in-out p-5 rounded-md flex flex-col gap-3 h-full'>
              <img className='w-full h-40 object-cover rounded' src={blog.image} alt={blog.title} />
              <h3 className='text-[20px] font-[600] text-[#2E3D32]'>{blog.title}</h3>
              <p className='text-[16px] font-[400] text-[#2E3D32]'>{blog.description}</p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
      
    </div>
  );
};

export default BlogSlider;