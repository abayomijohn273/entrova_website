import Image from "next/image"
import StarIcon from "../../../../public/images/svg/starsIcon.svg"

const SuccessCard = ({ data }) => {
  return (
    <div className="flex flex-wrap bg-white relative h-full rounded-[32px]">
      <div className='w-full md:w-4/12 lg:w-5/12 h-[20rem] md:h-[24rem] lg:h-[26rem] xl:h-[30rem] relative'>
        <Image src={data?.image} alt="" className='object-cover w-full h-full rounded-t-[32px] md:rounded-tr-none md:rounded-l-[32px]' />
      </div>
      <div className='flex-1 px-6 lg:px-10 pt-8 md:pt-12 lg:pt-14 xl:pt-16 pb-16 self-center'>
        <div className='md:w-9/12 lg:w-8/12 xl:w-7/12 mx-auto'>
          <h3 className="text-2xl md:text-3xl text-primary font-bold">
            {data?.title}
          </h3>
          <p className="mt-6 md:mt-8 text-base text-primary font-medium">
            {data?.description}
          </p>

          <div className="mt-10 flex items-center gap-2">
            <Image src={StarIcon} alt="" />
            <p className="text-primary text-base">5 / 5</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SuccessCard