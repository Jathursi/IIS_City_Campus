import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { createClient } from 'contentful';
import { motion } from 'framer-motion';

const client = createClient({
  space: process.env.REACT_APP_CONTENTFUL_SPACE,
  accessToken: process.env.REACT_APP_CONTENTFUL_ACCESS_TOKEN,
});

function UpComming() {
  const [upcomingEvents, setUpcomingEvents] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    client.getEntries({ content_type: 'events' })
      .then((response) => {
        const today = new Date();
        const filteredEvents = response.items.filter(event => 
          new Date(event.fields.date) >= today
        );
        setUpcomingEvents(filteredEvents);
      })
      .catch(console.error);
  }, []);

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev === 0 ? upcomingEvents.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev === upcomingEvents.length - 1 ? 0 : prev + 1));
  };

  return (
    <section className="w-full px-4 md:px-8 lg:px-16">
      <div className='container mx-auto'>
        <h1 className='text-2xl font-bold text-left text-b3 uppercase mb-5 md:mb-0'>Upcoming Events</h1>
        {upcomingEvents.length > 0 ? (
          <div className="w-full min-h-[400px] md:min-h-[500px] lg:min-h-[600px] bg-gray-100 flex justify-center items-center">
            <div className="relative w-full md:w-[90%] lg:w-[80%] flex items-center">
              <button
                className="absolute left-0 z-10 bg-gray-100 text-2xl md:text-4xl font-bold px-3 py-1 md:px-4 md:py-2 rounded-l-lg"
                onClick={prevSlide}
              >
                &#60;
              </button>
              <motion.div
  key={currentIndex}
  initial={{ opacity: 0, x: 50 }}
  animate={{ opacity: 1, x: 0 }}
  exit={{ opacity: 0, x: -50 }}
  transition={{ duration: 0.5 }}
  className="flex w-full bg-gray-50 shadow-lg rounded-lg overflow-hidden flex-col md:flex-row"
>
  <img
    src={upcomingEvents[currentIndex]?.fields.image?.fields.file.url}
    alt={upcomingEvents[currentIndex]?.fields.title}
    className="w-full md:w-1/3 object-cover"
  />
  <div className="w-full md:w-2/3 p-4 md:p-6">
    <h2 className="text-xl md:text-2xl font-bold mb-2">
      {upcomingEvents[currentIndex]?.fields.title}
    </h2>
    <p className="text-gray-800 text-sm text-justify mx-5 md:text-base">
  {upcomingEvents[currentIndex]?.fields.image?.fields.description
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
</p>


  </div>
</motion.div>

              <button
                className="absolute right-0 z-10 bg-gray-100 text-2xl md:text-4xl font-bold px-3 py-1 md:px-4 md:py-2 rounded-r-lg"
                onClick={nextSlide}
              >
                &#62;
              </button>
            </div>
          </div>
        ) : (
          <p className="text-center text-gray-500">No upcoming events.</p>
        )}
      </div>
    </section>
  );
}


export default UpComming;