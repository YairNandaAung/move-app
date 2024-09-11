import { useEffect, useState } from "react";

function Home() {

    let [nowPlayData, setNowPlayData] = useState([]);
    let [popularMovies, setPopularMovies] = useState([]);

    useEffect(() => {
      fetchNowPlayData();
      fetchPopularMovies();
    }, []);

    const options = {
      method: "GET",
      headers: {
        accept: "application/json",
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIwZDYwOThjMWFmM2YyNmM2MGQ0NzZiYTZlOGYyYmI3OSIsIm5iZiI6MTcyNTk3MzM4NC44MTU1NTcsInN1YiI6IjY2ZGFiNjFlY2JkMDVmMzZmZTc0OTkxOCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.UlOKepWrNALZYR33qOue80XtiTTUn1cEIBQ2-MbtmUg",
      },
    };

    const fetchNowPlayData = async() => {
        try {
            const response = await fetch('https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1', options);
            if (!response.ok) {
                throw new Error('Network response was not ok.');
            }
            const data = await response.json();
            setNowPlayData(data.results)
        } catch (error) {
            console.log(error)
        }
    }

    const fetchPopularMovies = async() => {
      try {
            const response = await fetch('https://api.themoviedb.org/3/movie/popular?language=en-US&page=1', options);
            if (!response.ok) {
                throw new Error('Network response was not ok.');
            }
            const data = await response.json();
            setPopularMovies(data.results)
        } catch (error) {
            console.log(error)
        }
    }


    return (
      <>
        <div id="carouselExampleCaptions" className="carousel slide">
          <div className="carousel-inner">
            {nowPlayData.map((nowplaymovie) => (
              <div className="carousel-item active" key={nowplaymovie.id}>
                <img
                  src={`https://image.tmdb.org/t/p/original/${nowplaymovie.poster_path}`}
                  className="d-block w-100 carousel-image"
                />
              </div>
            ))}
          </div>
          <button
            className="carousel-control-prev"
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide="prev"
          >
            <span
              className="carousel-control-prev-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button
            className="carousel-control-next"
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide="next"
          >
            <span
              className="carousel-control-next-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>

        <div className="container my-5">
          <h3 className="text-white my-5">Popular Movies</h3>
          <div className="row">
            {popularMovies.map((popularmovie) => (
              <div className="col-md-2 mb-5">
                <div className="movie-card">
                  <img
                    className="img-fluid"
                    src={`https://image.tmdb.org/t/p/original/${popularmovie.poster_path}`}
                  />
                  <p className="movie_title mb-0">
                    {popularmovie.original_title}
                  </p>
                  <span className="movie_caption">
                    Rating: {popularmovie.vote_average}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </>
    );
}

export default Home;
