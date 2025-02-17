import React from 'react'
import Topbar from './Topbar'
import About from './About'
import { Outlet } from 'react-router-dom'

function Circulate() {
  return (
    <div className='bg-gray-100 min-h-screen'>
        <Topbar />
        <div className='min-h-[500px] mt-12'>
            <Outlet />
        </div>
        <section id='about'>
            <About />
        </section>
    </div>
  )
}

export default Circulate