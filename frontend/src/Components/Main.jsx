import React from 'react'
import Topbar from './Topbar'
import Home from './Home'
import About from './About'
import Contact from './Contact'
import Events from './Events'
// import Gallery from './Gallery'
import Team from './Team'
import Courses from './Courses'
import UpComming from './UpComming'

function Main() {
  return (
    <div className='bg-gray-100 min-h-screen'>
        <Topbar />
        <div className=''> {/* Add padding to avoid overlap */}
            <section id='/'>
                <Home />
            </section>
            <section id='upcomming' className='mb-10 md:mb-0'>
                <UpComming />
            </section>
            <section id='events' className=''>
                <Events />
            </section>
            <section id='courses'>
                <Courses />
            </section>
            <section id='contact' className='flex justify-center items-center mx-5'>
                <Contact />
            </section>
            <section id='about'>
                <About />
            </section>
        </div>
    </div>
  )
}

export default Main