"use client"
import Image from 'next/image';
import { useCallback, useRef } from 'react';
import 'swiper/css';
import "swiper/css/pagination";
import { Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from "swiper/react";
import ArrowLeft from "../../../../public/images/svg/arrowLeft.svg";
import ArrowRight from "../../../../public/images/svg/arrowRight.svg";
import { data } from './data';
import SuccessCard from './successCard';

const SuccessStorySection = () => {
  const sliderRef = useRef(null);

  const handlePrev = useCallback(() => {
    if (!sliderRef.current) return;
    sliderRef.current.swiper.slidePrev();
  }, []);

  const handleNext = useCallback(() => {
    if (!sliderRef.current) return;
    sliderRef.current.swiper.slideNext();
  }, []);

  return (
    <section className={`sliderSection relative bg-[#F5F6F7] overflow-x-hidden`}>
      <div className='relative overflow-hidden container px-4 lg:px-0 xl:px-8 2xl:px-0 pb-[6rem] pt-[5.563rem] md:py-[6.25rem]  mx-auto'>
        <div className='relative'>
          <h2 className='w-full md:w-8/12 lg:w-full text-primary font-bold text-3xl md:text-4xl lg:text-5xl leading-[56px]'>
            Success Stories
          </h2>
          <p className="mt-3 text-lg md:text-xl lg:text-2xl text-[#1E1E1E]">
            Transforming Businesses Across the Globe
          </p>
        </div>
        <div className="mt-12 md:mt-14 lg:mt-16">
          <Swiper
            ref={sliderRef}
            loop={true}
            spaceBetween={14}
            slidesPerView={1}
            breakpoints={{
              480: {
                spaceBetween: 20,
                slidesPerView: 1
              },
              640: {
                spaceBetween: 24,
                slidesPerView: 1
              },
            }}
            pagination={{
              clickable: true,
            }}
            modules={[Pagination]}
            className='!pb-10 lg:!pb-12 xl:!pb-16'
            style={{
              "--swiper-navigation-color": "#fff",
              "--swiper-pagination-color": "#fff",
            }}
          >
            {data?.map(datum =>
              <SwiperSlide key={datum?.id}>
                <SuccessCard
                  key={datum?.id}
                  data={datum}
                />
              </SwiperSlide>
            )}
          </Swiper>
        </div>

        <div className='mt-8 xl:mt-4 flex gap-4 justify-end xl:absolute xl:top-1/2  xl:justify-between xl:z-30 xl:w-full'>
          <button onClick={handlePrev} className='focus:outline-none xl:relative xl:-left-6'>
            <Image src={ArrowLeft} alt="" />
          </button>

          <button onClick={handleNext} className='focus:outline-none xl:relative xl:right-10'>
            <Image src={ArrowRight} alt="" />
          </button>
        </div>
      </div>
    </section>
  )
}

export default SuccessStorySection