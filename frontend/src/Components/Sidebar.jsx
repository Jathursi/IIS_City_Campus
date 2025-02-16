import React from 'react'
import {motion, AnimatePresence} from 'framer-motion'

function Sidebar({open}) {
  return (
    <AnimatePresence mode='wait'>
        {open && (
            <motion.div
            // initial={{x: '-100%'}}
            // animate={{x: 0}}
            // exit={{x: '-100%'}}
            // transition={{duration: 0.5}}
            // className='fixed top-0 left-0 w-64 h-full bg-gray-800 text-white p-4'
            initial={{ opacity: 0, y: -100 }}
            animate = {{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -100 }}
            transition={{ duration: 0.3 }}
            className="absolute top-30 left-0 w-full
            h-screen z-20"
            >
            <div className="text-xl font-semibold uppercase bg-gray-300 text-b3 py-10 m-6 rounded-sm">
              <ul className="flex flex-col items-center gap-10">
                  <li className='py-2 hover:bg-gray-300 cursor-pointer'>Home</li>
                  <li className='py-2 hover:bg-gray-300  cursor-pointer'>About</li>
                  <li className='py-2 hover:bg-gray-300  cursor-pointer'>Gallery</li>
              </ul>
            </div>
            </motion.div>
        )}
        {/* <AnimatePresence mode="wait">
{open & (
<motion.div
initial={{ opacity: 0, y: -100 }}
animate {{ opacity: 1, y: 0 }}
exit={{ opacity: 0, y: -100 }}
transition={{ duration: 0.3 }}
className="absolute top-20 left-0 w-full
h-screen z-20"
<div className="text-xl font-semibold uppercase
Obg-primary text-white py-10 m-6 rounded-3x1">
<ul className="flex flex-col items-center
gap-10">
<li>Home</li>
<li>About</li>
<li>Services</li>
<li>Contact</li>
</ul> */}
    </AnimatePresence>
  )
}

export default Sidebar