import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router'
import './moviedetail.css'

export default function MovieDetail() {
    const { id } = useParams();

    let [movie, setMovie] = useState({});
    let [loading, setLoading] = useState(true);
    let [genres, setGenres] = useState([])
    let [casters, setCasters] = useState([])
    let [companies, setCompanies] = useState([]);
    let [videos, setVideos] = useState([]);
    let [reviews, setReviews] = useState([]); 

    useEffect(() => {
        fetchMovieDetail();
        fetchCaster();
        fetchVideo();
        fetchReviews();
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
    const fetchCaster = async() => {
        try {
              const response = await fetch(`https://api.themoviedb.org/3/movie/${id}/casts?language=en-US`, options);
              if (!response.ok) {
                  throw new Error('Network response was not ok.');
              }
              const data = await response.json();
              setCasters(data.cast)
              setLoading(false)
          } catch (error) {
              console.log(error)
              setLoading(false)
          }
    }
    const fetchVideo = async() => {
        try {
              const response = await fetch(`https://api.themoviedb.org/3/movie/${id}/videos?language=en-US`, options);
              if (!response.ok) {
                  throw new Error('Network response was not ok.');
              }
              const data = await response.json();
              setVideos(data.results)
          } catch (error) {
              console.log(error)
              setLoading(false)
          }
    }
    const fetchReviews = async() => {
        try {
              const response = await fetch(`https://api.themoviedb.org/3/movie/${id}/reviews?language=en-US&page=1`, options);
              if (!response.ok) {
                  throw new Error('Network response was not ok.');
              }
              const data = await response.json();
              setReviews(data.results)
          } catch (error) {
              console.log(error)
              setLoading(false)
          }
    }
    console.log(reviews)
    let backgroundStyle = {
        backgroundImage: `url(https://image.tmdb.org/t/p/original/${movie.backdrop_path})`,
        height: "600px",
        backgroundRepeat: "no-repeat",
        width: "100%",
        backgroundSize: "cover",
        backgroundPosition: "center"
    }
    let ratingCount = (n) =>{
      var elements = [];
      for(let i = 1; i <= n; i++){
          elements.push(<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-6 rating-star">
            <path fillRule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.006 5.404.434c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.434 2.082-5.005Z" clipRule="evenodd" />
          </svg>);
      }
      return elements;
    }
    return (
      <>
        {loading && <h1 className="text-white">loading...</h1>}
        {!!movie && (
          <>
            <section style={backgroundStyle}>
              <div className="bg-opacity"></div>
              <div className="container movie-detail-card">
                <div className="row">
                  <div className="col-md-3">
                    <img
                      className="img-fluid img-radius"
                      src={`https://image.tmdb.org/t/p/original/${movie.poster_path}`}
                    />
                  </div>

                  <div className="col-md-9">
                    <h2 className="text-white mb-2 lg-mb-3 movie-detail-title">{movie.title}</h2>
                    <p className="text-white mb-0 movie-vote">
                      Rating: {movie.vote_average}
                    </p>
                    <p className="text-white mb-0 movie-release-date">
                      Release Date: {movie.release_date}
                    </p>
                    <p className="text-white movie-language">
                      Original Language: {movie.original_language}
                    </p>
                    {genres.map((data) => (
                      <span className="movie_type" key={data.id}>
                        {data.name}
                      </span>
                    ))}
                    <div className="mt-3">
                      <h4 className="text-white">Overview</h4>
                      <p className="text-white mt-0 lg-mt-3 movie-overview">{movie.overview}</p>
                    </div>
                  </div>
                </div>
              </div>
            </section>
            <div className="row">
              <h5 className="m-3">Videos</h5>
              <div className="ratio ratio-21x9 movie-video">
                {
                  videos.map(video => (
                    <iframe
                      src={`https://www.youtube.com/embed/${video.key}`}
                      title="YouTube video"
                      allowFullScreen
                      key={video.id}
                    ></iframe>
                  ))
                }
              </div>
            </div>
            <div className="row">
              <h5 className="m-3">Production Companies</h5>
              <div className="conpanies m-3">
                {companies.map((company) => (
                  <img
                    src={`https://image.tmdb.org/t/p/original/${company.logo_path}`}
                    key={company.id}
                  />
                ))}
              </div>
            </div>
            <div className="row">
              <h5 className="m-3">Casts</h5>
              <div className="casters m-3">
                {casters.map((cast) => (
                  <div className="cast" key={cast.id}>
                    <img
                      src={`https://image.tmdb.org/t/p/original/${cast.profile_path}`}
                    />
                    <p className="cast-name">{cast.name}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className='row'>
              <h4 className='ms-3 my-3'>Reviews</h4>
              {
                reviews.map(review => (
                  <div key={review.id}>
                    <div className='d-flex ms-3'>
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-6 review-icon">
                        <path fillRule="evenodd" d="M18.685 19.097A9.723 9.723 0 0 0 21.75 12c0-5.385-4.365-9.75-9.75-9.75S2.25 6.615 2.25 12a9.723 9.723 0 0 0 3.065 7.097A9.716 9.716 0 0 0 12 21.75a9.716 9.716 0 0 0 6.685-2.653Zm-12.54-1.285A7.486 7.486 0 0 1 12 15a7.486 7.486 0 0 1 5.855 2.812A8.224 8.224 0 0 1 12 20.25a8.224 8.224 0 0 1-5.855-2.438ZM15.75 9a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0Z" clipRule="evenodd" />
                      </svg>
                      <div className='mt-3 ms-3'>
                        <p className='review-info mb-0'>{review.author}</p>
                        <p className='review-date'>{review.created_at}</p>
                      </div>
                    </div>
                    <div className='star-section'>
                      {ratingCount(review.author_details.rating)}
                      <p className='mt-3'>{review.content}</p>
                    </div>
                  </div>
                ))
              }
            </div>
          </>
        )}
      </>
    );
}
