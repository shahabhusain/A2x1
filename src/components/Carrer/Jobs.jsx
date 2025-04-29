import React, { useState } from 'react';

export default function Jobs() {
  const [activeSlide, setActiveSlide] = useState(0);

  const jobs = [
    {
      id: 1,
      title: "Home Health Aide (HHA)",
      description: "Ensuring proper medication schedules and dosage adherence.",
      location: "Northern",
      type: "Part-Time",
      salary: "Competitive Salary",
      requirements: [
        "Provide top-tier patient care and coordinate with caregivers.",
        "Must have a valid RN license and 2+ years of experience."
      ]
    },
    {
      id: 2,
      title: "Registered Nurse (RN)",
      description: "Providing skilled nursing care to patients at home.",
      location: "Southern",
      type: "Full-Time",
      salary: "$75,000 - $85,000",
      requirements: [
        "Current RN license in good standing",
        "Minimum 3 years of clinical experience"
      ]
    },
    {
      id: 3,
      title: "Physical Therapist",
      description: "Helping patients regain mobility and strength.",
      location: "Eastern",
      type: "Part-Time",
      salary: "$45 - $65 per hour",
      requirements: [
        "Doctor of Physical Therapy degree",
        "State licensure"
      ]
    },
    {
      id: 4,
      title: "Occupational Therapist",
      description: "Assisting patients with daily living activities.",
      location: "Western",
      type: "Full-Time",
      salary: "$80,000 - $95,000",
      requirements: [
        "Master's degree in Occupational Therapy",
        "2+ years of experience"
      ]
    }
  ];

  const nextSlide = () => {
    setActiveSlide((prev) => (prev === jobs.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setActiveSlide((prev) => (prev === 0 ? jobs.length - 1 : prev - 1));
  };



  return (
    <div className="w-[90%] mx-auto px-12 py-12">
      <div className="flex justify-between items-center mb-10">
        <h2 className="text-5xl font-bold text-gray-800">Explore Jobs near You</h2>

        <div className="flex space-x-2">
          <button
            onClick={prevSlide}
            className="w-10 h-10 flex items-center justify-center rounded-full bg-green-100 hover:bg-green-200 transition-colors"
            aria-label="Previous job"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z" clipRule="evenodd" />
            </svg>
          </button>

          <button
            onClick={nextSlide}
            className="w-10 h-10 flex items-center justify-center rounded-full bg-gray-800 hover:bg-gray-700 text-white transition-colors"
            aria-label="Next job"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
            </svg>
          </button>
        </div>
      </div>

      <div className="relative overflow-hidden">
        <div
          className="flex gap-6 transition-transform duration-300 ease-in-out"
          style={{ transform: `translateX(-${activeSlide * 33.33}%)` }}
        >
          {jobs.map((job, index) => (
            <div
              key={job.id}
              className={`min-w-[300px] h-[500px] px-12 rounded-2xl py-16 flex-none transition-all duration-300 ${
                index === activeSlide
                  ? 'bg-gray-800 text-white scale-105 shadow-xl rounded-2xl'
                  : 'bg-green-50 text-gray-800 scale-95 rounded-xl border border-gray-100'
              }`}
            >
              <div className="p-6 h-full flex flex-col">
                <h3 className="text-xl font-bold mb-2">{job.title}</h3>
                <p className="mb-6 text-sm opacity-90">{job.description}</p>

                <div className="flex flex-wrap gap-3 mb-6">
                  {[job.location, job.type, job.salary].map((info, idx) => (
                    <div
                      key={idx}
                      className={`flex items-center gap-1 rounded-full px-3 py-1 text-sm ${
                        index === activeSlide ? 'bg-gray-700' : 'bg-white'
                      }`}
                    >
                      <svg className="w-4 h-4" viewBox="0 0 20 20" fill="currentColor">
                        <path
                          fillRule="evenodd"
                          d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
                          clipRule="evenodd"
                        />
                      </svg>
                      <span>{info}</span>
                    </div>
                  ))}
                </div>

                <div className="mb-6">
                  <h4 className="font-medium mb-3">Requirements</h4>
                  <ul className="space-y-2">
                    {job.requirements.map((req, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <div className={`mt-1 ${index === activeSlide ? 'text-green-300' : 'text-green-600'}`}>
                          {index === activeSlide ? (
                            <div className="w-5 h-5 rounded-full border border-green-300 flex items-center justify-center">
                              <svg className="w-3 h-3" viewBox="0 0 20 20" fill="currentColor">
                                <path
                                  fillRule="evenodd"
                                  d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                                  clipRule="evenodd"
                                />
                              </svg>
                            </div>
                          ) : (
                            <svg className="w-5 h-5" viewBox="0 0 20 20" fill="currentColor">
                              <path
                                fillRule="evenodd"
                                d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                                clipRule="evenodd"
                              />
                            </svg>
                          )}
                        </div>
                        <span className="text-sm">{req}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mt-auto">
                  <button
                    className={`px-6 py-2 rounded-full text-sm font-medium ${
                      index === activeSlide
                        ? 'bg-green-200 text-gray-800 hover:bg-green-300'
                        : 'bg-gray-800 text-white hover:bg-gray-700'
                    } transition-colors`}
                  >
                    Apply now
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

   
    </div>
  );
}