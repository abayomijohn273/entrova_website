"use client"
import LinkButton from '@/components/elements/linkButton'
import { gsap } from '@/libs/gsap'
import Image from 'next/image'
import { useLayoutEffect, useRef } from 'react'
import TopImage from "../../../../public/images/webp/dashboard.webp"
import WorldImage from "../../../../public/images/webp/map.webp"

const TopSection = () => {
    const ref = useRef();

    useLayoutEffect(() => {
        let ctx = gsap.context(() => {
            const tl = gsap.timeline({
                defaults: {
                    duration: .67,
                },
            });

            tl.to(".top-image", {
                scale: "1.3",
                ease: "power1.out",
                scrollTrigger: {
                    trigger: "#main",
                    scrub: 1
                }
            });

            tl.from("h1 span span", {
                y: 100,
                ease: "power2.out",
                stagger: 0.1,
            });

            tl.from("p span span", {
                y: 25,
                ease: "power2.out",
                stagger: 0.1,
            }, "<");

            tl.from("a", {
                opacity: 0,
                y: 100,
                ease: "power2.out",
                stagger: 0.1,
                duration: 1
            }, "<");

            tl.from("a span span", {
                opacity: 0,
                ease: "power2.out",
                duration: 1
            }, "<");

            tl.from("a span svg", {
                x: -10,
                ease: "power2.out",
                duration: 1
            }, "<");

            tl.from(".button-container div svg", {
                ease: "power3.inOut",
                scale: 0,
                duration: 1,
                transformOrigin: "top",
                attr: {
                    viewBox: "0 0 0 0"
                }
            }, "<");

        }, ref);

        return () => ctx.revert();
    }, [])
 
    return (
        <section ref={ref} className={`relative bg-[#EFF6FF]`}>
            <div className='container px-4 lg:px-0 xl:px-8 2xl:px-0 pt-[5.563rem] md:pt-[6.25rem]  mx-auto'>
                <div className='relative w-full md:w-10/12 lg:w-9/12 xl:w-7/12 mx-auto'>
                    <div className='absolute -top-6 md:top-0 mx-auto z-0'>
                        <Image src={WorldImage} alt="World" className='w-full' />
                    </div>
                    <div className='relative'>
                        <div className="flex justify-center items-center">
                            <p className="px-2.5 py-[0.625rem] bg-white rounded-[32px] text-secondary text-xs font-medium leading-3 tracking-tight">
                                The future of global workforce management
                            </p>
                        </div>

                        <h1 className='mt-3 font-bold text-primary text-center text-[2rem] md:text-5xl md:leading-tight lg:text-6xl lg:leading-tight'>
                            <span className='inline-flex overflow-hidden'>
                                <span>Helping</span>&nbsp;
                            </span>
                            <span className='inline-flex overflow-hidden'>
                                <span>Companies</span>&nbsp;
                            </span>
                            <span className='inline-flex overflow-hidden'>
                                <span>and</span>&nbsp;
                            </span>
                            <span className='inline-flex overflow-hidden'>
                                <span>Workers</span>&nbsp;
                            </span>
                            <span className='inline-flex overflow-hidden'>
                                <span>Go</span>&nbsp;
                            </span>
                            <span className='inline-flex overflow-hidden'>
                                <span>International</span>
                            </span>
                        </h1>

                        <p className='w-11/12 md:w-9/12 lg:w-10/12 mx-auto mt-5 md:mt-4 text-base text-center font-medium leading-7 text-textColor'>
                            <span className='inline-flex overflow-hidden'>
                                <span>A</span>&nbsp;
                            </span>
                            <span className='inline-flex overflow-hidden'>
                                <span>comprehensive</span>&nbsp;
                            </span>
                            <span className='inline-flex overflow-hidden'>
                                <span>solution</span>&nbsp;
                            </span>  <span className='inline-flex overflow-hidden'>
                                <span>for</span>&nbsp;
                            </span>
                            <span className='inline-flex overflow-hidden'>
                                <span>global</span>&nbsp;
                            </span>
                            <span className='inline-flex overflow-hidden'>
                                <span>expansion:</span>&nbsp;
                            </span>
                            <span className='inline-flex overflow-hidden'>
                                <span>Compliant</span>&nbsp;
                            </span>
                            <span className='inline-flex overflow-hidden'>
                                <span>hiring</span>&nbsp;
                            </span>
                            <span className='inline-flex overflow-hidden'>
                                <span>and</span>&nbsp;
                            </span>
                            <span className='inline-flex overflow-hidden'>
                                <span>payments</span>&nbsp;
                            </span>
                            <span className='inline-flex overflow-hidden'>
                                <span>in</span>&nbsp;
                            </span>
                            <span className='inline-flex overflow-hidden'>
                                <span>120+</span>&nbsp;
                            </span>
                            <span className='inline-flex overflow-hidden'>
                                <span>countries,</span>&nbsp;
                            </span>
                            <span className='inline-flex overflow-hidden'>
                                <span>plus</span>&nbsp;
                            </span>
                            <span className='inline-flex overflow-hidden'>
                                <span>contractor</span>&nbsp;
                            </span>
                            <span className='inline-flex overflow-hidden'>
                                <span>growth</span>&nbsp;
                            </span>
                            <span className='inline-flex overflow-hidden'>
                                <span> products.</span>&nbsp;
                            </span>
                        </p>

                        <div className='button-container mt-[2.5rem] md:mt-[2.125rem] flex justify-center gap-3'>
                            <div className='hidden md:block'>
                                <svg width="47" height="46" viewBox="0 0 47 46" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path fillRule="evenodd" clipRule="evenodd" d="M42.6735 33.9843C41.1671 32.0702 39.8189 30.0364 38.4919 28.0007L38.4802 27.9913C37.9518 27.4083 36.7937 27.2302 36.42 28.0536C35.9787 29.5666 40.1473 34.7146 42.0574 37.0507C41.7952 37.008 41.5334 36.9631 41.2777 36.9002C40.1998 36.6727 39.1271 36.3921 38.0544 36.1114C35.3895 35.4715 32.8456 34.4522 30.3522 33.3019C25.9083 31.3095 21.3852 29.2718 17.6776 26.044C10.117 19.833 5.6655 10.591 3.01143 1.32132L2.9998 1.31185C1.99814 -0.459003 0.246968 0.332692 0.933196 2.24817C2.11159 7.9279 4.71347 13.2563 7.77393 18.1745C10.8302 23.0509 14.8229 27.2944 19.6482 30.5146C21.124 31.5055 22.6829 32.373 24.2755 33.1532C27.5727 34.7665 30.8984 36.3456 34.4165 37.4126C34.5238 37.4425 34.6531 37.479 34.8016 37.5209C35.9131 37.8346 38.0956 38.4506 40.1057 38.8498C38.6981 39.5057 37.361 40.3172 36.0694 41.1657C35.3312 41.6542 34.6256 42.1502 33.973 42.7466C33.6967 42.9613 33.4945 43.2745 33.4769 43.6233C33.398 44.725 34.7891 45.5131 35.7521 45.0356C36.8909 44.0895 38.0784 43.2021 39.3652 42.4529C40.44 41.8179 41.5918 41.2073 42.7871 40.7085C43.0397 40.5911 43.3929 40.4879 43.7762 40.3759C44.89 40.0506 46.2581 39.6509 46.1516 38.6116C46.1143 38.2473 45.8886 37.9485 45.6672 37.6554C45.6352 37.6129 45.6032 37.5706 45.5719 37.5282C45.0995 36.921 44.6041 36.3294 44.1075 35.7364C43.6239 35.1589 43.1392 34.5801 42.6735 33.9843Z" fill="#84CC16" />
                                </svg>
                            </div>
                            <div className='md:mt-3'>
                                <LinkButton title={"Book A Demo"} href={"/book-a-demo"} className={"px-8"} showArrow />
                            </div>
                            <div className='hidden md:block'>
                                <svg width="47" height="45" viewBox="0 0 47 45" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path fillRule="evenodd" clipRule="evenodd" d="M3.9936 33.1616C5.53318 31.2741 6.91663 29.2642 8.27902 27.2519L8.29083 27.2427C8.82938 26.669 9.99041 26.5111 10.3497 27.341C10.7645 28.8614 6.50668 33.9359 4.55611 36.2383C4.81902 36.2002 5.0815 36.1599 5.33828 36.1015C6.41999 35.8928 7.49745 35.6309 8.57491 35.3691C11.2505 34.7757 13.8119 33.801 16.3249 32.6944C20.8029 30.7799 25.3609 28.8214 29.1243 25.6587C36.7921 19.5807 41.4042 10.4178 44.2197 1.19582L44.2315 1.18655C45.2639 -0.566544 47.001 0.255594 46.2814 2.1588C45.0041 7.8171 42.3096 13.0993 39.1638 17.9633C36.0229 22.7857 31.9567 26.9589 27.0759 30.0943C25.5831 31.0593 24.0092 31.8994 22.4033 32.6518C19.0784 34.2073 15.7257 35.7281 12.1895 36.7335C12.0817 36.7615 11.9517 36.7957 11.8026 36.8351C10.6858 37.1293 8.49288 37.7071 6.47611 38.0712C7.87205 38.7516 9.19474 39.5863 10.4713 40.4572C11.201 40.9585 11.8977 41.4667 12.5398 42.0745C12.8123 42.2939 13.0091 42.6106 13.0206 42.9597C13.0802 44.0626 11.6756 44.8263 10.7211 44.332C9.59893 43.3662 8.42714 42.4582 7.15361 41.6867C6.09009 41.033 4.94905 40.4024 3.76266 39.8829C3.51218 39.761 3.16083 39.6517 2.77951 39.533C1.67161 39.1883 0.310658 38.7648 0.435257 37.7276C0.478912 37.364 0.709778 37.0691 0.936251 36.7799C0.969036 36.738 1.00175 36.6963 1.03379 36.6544C1.51672 36.0555 2.02238 35.4727 2.52929 34.8884C3.02285 34.3195 3.51756 33.7492 3.9936 33.1616Z" fill="#84CC16" />
                                </svg>
                            </div>
                        </div>
                    </div>

                    <div className='top-image mt-[4rem] w-full relative'>
                        <Image src={TopImage} alt="Free zone" className='w-full h-full object-cover' />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default TopSection