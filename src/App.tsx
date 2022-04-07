import { useState, useEffect} from 'react'

import emitter from './utils/eventEmitter';
import Constants from './components/data/Constants';

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import Loading from './loading/loading';
import Hero from "./components/hero/Hero";
import NavBar from "./components/navbar/NavBar";
import Carousel from "./components/carousel/Carousel";
import Footer from './footer/Footer';
import Modal from './modal/Modal';

export enum TitleType {
  Movie = 'movie',
  Serie = 'tv',
}

export interface Title {
  type: TitleType;
  id: number | string;
}

export default function App() {
  const {URL, APISTRING} = Constants


  const [movies, setMovies] = useState()
  const [series, setSeries] = useState()
  const [loading, setLoading] = useState(true)
  const [title, setTitle] = useState()



useEffect(()=>{
  emitter.addListener(Constants.EVENTS.PosterClick, getTitle);
  emitter.addListener(Constants.EVENTS.ModalClose, () => setTitle(undefined))

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

const getTitle = async ({ type, id }: Title) => {
  setLoading(true);
  const title = await fetch(`${URL}/${type}/${id}${APISTRING}`);
  const titleData = await title.json();
  setTitle(titleData);
  setLoading(false);
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
          <Footer />
          {!loading && title && <Modal {...title} />}
        </>
      )}
    </div>
  );
}


