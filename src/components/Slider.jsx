import { Navigation } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import { IoIosArrowDropleftCircle, IoIosArrowDroprightCircle } from 'react-icons/io'

import 'swiper/css'

export default function Slider() {
  return (
    <div className='bg-black -translate-y-4'>
      <h2>Trend da Semana</h2>
      <Swiper
        modules={[Navigation]}
        spaceBetween={10}
        slidesPerView={8}
        navigation={{
          nextEl: ".button-next",
          prevEl: ".button-prev"
        }}
        breakpoints={{
          390: {
            slidesPerView: 2,
            spaceBetween: 0,
          },
          560: {
            slidesPerView: 3,
            spaceBetween: 30,
          },
          750: {
            slidesPerView: 4,
            spaceBetween: 40,
          },
          1050: {
            slidesPerView: 6,
          },
          1300: {
            slidesPerView: 7,
          },
        }}
      >
        <SwiperSlide className='cursor-pointer'>
          <img src="https://image.tmdb.org/t/p/w200/uO2yU3QiGHvVp0L5e5IatTVRkYk.jpg" />
        </SwiperSlide>

        <button className='button-prev text-4xl flex justify-center items-center bg-none border-none absolute top-1/2 z-50 cursor-pointer left-3'>
          <IoIosArrowDropleftCircle />
        </button>

        <button className='button-next text-4xl flex justify-center items-center bg-none border-none absolute top-1/2 z-50 cursor-pointer right-3'>
          <IoIosArrowDroprightCircle />
        </button>

      </Swiper>
    </div>
  )
}