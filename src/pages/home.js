import { useEffect, useState } from "react";

function Home() {

    let [nowPlayData, setNowPlayData] = useState([]);
    const base_url = "https://image.tmdb.org/t/p/w500";

    useEffect(() => {
      fetchNowPlayData();
    }, []);

    const fetchNowPlayData = async() => {
        const options = {
            method: "GET",
            headers: {
                accept: "application/json",
                Authorization:
                "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIwZDYwOThjMWFmM2YyNmM2MGQ0NzZiYTZlOGYyYmI3OSIsIm5iZiI6MTcyNTk3MzM4NC44MTU1NTcsInN1YiI6IjY2ZGFiNjFlY2JkMDVmMzZmZTc0OTkxOCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.UlOKepWrNALZYR33qOue80XtiTTUn1cEIBQ2-MbtmUg",
            },
        };

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


    return (
      <>
        <div id="carouselExampleCaptions" className="carousel slide">
          <div className="carousel-inner">
            {nowPlayData.map((data) => (
              <div className="carousel-item active" key={data.id}>
                <img
                  src={`${base_url}${data.backdrop_path}`}
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
          <h3 className="text-white my-5">Trending Now</h3>
          <div className="row">
            <div className="col-md-2">
              <div className="movie-card">
                {/* <img className="card-img" src="./images/mv5.jpg" alt=""> */}
                <p className="movie_title mb-0">Avengers EndGame</p>
                <span className="movie_caption">Free</span>
                <span className="movie_caption">Adventure</span>
                <span className="movie_caption">2019</span>
              </div>
            </div>
            <div className="col-md-2">
              <div className="movie-card">
                {/* <img className="card-img" src="./images/mv7.jpg" alt=""> */}
                <p className="movie_title mb-0">Sonic the Hedgehog 3</p>
                <span className="movie_caption">Free</span>
                <span className="movie_caption">Anime Action</span>
                <span className="movie_caption">2024</span>
              </div>
            </div>
            <div className="col-md-2">
              <div className="movie-card">
                {/* <img className="card-img" src="./images/mv9.jpg" alt=""> */}
                <p className="movie_title mb-0">Joker: Folie à Deux</p>
                <span className="movie_caption">Free</span>
                <span className="movie_caption">Crime</span>
                <span className="movie_caption">2024</span>
              </div>
            </div>
            <div className="col-md-2">
              <div className="movie-card">
                {/* <img className="card-img" src="./images/mv8.jpg" alt=""> */}
                <p className="movie_title mb-0">Godzilla Minus One</p>
                <span className="movie_caption">Free</span>
                <span className="movie_caption">Adventure</span>
                <span className="movie_caption">2019</span>
              </div>
            </div>
            <div className="col-md-2">
              <div className="movie-card">
                {/* <img className="card-img" src="./images/mv6.jpg" alt=""> */}
                <p className="movie_title mb-0">Ghost Busters</p>
                <span className="movie_caption">Free</span>
                <span className="movie_caption">Adventure</span>
                <span className="movie_caption">2024</span>
              </div>
            </div>
            <div className="col-md-2">
              <div className="movie-card">
                {/* <img className="card-img" src="./images/mv10.jpg" alt=""> */}
                <p className="movie_title mb-0">HELLBoY CrookedMan</p>
                <span className="movie_caption">Free</span>
                <span className="movie_caption">Action</span>
                <span className="movie_caption">2024</span>
              </div>
            </div>
          </div>

          <div className="row mt-5">
            <div className="col-md-2">
              <div className="movie-card">
                {/* <img className="card-img" src="./images/mv11.jpg" alt=""> */}
                <p className="movie_title mb-0">Venom The Last Dance</p>
                <span className="movie_caption">Free</span>
                <span className="movie_caption">Adventure</span>
                <span className="movie_caption">2024</span>
              </div>
            </div>
            <div className="col-md-2">
              <div className="movie-card">
                {/* <img className="card-img" src="./images/mv2.jpg" alt=""> */}
                <p className="movie_title mb-0">Avengers EndGame</p>
                <span className="movie_caption">Free</span>
                <span className="movie_caption">Adventure</span>
                <span className="movie_caption">2019</span>
              </div>
            </div>
            <div className="col-md-2">
              <div className="movie-card">
                {/* <img className="card-img" src="./images/mv3.jpg" alt=""> */}
                <p className="movie_title mb-0">Avengers EndGame</p>
                <span className="movie_caption">Free</span>
                <span className="movie_caption">Adventure</span>
                <span className="movie_caption">2019</span>
              </div>
            </div>
            <div className="col-md-2">
              <div className="movie-card">
                {/* <img className="card-img" src="./images/mv4.jpg" alt=""> */}
                <p className="movie_title mb-0">Avengers EndGame</p>
                <span className="movie_caption">Free</span>
                <span className="movie_caption">Adventure</span>
                <span className="movie_caption">2019</span>
              </div>
            </div>
            <div className="col-md-2">
              <div className="movie-card">
                {/* <img className="card-img" src="./images/mv1.jpg" alt=""> */}
                <p className="movie_title mb-0">Avengers EndGame</p>
                <span className="movie_caption">Free</span>
                <span className="movie_caption">Adventure</span>
                <span className="movie_caption">2019</span>
              </div>
            </div>
            <div className="col-md-2">
              <div className="movie-card">
                {/* <img className="card-img" src="./images/mv1.jpg" alt=""> */}
                <p className="movie_title mb-0">Avengers EndGame</p>
                <span className="movie_caption">Free</span>
                <span className="movie_caption">Adventure</span>
                <span className="movie_caption">2019</span>
              </div>
            </div>
          </div>
        </div>
      </>
    );
}

export default Home;
