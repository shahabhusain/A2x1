import React from 'react';
import { motion } from 'framer-motion';

const Box = () => {
  return (
    <motion.section
      className="bg-[#f7fdf6] py-16 px-8 my-20"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
    >
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Left Content */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <div className="bg-white p-6 rounded-xl shadow-md">
            <h2 className="text-2xl font-semibold mb-4">Who We Are</h2>
            <p className="text-2xl mb-6">
              We are a team of dedicated caregivers, nurses, and healthcare professionals passionate about helping individuals live independently and comfortably in their own homes. Our staff is carefully selected, highly trained, and deeply committed to providing personalized care that meets the unique needs of every client.
            </p>
            <button className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-full text-sm font-semibold">
              Get Started
            </button>
          </div>
        </motion.div>

        {/* Right Content Boxes */}
        <div className="md:col-span-2 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            {
              title: 'Founded on Care',
              desc: 'Established to provide trusted, professional home health care.',
            },
            {
              title: 'Personalized Support',
              desc: 'Established to provide trusted, professional home health care.',
            },
            {
              title: 'Experienced Team',
              desc: 'Skilled caregivers and nurses dedicated to excellence.',
            },
            {
              title: 'Always Here for You',
              desc: 'Reliable, 24/7 care ensuring comfort and peace of mind.',
            },
          ].map((box, index) => (
            <motion.div
              key={index}
              className="hover:bg-[#1d2b1f] bg-white hover:text-white p-8 rounded-xl hover:rotate-[5deg] transition-all duration-300 ease-in"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <div className="w-16 h-16 rounded-full bg-[#e6e2e252] ml-36"></div>
              <h3 className="text-lg font-semibold mb-2 mt-12">{box.title}</h3>
              <p className="text-sm">{box.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
};

export default Box;
