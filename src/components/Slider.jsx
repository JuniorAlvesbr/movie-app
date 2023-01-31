import { Navigation } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import { IoIosArrowDropleftCircle, IoIosArrowDroprightCircle } from 'react-icons/io'

import 'swiper/css'

export default function Slider({ slideList, setHero }) {
  return (
    <div>
      <h2 className='text-lg p-3'>{slideList.name}</h2>
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
            spaceBetween: 10
          },
          560: {
            slidesPerView: 3,
          },
          750: {
            slidesPerView: 4,
          },
          1050: {
            slidesPerView: 6,
          },
          1300: {
            slidesPerView: 7,
          },
        }}
      >
        {slideList && slideList.genre.map((movie, index) =>
          <SwiperSlide className='cursor-pointer' key={index}>
            <div onClick={() => setHero(movie)}>
              <img src={`https://image.tmdb.org/t/p/w200/${movie.poster_path}`} />
            </div>
          </SwiperSlide>
        )}

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