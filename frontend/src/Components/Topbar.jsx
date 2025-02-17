import React from 'react'
import { MdMenu } from 'react-icons/md'
import Sidebar from './Sidebar'
import Logo from '../assets/logo1.png'
import { scroller } from 'react-scroll'
import { Link } from 'react-router-dom'

const NavbarMenu = [
    {
        id: 1,
        name: 'Home',
        url: '/'
    },
    {
        id: 2,
        name: 'Events',
        url: 'events'
    },
    {
        id: 3,
        name: 'Gallery',
        url: '/circulate/eventsmove'
    },
    {
        id: 4,
        name: 'Team',
        url: 'team'
    },
    {
        id: 5,
        name: 'Contact',
        url: 'contact'
    },
    {
        id: 6,
        name: 'About',
        url: 'about'
    },
]

function Topbar() {
    const [open, setOpen] = React.useState(false)

    const handleScroll = (id) => {
        scroller.scrollTo(id, {
            duration: 500,
            delay: 0,
            smooth: 'easeInOutQuart'
        })
    }

    return (
        <nav className='sticky top-0 z-50 shadow-lg bg-gray-100 '> {/* Ensure bg color and sticky positioning */}
            <div className='container'>
                <div className='flex justify-between items-center py-4'>
                    {/* Logo */}
                    <div className='flex justify-center items-center space-x-2'>
                        <div className=''>
                            <img src={Logo} alt='logo' className='w-40 h-35 '/>
                        </div>
                        <h1 className='text-3xl font-bold flex flex-col '>
                            <span className='text-r3'>IIS </span>
                            <span className='text-b3'>City </span>
                            <span className='text-b3'>Campus </span>
                        </h1>
                    </div>
                    {/* Menu */}
                    <div className='hidden md:block'>
                        <ul className='flex items-center space-x-4'>
                            {NavbarMenu.map((menu) => (
                                <li key={menu.id}>
                                    {menu.url.startsWith('/') ? (
                                        <Link to={menu.url} className='text-b3 hover:text-gray-600'>
                                            {menu.name}
                                        </Link>
                                    ) : (
                                        <button onClick={() => handleScroll(menu.url)} className='text-b3 hover:text-gray-600'>
                                            {menu.name}
                                        </button>
                                    )}
                                </li>
                            ))}
                            <button className='secondary-btn '>
                                LMS
                            </button>
                        </ul>
                    </div>
                    {/* Mobile */}
                    <div className='md:hidden'>
                        <MdMenu className='text-4xl text-r3' onClick={() => setOpen(!open)} />
                    </div>
                </div>
            </div>
            <Sidebar open={open} />
        </nav>
    )
}

export default Topbar