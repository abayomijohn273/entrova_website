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
                <h3 className='mx-auto text-center text-4xl lg:text-4xl xl:text-5xl xl:leading-tight font-bold text-default'>The <span className='text-[#1AA578]'>$959</span> Billion Industry</h3>
                <div className='flex flex-row flex-wrap justify-center mt-10 lg:mt-14'>
                    <div className="w-full md:w-11/12 lg:w-10/12 mx-auto">
                        <div className='grid grid-cols-1 md:grid-cols-2 gap-x-6 lg:gap-x-8 gap-y-12 lg:gap-y-14'>
                            <Card
                                icon={CodeIcon}
                                title={<>From the Best CTOs and Software Engineers</>}
                                content="We are an exclusive and invite-only platform that takes some of the best products out there from the best"
                            />
                            <Card
                                icon={WorldIcon}
                                title={<>Our Products come from more than 30 countries</>}
                                content="We understand that there are billions of products from different parts of the world."
                            />
                            <Card
                                icon={ProductIcon}
                                title={<>Product Transformation in 1 Months or Less</>}
                                content="Our engineering team take on your products and transform them for use."
                            />
                            <Card
                                icon={LaptopIcon}
                                title={<>Everything From Entrova Dashboard</>}
                                content="From Our dashboard, accept payment when an enterprise buys your product."
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default FeatureSection