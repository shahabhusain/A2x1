import { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

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
    }
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

  return (
       <div>
         <div className="min-h-screen bg-slate-50">
      <div className="bg-[#2E3D32] py-10 px-6 text-center text-white">
        <h1 className="text-[137px] font-bold mb-6">Our blogs</h1>
        <div className="flex flex-wrap justify-center gap-2">
          {filters.map(filter => (
            <button
              key={filter}
              onClick={() => setActiveFilter(filter)}
              className={`px-5 py-3 rounded-full text-sm transition-all duration-300 ${
                activeFilter === filter 
                ? 'bg-white text-green-800 font-medium' 
                : 'bg-green-700 text-white hover:bg-green-600'
              }`}
            >
              {filter}
            </button>
          ))}
        </div>
      </div>

      <div className="w-[90%] mx-auto py-12 px-4">
        {isLoading ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 opacity-40 transition-opacity duration-300">
            {Array(8).fill(0).map((_, i) => (
              <div key={i} className="bg-white rounded-lg shadow-md overflow-hidden">
                <div className="h-48 bg-gray-200"></div>
                <div className="p-4">
                  <div className="h-6 bg-gray-200 rounded mb-2"></div>
                  <div className="h-16 bg-gray-100 rounded"></div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 transition-opacity duration-500 opacity-100">
            {currentPosts.map((post, index) => (
              <div 
                key={index}
                className="bg-[#00000013] p-6 rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1"
              >
                <img 
                  src={post.image} 
                  alt={post.title} 
                  className="w-full h-48 object-cover"
                />
                <div className="p-4">
                  <h3 className="font-semibold text-[20px] text-[#2E3D32] mb-2">{post.title}</h3>
                  <p className="text-[#2E3D32] text-[16px] font-[400]">{post.description}</p>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Pagination */}
        <div className="flex justify-center items-center mt-12 gap-2">
          <button 
            onClick={() => handlePageChange(currentPage - 1)}
            disabled={currentPage === 1}
            className={`flex items-center justify-center w-8 h-8 rounded-full ${
              currentPage === 1 
              ? 'text-gray-400 cursor-not-allowed' 
              : 'text-green-800 hover:bg-green-100'
            }`}
          >
            <ChevronLeft size={18} />
          </button>
          
          {Array.from({ length: totalPages }, (_, i) => i + 1)
            .filter(page => {
              // Show first page, last page, current page, and pages around current page
              return page === 1 || 
                     page === totalPages || 
                     (page >= currentPage - 1 && page <= currentPage + 1);
            })
            .map((page, index, array) => {
              // Add ellipsis
              if (index > 0 && page > array[index - 1] + 1) {
                return [
                  <span key={`ellipsis-${page}`} className="px-2">...</span>,
                  <button
                    key={page}
                    onClick={() => handlePageChange(page)}
                    className={`w-8 h-8 rounded-full flex items-center justify-center transition-all duration-300 ${
                      currentPage === page
                        ? 'bg-green-800 text-white font-medium'
                        : 'hover:bg-green-100 text-green-800'
                    }`}
                  >
                    {page}
                  </button>
                ];
              }
              
              return (
                <button
                  key={page}
                  onClick={() => handlePageChange(page)}
                  className={`w-8 h-8 rounded-full flex items-center justify-center transition-all duration-300 ${
                    currentPage === page
                      ? 'bg-green-800 text-white font-medium'
                      : 'hover:bg-green-100 text-green-800'
                  }`}
                >
                  {page}
                </button>
              );
            })}
          
          <button 
            onClick={() => handlePageChange(currentPage + 1)}
            disabled={currentPage === totalPages}
            className={`flex items-center justify-center w-8 h-8 rounded-full ${
              currentPage === totalPages 
              ? 'text-gray-400 cursor-not-allowed' 
              : 'text-green-800 hover:bg-green-100'
            }`}
          >
            <ChevronRight size={18} />
          </button>
        </div>
      </div>

   
    </div>

    <div className=' bg3 mt-20 '>
       <div className=' flex flex-col gap-3 items-center justify-center pt-72'>
       <h1 className=' text-[48px] font-[600] text-white max-w-[766px] text-center'>Experience Care Like Never Before <span className=' text-[#DCFFAA]'>- Schedule Now!</span></h1>
       <button className=' py-3 px-5 rounded-full bg-[#DCFFAA] text-[#2E3D32]'>Book Consultation!</button>
       </div>
    </div>


    <div className=" w-[90%] mx-auto p-6 rounded-lg flex justify-between mt-20">
      <div className="mb-8 w-1/2">
        <h2 className="text-[36px] font-bold text-gray-800">We're Here to Help - </h2>
        <h3 className="text-2xl font-bold text-gray-800">Reach Out!</h3>
      </div>
      
      <div  className="space-y-6 w-1/2">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Name</label>
            <input
              type="text"
              id="name"
              name="name"
              placeholder="Your name"
              className="w-full px-3 py-2 bg-transparent border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
              required
            />
          </div>
          
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="example@email.com"
              className="w-full px-3 py-2 border  bg-transparent border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
              required
            />
          </div>
        </div>
        
        <div>
          <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">Message</label>
          <textarea
            id="message"
            name="message"
            placeholder="Write your message..."
            rows="5"
            className="w-full px-3  border  bg-transparent border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
            required
          ></textarea>
        </div>
        
        <div className="flex justify-start">
          <button
            className="px-6 py-2 bg-green-800 text-white font-medium rounded-md hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-500"
          >
            Submit message
          </button>
        </div>
      </div>
    </div>
       </div>
  );
}