import Image from "next/image"
import WhyImage from "../../../../public/images/webp/home/whyImage.webp"

const Card = ({ title, description }) => {
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

const WhySection = () => {
  return (
    <section className={`relative bg-white overflow-x-hidden`}>
      <div className='container px-4 lg:px-0 xl:px-8 2xl:px-0 mx-auto pt-[6.5rem] pb-[7rem] lg:pt-[7rem] lg:pb-[8.938rem]'>
        <div className='w-full mx-auto'>
          <h3 className='text-primary font-bold text-3xl md:text-4xl lg:text-5xl text-center'>
            Why Companies Trust Entrova
          </h3>

          <div className='mt-16 lg:mt-20'>
            <Image src={WhyImage} className="h-[20rem] object-center object-cover md:object-fill md:h-auto rounded-[32px] md:rounded-none" alt="" />
          </div>

          <div className="mt-14 md:mt-16 lg:mt-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-16">
            <Card
              title={"AI-Powered Hiring Decisions"}
              description={`Our proprietary AI companion identifies top talent from 
                  diverse markets with unmatched precision.`}
            />
            <Card
              title={"Compliance, Solved"}
              description={`From legal paperwork to payroll and tax compliance, we’ve got you covered across 120+ countries.`}
            />
            <Card
              title={"Empowering Global South Talent"}
              description={`Entrova creates a direct pipeline for companies to access exceptional talent from Africa and other 
                emerging markets, helping businesses scale while driving global economic inclusion.`}
            />
          </div>
        </div>
      </div>
    </section>
  )
}

export default WhySection