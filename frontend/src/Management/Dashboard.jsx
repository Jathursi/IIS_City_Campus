import React from 'react'
import AdminTop from './AdminTop.jsx'
import AdminSide from './AdminSide.jsx'
import Mainroute from './Mainroute.jsx'
function Dashboard() {
  return (
    <div>
      <div className='w-full flex'>
        <div className='w-2/12 h-[100vh]  bg-gradient-to-b from-b3 to-r2 text-white sticky top-0 shadow-lg'>
        <AdminSide />
        </div>
        <div className='w-10/12'>
          <AdminTop/>
          <Mainroute />
        </div>
      </div>
    </div>
  )
}

export default Dashboard