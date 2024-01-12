"use client"
import React, { useLayoutEffect, useRef } from 'react'
import Image from 'next/image'
import PeopleImage from "../../../../public/images/webp/people.webp"
import EmployeeImage from "../../../../public/images/webp/employee.webp"
import TeamDashboardImage from "../../../../public/images/webp/team-dashboard.webp"
import TeamDashboardImageMobile from "../../../../public/images/webp/team-dashboard-mobile.webp"
import { gsap } from '@/libs/gsap'

const WorkforceSection = () => {
    const workRef = useRef();

    useLayoutEffect(() => {
        let ctx = gsap.context(() => {
            const tl4 = gsap.timeline({
                defaults: {
                    duration: 1
                },
                scrollTrigger: {
                    trigger: ".container",
                    start: "top 85%",

                }
            });

            tl4.from(".work-section_title span span", {
                y: 120,
                ease: "power2.out",
                stagger: 0.1,
            });

            tl4.from(".work-section_tag p span", {
                y: 25,
                ease: "power2.out",
                stagger: 0.1,
            }, "<5%");

            tl4.from(".work-section_description p", {
                y: 20,
                ease: "power2.out",
            }, "<10%");

            tl4.from(".arrow svg", {
                ease: "power3.inOut",
                scale: 0,
                duration: 1,
                transformOrigin: "top left",
                attr: {
                    viewBox: "0 0 0 0"
                }
            }, "<50%");

        }, workRef);

        return () => ctx.revert();
    }, [])

    return (
        <section ref={workRef} id="work" className={`relative bg-[#F3F3F3] pt-[5.875rem] md:pt-[7.5rem]`}>
            <div className='container px-4 lg:px-0 xl:px-8 2xl:px-0 mx-auto pb-[5rem] lg:pb-[8.938rem]'>
                <div className='flex justify-between items-end'>
                    <div className='md-w-1/12 lg:w-2/12 hidden md:block' />
                    <div className='w-full md::w-6/12'>
                        <h2 className='work-section_title text-primary font-bold text-[2.5rem] leading-[50.97px] md:text-[3.5rem] md:leading-[65px] lg:text-[4.5rem] lg:leading-[75px] xl:text-[5.5rem] xl:leading-[90px]'>
                            <span className='inline-flex overflow-hidden pb-2'>
                                <span>Workforce</span><br />
                            </span>
                            <span className='inline-flex overflow-hidden pb-2'>
                                <span>Management</span><br />
                            </span>
                            <span className='inline-flex overflow-hidden pb-2'>
                                <span className='text-secondary'>Re-imagined.</span>
                            </span>
                        </h2>

                        <div className='work-section_tag mt-[2.125rem] flex flex-col md:flex-row md:items-center md:space-x-2 text-base text-[#656565] font-semibold'>
                            <p className='inline-flex overflow-hidden'>
                                <span>FOR YOUR BUSINESS</span>&nbsp;
                            </p>

                            <div className="w-2 h-2 bg-secondary rounded-full hidden md:block"></div>

                            <p className='inline-flex overflow-hidden'>
                                <span>FOR YOUR EMPLOYEES</span>&nbsp;
                            </p>

                            <div className="w-2 h-2 bg-secondary rounded-full hidden md:block"></div>

                            <p className='inline-flex overflow-hidden'>
                                <span>FOR YOUR CONTRACTORS</span>&nbsp;
                            </p>
                        </div>

                        <div className='mt-[2.25rem] md:mt-[2.5rem]'>
                            <Image src={PeopleImage} alt="People" className='object-contain w-fit' />
                        </div>

                        <div className='work-section_description mt-[2.5rem] md:mt-[2.438rem] w-full md:w-10/12 lg:w-9/12'>
                            <p className='text-primary text-base font-medium leading-7'>
                                We&apos;re making it easier for businesses around the world to manage their teams seamlessly.
                                Our goal is to simplify global team management so much that businesses can move forward
                                confidently without any doubts. Join the future of people management today!
                            </p>
                        </div>
                    </div>
                    <div className='w-5/12 hidden md:flex '>
                        <div className='relative -bottom-40'>
                            <Image src={EmployeeImage} alt="Employee Stat" className='' />
                        </div>
                    </div>
                </div>
            </div>

            <div className='arrow hidden lg:flex relative -top-32 -bottom-10 justify-center'>
                <svg width="130" height="121" viewBox="0 0 130 121" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" clipRule="evenodd" d="M99.4553 111.394C93.9568 107.515 88.1509 104.091 82.3428 100.725L82.315 100.694C80.6303 99.3203 79.9712 96.1513 82.1888 95.0012C86.2987 93.5645 101.104 104.319 107.826 109.25C107.67 108.533 107.508 107.818 107.297 107.121C106.514 104.181 105.584 101.262 104.655 98.3431C102.503 91.0842 99.323 84.2138 95.7887 77.5019C89.6487 65.531 83.3722 53.348 73.9307 43.5873C55.7017 23.6292 29.5611 12.687 3.60427 6.70746L3.57646 6.67673C-1.45386 4.16987 0.476634 -0.775741 5.86026 0.839983C21.6996 3.26838 36.776 9.67465 50.787 17.4054C64.6822 25.1306 76.9671 35.5309 86.5494 48.3763C89.4966 52.3039 92.1155 56.4791 94.4985 60.7596C99.4266 69.622 104.265 78.5678 107.717 88.119C107.815 88.4106 107.935 88.7621 108.072 89.1656C109.098 92.1864 111.114 98.1181 112.506 103.606C114.112 99.6274 116.157 95.8214 118.31 92.1354C119.551 90.0279 120.817 88.0098 122.368 86.123C122.92 85.3297 123.755 84.7264 124.715 84.6274C127.743 84.2503 130.118 87.9736 128.94 90.6996C126.495 93.9782 124.219 97.3826 122.339 101.041C120.743 104.098 119.225 107.364 118.022 110.734C117.735 111.447 117.501 112.437 117.248 113.511C116.511 116.63 115.607 120.462 112.724 120.319C111.714 120.269 110.857 119.69 110.016 119.121C109.895 119.039 109.773 118.957 109.652 118.877C107.908 117.661 106.204 116.38 104.496 115.096C102.833 113.846 101.167 112.592 99.4553 111.394Z" fill="#84CC16" />
                </svg>

            </div>

            <div className='mt-0 lg:-mt-24 grid grid-cols-1 lg:grid-cols-2'>
                <div className='pr-6 md:pr-0'>
                    <Image src={TeamDashboardImage} alt='Team Dashboard' className='hidden lg:block' />
                    <Image src={TeamDashboardImageMobile} alt='Team Dashboard' className='block lg:hidden' />
                </div>

                <div className='px-4 md:px-[7.188rem] xl:px-[4.8rem] 2xl:px-[7.188rem] pt-[5.313rem] md:pt-16 lg:pt-8 pb-16'>
                    <div className=''>
                        <p className='pr-6 md:pr-0 font-bold text-primary text-[2rem] leading-10 md:text-[2.5rem] md:leading-[48px]'>Welcome to the future of workforce
                            management. <br /><span className='text-secondary'>Get started!</span>
                        </p>

                        <form className='mt-[2.5rem]'>
                            <label htmlFor='email'>
                                <p className='mb-2 text-textColor text-base leading-normal font-medium'>Email address</p>

                                <input
                                    placeholder='Enter email address'
                                    type='email'
                                    className='w-full inline-flex focus:outline-none h-12 px-4 bg-white rounded-xl 
                                    shadow border border-slate-800 border-opacity-10 justify-center items-center gap-3 text-textColor text-base'
                                />

                                <button
                                    type={"button"}
                                    className={`mt-6 w-full px-8 py-2 md:py-3 text-primary rounded-xl justify-center items-center gap-2 inline-flex border border-secondary bg-secondary shadow`}
                                >
                                    <span className="text-center text-base font-medium leading-normal">
                                        Get Started
                                    </span>
                                    <span className=''>
                                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M16.172 10.9997L10.808 5.63568L12.222 4.22168L20 11.9997L12.222 19.7777L10.808 18.3637L16.172 12.9997H4V10.9997H16.172Z" fill="#012A36" />
                                        </svg>
                                    </span>
                                </button>
                            </label>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default WorkforceSection