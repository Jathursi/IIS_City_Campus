import React from 'react'

function AdminSide() {
  return (
    <div>
        <div className='flex flex-col'>
            <div className='flex p-3'>
                {/* <div className=''>
                    <img src={Logo} alt='logo' className='w-40 h-35 '/>
                </div> */}
                <h1 className='text-2xl font-bold flex gap-2 md:text-2xl'>
                    <span className='text-r3'>IIS </span>
                    <span className='text-white'>City </span>
                    <span className='text-white'>Campus </span>
                </h1>
            </div>
            <div className='w-full bg-white '></div>
            <div >
                <ul className='flex flex-col gap-2 p-3'>
                    <li className='bg-gray-200 p-3 rounded-md'><a href='/admin-dashboard'>Dashboard</a></li>
                    <li className='bg-gray-200 p-3 rounded-md'><a href='admin-main'>Users</a></li>
                    <li className='bg-gray-200 p-3 rounded-md'><a href='/admin/gallery'>Gallery</a></li>
                    <li className='bg-gray-200 p-3 rounded-md'><a href='/admin/contact'>Contact</a></li>
                    <li className='bg-gray-200 p-3 rounded-md'><a href='/admin/about'>About</a></li>
                </ul>
            </div>
        </div>
    </div>
  )
}

export default AdminSide