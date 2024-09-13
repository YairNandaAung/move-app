import React from 'react'
import './movielist.css'
import { Link } from 'react-router-dom'

export default function MovieList({title, movies}) {
  return (
        <div className="container my-5">
            <h3 className="text-white my-5">{title}</h3>
            <div className="row">
                {movies.map((movie) => (
                    <div className="col-md-2 mb-5" key={movie.id}>
                        <Link to={`movies/${movie.id}`}>
                            <div className="movie-card">
                                <img
                                    className="img-fluid"
                                    src={`https://image.tmdb.org/t/p/original/${movie.poster_path}`}
                                />
                                <p className="movie_title mb-0">
                                    {movie.original_title}
                                </p>
                                <span className="movie_caption">
                                    Rating: {movie.vote_average}
                                </span>
                            </div>
                        </Link>
                    </div>
                ))}
            </div>
        </div>
  )
}
