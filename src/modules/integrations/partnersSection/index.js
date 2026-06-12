import Image from 'next/image'
import GreenhouseImage from "../../../../public/images/webp/partners/Greenhouse.png"
import QuickbooksImage from "../../../../public/images/webp/partners/Quickbooks.png"
import WorkdayImage from "../../../../public/images/webp/partners/Workday.png"
import BambooHRImage from "../../../../public/images/webp/partners/bamboo.png"
import HiBobImage from "../../../../public/images/webp/partners/hibob.jpeg"
import XeroImage from "../../../../public/images/webp/partners/xero.svg"



const Card = ({ image, title, description }) => {
    return <div className="bg-white shadow-2xl rounded-[32px] pt-12 pb-7 px-6 lg:px-8">
        <div className="w-32">
           <Image src={image} alt={title} className='w-fit h-10 object-contain' />
        </div>
        <div className="mt-12">
            <h5 className="text-lg font-bold text-primary">
                {title}
            </h5>
            <p className="mt-3 text-base text-black">
                {description}

            </p>
        </div>
    </div>
}


const PartnersSection = () => {
    return (
        <section id="about" className={`relative bg-[#F3F4F5] pt-[7.5rem]`}>
            <div className='container px-4 lg:px-0 xl:px-8 2xl:px-0 mx-auto pb-[5rem] lg:pb-[8.938rem]'>
                <div className="flex justify-start">
                    <p className="px-2.5 py-[0.625rem] bg-[#EFF6FF] rounded-[32px] text-[#012A36] text-xs font-medium leading-3 tracking-tight">
                        Platforms
                    </p>
                </div>

                <p className='mt-4 w-full md:w-8/12 lg:w-6/12 xl:w-5/12 text-primary font-bold text-[28px] leading-[38px]'>
                    Platforms We Build Integrations With
                </p>

                <p className="w-full md:w-8/12 lg:w-6/12 xl:w-5/12 mt-4 text-base text-[#1E1E1E]">
                    From HR and finance systems to CRMs and payment providers, we&apos;ve connected products to
                    the tools businesses rely on every day. A few of the platforms we work with:
                </p>

                <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    <Card
                        image={BambooHRImage}
                        title={"BambooHR"}
                        description={`Sync employee records and automate people workflows between your product and BambooHR.`}
                    />
                    <Card
                      image={WorkdayImage}
                        title={"Workday"}
                        description={`Connect HR, finance, and planning data with secure, well-documented Workday integrations.`}
                    />
                    <Card
                      image={HiBobImage}
                        title={"HiBob"}
                        description={`Keep employee data, benefits, and performance in sync with HiBob through reliable APIs.`}
                    />
                    <Card
                      image={GreenhouseImage}
                        title={"Greenhouse"}
                        description={`Wire up candidate and hiring data so your product and Greenhouse stay perfectly aligned.`}
                    />
                    {/* <Card
                      image={LeverImage}
                        title={"Lever"}
                        description={`Simplify candidate management, streamline workflows, and encourage team collaboration for optimal hiring decisions.`}
                    /> */}
                    <Card
                      image={XeroImage}
                        title={"Xero"}
                        description={`Automate invoicing and reconciliation by integrating your product with Xero accounting.`}
                    />
                    <Card
                      image={QuickbooksImage}
                        title={"Quickbooks"}
                        description={`Sync transactions, expenses, and reports between your product and QuickBooks with ease.`}
                    />
                </div>
            </div>
        </section>
    )
}

export default PartnersSection