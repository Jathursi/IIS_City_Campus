import React, { useState, useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import { createClient } from 'contentful'

// 

function shuffleArray(array) {
  return array.sort(() => Math.random() - 0.5) // Randomize order
}

function Gallery() {
  const location = useLocation()
  const queryParams = new URLSearchParams(location.search)
  const eventId = queryParams.get('id')
  const [event, setEvent] = useState(null)
  const [selectedImageIndex, setSelectedImageIndex] = useState(null)

  useEffect(() => {
    if (eventId) {
      client.getEntry(eventId)
        .then((response) => {
          const shuffledImages = shuffleArray(response.fields.gallery || [])
          setEvent({ ...response.fields, gallery: shuffledImages })
        })
        .catch(console.error)
    }
  }, [eventId])

  const openModal = (index) => {
    setSelectedImageIndex(index)
  }

  const closeModal = () => {
    setSelectedImageIndex(null)
  }

  const nextImage = () => {
    setSelectedImageIndex((prevIndex) => (prevIndex + 1) % event.gallery.length)
  }

  const prevImage = () => {
    setSelectedImageIndex(
      (prevIndex) => (prevIndex - 1 + event.gallery.length) % event.gallery.length
    )
  }

  return (
    <div className="p-4">
      <h1 className="text-3xl font-bold mb-6 text-center">Gallery</h1>
      {event ? (
        <div>
          <h2 className="text-2xl font-semibold text-center mb-4">{event.title}</h2>
          <div className="columns-2 md:columns-3 lg:columns-4 gap-4 space-y-4">
            {event.gallery && event.gallery.map((image, index) => (
              <div
                key={index}
                className="relative cursor-pointer"
                onClick={() => openModal(index)} // Open modal on image click
              >
                <img
                  src={image.fields.file.url}
                  alt={image.fields.title}
                  className="w-full rounded-lg shadow-md"
                />
              </div>
            ))}
          </div>
        </div>
      ) : (
        <p className="text-center text-gray-600">Loading...</p>
      )}

      {/* Modal for viewing large images */}
      {selectedImageIndex !== null && (
        <div
          className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-75 z-50"
          onClick={closeModal} // Close the modal when clicking outside the image
        >
            <button
              className="absolute top-1/2 left-0 p-2 text-white text-5xl font-bold transform -translate-y-1/2"
              onClick={(e) => { e.stopPropagation(); prevImage() }} // Show previous image
            >
              &lt;
            </button>
            {/* <button
              className="absolute top-0 right-0 p-2 text-r2 text-2xl mt-2"
              onClick={(e) => { e.stopPropagation(); closeModal() }} // Close the modal
            >
              ×
            </button> */}
          <div className="relative p-4 rounded-lg max-w-4xl max-h-full">
            <img
              src={event.gallery[selectedImageIndex].fields.file.url}
              alt={event.gallery[selectedImageIndex].fields.title}
              className="h-[80vh] object-contain"
            />
          </div>
          <button
              className="absolute top-1/2 right-0 p-2 text-white text-5xl font-bold transform -translate-y-1/2"
              onClick={(e) => { e.stopPropagation(); nextImage() }} // Show next image
            >
              &gt;
            </button>
        </div>
      )}
    </div>
  )
}

export default Gallery