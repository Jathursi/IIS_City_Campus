import React, { useRef } from 'react';
import Img from '../assets/flyer1.png';
import Img1 from '../assets/flyer2.png';
import Img2 from '../assets/logo.png';

const events = [
  { id: 1, title: 'Event 1', description: 'This is the description of event 1', date: '2022-01-01', time: '12:00', location: 'Location 1', image: Img },
  { id: 2, title: 'Event 2', description: 'This is the description of event 2', date: '2022-02-02', time: '12:00', location: 'Location 2', image: Img1 },
  { id: 3, title: 'Event 3', description: 'This is the description of event 3', date: '2022-03-03', time: '12:00', location: 'Location 3', image: Img2 },
  { id: 4, title: 'Event 4', description: 'This is the description of event 4', date: '2022-04-04', time: '12:00', location: 'Location 4', image: Img1 },
  { id: 5, title: 'Event 5', description: 'This is the description of event 5', date: '2022-05-05', time: '12:00', location: 'Location 5', image: Img2 },
];

function Courses() {
  const scrollRef = useRef(null);

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

  return (
    <section>
      <div className='container mt-8'>
        <h1 className='text-2xl font-bold text-left pb-10 uppercase'>On-going Courses</h1>
        <div className='relative flex items-center'>
          <button
            onClick={() => scroll('left')}
            className='absolute left-0 z-10 bg-gray-100 text-bold text-4xl px-3 py-2 rounded-full shadow-md'>&lt;</button>
          <div
            ref={scrollRef}
            className='flex gap-20 overflow-x-scroll w-full px-10 py-4 scrollbar-hide' style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}>
            {events.map((event) => (
              <div key={event.id} className='bg-white shadow-lg flex flex-col items-center justify-between w-60 flex-shrink-0'>
                <img src={event.image} alt='' className='w-full scale 125' />
              </div>
            ))}
          </div>
          <button
            onClick={() => scroll('right')}
            className='absolute right-0 z-10 bg-gray-100 text-bold text-4xl px-3 py-2 rounded-full shadow-md'>&gt;</button>
        </div>
      </div>
    </section>
  );
}

export default Courses;