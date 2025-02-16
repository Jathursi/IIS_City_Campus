import { useState } from "react";
// import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import Img from '../assets/flyer1.png';
import Img1 from '../assets/flyer2.png';
const slides = [
  {
    image: Img, // Replace with your image URL
    title: "Slide 1",
    description: "This is the description for Slide 1. Customize as needed."
  },
  {
    image: Img1,
    title: "Slide 2",
    description: "This is the description for Slide 2. Add your own content."
  },
  {
    image: Img,
    title: "Slide 3",
    description: "This is the description for Slide 3. Update as required."
  }
];

function UpComming() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  };

  
  return (
    <section>
        <div className='container'>
            <h1 className='text-2xl font-bold text-left text-b3 uppercase'>Up Comming Events</h1>
            <div className="w-full min-h-[600px] bg-gray-100 flex justify-center items-center">
                <div className="relative w-[80%] flex items-center">
                    <button
                    className="absolute left-0 z-10 bg-gray-100 text-4xl font-bold px-4 py-2 rounded-l-lg"
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
                    className="flex w-full bg-white shadow-lg rounded-lg overflow-hidden"
                    >
                    <img
                        src={slides[currentIndex].image}
                        alt={slides[currentIndex].title}
                        className="w-1/3 object-cover"
                    />
                    <div className="w-2/3 p-6">
                        <h2 className="text-2xl font-bold mb-2">{slides[currentIndex].title}</h2>
                        <p className="text-gray-600">{slides[currentIndex].description}</p>
                    </div>
                    </motion.div>
                    <button
                    className="absolute right-0 z-10 bg-gray-100 text-4xl font-bold px-4 py-2 rounded-r-lg"
                    onClick={nextSlide}
                    >
                    &#62;
                    </button>
                </div>
            </div>
        </div>
    </section>
  );
}

export default UpComming;