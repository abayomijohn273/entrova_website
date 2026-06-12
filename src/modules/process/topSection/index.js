import LinkButton from '@/components/elements/linkButton'
import Image from 'next/image'
import TopImage from "../../../../public/images/webp/api.webp"

const TopSection = () => {
    return (
        <section className={`relative bg-[#EFF6FF]`}>
            <div className='container px-4 lg:px-0 xl:px-8 2xl:px-0 pb-[2rem] pt-[5.563rem] md:py-[6.25rem]  mx-auto'>
                <div className='relative grid grid-cols-1 lg:grid-cols-2 gap-x-6'>
                    <div className='md:w-10/12 lg:w-full'>
                        <div className="flex justify-start">
                            <p className="px-2.5 py-[0.625rem] bg-white rounded-[32px] text-secondary text-xs font-medium leading-3 tracking-tight">
                                How we work
                            </p>
                        </div>
                        <h1 className='mt-3 font-bold text-primary text-[1.5rem] md:text-4xl md:leading-tight lg:text-5xl lg:leading-tight'>
                        A Process Built for Shipping
                        Great Software
                        </h1>

                        <p className='w-11/12 md:w-9/12 lg:w-10/12 mt-5 md:mt-4 text-base font-medium leading-6 text-textColor'>
                        We pair senior engineering with a transparent, agile process—so you always know
                        where your project stands and what&apos;s shipping next.
                        </p>

                        <div className='button-container mt-[2.5rem] md:mt-[2.125rem] flex justify-start gap-3'>
                            <div className=''>
                                <LinkButton title={"Start a Project"} href={"/book-a-demo"} className={"px-8"} showArrow />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='mt-[5rem] md:mt-[1rem] lg:mt-[5rem] relative lg:absolute bottom-0 right-0 flex justify-end w-full'>
                <Image src={TopImage} alt='API' className='w-auto' />
            </div>
        </section>
    )
}

export default TopSection