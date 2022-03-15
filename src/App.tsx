import { useState, useEffect} from 'react'

import Constants from './components/data/Constants';

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import Hero from "./components/hero/Hero";
import NavBar from "./components/navbar/NavBar";
import Carousel from "./components/carousel/Carousel";



export default function App() {
  const {URL, APISTRING} = Constants




  const [movies, setMovies] = useState()

useEffect(()=>{
  const fetchData = async () => {
    const response = await fetch(`${URL}/discover/movie${APISTRING}&sort_by=popularity.desc`)
    const data = await response.json()
    setMovies(data)
    
  }
  fetchData()
},[])

useEffect(()=>{
  movies && console.log(movies)
}, [movies])



  return (
    <div className="bg-black text-white m-auto font-sans ">
      {movies && <Hero {...movies?.results[0]}/>}
      <NavBar />
      {movies && <Carousel {...movies?.results} />}
      <Carousel />
      <Carousel />
    
    </div>
  );
}


