import React from 'react';
import { motion } from 'framer-motion';
import icon1 from '../../assets/icon1.png'
import icon2 from '../../assets/icon2.png'
import icon3 from '../../assets/icon3.png'
import icon4 from '../../assets/icon4.png'
const Box = () => {
  return (
    <motion.section
      className="bg-[#f7fdf6]"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
    >
      <div className=" w-[95%] mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Left Content */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <div className="bg-white px-12 py-20 rounded-xl shadow-md">
            <h2 className="text-[36px] font-semibold mb-4 text-[#2E3D32]">Who We Are</h2>
            <p className="text-[20px] font-[400] mb-6 text-[#2E3D32]">
              We are a team of dedicated caregivers, nurses, and healthcare professionals passionate about helping individuals live independently and comfortably in their own homes. Our staff is carefully selected, highly trained, and deeply committed to providing personalized care that meets the unique needs of every client.
            </p>
            <button className="bg-[#DCFFAA] hover:bg-green-600 text-black text-[16px] px-5 py-3 rounded-full font-semibold">
              Get Started
            </button>
          </div>
        </motion.div>

        {/* Right Content Boxes */}
        <div className="md:col-span-2 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            {
              img:icon1,
              title: 'Founded on Care',
              desc: 'Established to provide trusted, professional home health care.',
            },
            {
              img:icon2,
              title: 'Personalized Support',
              desc: 'Established to provide trusted, professional home health care.',
            },
            {
              img:icon3,
              title: 'Experienced Team',
              desc: 'Skilled caregivers and nurses dedicated to excellence.',
            },
            {
              img:icon4,
              title: 'Always Here for You',
              desc: 'Reliable, 24/7 care ensuring comfort and peace of mind.',
            },
          ].map((box, index) => (
            <motion.div
            key={index}
            className="hover:bg-[#5f9267] bg-white hover:text-white px-8 py-4 rounded-xl transition-all duration-300 ease-in"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            whileHover={{ rotate: -10, scale:1.1 }}
            transition={{ duration: 0.4, delay: index * 0.1 }}
            viewport={{ once: true }}
          >
              <div className="w-16 h-16 rounded-full bg-[#e6e2e252] ml-44 flex items-center justify-center">
                <img src={box.img} alt="" />
              </div>
              <h3 className="text-[24px] font-semibold mb-2 mt-12">{box.title}</h3>
              <p className="text-[18px] font-[400]">{box.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
};

export default Box;
