import LinkButton from '@/components/elements/linkButton'
import Image from 'next/image'
import OnboardingImage from "../../../../public/images/webp/onboarding.webp"

const BenefitListItem = ({ title, description }) => {
    return <li className='flex items-start'>
        <div>
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M8.81561 13.6869L9.16919 14.0405L9.52275 13.6869L15.4144 7.79438L15.7679 7.44083L15.4144 7.0873L14.2361 5.90897L13.8825 5.55538L13.5289 5.909L9.16914 10.2695L7.16522 8.26563L6.81167 7.91208L6.45811 8.26563L5.27978 9.44397L4.92623 9.79752L5.27978 10.1511L8.81561 13.6869ZM10 17.8334C5.67364 17.8334 2.16667 14.3264 2.16667 10C2.16667 5.67366 5.67364 2.16669 10 2.16669C14.3264 2.16669 17.8333 5.67366 17.8333 10C17.8333 14.3264 14.3264 17.8334 10 17.8334Z" fill="#65A30D" stroke="#65A30D" />
            </svg>
        </div>
        <div className='-mt-[2px] pl-[15px] text-primary'>
            <p className='text-lg font-bold leading-7'>{title}</p>
            <p className='mt-3 text-base font-medium leading-normal'>{description}</p>
        </div>
    </li>
}

const OnboardingSection = () => {
    return (
        <section className={`relative bg-[#EFF6FF]`}>
            <div className='container px-4 lg:px-0 xl:px-8 2xl:px-0 pb-[5rem] pt-[0.563rem] md:pb-[7.25rem]  mx-auto'>
                <div className='relative grid grid-cols-1 lg:grid-cols-2 gap-x-6'>
                    <div className='md:w-10/12 lg:w-11/12'>
                        <div className="flex justify-start">
                            <p className=" rounded-[32px] text-secondary text-xs font-medium leading-3 tracking-tight">
                                Onboarding
                            </p>
                        </div>
                        <h1 className='w-full md:w-8/12 mt-3 font-bold text-primary text-[28px] leading-[38px]'>
                            Work Faster, Smarter, Anywhere
                        </h1>

                        <div className='mt-8'>
                            <ul className='benefit-section_list flex flex-col gap-y-6'>
                                <BenefitListItem
                                    title={"Find the Right Talent"}
                                    description={`Prioritize skills and expertise over location.`}
                                />
                                <BenefitListItem
                                    title={"Onboard Effortlessly"}
                                    description={`Our platform ensures seamless integration of talent into your team.`}
                                />
                                <BenefitListItem
                                    title={"Adapt to Changing Needs"}
                                    description={`Scale your workforce up or down as projects evolve.`}
                                />
                            </ul>
                        </div>

                        <div className='button-container mt-[2.5rem] md:mt-[2.125rem] flex justify-start gap-3'>
                            <div className=''>
                                <LinkButton className="!bg-[#EFF6FF]" buttonType='secondary' title={"Book A Demo"} href={"/book-a-demo"} showArrow />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='mt-[5rem] md:mt-[1rem] lg:mt-[5rem] relative lg:absolute bottom-10 right-0 flex justify-end w-full lg:w-6/12'>
                <Image src={OnboardingImage} alt='Hiring' className='w-auto' />
            </div>
        </section>
    )
}

export default OnboardingSection