import LinkButton from "@/components/elements/linkButton"
import Image from 'next/image'
import WorldImage from "../../../../public/images/webp/world.svg"

const CtaSection = () => {
    return (
        <section id="about" className={`relative bg-primary`}>
            <div className='container px-4 lg:px-0 xl:px-8 2xl:px-0 mx-auto pt-[6.5rem] pb-[7rem] lg:pt-[7rem] lg:pb-[8.938rem]'>
                <div className='w-full md:w-10/12 lg:w-8/12 xl:w-7/12 mx-auto flex flex-col justify-center items-center text-center'>
                    <h3 className='text-white font-bold text-2xl md:text-3xl lg:text-5xl'>
                        Effortlessly handle your HR.
                    </h3>

                    <p className='mt-6 w-full md:w-11/12 lg:w-full text-base leading-6 text-white text-center'>
                        Entrova seamlessly manages global hiring, HR processes, and payroll centralization, ensuring compliance,
                        whether you&apos;re hiring contractors, employees, or optimizing international teams.
                    </p>

                    <div className='mt-10 flex'>
                        <LinkButton
                            title={"Get Started"}
                            href={"/"}
                            showArrow={false}
                            className={"px-8"}
                        />
                    </div>
                </div>
            </div>

            <div className='absolute bottom-0 right-0 w-5/12 lg:w-7/12 lg:w-auto'>
                <Image src={WorldImage} alt="" />
            </div>
        </section>
    )
}

export default CtaSection