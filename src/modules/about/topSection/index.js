import LinkButton from '@/components/elements/linkButton'
import Image from 'next/image'
import TopImage from "../../../../public/images/webp/hiring.webp"

const TopSection = () => {
    return (
        <section className={`relative bg-[#EFF6FF]`}>
            <div className='container px-4 lg:px-0 xl:px-8 2xl:px-0 pb-[2rem] pt-[5.563rem] md:py-[6.25rem]  mx-auto'>
                <div className='relative grid grid-cols-1 lg:grid-cols-2 gap-x-6'>
                    <div className='md:w-10/12 lg:w-11/12'>
                        <div className="flex justify-start">
                            <p className="px-2.5 py-[0.625rem] bg-white rounded-[32px] text-secondary text-xs font-medium leading-3 tracking-tight">
                                Global Payroll
                            </p>
                        </div>
                        <h1 className='mt-3 font-bold text-primary text-[2rem] md:text-5xl md:leading-tight lg:text-6xl lg:leading-tight'>
                            Facilitate Global Payroll Management
                        </h1>
                        <p className='w-11/12 md:w-9/12 lg:w-10/12 mt-5 md:mt-4 text-base font-medium leading-6 text-textColor'>
                            Entrova offers a secure and compliant global payroll solution to streamline your payroll
                            procedures across diverse international locations.
                        </p>

                        <div className='button-container mt-[2.5rem] md:mt-[2.125rem] flex justify-start gap-3'>
                            <div className=''>
                                <LinkButton title={"Book A Demo"} href={"/book-a-demo"} className={"px-8"} showArrow />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='mt-[5rem] md:mt-[1rem] lg:mt-[5rem] relative lg:absolute bottom-0 right-0 flex justify-end w-full lg:w-6/12'>
                <Image src={TopImage} alt='Hiring' className='w-auto' />
            </div>
        </section>
    )
}

export default TopSection