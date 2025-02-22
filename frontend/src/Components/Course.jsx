import React, { useState, useEffect } from 'react';
import { createClient } from 'contentful';
import { motion } from 'framer-motion';

const client = createClient({
  space: process.env.REACT_APP_CONTENTFUL_SPACE,
  accessToken: process.env.REACT_APP_CONTENTFUL_ACCESS_TOKEN,
});

function Course() {
  const [course, setCourse] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isExpanded, setIsExpanded] = useState(false);

  useEffect(() => {
    client.getEntries({ content_type: 'courses' })
      .then((response) => {
        setCourse(response.items);
      })
      .catch(console.error);
  }, []);

  return (
    <section className="container mb-6 px-4 md:px-8 lg:px-16">
      <div className='mx-auto'>
        <h1 className='text-2xl font-bold text-left mb-6 text-b3 uppercase'>Course</h1>
        {course.length > 0 ? (
          <div className="w-full min-h-[400px] md:h-[500px] lg:h-[600px] bg-gray-100 flex justify-center items-center">
            <div className="relative w-full md:w-[90%] lg:w-[80%] flex items-center">
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -50 }}
                transition={{ duration: 0.5 }}
                className="flex w-full bg-white shadow-lg rounded-lg overflow-hidden flex-col md:flex-row"
              >
                <img
                  src={course[currentIndex]?.fields.image?.fields.file.url}
                  alt={course[currentIndex]?.fields.title}
                  className="w-full md:w-2/5 object-cover"
                />
                <div className="w-full md:w-3/5 p-4 md:p-6 relative">
                  <h2 className="text-xl md:text-2xl font-bold mb-2">
                    {course[currentIndex]?.fields.title}
                  </h2>

                  {/* Description with Scrollable Area */}
                  <div 
                    className={`text-gray-600 text-sm md:text-base relative transition-all duration-300
                    ${isExpanded ? 'max-h-[400px] overflow-y-scroll' : 'max-h-[400px] overflow-hidden'}`}
                    style={{ scrollbarWidth: 'none' }}
                  >
                    {course[currentIndex]?.fields.description
                      ?.split("\n")
                      .map((line, index) => (
                        <span key={index} className="block">
                          {line.split(/(https?:\/\/[^\s]+)/g).map((part, i) =>
                            part.match(/https?:\/\/[^\s]+/) ? (
                              <a 
                                key={i} 
                                href={part} 
                                target="_blank" 
                                rel="noopener noreferrer"
                                className="text-blue-500 underline hover:text-blue-700"
                              >
                                {part}
                              </a>
                            ) : (
                              part
                            )
                          )}
                        </span>
                      ))}
                  </div>

                  {/* Read More / Read Less Button */}
                  <div className="text-right">
                    <button
                      onClick={() => setIsExpanded(!isExpanded)}
                      className="text-blue-500 font-semibold mt-2 focus:outline-none"
                    >
                      {isExpanded ? "Read Less" : "Read More"}
                    </button>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        ) : (
          <p className="text-center text-gray-500">No upcoming events.</p>
        )}
      </div>
    </section>
  );
}

export default Course;