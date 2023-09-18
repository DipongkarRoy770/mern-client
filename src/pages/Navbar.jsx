import { useContext, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import logo from '../assets/icons/logo.svg'
import {
    BoltIcon,
    Bars3BottomRightIcon,
    XMarkIcon,
} from '@heroicons/react/24/solid'
import { AuthContext } from "../provider/AuthProvider";

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false)
    const { user, logOut } = useContext(AuthContext)


    const handleLogOut = () => {
        logOut()
            .then(() => { })
            .catch(console.error())
    }
    return (
        <div className='bg-gray-100 px-4 py-5 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-6'>
            <div className='relative flex items-center justify-between'>
                {/* Logo Section */}
                {/* <Link to='/' className='inline-flex items-center'>
                        <BoltIcon className='h-6 w-6 text-blue-500' />
                        <span className='ml-2 text-xl font-bold tracking-wide text-gray-800'>
                            nextPage
                        </span>
                    </Link> */}
                <img className="w-24 h-16" src={logo} alt="" />

                {/* Nav Items Section */}
                <ul className='items-center hidden space-x-8 lg:flex'>
                    <li>
                        <NavLink
                            to='/'
                            className={({ isActive }) => (isActive ? 'active' : 'default')}
                        >
                            Home
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            to='/about'
                            className={({ isActive }) => (isActive ? 'active' : 'default')}
                        >
                            About
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            to='/service'
                            className={({ isActive }) => (isActive ? 'active' : 'default')}
                        >
                            Service
                        </NavLink>
                    </li>
                    {
                        user?.email ? <>
                            <li>
                                <NavLink
                                    to='/booking'
                                    className={({ isActive }) => (isActive ? 'active' : 'default')}
                                >
                                    Booking
                                </NavLink>
                            </li>
                            <button onClick={handleLogOut} className="btn btn-outline">Logout</button>

                        </> : <li>
                            <NavLink
                                to='/login'
                                className={({ isActive }) => (isActive ? 'active' : 'default')}
                            >
                                Login
                            </NavLink>
                        </li>
                    }
                </ul>
                {/* Mobile Navbar Section */}
                <div className='lg:hidden'>
                    {/* Dropdown Open Button */}
                    <button
                        aria-label='Open Menu'
                        title='Open Menu'
                        onClick={() => setIsMenuOpen(true)}
                    >
                        <Bars3BottomRightIcon className='w-5 text-gray-600' />
                    </button>
                    {isMenuOpen && (
                        <div className='absolute top-0 left-0 w-full z-10'>
                            <div className='p-5 bg-white border rounded shadow-sm'>
                                {/* Logo & Button section */}
                                <div className='flex items-center justify-between mb-4'>
                                    <div>
                                        <Link to='/' className='inline-flex items-center'>
                                            <BoltIcon className='h-6 w-6 text-blue-500' />
                                            <span className='ml-2 text-xl font-bold tracking-wide text-gray-800 uppercase'>
                                                nextPage
                                            </span>
                                        </Link>
                                    </div>
                                    {/* Dropdown menu close button */}
                                    <div>
                                        <button
                                            aria-label='Close Menu'
                                            title='Close Menu'
                                            onClick={() => setIsMenuOpen(false)}
                                        >
                                            <XMarkIcon className='w-5 text-gray-600' />
                                        </button>
                                    </div>
                                </div>
                                {/* Mobile Nav Items Section */}
                                <nav>
                                    <ul className='space-y-4'>
                                        <li>
                                            <Link to='/' className='default'>
                                                Home
                                            </Link>
                                        </li>
                                        <li>
                                            <Link
                                                to='/about'
                                                className='font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-blue-400'
                                            >
                                                About
                                            </Link>
                                        </li>
                                        <li>
                                            <Link
                                                to='/service'
                                                className='font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-blue-400'
                                            >
                                                Service
                                            </Link>
                                        </li>
                                        {
                                            user?.email ? <>
                                                <li>
                                                    <NavLink
                                                        to='/bookimg'
                                                        className={({ isActive }) => (isActive ? 'active' : 'default')}
                                                    >
                                                        Booking
                                                    </NavLink>
                                                </li>
                                                <button onClick={handleLogOut} className="btn btn-outline">Log out</button></> : <li>
                                                <Link
                                                    to='/login'
                                                    className='font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-blue-400'
                                                >
                                                    Login
                                                </Link>
                                            </li>
                                        }
                                    </ul>
                                </nav>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </div>
    )
    // }

    // export default Header
    // );
};

export default Navbar;