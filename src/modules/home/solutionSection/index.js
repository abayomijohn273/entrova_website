import Image from 'next/image'
import Dashboard2Image from "../../../../public/images/webp/dashboard-2.webp"


const BenefitListItem = ({ title, description }) => {
  return <li className='flex items-start'>
    <div>
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M8.81561 13.6869L9.16919 14.0405L9.52275 13.6869L15.4144 7.79438L15.7679 7.44083L15.4144 7.0873L14.2361 5.90897L13.8825 5.55538L13.5289 5.909L9.16914 10.2695L7.16522 8.26563L6.81167 7.91208L6.45811 8.26563L5.27978 9.44397L4.92623 9.79752L5.27978 10.1511L8.81561 13.6869ZM10 17.8334C5.67364 17.8334 2.16667 14.3264 2.16667 10C2.16667 5.67366 5.67364 2.16669 10 2.16669C14.3264 2.16669 17.8333 5.67366 17.8333 10C17.8333 14.3264 14.3264 17.8334 10 17.8334Z" fill="#65A30D" stroke="#65A30D" />
      </svg>
    </div>
    <div className='-mt-[2px] pl-[15px] text-primary'>
      <p className='text-lg font-bold leading-7'>{title}</p>
      <p className='mt-3 text-base font-medium leading-normal'>{description}</p>
    </div>
  </li>
}

const SolutionSection = () => {
  return (
    <section className={`relative bg-[#EFF4FA]`}>
      <div className='relative '>
        <div className='container px-4 lg:px-0 xl:px-8 2xl:px-0 mx-auto pt-[5rem] lg:pt-[7.25rem]'>
          <div className='relative grid grid-cols-1 lg:grid-cols-2 gap-x-6'>
            <div className='flex flex-col justify-between'>

              {/* Mobile only */}
              <div className='mt-[5rem] relative block lg:hidden translate-x-[-5%] md:translate-x-[-6.5%] bottom-0'>
                <Image src={Dashboard2Image} alt='Dashboard' className='' />
              </div>
            </div>

            <div className='mt-[4.25rem] lg:mt-0 pb-[7.125rem]'>
              <h2 className='w-full md:w-8/12 lg:w-full text-primary font-bold text-[2.625rem] leading-[56px]'>
                Solutions for Every Need
              </h2>
              <ul className='mt-8 flex flex-col gap-y-6'>
                <BenefitListItem
                  title={"Hire Individuals"}
                  description={`Fill skill gaps or onboard highly skilled professionals for specific roles.`}
                />
                <BenefitListItem
                  title={"Manage Projects"}
                  description={`From application development to AI-powered prototypes, let us 
                    deliver projects on time and on budget.`}
                />
                <BenefitListItem
                  title={"End-to-End Hiring"}
                  description={`Leave it to us to source, onboard, and manage your global team while you focus on growing your business.`}
                />
              </ul>
            </div>
          </div>
        </div>

        {/* Desktop only */}
        <div className='mt-[5rem] hidden lg:block absolute bottom-0 left-0 '>
          <Image src={Dashboard2Image} alt='Dashboard' className='w-auto' />
        </div>
      </div>
    </section>
  )
}

export default SolutionSection