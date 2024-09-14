import React from 'react'
import './movielist.css'
import { Link } from 'react-router-dom'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { Autoplay } from 'swiper/modules';

export default function MovieList({title, movies}) {
  return (
        <div className="container my-5">
            <h3 className="text-white my-5">{title}</h3>
            <div className='divider'></div>
            <div className="row">
                <Swiper
                    autoplay={{
                        delay: 2500,
                        disableOnInteraction: false,
                    }}
                    modules={[Autoplay]}
                    slidesPerView={5}
                    spaceBetween={30}
                    className="mySwiper"
                >
                    {movies.map((movie) => (
                        <SwiperSlide key={movie.id}>
                            <Link to={`/movies/${movie.id}`}>
                                <img
                                    className="img-fluid"
                                    src={`https://image.tmdb.org/t/p/original/${movie.poster_path}`}
                                />
                                <div className='movie-info'>
                                    <p className="movie-title mb-0">
                                        {movie.original_title}
                                    </p>
                                    <span className="movie-caption">
                                        Rating: {movie.vote_average}
                                    </span>
                                </div>
                            </Link>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </div>
  )
}
