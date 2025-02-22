import React, { useRef, useState, useEffect } from 'react';
import Img from '../assets/flyer1.png';
import Img1 from '../assets/flyer2.png';
import Img2 from '../assets/logo.png';
import { createClient } from 'contentful';
import { useNavigate } from 'react-router-dom';

const client = createClient({
  space: process.env.REACT_APP_CONTENTFUL_SPACE,
  accessToken: process.env.REACT_APP_CONTENTFUL_ACCESS_TOKEN,
});


function Courses() {
  const navigate = useNavigate();
  const scrollRef = useRef(null);
  const [course, setCourse] = useState([]);
  const scroll = (direction) => {
    if (scrollRef.current) {
      const { current } = scrollRef;
      if (direction === 'left') {
        current.scrollLeft -= 250;
      } else {
        current.scrollLeft += 250;
      }
    }
  };
  useEffect(() => {
      client.getEntries({ content_type: 'courses' })
        .then((response) => {
          setCourse(response.items);
        })
        .catch(console.error);
    }, []);
  const handleCardClick = (id) => {
    navigate(`/circulate/course?id=${id}`);
  };

  return (
    <section>
      <div className='container mt-8'>
        <h1 className='text-2xl text-b3 font-bold text-left pb-10 uppercase mx-5 md:mx-0'>On-going Courses</h1>
        <div className='flex items-center'>
          <button
            onClick={() => scroll('left')}
            className='absolute left-0 md:left-20 z-10 bg-gray-100 text-bold text-4xl px-3 py-2 rounded-full shadow-md'>&lt;</button>
          <div
            ref={scrollRef}
            className='flex gap-20 overflow-x-scroll w-full px-10 py-4 scrollbar-hide' style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}>

            {course.map((event) => (
              <div key={event.sys.id} className='bg-white shadow-lg flex flex-col items-center justify-between w-60 flex-shrink-0'
                onClick={() => handleCardClick(event.sys.id)}>
                <img 
                  src={event.fields.image?.fields.file.url} 
                  alt={event.fields.title || 'Course Image'} 
                  className='w-full scale 125' 
                />
              </div>
            ))}

          </div>
          <button
            onClick={() => scroll('right')}
            className='absolute right-0 md:right-20 z-10 bg-gray-100 text-bold text-4xl px-3 py-2 rounded-full shadow-md'>&gt;</button>
        </div>
      </div>
    </section>
  );
}

export default Courses;