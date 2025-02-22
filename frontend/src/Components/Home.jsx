import React from 'react'
import img from '../assets/logo1.png'
import { Link } from 'react-router-dom'
function Home() {
  return (
    // <section>
    //     <div className='mx-4 md:mx-2 min-h-[650px]'>
    //         {/* image */}
    //          <div className='flex flex-col justify-center items-center '>
    //             <div className='w-full text-center lg:max-w-[800px]'>
    //                 <h1 className=''>
                        
    //                     {/* Over the decades, IIS City Campus has built a reputation for 
    //                     fostering innovation, research, and practical learning, making it a 
    //                     preferred choice for aspiring professionals. 
    //                     Its flexible learning environment and modern curriculum ensure that students stay ahead in the rapidly
    //                      evolving technological and business landscape. */}
    //                 </h1>
                    
    //                 <div>
                        
    //                 </div>
    //             </div>
    //         </div>
    //          {/*  */}
            
    //     </div>
    // </section>
    <div className='container'>
    <div className="flex flex-col items-center mt-6 lg:mt-20">
      <img src={img} alt='' className='w-[400px] md:w-[450px] drop-shadow' />
      <h1 className="text-2xl sm:text-4xl lg:text-6xl text-center tracking-wide">
        Institution of Knowledge 
        <span className="bg-gradient-to-r from-r2 to-b3 text-transparent bg-clip-text">
          {" "}
          IIS City Campus
        </span>
      </h1>
      <p className="mt-10 text-lg text-center text-neutral-500 max-w-4xl">
        <span className='text-secondary'>IIS City Campus </span>
        is an open university and institute that has been providing 
        quality education in IT, management, and related 
        fields since 1956. With a strong commitment to academic excellence and professional 
        development, the institution offers a wide range of programs designed to equip students with 
        industry-relevant skills. 
      </p>
      <p className='text-2xl m-3 tracking-wide'>Success through knowledge</p>
      <p className='text-gray-400 mb-4 md:mb-0'>Join with us through WHATSAPP</p>
      <div className="flex justify-center my-10">
        <Link to='https://chat.whatsapp.com/Ev9nGemFLcD5LByrx7plUt'>
            <button className='primary-btn'>
                whatsapp
            </button>
        </Link>
        {/* <a
          href="#"
          className="bg-gradient-to-r from-orange-500 to-orange-800 py-3 px-4 mx-3 rounded-md"
        >
          Start for free
        </a>
        <a href="#" className="py-3 px-4 mx-3 rounded-md border">
          Documentation
        </a> */}
      </div>
    </div>
    </div>
  )
}

export default Home;