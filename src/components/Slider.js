import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Autoplay, Pagination } from 'swiper/modules';
import './slider.css'
import { Link } from 'react-router-dom';

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
                    <div className="slider-bg-opacity"></div>
                    <div className='slider-info'>
                        <h1>{movie.title}</h1>
                        <p className='release-date'>Release Date: {movie.release_date}</p>
                        <p className='overview'>{movie.overview}</p>
                        <Link to={`/movies/${movie.id}`}>
                            <button className='info-btn'>More Info</button>
                        </Link>
                    </div>
                </SwiperSlide>
            ))
        }
    </Swiper>
  )
}
