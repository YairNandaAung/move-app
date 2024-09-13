import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router'
import './moviedetail.css'

export default function MovieDetail() {
    const { id } = useParams();

    let [movie, setMovie] = useState({});
    let [loading, setLoading] = useState(true);
    let [genres, setGenres] = useState([])
    let [companies, setCompanies] = useState([])

    useEffect(() => {
        fetchMovieDetail();
    }, []);

    const options = {
        method: "GET",
        headers: {
          accept: "application/json",
          Authorization:
            "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIwZDYwOThjMWFmM2YyNmM2MGQ0NzZiYTZlOGYyYmI3OSIsIm5iZiI6MTcyNTk3MzM4NC44MTU1NTcsInN1YiI6IjY2ZGFiNjFlY2JkMDVmMzZmZTc0OTkxOCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.UlOKepWrNALZYR33qOue80XtiTTUn1cEIBQ2-MbtmUg",
        },
    };
    const fetchMovieDetail = async() => {
        try {
              const response = await fetch(`https://api.themoviedb.org/3/movie/${id}?language=en-US`, options);
              if (!response.ok) {
                  throw new Error('Network response was not ok.');
              }
              const data = await response.json();
              setMovie(data);
              setGenres(data.genres)
              setCompanies(data.production_companies)
              setLoading(false)
          } catch (error) {
              console.log(error)
              setLoading(false)
          }
    }
    console.log(movie)
    let backgroundStyle = {
        backgroundImage: `url(https://image.tmdb.org/t/p/original/${movie.backdrop_path})`,
        height: "600px",
        backgroundRepeat: "no-repeat",
        width: "100%",
        backgroundSize: "cover",
        backgroundPosition: "center"
    }
    return (
        <>
            {loading && <h1 className="text-white">loading...</h1>}
            {!!movie && (
                    <section style={backgroundStyle}>
                        <div className="bg-opacity"></div>
                        <div className="container movie-detail-card">
                            <div className="row">
                                <div className="col-md-3">
                                    <img className="img-fluid img-radius" src={`https://image.tmdb.org/t/p/original/${movie.poster_path}`} />
                                </div>
            
                                <div className="col-md-9">
                                    <h2 className="text-white mb-3">{movie.title}</h2>
                                    <p className='text-white mb-0'>Rating: {movie.vote_average}</p>
                                    <p className='text-white mb-0'>Release Date: {movie.release_date}</p>
                                    <p className='text-white'>Original Language: {movie.original_language}</p>
                                        {
                                            genres.map(data => (
                                                <span className='movie_type' key={data.id}>{data.name}</span>
                                            ))
                                        }
                                    <div className='mt-3'>
                                        <h4 className='text-white'>Overview</h4>
                                        <p className="text-white mt-3">{movie.overview}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                )
            }
        </>
    )
}
