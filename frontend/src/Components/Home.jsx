import React from 'react'
import img from '../assets/logo.png'
function Home() {
  return (
    <section>
        <div className='container grid grid-cols-1 md:grid-cols-2 min-h-[650px]'>
            {/* image */}
            <div className='flex flex-col items-center justify-center py-14 md:py-0 relative '>
                {/* <img src='/images/home.jpg' alt='home' className='w-full h-full object-cover' /> */}
                <div className='text-center md:text-left space-y-5 lg:max-w-[400px]'>
                    <h1 className='text-4xl lg:text-5xl font-bold leading-relaxed xl:leading-loose font-averia'>
                        <span className='text-r3'>IIS</span><span className='text-b3'> City Campus</span> 
                    </h1>
                    {/* <br/> */}
                    <h1 className='text-justify'>
                        <span className='text-secondary'>IIS City Campus </span>
                        is an open university and institute that has been providing 
                        quality education in IT, management, and related 
                        fields since 1956. With a strong commitment to academic excellence and professional 
                        development, the institution offers a wide range of programs designed to equip students with 
                        industry-relevant skills. 
                        {/* Over the decades, IIS City Campus has built a reputation for 
                        fostering innovation, research, and practical learning, making it a 
                        preferred choice for aspiring professionals. 
                        Its flexible learning environment and modern curriculum ensure that students stay ahead in the rapidly
                         evolving technological and business landscape. */}
                    </h1>
                    <p className='text-2xl tracking-wide'>Success through knowledge</p>
                    <p className='text-gray-400'>Join with us through WHATSAPP</p>
                    <div>
                        <button className='primary-btn'>
                            whatsapp
                        </button>
                    </div>
                </div>
            </div>
             {/*  */}
             <div className='flex justify-center items-center'>
                <img src={img} alt='' className='w-[300px] md:w-[650px] drop-shadow' />
            </div>
            
        </div>
    </section>
  )
}

export default Home