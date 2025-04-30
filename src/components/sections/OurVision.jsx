import React from 'react';
import { motion } from 'framer-motion';
import main from '../../assets/image3.png';

const OurVision = () => {
  return (
    <motion.div
      className="flex w-[90%] mx-auto my-20"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
    >
      <motion.div
        className="flex flex-col gap-4 bg-[#DCFFAB] p-12 rounded-l-2xl w-1/2"
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
      >
        <h1 className="text-[36px] font-[600] text-[#2E3D32]">Our Vision</h1>
        <p className="text-[20px] font-[400] text-[#2E3D32]">
          To be the most trusted home health care provider, delivering compassionate and high-quality care. We strive to enhance the well-being of every client with dignity, respect, and personalized support. Our goal is to empower individuals to live independently in the comfort of their homes.
        </p>
        <button className="text-[16px] font-[600] py-3 px-6 rounded-full bg-white text-black w-fit mt-6">
          View all Services
        </button>
      </motion.div>

      <motion.img
        src={main}
        alt="Our Vision"
        className="w-1/2 object-cover"
        initial={{ opacity: 0, x: 50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
      />
    </motion.div>
  );
};

export default OurVision;
