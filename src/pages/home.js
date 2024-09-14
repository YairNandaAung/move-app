import { useEffect, useState } from "react";
import MovieList from "../components/MovieList";
import Slider from "../components/Slider";

function Home() {

    let [nowPlayData, setNowPlayData] = useState([]);
    let [popularMovies, setPopularMovies] = useState([]);
    let [topRatedMovies, setTopRatedMovies] = useState([]);
    let [upComingMovies, setUpComingMovies] = useState([]);
    let [loading, setLoading] = useState(true)

    useEffect(() => {
      fetchNowPlayData();
      fetchPopularMovies();
      fetchTopRatedMovies();
      fetchUpComingMovies();
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
            setLoading(false)
        } catch (error) {
            console.log(error)
            setLoading(false)
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
            setLoading(false)
        } catch (error) {
            console.log(error)
            setLoading(false)
        }
    }

    const fetchTopRatedMovies = async() => {
      try {
            const response = await fetch('https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1', options);
            if (!response.ok) {
                throw new Error('Network response was not ok.');
            }
            const data = await response.json();
            setTopRatedMovies(data.results)
            setLoading(false)
        } catch (error) {
            console.log(error)
            setLoading(false)
        }
    }

    const fetchUpComingMovies = async() => {
      try {
            const response = await fetch('https://api.themoviedb.org/3/movie/upcoming?language=en-US&page=1', options);
            if (!response.ok) {
                throw new Error('Network response was not ok.');
            }
            const data = await response.json();
            setUpComingMovies(data.results)
            setLoading(false)
        } catch (error) {
            console.log(error)
            setLoading(false)
        }
    }

    return (
      <>
        {loading && <h1 className="text-white">loading...</h1>}
        {
          !!nowPlayData && (
            <Slider movies={nowPlayData} />
          )
        }
        {
          !!popularMovies && (
            <MovieList title={'Popular Movies'} movies={popularMovies}  />
          )
        }
        {
          !!topRatedMovies && (
            <MovieList title={'Top Rated Movies'} movies={topRatedMovies}  />
          )
        }
        {
          !!upComingMovies && (
            <MovieList title={'Upcoming Movies'} movies={upComingMovies}  />
          )
        }
      </>
    );
}

export default Home;
