import Link from 'next/link'
import { useRouter } from "next/router";
import { useState } from 'react';
import { connect } from 'react-redux'
import { useCookies } from 'react-cookie'

import { logout } from "../../../store/loginReducer"

const header = ({ isLogin, logout }) => {
    const router = useRouter();
    const menuArray = [{ href: "/", name: "Home" }, { href: "/about", name: "About" }, { href: "/projects", name: "Projects" }, { href: "/contact", name: "Contact" }]
    const [toggleMenu, settoggleMenu] = useState(false)
    const [toggleProfile, setToggleProfile] = useState(false)
    const [cookies, removeCookie] = useCookies(['jwt'])
    const handletoggleMenu = () => {
        settoggleMenu(!toggleMenu)
    }
    const handletoggleProfile = () => {
        setToggleProfile(!toggleProfile)
    }

    const handleLogOut = () => {
        logout()
        removeCookie(['jwt'])
        return router.push('/')
    }
    return (
        <header>
            <nav className="bg-green-800 bg-[#005C5C]">
                <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
                    <div className="relative flex items-center justify-between h-16">
                        <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                            <button onClick={handletoggleMenu} type="button" className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white" aria-controls="mobile-menu" aria-expanded="false">
                                <span className="sr-only">Open main menu</span>
                                <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                                </svg>
                                <svg className="hidden h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                                </svg>
                            </button>
                        </div>
                        <div className="flex-1 flex items-center justify-center sm:items-stretch sm:justify-start">
                            <div className="flex-shrink-0 flex items-center">
                                <img className="block lg:hidden h-8 w-auto" src="images/logo-lotus.png" alt="Workflow" />
                                <img className="hidden lg:block h-8 w-auto" src="images/logo-lotus.png" alt="Workflow" />
                            </div>
                            <div className="hidden sm:block sm:ml-6">
                                <div className="flex space-x-4">
                                    {menuArray.map((menu, index) => (
                                        <Link key={index} href={menu.href}><a className={`${menu.href === router.pathname ? "text-amber-500" : "text-white"} transition-all ease hover:scale-125 duration-300 px-3 py-2 rounded-md text-sm font-medium`}>{menu.name}</a></Link>
                                    ))}
                                </div>
                            </div>
                        </div>
                        {!isLogin && <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                            <button className="bg-amber-500 hover:bg-amber-600 text-white font-bold py-2 px-4 rounded-full">
                                <Link href={'/login'}>Login</Link> 
                            </button>
                        </div>}
                        {isLogin && <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                            <button type="button" className="bg-gray-800 p-1 rounded-full text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white">
                                <span className="sr-only">View notifications</span>
                                <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
                                </svg>
                            </button>
                            <div className="ml-3 relative">
                                <div>
                                    <button onClick={handletoggleProfile} type="button" className="bg-gray-800 flex text-sm rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white" id="user-menu-button" aria-expanded="false" aria-haspopup="true">
                                        <span className="sr-only">Open user menu</span>
                                        <img className="h-8 w-8 rounded-full" src="images/avatar_small.jpg" alt="" />
                                    </button>
                                </div>
                                {toggleProfile && <div className="origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg py-1 bg-white ring-1 ring-black ring-opacity-5 focus:outline-none z-10" role="menu" aria-orientation="vertical" aria-labelledby="user-menu-button" tabIndex="-1">
                                     
                                    <Link href={'/profile'}><a className="block px-4 py-2 text-sm text-gray-700" role="menuitem" tabIndex="-1" id="user-menu-item-0">Your Profile</a></Link>
                                    <a href="#" className="block px-4 py-2 text-sm text-gray-700" role="menuitem" tabIndex="-1" id="user-menu-item-1">Settings</a>
                                    <a href="#" className="block px-4 py-2 text-sm text-gray-700" role="menuitem" tabIndex="-1" id="user-menu-item-2" onClick={handleLogOut}>Sign out</a>
                                </div>}
                            </div>
                        </div>}
                    </div>
                </div>

                {toggleMenu && <div className="sm:hidden" id="mobile-menu">
                    <div className="px-2 pt-2 pb-3 space-y-1">
                        {menuArray.map((menu, index) => (
                            <Link key={index} href={menu.href}><a className={`${menu.href === router.pathname ? "bg-gray-800 text-white" : "text-gray-300"} block px-3 py-2 rounded-md text-base font-medium`}>{menu.name}</a></Link>
                        ))}
                    </div>
                </div>}
            </nav>
        </header>
    )
}
const mapStateToProps = (state) => ({
    isLogin: state.loginReducer.isLogin
})

const mapDispatchToProps = { logout }

export default connect(mapStateToProps, mapDispatchToProps)(header)
