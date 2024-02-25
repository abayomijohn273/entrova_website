import LinkButton from '@/components/elements/linkButton'
import Image from 'next/image'
import OnboardingImage from "../../../../public/images/webp/onboarding.webp"

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
                            Cut onboarding time to only 5 minutes
                        </h1>

                        <p className='w-11/12 md:w-9/12 lg:w-10/12 mt-5 md:mt-4 text-base font-medium leading-6 text-textColor'>
                            Customizing onboarding for contractors in England and employees
                            in Australia involves tailoring every aspect, from minimum
                            wage to country-specific paperwork, ensuring swift, compliant
                            processes.
                        </p>

                        <div className='button-container mt-[2.5rem] md:mt-[2.125rem] flex justify-start gap-3'>
                            <div className=''>
                                <LinkButton className="!bg-[#EFF6FF]" buttonType='secondary' title={"Book A Demo"} href={"/"} showArrow />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='mt-[5rem] md:mt-[1rem] lg:mt-[5rem] relative lg:absolute bottom-0 right-0 flex justify-end w-full lg:w-6/12'>
                <Image src={OnboardingImage} alt='Hiring' className='w-auto' />
            </div>
        </section>
    )
}

export default OnboardingSection