
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { createClient } from 'contentful';

const client = createClient({
  space: process.env.REACT_APP_CONTENTFUL_SPACE,
  accessToken: process.env.REACT_APP_CONTENTFUL_ACCESS_TOKEN,
});

// function Events() {
//   const navigate = useNavigate();
//   const [events, setEvents] = useState([]);

//   useEffect(() => {
//     client.getEntries({ content_type: 'events' }) // Use correct Content Type ID
//       .then((response) => {
//         setEvents(response.items);
//       })
//       .catch(console.error);
//   }, []);

//   const handleCardClick = (id) => {
//     navigate(`/circulate/gallery?id=${id}`);
//   };

//   return (
//     <section>
//       <div className="container">
//         <h1 className='text-2xl text-b3 font-bold text-left pb-10 uppercase'>
//           Past Events
//         </h1>
//         <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8'>
//           {events.map((event) => (
//             <div
//               key={event.sys.id} // Add a unique key
//               className='bg-white shadow-lg flex flex-col items-center justify-between mb-4'
//               onClick={() => handleCardClick(event.sys.id)}
//             >
//               <img src={event.fields.image?.fields.file.url} alt={event.fields.title} className="w-full scale 125" />
//               {/* <div> */}
//                 {/* <h1>{event.fields.title}</h1> */}
//                 {/* <p>{event.fields.description}</p> */}
//               {/* </div> */}
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }

// export default Events;


function Events() {
  const navigate = useNavigate();
  const [pastEvents, setPastEvents] = useState([]);

  useEffect(() => {
    client.getEntries({ content_type: 'events' })
      .then((response) => {
        const today = new Date();
        const filteredEvents = response.items.filter(event => 
          new Date(event.fields.date) < today
        );
        setPastEvents(filteredEvents);
      })
      .catch(console.error);
  }, []);

  const handleCardClick = (id) => {
    navigate(`/circulate/gallery?id=${id}`);
  };

  return (
    <section className='mb-5 mx-5 md:mb-0'>
      <div className="container ">
        <h1 className='text-2xl text-b3 font-bold text-left pb-10 uppercase'>
          Past Events
        </h1>
        <div className='grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-8'>
          {pastEvents.map((event) => (
            <div
              key={event.sys.id}
              className='bg-white shadow-lg flex flex-col items-center justify-between mb-4'
              onClick={() => handleCardClick(event.sys.id)}
            >
              <img src={event.fields.image?.fields.file.url} alt={event.fields.title} className="w-full scale 125" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Events;