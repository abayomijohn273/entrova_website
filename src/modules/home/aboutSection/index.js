import Image from 'next/image'
import React from 'react'
import OfficeImage from "../../../../public/images/webp/office.webp"
import ExecutiveImage from "../../../../public/images/webp/executive.webp"
import ExecutiveImageMobile from "../../../../public/images/webp/executive-mobile.webp"
import Dashboard2Image from "../../../../public/images/webp/dashboard-2.webp"

const InsightCard = ({
    value,
    text
}) => {
    return <div className='text-white '>
        <h3 className='font-bold text-[3.5rem] md:text-[4rem] lg:text-[5rem] xl:text-[5.5rem]'>
            {value}
        </h3>
        <p className=''>
            {text}

        </p>
    </div>
}

const BenefitListItem = ({ title, description }) => {
    return <li className='flex items-start'>
        <div>
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M8.81561 13.6869L9.16919 14.0405L9.52275 13.6869L15.4144 7.79438L15.7679 7.44083L15.4144 7.0873L14.2361 5.90897L13.8825 5.55538L13.5289 5.909L9.16914 10.2695L7.16522 8.26563L6.81167 7.91208L6.45811 8.26563L5.27978 9.44397L4.92623 9.79752L5.27978 10.1511L8.81561 13.6869ZM10 17.8334C5.67364 17.8334 2.16667 14.3264 2.16667 10C2.16667 5.67366 5.67364 2.16669 10 2.16669C14.3264 2.16669 17.8333 5.67366 17.8333 10C17.8333 14.3264 14.3264 17.8334 10 17.8334Z" fill="#65A30D" stroke="#65A30D" />
            </svg>
        </div>
        <div className='-mt-[2px] pl-[15px] text-white'>
            <p className='text-lg font-bold leading-7'>{title}</p>
            <p className='mt-3 text-base font-medium leading-normal'>{description}</p>
        </div>
    </li>
}

const AboutSection = () => {
    return (
        <section id="about" className={`relative bg-primary pt-[7.5rem]`}>
            <div className='container px-4 lg:px-0 xl:px-8 2xl:px-0 mx-auto pb-[5rem] lg:pb-[8.938rem]'>
                <p className='text-base font-semibold text-secondary'>SOME KEY INSIGHTS</p>

                <div className='mt-[4rem] md:mt-[2.5rem] grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-10'>
                    <InsightCard
                        value={"99%"}
                        text={<>
                            Executives report a positive return on digital
                            investments. <span className='text-secondary underline underline-offset-4'>(KPMG)</span>
                        </>}
                    />
                    <InsightCard
                        value={"81%"}
                        text={<>
                            of companies that pursue talent mobilisation experience revenue growth or surpass
                            targets. <span className='text-secondary underline underline-offset-4'>(Finances Online)</span>
                        </>}
                    />
                    <InsightCard
                        value={"1/3"}
                        text={<>
                            More than two-thirds of large organizations track metrics like time to hire,
                            source of hire, and offer acceptance rates.
                        </>}
                    />
                </div>
            </div>

            {/* Mobile Only */}
            <div className='relative block md:hidden'>
                <div className='pr-5'>
                    <Image src={ExecutiveImageMobile} alt="Executive" />
                </div>
            </div>

            {/* Desktop Only */}
            <div className='relative hidden md:flex flex-row gap-x-6 overflow-hidden'>
                <div className=''>
                    <Image src={OfficeImage} alt="Office" />
                </div>
                <div className=''>
                    <Image src={ExecutiveImage} alt="Executive" />
                </div>
            </div>

            <div className='container px-4 lg:px-0 xl:px-8 2xl:px-0 mx-auto pt-[5rem] lg:pt-[7.25rem]'>
                <p className='w-full md:w-10/12 lg:w-9/12 text-xl font-medium text-white leading-relaxed pb-[5.5rem]'>
                    <span className='text-secondary'>Entrova is all about making it easy to handle global teams. We know
                        it can be tough for businesses with teams all over the world.</span> We offers a
                    thoughtfully crafted solution, providing a seamless and effective approach
                    to global workforce management.
                </p>

                <div className='relative grid grid-cols-1 lg:grid-cols-2 gap-x-6'>
                    <div className='flex flex-col justify-between'>
                        <p className='w-full md:w-9/12 lg:w-full text-white font-bold text-[2.625rem] leading-[56px]'>
                            Enjoy the benefits of consolidating everything
                            into <span className='text-secondary'>one platform</span>
                        </p>

                        {/* <div className='mt-[5rem] relative translate-x-[-5%] md:translate-x-[-6.7%] bottom-0'>
                            <Image src={Dashboard2Image} alt='Dashboard' className='' />
                        </div> */}
                    </div>

                    <div className='mt-[4.25rem] lg:mt-0 pb-[7.125rem]'>
                        <ul className='flex flex-col gap-y-6'>
                            <BenefitListItem
                                title={"Hire and onboard employees and contracts from anywhere"}
                                description={`Allow us to hire staff on your behalf, facilitating rapid onboarding in
                                150+ nations while avoiding additional expenses and administrative burdens.`}
                            />
                            <BenefitListItem
                                title={"Prevent Misclassification with Entrova Shield"}
                                description={`Save time and reduce hassle with simplified W9 generation for your 
                                US team and one-click 1099 filing directly from your dashboard.`}
                            />
                            <BenefitListItem
                                title={"Enhance your global team's capabilities"}
                                description={`Utilize Entrova tools to effortlessly dispatch and oversee the 
                                essential equipment (laptops, monitors, headphones, and more) your team requires 
                                for remote work, all with a few simple clicks.`}
                            />
                            <BenefitListItem
                                title={"Effortless Global Payroll Management"}
                                description={`Simplify global payroll across 100+ countries on one platform, easing 
                                international operations and eliminating local compliance, tax, and benefit challenges.`}
                            />
                            <BenefitListItem
                                title={"Effortless Global Payroll Management"}
                                description={`Simplify global payroll across 100+ countries on one platform, easing international 
                                operations and eliminating local compliance, tax, and benefit challenges.`}
                            />
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default AboutSection