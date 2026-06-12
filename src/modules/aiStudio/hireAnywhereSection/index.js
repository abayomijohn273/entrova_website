import LinkButton from '@/components/elements/linkButton'
import Image from 'next/image'
import FlagsImage from "../../../../public/images/webp/flags.webp"

const HireAnywhereSection = () => {
    return (
        <section id="about" className={`relative bg-primary`}>
            <div className=''>
                <Image src={FlagsImage} alt="" />
            </div>
            <div className='container px-4 lg:px-0 xl:px-8 2xl:px-0 mx-auto pt-[4.5rem] pb-[5rem] lg:pb-[6.938rem]'>
                <div className='w-full md:w-10/12 lg:w-8/12 xl:w-7/12 mx-auto flex flex-col justify-center items-center text-center'>
                    <h3 className='text-white font-bold text-3xl lg:text-4xl'>
                        Hire anywhere
                    </h3>

                    <p className='w-11/12 md:w-9/12 lg:w-10/12 mt-5 md:mt-4 text-base font-medium leading-6 text-white text-center'>
                    Hire top talent from anywhere in the world with AI-driven precision, ensuring the right 
                    fit for every role while unlocking opportunities for underrepresented regions like Africa.
                    </p>

                    <div className='mt-8'>
                        <LinkButton
                            title={"Book A Demo"}
                            href={"/book-a-demo"}
                            showArrow={false}
                            className={"px-8"}
                        />
                    </div>

                </div>
            </div>
        </section>
    )
}

export default HireAnywhereSection