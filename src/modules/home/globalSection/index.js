import LinkButton from '@/components/elements/linkButton'
import Image from 'next/image'
import PeopleImage from "../../../../public/images/webp/people.webp"
import TeamDashboardImageMobile from "../../../../public/images/webp/team-dashboard-mobile.webp"
import TeamDashboardImage from "../../../../public/images/webp/team-dashboard.webp"



const GlobalSection = () => {
  return (
    <section className={`relative bg-primary pt-[5.563rem] md:pt-[6.25rem] lg:pt-[9rem] pb-[8rem] md:pb-[10rem]`}>
      <div className='container px-4 lg:px-0 xl:px-8 2xl:px-0 mx-auto'>
        <div className='relative grid grid-cols-1 lg:grid-cols-2 gap-x-6'>
          <div className='md:w-10/12 lg:w-11/12'>
            <h2 className='w-full md:w-8/12 lg:w-full text-white font-bold text-[2.5rem] leading-tight lg:text-[3rem] lg:leading-none xl:text-[4rem] xl:leading-none'>
              Reimagine Global Talent Access
            </h2>

            <div className='mt-10 flex flex-col md:flex-row flex-wrap md:items-center md:space-x-2 text-[13px] text-[#656565] font-semibold'>
              <div className='inline-flex overflow-hidden space-x-2 items-center'>
                <div className="w-2 h-2 bg-secondary rounded-full block md:hidden"></div>
                <p>FOR YOUR BUSINESS</p>&nbsp;
              </div>

              <div className='inline-flex overflow-hidden space-x-2 items-center'>
                <div className="w-2 h-2 bg-secondary rounded-full block"></div>
                <p>FOR YOUR EMPLOYEES</p>&nbsp;
              </div>

              <div className='inline-flex overflow-hidden space-x-2 items-center'>
                <div className="w-2 h-2 bg-secondary rounded-full block"></div>
                <p>FOR YOUR CONTRACTORS</p>&nbsp;
              </div>
            </div>

            <div className='mt-10 md:mt-12 md:w-11/12'>
              <Image src={PeopleImage} alt="People" className='object-contain w-fit' />
            </div>

            <div className='mt-10 w-full md:w-11/12 xl:w-10/12'>
              <p className='text-white text-base font-medium leading-7'>
                With Entrova, you get a platform that streamlines hiring, compliance, and
                payments for international talent, ensuring you focus on growth while we handle the complexities.
              </p>

              <div className='mt-8'>
                <LinkButton title={"Book A Demo"} href={"/book-a-demo"} className={"px-8"} showArrow />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className='mt-[5rem] md:mt-[1rem] lg:mt-[5.5rem] relative lg:absolute top-0 right-0 flex items-start justify-end w-full h-full lg:w-5/12 xl:w-5/12'>
        <Image src={TeamDashboardImage} alt='Team Dashboard' className='hidden md:block w-fit' />
        <Image src={TeamDashboardImageMobile} alt='Team Dashboard' className='block md:hidden' />
      </div>
    </section>
  )
}

export default GlobalSection