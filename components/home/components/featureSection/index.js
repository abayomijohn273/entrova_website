import React from 'react'
import Image from "next/image"
import CodeIcon from "../../../../public/images/icons/code.svg"
import LaptopIcon from "../../../../public/images/icons/laptop.svg"
import ProductIcon from "../../../../public/images/icons/product.svg"
import WorldIcon from "../../../../public/images/icons/world.svg"

const Card = ({ icon, title, content }) => {
    return <div className='flex flex-col items-center md:items-start'>
        <div className="">
            <Image src={icon || CodeIcon} alt='' />
        </div>
        <div className="mt-4 w-11/12 mx-auto md:mx-0 text-center md:text-left">
            <h3 className='text-2xl font-semibold text-default'>{title}</h3>
            <p className='text-sm-15 lg:text-base xl:text-lg mt-4 text-gray-500'>
                {content}
            </p>
        </div>
    </div>
}

const FeatureSection = () => {
    return (
        <div className='pt-20 md:pt-28 lg:pt-32 pb-32 lg:pb-40 bg-white brief-section'>
            <div className='container mx-auto px-4'>
                <h3 className='w-11!2 md:w-8/12 lg:w-9/12 xl:w-8/12 mx-auto text-center text-3xl leading-snug lg:text-4xl lg:leading-snug xl:text-5xl xl:leading-snug font-bold text-default'>
                    The <span className='text-[#1AA578]'>$959</span> Billion Industry in Europe, North America, Africa and the Middle East</h3>
                <div className='flex flex-row flex-wrap justify-center mt-10 lg:mt-14'>
                    <div className="w-full md:w-11/12 lg:w-10/12 mx-auto">
                        <div className='grid grid-cols-1 md:grid-cols-2 gap-x-6 lg:gap-x-8 gap-y-12 lg:gap-y-14'>
                            <Card
                                icon={CodeIcon}
                                title={<>Global Payroll for Talents</>}
                                content="We are building a multi-currency payroll platform that helps you hire from anywhere and pay them seamlessly."
                            />
                            <Card
                                icon={WorldIcon}
                                title={<>Global Digital Credit For Employees</>}
                                content="We are not reinventing the wheels, but building a digital network of credit facilities for digital employees."
                            />
                            <Card
                                icon={ProductIcon}
                                title={<>Global Talent Mobility</>}
                                content="Give your talents the platform that accelerates the process of migration into 50+ countries."
                            />
                            <Card
                                icon={LaptopIcon}
                                title={<>Global Compliance and Talent Verification</>}
                                content="We are helping you hire talents faster and verifying their real identity with one single click."
                            />
                             <Card
                                icon={WorldIcon}
                                title={<>Global Talent Benefits</>}
                                content="Your talents should have the opportunities to choose the befits that work for them- Choose HMO, Choose Insurance."
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default FeatureSection