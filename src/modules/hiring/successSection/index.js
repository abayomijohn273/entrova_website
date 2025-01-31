import Image from 'next/image'
import ContractorsImage from "../../../../public/images/webp/contractors.webp"

const BenefitListItem = ({ title, description }) => {
    return <li className='flex items-start'>
        <div>
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M8.81561 13.6869L9.16919 14.0405L9.52275 13.6869L15.4144 7.79438L15.7679 7.44083L15.4144 7.0873L14.2361 5.90897L13.8825 5.55538L13.5289 5.909L9.16914 10.2695L7.16522 8.26563L6.81167 7.91208L6.45811 8.26563L5.27978 9.44397L4.92623 9.79752L5.27978 10.1511L8.81561 13.6869ZM10 17.8334C5.67364 17.8334 2.16667 14.3264 2.16667 10C2.16667 5.67366 5.67364 2.16669 10 2.16669C14.3264 2.16669 17.8333 5.67366 17.8333 10C17.8333 14.3264 14.3264 17.8334 10 17.8334Z" fill="#65A30D" stroke="#65A30D" />
            </svg>
        </div>
        <div className='-mt-[2px] pl-[15px] text-[#262626]'>
            <p className='text-lg font-bold leading-7'>{title}</p>
            <p className='mt-3 text-base font-medium leading-normal'>{description}</p>
        </div>
    </li>
}

const SuccessSection = () => {
    return (
        <section className={`relative bg-[#FAF5FF]`}>
            <div className='container px-4 lg:px-0 xl:px-8 2xl:px-0 pb-[2rem] pt-[5.563rem] md:py-[6.25rem]  mx-auto'>
                <div className='relative grid grid-cols-1 lg:grid-cols-2 gap-x-6'>
                    <div className='w-full lg:w-11/12 xl:w-10/12'>
                        <div className="flex justify-start">
                            <p className="text-secondary text-base font-medium leading-3 tracking-tight">
                                Success Stories
                            </p>
                        </div>
                        <p className='mt-4 w-full md:w-8/12 lg:w-full text-primary font-bold text-[28px] leading-[38px]'>
                            Transforming Businesses Across the Globe
                        </p>

                        {/* Desktop */}
                        <div className='mt-[4rem] hidden lg:flex justify-start'>
                            <Image src={ContractorsImage} alt='Dashboard' className='w-fit' />
                        </div>
                    </div>
                    <div className='mt-[4.25rem] lg:mt-[3.5rem] pb-[1.125rem]'>
                        <ul className='benefit-section_list flex flex-col gap-y-6'>
                            <BenefitListItem
                                title={"Scaling Engineering Teams for Speed and Innovation"}
                                description={`A FinTech startup doubled their project delivery speed by hiring a 
                                    team of software engineers from Entrova in just two weeks.`}
                            />
                            <BenefitListItem
                                title={"Breaking Barriers with African Talent"}
                                description={`A global e-commerce company hired African developers through Entrova, 
                                    saving 60% on costs while achieving record-breaking user engagement.`}
                            />
                            <BenefitListItem
                                title={"Ensuring Compliance for Global Operations"}
                                description={`A healthcare SaaS company expanded into three new markets while staying compliant, thanks to Entrova’s legal and payroll solutions.`}
                            />
                        </ul>
                    </div>
                </div>

                {/* Mobile */}
                <div className='mt-[4rem] lg:hidden flex justify-center'>
                    <Image src={ContractorsImage} alt='Dashboard' className='w-auto' />
                </div>
            </div>
        </section>
    )
}

export default SuccessSection