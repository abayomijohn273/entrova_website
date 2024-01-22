"use client"
import React, { useLayoutEffect, useRef } from 'react'
import Link from 'next/link'
import { gsap } from '@/libs/gsap'

const FooterLink = ({ href, title }) => {
    return <Link
        href={href || "/"}
        className='text-secondary hover:text-[#7ea446] transition-all ease-in-out duration-150 underline underline-offset-4'>
        {title}
    </Link>
}

const Footer = () => {
    const footerRef = useRef();

    useLayoutEffect(() => {
        let ctx = gsap.context(() => {
            const tl5 = gsap.timeline({
                defaults: {
                    duration: 1
                },
                scrollTrigger: {
                    trigger: ".container",
                    start: "top 90%",
                }
            });

            tl5.from(".footer-section_title span span", {
                y: 120,
                ease: "power2.out",
                stagger: 0.1,
            });
        }, footerRef);

        return () => ctx.revert();
    }, [])

    return (
        <footer ref={footerRef} className='relative bg-white'>
            <div className='container px-4 lg:px-0 xl:px-8 2xl:px-0 mx-auto pt-[7rem] md:pt-[7.5rem] pb-[7.5rem]'>
                <div className='w-full md:w-7/12 lg:w-6/12 xl:w-6/12 2xl:w-5/12'>
                    <p className='footer-section_title text-primary text-5xl md:text-6xl lg:text-7xl xl:text-[5.5rem] font-bold'>
                        <span className='inline-flex overflow-hidden'>
                            <span>Get</span>&nbsp;
                        </span>
                        <span className='inline-flex overflow-hidden'>
                            <span>in</span>&nbsp;
                        </span>
                        <span className='inline-flex overflow-hidden'>
                            <span className='text-secondary'>touch</span>&nbsp;
                        </span>
                        <span className='inline-flex overflow-hidden'>
                            <span>with</span>&nbsp;
                        </span>
                        <span className='inline-flex overflow-hidden'>
                            <span>us</span>&nbsp;
                        </span>
                    </p>
                </div>
                <div className=' pt-[3.688rem] md:pt-6 flex flex-wrap justify-between items-end'>
                    <div className='w-10/12 md:w-6/12 lg:w-5/12'>
                        <p className='text-xl font-medium flex flex-col'>
                            <span>Send a mail to <FooterLink href={"mailto:info@entrova.co"} title={"info@entrova.co"} /></span>
                            <span> or call <FooterLink href={"tel:+447498742973"} title={"+447498742973"} /></span>
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