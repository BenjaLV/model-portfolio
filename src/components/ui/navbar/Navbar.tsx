'use client';

import React from 'react'
import Link from 'next/link'
import { IoLogoInstagram, IoLogoWhatsapp } from "react-icons/io5";
import { SiVsco } from "react-icons/si";

import { bodyFont, titleFont } from '@/config/fonts'
import { useUIStore } from '@/store/ui/store';
import { usePathname } from 'next/navigation';



const Navbar = () => {

    const isSideMenuOpen = useUIStore((state) => state.isSideMenuOpen);
    const openSideMenu = useUIStore((state) => state.openSideMenu);
    const closeMenu = useUIStore((state) => state.closeSideMenu);
    const pathname = usePathname()


    const handleButtonClick = () => {
        if (isSideMenuOpen) {
            closeMenu();
        } else {
            openSideMenu();
        }
    };

    return (
        <nav className='flex py-7 px-12 justify-between items-center w-full'>

            {/* logo */}
            <div className='sm:flex sm:justify-center'>
                <Link href='/'>
                    <span className={`${titleFont.className} antialiased font-extrabold text-2xl text-white`}>
                        Benjamín La Valla
                    </span>
                </Link>
            </div>

            {/* menu  */}

            <div className='hidden sm:flex items-center text-white'>
                {pathname === '/about' && (
                    <Link href='/' className='m-1 p-1 text-md transition-all font-light'>
                        Home
                    </Link>
                )}
                <Link href='/about' className='m-1 p-1 text-md transition-all font-light'>
                    About
                </Link>
                <Link href='mailto:benjalavalla@gmail.com' className='m-1 p-1 text-md transition-all font-light'>
                    Contact
                </Link>

                <Link href='https://www.instagram.com/benjalavalla/' target='_blank' className='mx-1'>
                    <IoLogoInstagram size={20} />
                </Link>

                <Link href='https://wa.me/5492494018575' target='_blank' className='mx-1'>
                    <IoLogoWhatsapp size={20} />
                </Link>

                <Link href='https://vsco.co/benjalavalla/gallery' target='_blank' className='mx-1'>
                    <SiVsco size={20} />
                </Link>
            </div>


            <div className='sm:hidden'>
                <button className='absolute mb-1 right-6 flex-col justify-center items-center' onClick={handleButtonClick}>
                    <span className={`bg-white block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm ${isSideMenuOpen ? 'rotate-45 translate-y-1' : '-translate-y-0.5'}`}></span>
                    <span className={`bg-white block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm my-0.5 ${isSideMenuOpen ? 'opacity-0' : 'opacity-100'}`}></span>
                    <span className={`bg-white block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm ${isSideMenuOpen ? '-rotate-45 -translate-y-1' : 'translate-y-0.5'}`}></span>
                </button>
            </div>

            {
                isSideMenuOpen && (
                    <div className={`min-w-[70vw] min-h-[60vw] justify-between z-30 items-center fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 ${pathname === '/about' ? 'bg-black/60' : 'bg-white/60'} rounded-lg py-20`}>
                        <nav className='flex items-center flex-col justify-center my-8 py-1'>
                            {
                                pathname === '/about' && (
                                    <Link href='/' className={` text-md transition-all font-medium ${pathname === '/about' ? 'text-white' : 'text-black'} `} onClick={closeMenu}>
                                        Home
                                    </Link>
                                )
                            }
                            <Link href='/about' className={` text-md transition-all font-medium ${pathname === '/about' ? 'text-white' : 'text-black'} `} onClick={closeMenu}>
                                About
                            </Link>
                            <Link href='mailto:benjalavalla@gmail.com' className={` text-md transition-all font-medium ${pathname === '/about' ? 'text-white' : 'text-black'} `} onClick={closeMenu}>
                                Contact
                            </Link>
                        </nav>
                        <nav className='relative flex justify-center bottom-5'>
                            <Link href='https://www.instagram.com/benjalavalla/' target='_blank' className={`mx-1 ${pathname === '/about' ? 'text-white' : 'text-black'}`} onClick={closeMenu}>
                                <IoLogoInstagram size={20} />
                            </Link>

                            <Link href='https://wa.me/5492494018575' target='_blank' className={`mx-1 ${pathname === '/about' ? 'text-white' : 'text-black'}`} onClick={closeMenu}>
                                <IoLogoWhatsapp size={20} />
                            </Link>


                            <Link href='https://vsco.co/benjalavalla/gallery' target='_blank' className={`mx-1 ${pathname === '/about' ? 'text-white' : 'text-black'}`} onClick={closeMenu}>
                                <SiVsco size={20} />
                            </Link>
                        </nav>
                    </div>
                )
            }

            {
                isSideMenuOpen && (
                    <div onClick={closeMenu} className="fade-in fixed top-0 left-0 w-screen h-screen z-10 backdrop-filter backdrop-blur-sm" />
                )
            }
        </nav>

    )
}

export default Navbar