import React from 'react'
import { useNavigate } from 'react-router-dom'
function AdminSide() {
    const navigate = useNavigate();
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
                    <li className='hover:scale-110 hover:bg-gradient-to-l from-b3 to-r2 p-3 rounded-md'><span onClick={()=>navigate('admin-main')}>Dashboard</span></li>
                    <li className='hover:scale-110 hover:bg-gradient-to-l from-b3 to-r2 p-3 rounded-md'><span onClick={()=>navigate('staff')}>Start</span></li>
                    <li className='hover:scale-110 hover:bg-gradient-to-l from-b3 to-r2 p-3 rounded-md'><span onClick={()=>navigate('students')}>Gallery</span></li>
                    <li className='hover:scale-110 hover:bg-gradient-to-l from-b3 to-r2 p-3 rounded-md'><a href='/admin/contact'>Contact</a></li>
                    <li className='hover:scale-110 hover:bg-gradient-to-l from-b3 to-r2 p-3 rounded-md'><a href='/admin/about'>About</a></li>
                </ul>
            </div>
        </div>
    </div>
  )
}

export default AdminSide