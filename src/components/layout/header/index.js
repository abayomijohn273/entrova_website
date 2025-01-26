"use client"
import LinkButton from '@/components/elements/linkButton'
import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'
import Logo from "../../../../public/images/svg/logo.webp"
import MobileMenu from './mobileMenu'

const NavLink = ({ href, title }) => {
    return <div className='flex items-center'>
        <Link href={href} className='text-sm lg:text-sm-15 xl:text-base hover:text-secondary transition-all ease-in-out duration-150'>
            {title}
        </Link>
    </div>
}

const Header = () => {
    const [openMobileMenu, setOpenMobileMenu] = useState(false);
    const handleOpenMobileMenu = () => {
        setOpenMobileMenu(!openMobileMenu);
    }
    return (
        <>
            <header className={`sticky top-0 z-10 w-full overflow-hidden mx-auto bg-white`}>
                <nav className='container px-4 lg:px-0 xl:px-8 2xl:px-0 mx-auto py-4 md:py-5'>
                    <div className='w-full flex flex-row justify-between items-center'>
                        <div className='w-32'>
                            <Link href={"/"}>
                                <Image src={Logo} alt="entrova" />
                                <span className='sr-only'>entrova</span>
                            </Link>
                        </div>

                        <div className='hidden md:flex w-7/12  justify-center'>
                            <div className={`flex items-center space-x-4 lg:space-x-7`}>
                                <NavLink title='Employees' href='/employees' />
                                <NavLink title='Contractors' href='/contractors' />
                                <NavLink title='Integration' href='/integrations' />
                                <NavLink title='Payroll' href='/payroll' />
                                <NavLink title='API' href='/api' />
                            </div>
                        </div>

                        <div className='flex flex-1 justify-end'>
                            <div className={`hidden md:flex items-center space-x-4`}>
                                <div className=''>
                                    <LinkButton className="px-4 lg:px-8" title={"Book A Demo"} href={"/book-a-demo"} />
                                </div>
                                <div className='md:hidden lg:flex'>
                                    <LinkButton title={"Log In"} buttonType='' showArrow />
                                </div>
                            </div>

                            <div className='flex items-center gap-[2.5px] md:hidden ml-4'>
                                <button type='button' onClick={handleOpenMobileMenu}>
                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <g clipPath="url(#clip0_2433_1462)">
                                            <path d="M3.75 12H20.25" stroke="#022A36" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                            <path d="M3.75 6H20.25" stroke="#022A36" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                            <path d="M3.75 18H20.25" stroke="#022A36" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                        </g>
                                        <defs>
                                            <clipPath id="clip0_2433_1462">
                                                <rect width="24" height="24" fill="white" />
                                            </clipPath>
                                        </defs>
                                    </svg>

                                </button>
                            </div>
                        </div>
                    </div>
                </nav>
            </header>

            <MobileMenu
                isOpen={openMobileMenu}
                handleClose={() => setOpenMobileMenu(false)}
            />
        </>
    )
}

export default Header