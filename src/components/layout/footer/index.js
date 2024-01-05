import Link from 'next/link'
import React from 'react'

const FooterLink = ({ href, title }) => {
    return <Link
        href={href || "/"}
        className='text-secondary hover:text-[#7ea446] transition-all ease-in-out duration-150 underline underline-offset-4'>
        {title}
    </Link>
}

const Footer = () => {
    return (
        <footer className='relative bg-white'>
            <div className='container px-4 lg:px-0 xl:px-8 2xl:px-0 mx-auto pt-[7rem] md:pt-[7.5rem] pb-[7.5rem]'>
                <div className='w-full md:w-7/12 lg:w-6/12 xl:w-6/12 2xl:w-5/12'>
                    <p className='text-primary text-5xl md:text-6xl lg:text-7xl xl:text-[5.5rem] font-bold'>
                        Get in <span className='text-secondary'>touch</span> with us
                    </p>
                </div>
                <div className=' pt-[3.688rem] md:pt-6 flex flex-wrap justify-between items-end'>
                    <div className='w-10/12 md:w-6/12 lg:w-5/12'>
                        <p className='text-xl font-medium flex flex-col'>
                            <span>Send a mail to <FooterLink href={"mailto:contact@entrova.co"} title={"contact@entrova.co"} /></span>
                            <span> or call <FooterLink href={"tel:00000000000"} title={"00000000000"} /></span>
                        </p>
                    </div>
                    <div className='mt-[29px] md:mt-0 w-full md:flex-1 flex flex-col md:flex-row flex-start md:justify-end md:items-center md:gap-6'>
                        <p className='text-[#737373] text-sm font-medium'>&copy;2024 Entrova Limited</p>
                        <div className='mt-3 md:mt-0 flex items-center gap-x-4 text-sm font-medium gap-6'>
                            <FooterLink href={"https://www.linkedin.com"} title={"LinkedIn"} />
                            <FooterLink href={"https://www.twitter.com"} title={"X"} />
                            <FooterLink href={"https://www.instagram.com"} title={"Instagram"} />
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer