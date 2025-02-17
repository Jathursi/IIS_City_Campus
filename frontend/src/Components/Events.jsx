// import React, {useState, useEffect} from 'react'
// import Img from '../assets/flyer1.png'
// import Img1 from '../assets/flyer2.png'
// import Img2 from '../assets/logo.png'
// import Img3 from '../assets/logo.png'
// import { useNavigate } from 'react-router-dom'
// import { createClient } from 'contentful';

// const client = createClient({
//   space: '6e57gtsiar05',  // Replace with your space ID
//   accessToken: '_pNDf60qMHSa9qrLvnjZycpWlRwIDPXvxDyaCpzrfkA',  // Replace with your access token
// });
// // const Even = [
// //   {
// //     id: 1,
// //     title: 'Event 1',
// //     description: 'This is the description of event 1',
// //     date: '2022-01-01',
// //     time: '12:00',
// //     location: 'Location 1',
// //     image: Img ,
// //   },
// //   {
// //     id: 2,
// //     title: 'Event 2',
// //     description: 'This is the description of event 2',
// //     date: '2022-02-02',
// //     time: '12:00',
// //     location: 'Location 2',
// //     image: Img1,
// //   },
// //   {
// //     id: 3,
// //     title: 'Event 3',
// //     description: 'This is the description of event 3',
// //     date: '2022-03-03',
// //     time: '12:00',
// //     location: 'Location 3',
// //     image: Img2,
// //   },
// //   {
// //     id: 4,
// //     title: 'Event 3',
// //     description: 'This is the description of event 3',
// //     date: '2022-03-03',
// //     time: '12:00',
// //     location: 'Location 3',
// //     image: Img1,
// //   },
// //   {
// //     id: 4,
// //     title: 'Event 3',
// //     description: 'This is the description of event 3',
// //     date: '2022-03-03',
// //     time: '12:00',
// //     location: 'Location 3',
// //     image: Img1,
// //   },
// // ]
// function Events() {
//    const navigate = useNavigate()

//   const handleCardClick = (id) => {
//     navigate(`/circulate/gallery?id=${id}`)
//   }
//   const [events, setEvents] = useState([]);

//   useEffect(() => {
//     client.getEntries({ content_type: 'Events' })  // Replace with your content model's name
//       .then((response) => {
//         setEvents(response.items);
//       })
//       .catch(
//         console.error
//       );
//   }, []);
//   return (
//     <section>
//       <div className='container'>
//         <h1 className='text-2xl text-b3 font-bold text-left pb-10 uppercase'>
//           Past Events
//         </h1>
//         <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8'>
//           {events.map((event) => (
//             <div className='bg-white shadow-lg flex flex-col items-center justify-between mb-4'
//               onClick={() => handleCardClick(event.id)}
//             >
//               <img src={event.image} alt='' className='w-full scale 125'/>
//               {/* <div>
//                 <h1>{event.title}</h1>
//                 <h1>{event.description}</h1>
//               </div> */}
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   )
// }

// export default Events
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { createClient } from 'contentful';

const client = createClient({
  space: '6e57gtsiar05', // Your Space ID
  accessToken: '_pNDf60qMHSa9qrLvnjZycpWlRwIDPXvxDyaCpzrfkA', // Your Access Token
});

function Events() {
  const navigate = useNavigate();
  const [events, setEvents] = useState([]);

  useEffect(() => {
    client.getEntries({ content_type: 'events' }) // Use correct Content Type ID
      .then((response) => {
        setEvents(response.items);
      })
      .catch(console.error);
  }, []);

  const handleCardClick = (id) => {
    navigate(`/circulate/gallery?id=${id}`);
  };

  return (
    <section>
      <div className="container">
        <h1 className='text-2xl text-b3 font-bold text-left pb-10 uppercase'>
          Past Events
        </h1>
        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8'>
          {events.map((event) => (
            <div
              key={event.sys.id} // Add a unique key
              className='bg-white shadow-lg flex flex-col items-center justify-between mb-4'
              onClick={() => handleCardClick(event.sys.id)}
            >
              <img src={event.fields.image?.fields.file.url} alt={event.fields.title} className="w-full scale 125" />
              {/* <div> */}
                {/* <h1>{event.fields.title}</h1> */}
                {/* <p>{event.fields.description}</p> */}
              {/* </div> */}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Events;
