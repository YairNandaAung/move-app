import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Autoplay, Pagination } from 'swiper/modules';
import './slider.css'

export default function Slider({movies}) {
  return (
    <Swiper
    pagination={true}
    autoplay={{
        delay: 2500,
        disableOnInteraction: false,
    }}
    modules={[Autoplay, Pagination]}
    className="mySwiper"
    >
        {
            movies.map(movie => (
                <SwiperSlide key={movie.id}>
                <img
                    src={`https://image.tmdb.org/t/p/original/${movie.backdrop_path}`}
                    className="d-block w-100"
                />
                </SwiperSlide>
            ))
        }
    </Swiper>
  )
}
