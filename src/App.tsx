import { useState, useEffect} from 'react'

import Constants from './components/data/Constants';

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import Loading from './loading/loading';
import Hero from "./components/hero/Hero";
import NavBar from "./components/navbar/NavBar";
import Carousel from "./components/carousel/Carousel";
import Footer from './footer/Footer';



export default function App() {
  const {URL, APISTRING} = Constants


  const [movies, setMovies] = useState()
  const [series, setSeries] = useState()
  const [loading, setLoading] = useState(true)

useEffect(()=>{
  const fetchData = async () => {
    const movies = await fetch(`${URL}/discover/movie${APISTRING}&sort_by=popularity.desc`)
    const moviesDate = await movies.json()
    setMovies(moviesDate)

    const series = await fetch(`${URL}/discover/tv${APISTRING}&sort_by=popularity.desc`)
    const seriesDate = await series.json()
    setSeries(seriesDate)
    setLoading(false)
    
  }
  fetchData()
},[])


const getFeaturedMovie = () => movies && movies?.results[0];

const getMovieList = () => {
  if (movies) {
    const [featured, ...movieList] = movies?.results;
    return movieList;
  }
  return [];
};

  return (
    <div className="bg-black text-white m-auto font-sans ">
      {loading && (
        <>
          <Loading />
          <NavBar />
        </>
      )}
      {!loading && (
        <>
          <Hero {...getFeaturedMovie()} />
          <NavBar />
          <Carousel title="Filmes Populares" data={getMovieList()} />
          <Carousel title="Série Populares" data={series?.results} />
          <Carousel title="Placeholder" />
          <Footer />
        </>
      )}
    </div>
  );
}


