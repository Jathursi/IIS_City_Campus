import React from 'react'
import Topbar from './Topbar'
import Home from './Home'
import About from './About'
import Contact from './Contact'
import Events from './Events'
import Gallery from './Gallery'
import Team from './Team'
import Courses from './Courses'
import UpComming from './UpComming'

function Main() {
  return (
    <div className='bg-gray-100 min-h-screen'>
        <Topbar />
        <div className=''> {/* Add padding to avoid overlap */}
            <section id='home'>
                <Home />
            </section>
            <section id='upcomming'>
                <UpComming />
            </section>
            <section id='events'>
                <Events />
            </section>
            <section id='courses'>
                <Courses />
            </section>
            <section id='gallery'>
                <Gallery />
            </section>
            <section id='team'>
                <Team />
            </section>
            <section id='contact'>
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