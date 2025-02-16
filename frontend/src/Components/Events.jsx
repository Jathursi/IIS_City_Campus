import React from 'react'
import Img from '../assets/flyer1.png'
import Img1 from '../assets/flyer2.png'
import Img2 from '../assets/logo.png'
import Img3 from '../assets/logo.png'


const Even = [
  {
    id: 1,
    title: 'Event 1',
    description: 'This is the description of event 1',
    date: '2022-01-01',
    time: '12:00',
    location: 'Location 1',
    image: Img ,
  },
  {
    id: 2,
    title: 'Event 2',
    description: 'This is the description of event 2',
    date: '2022-02-02',
    time: '12:00',
    location: 'Location 2',
    image: Img1,
  },
  {
    id: 3,
    title: 'Event 3',
    description: 'This is the description of event 3',
    date: '2022-03-03',
    time: '12:00',
    location: 'Location 3',
    image: Img2,
  },
  {
    id: 4,
    title: 'Event 3',
    description: 'This is the description of event 3',
    date: '2022-03-03',
    time: '12:00',
    location: 'Location 3',
    image: Img1,
  },
  {
    id: 4,
    title: 'Event 3',
    description: 'This is the description of event 3',
    date: '2022-03-03',
    time: '12:00',
    location: 'Location 3',
    image: Img1,
  },
]
function Events() {
  return (
    <section>
      <div className='container'>
        <h1 className='text-2xl text-b3 font-bold text-left pb-10 uppercase'>
          Past Events
        </h1>
        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8'>
          {Even.map((event) => (
            <div className='bg-white shadow-lg flex flex-col items-center w-60 justify-between mb-4'>
              <img src={event.image} alt='' className='w-full scale 125'/>
              {/* <div>
                <h1>{event.title}</h1>
                <h1>{event.description}</h1>
              </div> */}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Events