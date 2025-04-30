import { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import Contact from '../components/sections/Contact';
import { useNavigate } from 'react-router-dom';

export default function Blog() {
  const [currentPage, setCurrentPage] = useState(1);
  const [activeFilter, setActiveFilter] = useState('All');
  const [isLoading, setIsLoading] = useState(false);

  const filters = ['All', 'Patient Care', 'Post-Surgical Recovery', 'Dementia Support', 'Caregiver Tips'];
  const blogPosts = [
    {
      title: 'Personalized Home Care',
      description: 'How trained care givers improve the quality of life for seniors and provide peace of mind for family members.',
      image: 'https://img.freepik.com/free-photo/nurse-taking-care-elderly-patient_23-2149162543.jpg?w=740&t=st=1714315353~exp=1714315953~hmac=89fd03b76438e0b2c776fa49c63b9b6a3b6426e4e5c9b2a572c65e64d6a6d35d',
      category: 'Patient Care'
    },
    {
      title: 'Top Tips for Caregivers',
      description: 'Essential self-care strategies for caregivers to avoid burnout while providing the best support for your loved ones.',
      image: 'https://img.freepik.com/free-photo/young-female-caregiver-helping-senior-woman-home_23-2148913572.jpg?w=740&t=st=1714315418~exp=1714316018~hmac=2f4b0eb4c40236f64302deef57f91c780fb85b845a5086b9f6939c053fd03739',
      category: 'Caregiver Tips'
    },
    {
      title: 'Right Home Care Provider',
      description: 'Key factors to consider when selecting a trusted in-home care provider who will be there for your loved ones.',
      image: 'https://img.freepik.com/free-photo/nurse-talking-with-patient-hospital-room_23-2149162501.jpg?w=740&t=st=1714315480~exp=1714316080~hmac=d8a4bdb53fa2fd8e54bba6fd5db3aa2d4ccff5b5c8b9e1c2b8c6d9ebaf5025a2',
      category: 'Patient Care'
    },
    {
      title: 'Your Loved One Need',
      description: 'Recognizing the key indicators that professional home care may be the right solution for your family.',
      image: 'https://img.freepik.com/free-photo/elderly-woman-home-with-nurse_23-2148913575.jpg?w=740&t=st=1714315529~exp=1714316129~hmac=71d355e9a54c5fbf9f4e6321b6fbebd3130e3b63d5c9a0db6de2c4071b4ed107',
      category: 'Dementia Support'
    },
    {
      title: 'Personalized Home Care',
      description: 'How trained care givers improve the quality of life for seniors and provide peace of mind for family members.',
      image: 'https://img.freepik.com/free-photo/doctor-visiting-senior-patient_23-2148891830.jpg?w=740&t=st=1714315585~exp=1714316185~hmac=1dbded1ec845a848bf60211e0941762a97c8a12c88c8e0e92e6ed270f68ca417',
      category: 'Patient Care'
    },
    {
      title: 'Top Tips for Caregivers',
      description: 'Essential self-care strategies for caregivers to avoid burnout while providing the best support for your loved ones.',
      image: 'https://img.freepik.com/free-photo/friendly-nurse-supporting-senior-patient_23-2149162495.jpg?w=740&t=st=1714315635~exp=1714316235~hmac=962ecdd80dc06fdc4e85d870d68d36ca7e02e38b7e01952f760b5c19945edb3d',
      category: 'Caregiver Tips'
    },
    {
      title: 'Right Home Care Provider',
      description: 'Key factors to consider when selecting a trusted in-home care provider who will be there for your loved ones.',
      image: 'https://img.freepik.com/free-photo/medical-worker-taking-care-patient_23-2149190959.jpg?w=740&t=st=1714315686~exp=1714316286~hmac=99c67e91ec166fda78a6a0eac5c597dedb983967c7c6fd54e57f6d6a5197ef34',
      category: 'Post-Surgical Recovery'
    },
    {
      title: 'Your Loved One Need',
      description: 'Recognizing the key indicators that professional home care may be the right solution for your family.',
      image: 'https://img.freepik.com/free-photo/senior-woman-receiving-home-care_23-2148913570.jpg?w=740&t=st=1714315731~exp=1714316331~hmac=0499b3e388f0fda7f16296c5702a91457be55b7889df748ffb299346c13c6220',
      category: 'Dementia Support'
    },


     {
      title: 'Right Home Care Provider',
      description: 'Key factors to consider when selecting a trusted in-home care provider who will be there for your loved ones.',
      image: 'https://img.freepik.com/free-photo/medical-worker-taking-care-patient_23-2149190959.jpg?w=740&t=st=1714315686~exp=1714316286~hmac=99c67e91ec166fda78a6a0eac5c597dedb983967c7c6fd54e57f6d6a5197ef34',
      category: 'Post-Surgical Recovery'
    },
    {
      title: 'Your Loved One Need',
      description: 'Recognizing the key indicators that professional home care may be the right solution for your family.',
      image: 'https://img.freepik.com/free-photo/senior-woman-receiving-home-care_23-2148913570.jpg?w=740&t=st=1714315731~exp=1714316331~hmac=0499b3e388f0fda7f16296c5702a91457be55b7889df748ffb299346c13c6220',
      category: 'Dementia Support'
    },

 {
      title: 'Right Home Care Provider',
      description: 'Key factors to consider when selecting a trusted in-home care provider who will be there for your loved ones.',
      image: 'https://img.freepik.com/free-photo/nurse-talking-with-patient-hospital-room_23-2149162501.jpg?w=740&t=st=1714315480~exp=1714316080~hmac=d8a4bdb53fa2fd8e54bba6fd5db3aa2d4ccff5b5c8b9e1c2b8c6d9ebaf5025a2',
      category: 'Patient Care'
    },
    {
      title: 'Your Loved One Need',
      description: 'Recognizing the key indicators that professional home care may be the right solution for your family.',
      image: 'https://img.freepik.com/free-photo/elderly-woman-home-with-nurse_23-2148913575.jpg?w=740&t=st=1714315529~exp=1714316129~hmac=71d355e9a54c5fbf9f4e6321b6fbebd3130e3b63d5c9a0db6de2c4071b4ed107',
      category: 'Dementia Support'
    },


    
  ];

  

  const filteredBlogs = activeFilter === 'All' 
    ? blogPosts 
    : blogPosts.filter(post => post.category === activeFilter);
  
  const postsPerPage = 8;
  const totalPages = Math.ceil(filteredBlogs.length / postsPerPage);
  const currentPosts = filteredBlogs.slice(
    (currentPage - 1) * postsPerPage,
    currentPage * postsPerPage
  );

  const handlePageChange = (newPage) => {
    setIsLoading(true);
    setCurrentPage(newPage);
    setTimeout(() => setIsLoading(false), 300);
  };

  useEffect(() => {
    setCurrentPage(1);
  }, [activeFilter]);

  // Animation variants
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5 } }
  };

  const filterItem = {
    hidden: { scale: 0.8, opacity: 0 },
    show: { scale: 1, opacity: 1, transition: { duration: 0.3 } }
  };

  const pageItem = {
    hidden: { scale: 0.9, opacity: 0 },
    show: { scale: 1, opacity: 1, transition: { duration: 0.2 } }
  };

  const navigate = useNavigate()

  const handleNavigate = () => {
     navigate("/blogdetail")
  }

  return (
    <div>
      <div className="min-h-screen bg-slate-50">
        {/* Hero Section with Animation */}
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="bg-[#2E3D32] py-10 px-6 text-center text-white"
        >
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="text-[137px] font-bold mb-6 mt-12"
          >
            Our blogs
          </motion.h1>
          
          <motion.div 
            variants={container}
            initial="hidden"
            animate="show"
            className="flex flex-wrap justify-center gap-2"
          >
            {filters.map(filter => (
              <motion.button
                key={filter}
                variants={filterItem}
                onClick={() => setActiveFilter(filter)}
                className={`px-5 py-3 rounded-full text-sm transition-all duration-300 ${
                  activeFilter === filter 
                  ? 'bg-white text-green-800 font-medium' 
                  : 'bg-green-700 text-white hover:bg-green-600'
                }`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {filter}
              </motion.button>
            ))}
          </motion.div>
        </motion.div>

        <div className="w-[90%] mx-auto py-12 px-4">
          {isLoading ? (
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.4 }}
              exit={{ opacity: 0 }}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 transition-opacity duration-300"
            >
              {Array(8).fill(0).map((_, i) => (
                <motion.div 
                  key={i}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: i * 0.05 }}
                  className="bg-white rounded-lg shadow-md overflow-hidden"
                >
                  <div className="h-48 bg-gray-200 animate-pulse"></div>
                  <div className="p-4">
                    <div className="h-6 bg-gray-200 rounded mb-2 animate-pulse"></div>
                    <div className="h-16 bg-gray-100 rounded animate-pulse"></div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          ) : (
            <AnimatePresence mode="wait">
              <motion.div
                key={`${activeFilter}-${currentPage}`}
                variants={container}
                initial="hidden"
                animate="show"
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
              >
                {currentPosts.map((post, index) => (
                  <motion.div
                    onClick={handleNavigate} 
                    key={index}
                    variants={item}
                    className="bg-[#00000013] p-6 rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-all duration-300"
                    whileHover={{ y: -5, scale: 1.02 }}
                  >
                    <motion.img 
                      src={post.image} 
                      alt={post.title} 
                      className="w-full h-48 object-cover"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 0.2 }}
                    />
                    <div className="p-4">
                      <h3 className="font-semibold text-[20px] text-[#2E3D32] mb-2">{post.title}</h3>
                      <p className="text-[#2E3D32] text-[16px] font-[400]">{post.description}</p>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            </AnimatePresence>
          )}

          {/* Pagination with Animation */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="flex justify-center items-center mt-12 gap-2"
          >
            <motion.button 
              onClick={() => handlePageChange(currentPage - 1)}
              disabled={currentPage === 1}
              className={`flex items-center justify-center w-8 h-8 rounded-full ${
                currentPage === 1 
                ? 'text-gray-400 cursor-not-allowed' 
                : 'text-green-800 hover:bg-green-100'
              }`}
              whileHover={{ scale: currentPage === 1 ? 1 : 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <ChevronLeft size={18} />
            </motion.button>
            
            {Array.from({ length: totalPages }, (_, i) => i + 1)
              .filter(page => {
                return page === 1 || 
                       page === totalPages || 
                       (page >= currentPage - 1 && page <= currentPage + 1);
              })
              .map((page, index, array) => {
                if (index > 0 && page > array[index - 1] + 1) {
                  return [
                    <motion.span 
                      key={`ellipsis-${page}`} 
                      className="px-2"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                    >
                      ...
                    </motion.span>,
                    <motion.button
                      key={page}
                      variants={pageItem}
                      onClick={() => handlePageChange(page)}
                      className={`w-8 h-8 rounded-full flex items-center justify-center transition-all duration-300 ${
                        currentPage === page
                          ? 'bg-green-800 text-white font-medium'
                          : 'hover:bg-green-100 text-green-800'
                      }`}
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                    >
                      {page}
                    </motion.button>
                  ];
                }
                
                return (
                  <motion.button
                    key={page}
                    variants={pageItem}
                    onClick={() => handlePageChange(page)}
                    className={`w-8 h-8 rounded-full flex items-center justify-center transition-all duration-300 ${
                      currentPage === page
                        ? 'bg-green-800 text-white font-medium'
                        : 'hover:bg-green-100 text-green-800'
                    }`}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    {page}
                  </motion.button>
                );
              })}
            
            <motion.button 
              onClick={() => handlePageChange(currentPage + 1)}
              disabled={currentPage === totalPages}
              className={`flex items-center justify-center w-8 h-8 rounded-full ${
                currentPage === totalPages 
                ? 'text-gray-400 cursor-not-allowed' 
                : 'text-green-800 hover:bg-green-100'
              }`}
              whileHover={{ scale: currentPage === totalPages ? 1 : 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <ChevronRight size={18} />
            </motion.button>
          </motion.div>
        </div>
      </div>
        <Contact />
    </div>
  );
}