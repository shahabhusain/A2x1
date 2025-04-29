import React from 'react';
import { motion } from 'framer-motion';
import main from '../../assets/image2.png';

const OurMission = () => {
  return (
    <motion.div
      className="flex w-[90%] mx-auto mt-20"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
    >
      <motion.img
        src={main}
        alt="Our Mission"
        className="w-1/2 object-cover"
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
      />

      <motion.div
        className="flex flex-col gap-4 bg-[#DCFFAB] p-12 rounded-l-2xl w-1/2"
        initial={{ opacity: 0, x: 50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
      >
        <h1 className="text-[36px] font-[600] text-[#2E3D32]">Our Mission</h1>
        <p className="text-[20px] font-[400] text-[#2E3D32]">
          We are committed to providing compassionate, high-quality care that empowers clients to live independently while ensuring their safety and well-being. Our dedicated team supports families by offering peace of mind, knowing their loved ones receive exceptional care.
        </p>
        <button className="text-xl py-3 px-6 rounded-full bg-white text-black w-fit">
          View all Services
        </button>
      </motion.div>
    </motion.div>
  );
};

export default OurMission;
