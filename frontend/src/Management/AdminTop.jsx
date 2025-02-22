import React from 'react'
import { MdMenu } from 'react-icons/md'
import { scroller } from 'react-scroll'
import { useNavigate } from 'react-router-dom'


function AdminTop() {
    const navigate = useNavigate()
    const [open, setOpen] = React.useState(false)

    const handleScroll = (id) => {
        scroller.scrollTo(id, {
            duration: 500,
            delay: 0,
            smooth: 'easeInOutQuart'
        })
    }

    return (
        <nav className='sticky top-0 z-50 shadow-lg bg-gradient-to-r from-b3 to-r2 text-white '> {/* Ensure bg color and sticky positioning */}
            <div className='mx-5 md:mx-5'>
                <div className='container'>
                    <div className='flex justify-between items-center py-4'>
                        <div>
                            move
                        </div>
                        <div className='hidden md:block'>
                            <ul className='flex items-center space-x-4'>
                                <li>Notify</li>
                                <li>Profile</li>
                            </ul>
                        </div>
                        <div className='md:hidden'>
                            <MdMenu className='text-3xl font-bold text-r3' onClick={() => setOpen(!open)} />
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default AdminTop