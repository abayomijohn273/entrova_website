import Image from 'next/image'
import IntegrationImage from "../../../../public/images/webp/integration.webp"

const IntegrationSection = () => {
    return (
        <section className={`relative bg-[#F0F9FF]`}>
            <div className='container px-4 lg:px-0 xl:px-8 2xl:px-0 pb-[2rem] pt-[3.563rem] md:py-[3.25rem]  mx-auto'>
                <div className='relative grid grid-cols-1 lg:grid-cols-2 gap-x-6 items-center'>
                    <div className='w-full lg:w-11/12 xl:w-10/12'>
                        <p className='mt-4 w-full md:w-8/12 lg:w-full text-primary font-bold text-[28px] leading-[38px]'>
                            Integration
                        </p>
                        <p className="mt-4 text-base text-[#1E1E1E]">
                            Streamline processes with the industry&apos;s widest
                            array of integrations Our API and partnerships
                            with top HRIS, accounting, and payroll software
                            enable seamless integration of Entrova with your
                            HR technology, automating the complete lifecycle
                            and ensuring real-time updates
                        </p>
                    </div>
                    <div className='mt-[4.25rem] lg:mt-0 flex justify-center'>
                        <Image src={IntegrationImage} alt='Integration' className='' />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default IntegrationSection