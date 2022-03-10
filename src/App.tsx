


import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import Hero from "./components/hero/Hero";
import NavBar from "./components/navbar/NavBar";
import Carousel from "./components/carousel/Carousel";



export default function App() {
  return (
    <div className="bg-black text-white m-auto font-sans ">
      <Hero />
      <NavBar />
      <Carousel />
      <Carousel />
      <Carousel />
    
    </div>
  );
}


