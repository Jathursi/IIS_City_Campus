import React from 'react';
import { FaFacebook, FaInstagram, FaLinkedin, FaPhone, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';
import Logo from '../assets/logo1.png';
import { motion } from 'framer-motion';

function About() {
  return (
    <footer className="bg-gray-200 text-white p-6">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="container mx-auto flex flex-col md:flex-row justify-between items-center gap-6"
      >
        <div className="flex flex-col items-center gap-4">
          {/* Left Section: Logo & Name */}
          {/* <div className="hidden md:flex md:flex-row items-center gap-4">
            <img src={Logo} alt="logo" className="w-40 h-35" />
            <h1 className="text-3xl font-bold gap-2 hidden md:flex md:flex-col">
              <span className="text-r3">IIS </span>
              <span className="text-b3">City </span>
              <span className="text-b3">Campus </span>
            </h1>
          </div> */}
          <h2 className='text-black text-1xl'>Follow us on</h2>
          <div className="text-2xl text-black flex gap-4 items-center mt-4 md:mt-0">
            {/* <h3>Follow us on:</h3> */}
            <FaFacebook />
            <FaInstagram />
            <FaLinkedin />
          </div>
        </div>

        {/* Center Section: Services */}
        <div className="text-black gap-2 hidden md:flex lg:flex md:flex-col md:text-left">
          <h2 className="font-bold text-lg">Our Services</h2>
          <p className="flex items-center gap-2">Quality Education</p>
          <p className="flex items-center gap-2">Professional Training</p>
          <p className="flex items-center gap-2">Career Guidance</p>
        </div>

        {/* Right Section: Contact & Map */}
        <div className="text-black flex flex-col gap-2 text-center md:text-left">
          <h2 className="font-bold text-lg">Contact Us</h2>
          <p className="flex items-center gap-2"><FaPhone /> +123 456 7890</p>
          <p className="flex items-center gap-2"><FaEnvelope /> info@iiscity.com</p>
          <p className="flex items-center gap-2"><FaMapMarkerAlt /> No.655, Navalar Road, Nallur, Jaffna</p>
        </div>

        {/* Google Map Embed */}
        <div className="w-full md:w-auto">
          <iframe
            title="IIS City Campus Location"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3958.986529909626!2d80.02845631477454!3d9.668415393094186!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3afe53f8a9089c75%3A0xd5e742a2cbc7e440!2sIIS%20City%20Campus!5e0!3m2!1sen!2slk!4vYOUR_MAP_EMBED_ID"
            width="100%"
            height="200"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
          ></iframe>
        </div>
      </motion.div>
    </footer>
  );
}

export default About;